import { IEngram } from './IData'
import Engram from '../Ark/Engram'
import ArkItemManager from '../Ark/ArkItemManager'

export default class EngramAdaptor {
    static run(data: IEngram, manager: ArkItemManager<Engram>) {
        const item = manager.make(data.class_string)
        item.label = data.label
        item.canBeBluePrint = data.can_blueprint
        item.tagxx = data.tags
        item.mapxx = data.environments

        // remove S+
        if (item.label.includes('S+')) {
            return
        }

        try {
            manager.add(item)
        } catch (error) {
            console.info(error)
        }
    }
}
