import UniqueItem from '../Entity/UniqueItem'
import Loot from './Loot'

export default class Entry extends UniqueItem {
    label: string = ''
    canBeBluePrint: boolean = false

    EntryWeight: number = 1
    MinQuantity: number = 1
    MaxQuantity: number = 1
    ChanceToBeBlueprintOverride: number = 0.0

    get quantity() {
        return this.MinQuantity
    }

    set quantity(value: number) {
        this.MinQuantity = value
        this.MaxQuantity = value
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
