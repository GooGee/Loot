import { ICreature } from './IData'
import Creature from '../Ark/Creature'
import ArkItemManager from '../Ark/ArkItemManager'

export default class CreatureAdaptor {
    static count: number = 0

    static run(data: ICreature, manager: ArkItemManager<Creature>) {
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

        manager.add(item)
    }
}
