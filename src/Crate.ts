
namespace Loot {

    export class Crate extends Entity.Item {
        SupplyCrateClassString: string = '';
        MinItemSets: number = 1;
        MaxItemSets: number = 1;
        NumItemSetsPower: number = 1.0;
        bSetsRandomWithoutReplacement: boolean = true;
        ItemSets: Entity.List<ItemSet>;

        constructor() {
            super();
            this.ItemSets = new Entity.List<ItemSet>(ItemSet);
        }

        load(crate: Facade.Crate) {
            this.SupplyCrateClassString = crate.class;
            this.MinItemSets = parseInt(crate.min);
            this.MaxItemSets = parseInt(crate.max);
            this.ItemSets.load(crate.bag.list);
            this.ItemSets.list.forEach(bag => {
                bag.ItemEntries.list.forEach(item => {
                    item.MinQuality = crate.xmin;
                    item.MaxQuality = crate.xmax;
                });
            });
        }
    }

}
