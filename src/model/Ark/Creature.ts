import ArkItem from './ArkItem'
import IConfig from './IConfig'

export default class Creature extends ArkItem implements IConfig {
    ToClassName: string = ''

    deploy() {
        return `NPCReplacements=(FromClassName="${this.name}",ToClassName="${this.ToClassName}")`
    }
}
