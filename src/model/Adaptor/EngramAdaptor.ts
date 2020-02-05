import { IEngram } from './IData'
import Engram from '../Ark/Engram'
import ArkItemManager from '../Ark/ArkItemManager'

export default class EngramAdaptor {
    static count: number = 0

    static run(data: IEngram, manager: ArkItemManager<Engram>) {
        // remove mod
        if (data.path.includes('/Game/Mods/')) {
            return
        }

        if (manager.find(data.class_string)) {
            // console.log(`${data.label} already exists`)
            this.count += 1
            return
        }

        const item = manager.make(data.class_string)
        item.label = data.label
        item.path = data.path
        item.canBeBluePrint = data.can_blueprint
        item.tagxx = data.tags
        item.mapxx = data.environments

        manager.add(item)
    }
}
