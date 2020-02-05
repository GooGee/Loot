import { ILoot } from './IData'
import Loot from '../Ark/Loot'
import ArkItemManager from '../Ark/ArkItemManager'

export default class LootAdaptor {
    static count: number = 0

    static run(data: ILoot, manager: ArkItemManager<Loot>) {
        if (manager.find(data.class_string)) {
            // console.log(`${data.label} already exists`)
            this.count += 1
            return
        }

        const item = manager.make(data.class_string)
        item.label = data.label
        item.path = data.path
        item.tagxx = data.tags
        item.mapxx = data.environments
        item.maxQuality = data.multipliers.max
        item.minQuality = data.multipliers.min
        item.originalMinQuality = data.multipliers.max
        item.originalMaxQuality = data.multipliers.min

        manager.add(item)
    }
}
