
namespace Loot {

    export class Entry extends Entity.Item {
        ItemEntryName: string = '';
        EntryWeight: number = 1;
        MinQuantity: number = 1;
        MaxQuantity: number = 1;
        MinQuality: number = 1;
        MaxQuality: number = 1;
        bForceBlueprint: boolean = false;
        ChanceToBeBlueprintOverride: number = 0.0;
        readonly ItemClassStrings: string[] = [''];
        readonly ItemsWeights: number[] = [1];

        get name(): string {
            return this.ItemClassStrings[0];
        }

        set name(name: string) {
            this.ItemClassStrings[0] = name;
        }

        get weight(): number {
            return this.ItemsWeights[0];
        }

        set weight(weight: number) {
            this.ItemsWeights[0] = weight;
        }

        load(item: Facade.Item) {
            this.ItemEntryName = item.name;
            this.name = item.class;
            this.weight = parseInt(item.weight);
            this.EntryWeight = this.weight;
            this.MinQuantity = parseInt(item.min);
            this.MaxQuantity = parseInt(item.max);
            this.ChanceToBeBlueprintOverride = parseFloat(item.chance);
        }
    }

}
