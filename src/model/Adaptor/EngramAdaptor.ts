import { IEngram } from './IData'
import Engram from '../Ark/Engram'
import ArkItemManager from '../Ark/ArkItemManager'

export default class EngramAdaptor {
    static run(data: IEngram, manager: ArkItemManager<Engram>) {
        const item = manager.make(data.class_string)
        item.label = data.label
        item.tagxx = data.tags
        item.mapxx = data.environments
        manager.add(item)
    }
}
