import UniqueItem from '../Entity/UniqueItem'
import UniqueList from '../Entity/UniqueList'
import ArkItem from './ArkItem'

export default class ArkItemManager<T extends ArkItem> extends UniqueList<T> {
    map: string = ''
    tag: string = ''
    text: string = ''
    readonly MapManager = new UniqueList<UniqueItem>(UniqueItem)
    readonly TagManager = new UniqueList<UniqueItem>(UniqueItem)

    add(item: T) {
        super.add(item)
        this.addMapxx(item.mapxx)
        this.addTagxx(item.tagxx)
    }

    addMapxx(list: Array<string>) {
        list.forEach(map => {
            if (this.MapManager.find(map) === undefined) {
                const item = this.MapManager.make(map)
                this.MapManager.add(item)
            }
        })
    }

    addTagxx(list: Array<string>) {
        list.forEach(tag => {
            if (this.TagManager.find(tag) === undefined) {
                const item = this.TagManager.make(tag)
                this.TagManager.add(item)
            }
        })
    }

    clear() {
        super.clear()
        this.MapManager.clear()
        this.TagManager.clear()
    }

    get filtered() {
        let list = this.list
        if (this.map) {
            list = list.filter(item => {
                if (item.mapxx.indexOf(this.map) === -1) {
                    return false
                }
                return true
            })
        }

        if (this.tag) {
            list = list.filter(item => {
                if (item.tagxx.indexOf(this.tag) === -1) {
                    return false
                }
                return true
            })
        }

        if (this.text) {
            const lower = this.text.toLocaleLowerCase()
            list = list.filter(item => {
                return item.label.toLocaleLowerCase().includes(lower)
            })
        }
        return list
    }
}
