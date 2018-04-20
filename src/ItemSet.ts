/// <reference path="Item.ts"/>

namespace Loot {

    export class ItemSet extends Item {
        SetName: string = '';
        SetWeight: number = 10;
        MinNumItems: number = 1;
        MaxNumItems: number = 1;
        NumItemsPower: number = 1.0;
        bItemsRandomWithoutReplacement: boolean = true;
        ItemEntries: List<Entry>;

        constructor() {
            super();
            this.ItemEntries = new List<Entry>(Entry);
        }

        load(bag) {
            this.SetName = bag.name;
            this.SetWeight = parseInt(bag.weight);
            this.MinNumItems = parseInt(bag.min);
            this.MaxNumItems = parseInt(bag.max);
            this.ItemEntries.load(bag.entry.list);
        }
    }
    ItemSet.prototype.ignoreList = ['name'];

}
