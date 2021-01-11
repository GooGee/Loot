import IConfig from './IConfig'

export default class Harvest implements IConfig {
    included: boolean = false
    multiplier: number = 1

    deploy(name: string) {
        return `HarvestResourceItemAmountClassMultipliers=(ClassName="${name}",Multiplier=${this.multiplier})`
    }
}
