import { Bus } from '../bus'
import IData, { ICrate, IEngram, ICreature } from './IData'
import CrateManager from '../Ark/CrateManager'
import CrateAdaptor from './CrateAdaptor'
import EngramManager from '../Ark/EngramManager'
import EngramAdaptor from './EngramAdaptor'
import CreatureAdaptor from './CreatureAdaptor'
import CreatureManager from '../Ark/CreatureManager'

export default class Adaptor {
    static run(data: IData, bus: Bus) {
        this.adaptCrate(data.loot_sources, bus.CrateManager)
        this.adaptCreature(data.creatures, bus.CreatureManager)
        this.adaptEngram(data.engrams, bus.EngramManager)
    }

    static adaptCrate(list: Array<ICrate>, manager: CrateManager) {
        list.forEach(item => CrateAdaptor.run(item, manager))
        console.log(`Crate: ${manager.list.length}`)
    }

    static adaptCreature(list: Array<ICreature>, manager: CreatureManager) {
        list.forEach(item => CreatureAdaptor.run(item, manager))
        console.log(`Creature: ${manager.list.length}`)
    }

    static adaptEngram(list: Array<IEngram>, manager: EngramManager) {
        list.forEach(item => EngramAdaptor.run(item, manager))
        console.log(`Engram: ${manager.list.length}`)
    }
}
