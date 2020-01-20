import { ICrate } from './IData'
import Crate from '../Ark/Crate'
import ArkItemManager from '../Ark/ArkItemManager'

export default class CrateAdaptor {
    static run(data: ICrate, manager: ArkItemManager<Crate>) {
        const item = manager.make(data.class_string)
        item.label = data.label
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
