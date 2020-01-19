import { ICreature } from './IData'
import CreatureManager from '../Ark/CreatureManager'

export default class CreatureAdaptor {
    static run(data: ICreature, manager: CreatureManager) {
        const crate = manager.make(data.id)
        crate.name = data.label
        manager.add(crate)
    }
}
