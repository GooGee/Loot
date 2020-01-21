import ArkItem from './ArkItem'

export default class Creature extends ArkItem {
    ToClassName: string = ''

    deploy() {
        return `NPCReplacements=(FromClassName="${this.name}",ToClassName="${this.ToClassName}")`
    }
}
