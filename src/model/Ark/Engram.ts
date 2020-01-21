import ArkItem from './ArkItem'

export default class Engram extends ArkItem {
    canBeBluePrint: boolean = false

    Multiplier: number = 1

    deploy() {
        return `HarvestResourceItemAmountClassMultipliers=(ClassName="${this.name}",Multiplier=${this.Multiplier})`
    }
}
