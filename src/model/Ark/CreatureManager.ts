import UniqueList from '../Entity/UniqueList'
import Creature from './Creature'

export default class CreatureManager extends UniqueList<Creature> {

    constructor() {
        super(Creature, 'id')
    }

}
