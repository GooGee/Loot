import { Bus } from '../bus'
import IData from './IData'
import LootAdaptor from './LootAdaptor'
import EngramAdaptor from './EngramAdaptor'
import CreatureAdaptor from './CreatureAdaptor'

export default class Adaptor {
    static run(data: IData, bus: Bus) {
        data.loot_sources.forEach(item => LootAdaptor.run(item, bus.LootManager))
        console.log(`Loot: ${bus.LootManager.list.length}`)

        data.creatures.forEach(item => CreatureAdaptor.run(item, bus.CreatureManager))
        console.log(`Creature: ${bus.CreatureManager.list.length}`)

        data.engrams.forEach(item => EngramAdaptor.run(item, bus.EngramManager))
        console.log(`Engram: ${bus.EngramManager.list.length}`)
    }

}
