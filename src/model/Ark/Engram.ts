import ArkItem from './ArkItem'
import Loot from './Loot'

export default class Engram extends ArkItem {
    canBeBluePrint: boolean = false

    EntryWeight: number = 1
    MinQuantity: number = 1
    MaxQuantity: number = 1
    ChanceToBeBlueprintOverride: number = 0.0

    Multiplier: number = 1

    deployHarvest() {
        return `HarvestResourceItemAmountClassMultipliers=(ClassName="${this.name}",Multiplier=${this.Multiplier})`
    }

    deploy(loot: Loot) {
        return {
            ItemEntryName: this.label,
            EntryWeight: this.EntryWeight,
            MinQuantity: this.MinQuantity,
            MaxQuantity: this.MaxQuantity,
            MinQuality: loot.minRate,
            MaxQuality: loot.maxRate,
            ChanceToBeBlueprintOverride: this.ChanceToBeBlueprintOverride,
            bForceBlueprint: false,
            ItemClassStrings: [this.name],
            ItemsWeights: [1],
        }
    }

}
