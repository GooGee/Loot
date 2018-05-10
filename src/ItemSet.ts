
namespace Loot {

    export class ItemSet extends Entity.Item {
        SetName: string = '';
        SetWeight: number = 1;
        MinNumItems: number = 1;
        MaxNumItems: number = 1;
        NumItemsPower: number = 1.0;
        bItemsRandomWithoutReplacement: boolean = true;
        ItemEntries: Entity.List<Entry>;

        constructor() {
            super();
            this.ItemEntries = new Entity.List<Entry>(Entry);
        }

        load(bag: Facade.Bag) {
            this.SetName = bag.name;
            this.SetWeight = parseInt(bag.weight);
            this.MinNumItems = parseInt(bag.min);
            this.MaxNumItems = parseInt(bag.max);
            this.ItemEntries.load(bag.entry.list);
        }
    }

}
