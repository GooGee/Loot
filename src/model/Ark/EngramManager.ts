import UniqueList from '../Entity/UniqueList'
import Engram from './Engram'

export default class EngramManager extends UniqueList<Engram> {

    constructor() {
        super(Engram, 'id')
    }

}
