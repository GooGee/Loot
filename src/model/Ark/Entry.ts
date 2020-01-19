import UniqueItem from '../Entity/UniqueItem'

export default class Entry extends UniqueItem {
    ItemEntryName: string = ''
    EntryWeight: number = 1
    MinQuantity: number = 1
    MaxQuantity: number = 1
    MinQuality: number = 1
    MaxQuality: number = 1
    bForceBlueprint: boolean = false
    ChanceToBeBlueprintOverride: number = 0.0
    readonly ItemClassStrings: string[] = ['']
    readonly ItemsWeights: number[] = [1]

    get name(): string {
        return this.ItemClassStrings[0]
    }

    set name(name: string) {
        this.ItemClassStrings[0] = name
    }

    get weight(): number {
        return this.ItemsWeights[0]
    }

    set weight(weight: number) {
        this.ItemsWeights[0] = weight
    }

}
