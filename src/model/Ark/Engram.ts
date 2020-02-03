import ArkItem from './ArkItem'

export default class Engram extends ArkItem {
    canBeBluePrint: boolean = false

    EntryWeight: number = 1
    MinQuantity: number = 1
    MaxQuantity: number = 1
    MinQuality: number = 1
    MaxQuality: number = 1
    ChanceToBeBlueprintOverride: number = 0.0

    Multiplier: number = 1

    deployHarvest() {
        return `HarvestResourceItemAmountClassMultipliers=(ClassName="${this.name}",Multiplier=${this.Multiplier})`
    }

    deploy() {
        return {
            ItemEntryName: this.label,
            EntryWeight: this.EntryWeight,
            MinQuantity: this.MinQuantity,
            MaxQuantity: this.MaxQuantity,
            MinQuality: this.MinQuality,
            MaxQuality: this.MaxQuality,
            ChanceToBeBlueprintOverride: this.ChanceToBeBlueprintOverride,
            bForceBlueprint: false,
            ItemClassStrings: [this.name],
            ItemsWeights: [1],
        }
    }

}
