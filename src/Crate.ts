/// <reference path="Item.ts"/>

namespace Loot {

    export class Crate extends Item {
        SupplyCrateClassString: string = '';
        MinItemSets: number = 1;
        MaxItemSets: number = 1;
        NumItemSetsPower: number = 1.0;
        bSetsRandomWithoutReplacement: boolean = true;
        ItemSets: List<ItemSet>;

        constructor() {
            super();
            this.ItemSets = new List<ItemSet>(ItemSet);
        }

        load(crate) {
            this.SupplyCrateClassString = crate.class;
            this.MinItemSets = parseInt(crate.min);
            this.MaxItemSets = parseInt(crate.max);
            this.ItemSets.load(crate.bag.list);
        }
    }
    Crate.prototype.ignoreList = ['name'];

}
