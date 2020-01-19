import UniqueList from '../Entity/UniqueList'
import Crate from './Crate'

export default class CrateManager extends UniqueList<Crate> {

    constructor() {
        super(Crate, 'id')
    }

    deploy() {
        const list = this.list.map(crate => crate.deploy())
        return list.join('\n')
    }

}
