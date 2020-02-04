import ArkItem from './ArkItem'
import Loot from './Loot'
import Entry from './Entry'
import UniqueList from '../Entity/UniqueList'

export default class ItemSet extends ArkItem {
    readonly EntryManager = new UniqueList<Entry>(Entry)

    SetWeight: number = 1
    MinNumItems: number = 1
    MaxNumItems: number = 1

    deploy(loot: Loot) {
        const min = Math.ceil(this.EntryManager.list.length / loot.minAmountFactor)
        const max = Math.ceil(this.EntryManager.list.length / loot.maxAmountFactor)
        return {
            SetName: this.label,
            SetWeight: this.SetWeight,
            MinNumItems: min,
            MaxNumItems: max,
            NumItemsPower: 1.0,
            bItemsRandomWithoutReplacement: true,
            ItemEntries: this.EntryManager.list.map(entry => entry.deploy(loot)),
        }
    }

}
