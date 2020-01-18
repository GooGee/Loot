import ItemList from './ItemList'
import UniqueItem from './UniqueItem'
import Newable from './Newable'
import KeyValue from './KeyValue'

export default class UniqueList<T extends UniqueItem> extends ItemList<T> {
    readonly key: string

    constructor(type: Newable<T>, key: string = 'name') {
        super(type)
        this.key = key
    }

    throwIfExist(name: string) {
        if (this.find(name)) {
            throw new Error(name + ' already exists!')
        }
    }

    add(item: T) {
        this.throwIfExist(item.name)
        this.list.push(item)
    }

    find(name: string) {
        return this.list.find(item => {
            const one: KeyValue = item
            return one[this.key] == name
        })
    }

    listenNameChange(sender: UniqueItem, old: string, name: string) {
        const item = sender as T
        if (this.list.indexOf(item) > -1) {
            this.throwIfExist(name)
        }
    }

    make(...args: any[]) {
        const item = new this.Type(...args)
        return item
    }

    load(manager: UniqueList<T>) {
        manager.list.forEach(item => {
            const iii = this.make(item.name)
            iii.load(item)
            this.add(iii)
        })
    }

}