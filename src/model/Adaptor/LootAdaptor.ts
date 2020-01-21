import { ILoot } from './IData'
import Loot from '../Ark/Loot'
import ArkItemManager from '../Ark/ArkItemManager'

export default class LootAdaptor {
    static run(data: ILoot, manager: ArkItemManager<Loot>) {
        const item = manager.make(data.class_string)
        item.label = data.label
        item.path = data.path
        item.tagxx = data.tags
        item.mapxx = data.environments
        item.maxQuality = data.multipliers.max
        item.minQuality = data.multipliers.min

        try {
            manager.add(item)
        } catch (error) {
            console.info(error)
        }
    }
}
