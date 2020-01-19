import Tab from './Tab'
import Adaptor from './Adaptor/Adaptor'
import CrateManager from './Ark/CrateManager'
import CreatureManager from './Ark/CreatureManager'
import EngramManager from './Ark/EngramManager'

export class Bus {
    tab = new Tab
    private data: Object | null = null
    readonly CrateManager = new CrateManager
    readonly CreatureManager = new CreatureManager
    readonly EngramManager = new EngramManager

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
