import Tab from './Tab'
import Adaptor from './Adaptor/Adaptor'
import Game from './Ark/Game'
import Loot from './Ark/Loot'

export class Bus {
    readonly tab = new Tab
    readonly game = new Game
    private data: Object | null = null

    loot: Loot | null = null

    constructor() {
        this.load()
    }

    load() {
        fetch('data.json').then(response => {
            response.json().then(json => {
                if (json) {
                    this.data = json
                    Adaptor.run(this.data as any, this.game)
                }
            })
        }).catch(error => console.error(error))
    }

    editLoot(loot: Loot) {
        this.loot = loot
        this.tab.show('Loot')
    }
}

export default new Bus
