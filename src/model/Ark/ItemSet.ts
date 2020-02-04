import ArkItem from './ArkItem'
import ArkItemManager from './ArkItemManager'
import Engram from './Engram'
import Loot from './Loot'

export default class ItemSet extends ArkItem {
    readonly EntryManager = new ArkItemManager<Engram>(Engram)

    SetWeight: number = 1
    MinNumItems: number = 1
    MaxNumItems: number = 1

    deploy(loot: Loot) {
        return {
            SetName: this.label,
            SetWeight: this.SetWeight,
            MinNumItems: this.MinNumItems,
            MaxNumItems: this.MaxNumItems,
            NumItemsPower: 1.0,
            bItemsRandomWithoutReplacement: true,
            ItemEntries: this.EntryManager.list.map(entry => entry.deploy(loot)),
        }
    }

}
