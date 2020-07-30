import IConfig from './IConfig'

export default class Stack implements IConfig {
    included: boolean = false
    multiplier: number = 1

    deploy(name: string) {
        return `ConfigOverrideItemMaxQuantity=(ItemClassString="${name}",Quantity=(MaxItemQuantity=${this.multiplier},bIgnoreMultiplier=true))`
    }
}
