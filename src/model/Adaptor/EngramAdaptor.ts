import { IEngram } from './IData'
import EngramManager from '../Ark/EngramManager'

export default class EngramAdaptor {
    static run(data: IEngram, manager: EngramManager) {
        const crate = manager.make(data.id)
        crate.name = data.label
        manager.add(crate)
    }
}
