import { ICreature } from './IData'
import Creature from '../Ark/Creature'
import ArkItemManager from '../Ark/ArkItemManager'

export default class CreatureAdaptor {
    static run(data: ICreature, manager: ArkItemManager<Creature>) {
        const item = manager.make(data.class_string)
        item.label = data.label
        item.path = data.path
        item.tagxx = data.tags
        item.mapxx = data.environments

        try {
            manager.add(item)
        } catch (error) {
            console.info(error)
        }
    }
}
