import { ICreature } from './IData'
import Creature from '../Ark/Creature'
import ArkItemManager from '../Ark/ArkItemManager'

export default class CreatureAdaptor {
    static run(data: ICreature, manager: ArkItemManager<Creature>) {
        const item = manager.make(data.class_string)
        item.label = data.label
        item.tagxx = data.tags
        item.mapxx = data.environments
        manager.add(item)
    }
}
