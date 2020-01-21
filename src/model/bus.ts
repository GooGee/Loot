import Tab from './Tab'
import Adaptor from './Adaptor/Adaptor'
import Loot from './Ark/Loot'
import Creature from './Ark/Creature'
import Engram from './Ark/Engram'
import ArkItemManager from './Ark/ArkItemManager'

export class Bus {
    tab = new Tab
    private data: Object | null = null
    readonly LootManager = new ArkItemManager<Loot>(Loot)
    readonly CreatureManager = new ArkItemManager<Creature>(Creature)
    readonly EngramManager = new ArkItemManager<Engram>(Engram)

    constructor() {
        this.loadData()
    }

    loadData() {
        fetch('data.json').then(response => {
            response.json().then(json => {
                if (json) {
                    this.data = json
                    Adaptor.run(this.data as any, this)
                }
            })
        }).catch(error => console.error(error))
    }
}

export default new Bus
