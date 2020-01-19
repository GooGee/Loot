import { ICrate } from './IData'
import CrateManager from '../Ark/CrateManager'

export default class CrateAdaptor {
    static run(data: ICrate, manager: CrateManager) {
        const crate = manager.make(data.id)
        crate.name = data.label
        crate.maxQuality = data.multipliers.max
        crate.minQuality = data.multipliers.min
        manager.add(crate)
    }
}
