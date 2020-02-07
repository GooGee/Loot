import Tab from './Tab'
import Game from './Ark/Game'
import Loot from './Ark/Loot'
import Adaptor from './Adaptor/Adaptor'
import IData from './Adaptor/IData'

export class Bus {
    readonly tab = new Tab
    readonly game = new Game

    loot: Loot | null = null

    constructor() {
        this.load()
    }

    load() {
        fetch('data.json').then(response => {
            response.json().then(json => {
                this.game.clear()
                this.game.load(json)
                this.game.CreatureManager.map = 'Island'
                this.game.EngramManager.tag = 'egg'
                this.game.LootManager.map = 'Island'
                this.game.LootManager.tag = 'Beacon'
            }).catch(error => console.error(error))
        }).catch(error => console.error(error))
    }

    update(data: IData) {
        Adaptor.run(data, this.game)
    }

    editLoot(loot: Loot) {
        this.loot = loot
        this.tab.show('Loot')
    }

}

export default new Bus
