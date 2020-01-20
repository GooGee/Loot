import { Bus } from '../bus'
import IData from './IData'
import CrateAdaptor from './CrateAdaptor'
import EngramAdaptor from './EngramAdaptor'
import CreatureAdaptor from './CreatureAdaptor'

export default class Adaptor {
    static run(data: IData, bus: Bus) {
        data.loot_sources.forEach(item => CrateAdaptor.run(item, bus.CrateManager))
        console.log(`Crate: ${bus.CrateManager.list.length}`)

        data.creatures.forEach(item => CreatureAdaptor.run(item, bus.CreatureManager))
        console.log(`Creature: ${bus.CreatureManager.list.length}`)

        data.engrams.forEach(item => EngramAdaptor.run(item, bus.EngramManager))
        console.log(`Engram: ${bus.EngramManager.list.length}`)
    }

}
