/// <reference path="Item.ts"/>

namespace Loot {

    export class Entry extends Item {
        ItemEntryName: string = '';
        EntryWeight: number = 10;
        MinQuantity: number = 1;
        MaxQuantity: number = 1;
        MinQuality: number = 1;
        MaxQuality: number = 1;
        bForceBlueprint: boolean = false;
        ChanceToBeBlueprintOverride: number = 0.0;
        protected ItemClassStrings: string[] = [''];
        protected ItemsWeights: number[] = [1];

        get name(): string {
            return this.ItemClassStrings[0];
        }

        set name(name: string) {
            this.ItemClassStrings = [name];
        }

        get weight(): number {
            return this.ItemsWeights[0];
        }

        set weight(weight: number) {
            this.ItemsWeights = [weight];
        }

        load(entry) {
            this.name = entry.class;
            this.weight = entry.weight;
            this.ItemEntryName = entry.name;
            this.EntryWeight = parseInt(entry.weight);
            this.MinQuantity = parseInt(entry.min);
            this.MaxQuantity = parseInt(entry.max);
            this.ChanceToBeBlueprintOverride = parseFloat(entry.chance);
        }
    }
    Entry.prototype.ignoreList = ['name'];

}
