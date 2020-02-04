import Tab from './Tab'
import Game from './Ark/Game'
import Loot from './Ark/Loot'
import ItemSet from './Ark/ItemSet'

export class Bus {
    readonly tab = new Tab
    readonly game = new Game

    loot: Loot | null = null
    set: ItemSet | null = null

    constructor() {
        this.load()
    }

    load() {
        fetch('data.json').then(response => {
            response.json().then(json => {
                this.game.clear()
                this.game.load(json)
            }).catch(error => console.error(error))
        }).catch(error => console.error(error))
    }

    editLoot(loot: Loot) {
        this.loot = loot
        this.tab.show('Loot')
    }

    editSet(set: ItemSet) {
        this.set = set
        this.tab.show('ItemSet')
    }
}

export default new Bus
