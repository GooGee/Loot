import Item from './Item'
import List from './List'
import Newable from './Newable'

export default class ItemList<T extends Item> extends List<T> {
    readonly Type: Newable<T>

    constructor(type: Newable<T>) {
        super()
        this.Type = type
    }

    load(manager: ItemList<T>) {
        manager.list.forEach(item => {
            const iii = new this.Type
            iii.load(item)
            this.list.push(iii)
        })
    }

}
