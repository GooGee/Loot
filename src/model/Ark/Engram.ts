import ArkItem from './ArkItem'
import IConfig from './IConfig'
import Stack from './Stack'
import Harvest from './Harvest'

export default class Engram extends ArkItem implements IConfig {
    canBeBluePrint: boolean = false
    harvest = new Harvest()
    stack = new Stack()

    get included() {
        return this.harvest.included || this.stack.included
    }

    deploy() {
        const list = []
        if (this.harvest.included) {
            list.push(this.harvest.deploy(this.name))
        }
        if (this.stack.included) {
            list.push(this.stack.deploy(this.name))
        }
        return list.join('\n')
    }
}
