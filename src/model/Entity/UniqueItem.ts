import Item from './Item'

export default class UniqueItem extends Item {
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }

}