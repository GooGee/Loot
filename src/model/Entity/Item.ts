import KeyValue from "./KeyValue"
import ItemList from "./ItemList"

export default class Item {
    // ignore the Vue Observer
    protected static IgnoreList: Array<string> = ['__ob__']

    get IgnoreList(): Array<string> {
        return Object.getPrototypeOf(this).constructor.IgnoreList
    }

    mustIgnore(name: string) {
        return this.IgnoreList.indexOf(name) > -1
    }

    load(source: Item) {
        this.loadItem(this, source)
    }

    loadItem(me: Item, source: Item) {
        const names = Object.getOwnPropertyNames(me)
        names.forEach(name => {
            this.loadProperty(name, me, source)
        })
    }

    loadProperty(name: string, me: KeyValue, source: KeyValue) {
        if (this.mustIgnore(name)) {
            return
        }

        const descriptor = Object.getOwnPropertyDescriptor(me, name)
        if (descriptor) {
            if (descriptor.get || descriptor.set) {
                // do not change
            } else {
                if (source.hasOwnProperty(name)) {
                    if (me[name] instanceof Item) {
                        this.loadItem(me[name], source[name])
                    } else if (me[name] instanceof ItemList) {
                        me[name].load(source[name])
                    } else {
                        // TypeError: 0 is read-only
                        // Object.assign(me[name], source[name])
                        me[name] = source[name]
                    }
                }
            }
        }
    }

    toJSON(key: string) {
        const me = this as KeyValue
        const names = Object.getOwnPropertyNames(me)
        const result: KeyValue = {}
        names.forEach(name => {
            if (this.mustIgnore(name)) {
                return
            }
            result[name] = me[name]
        })
        return result
    }

}
