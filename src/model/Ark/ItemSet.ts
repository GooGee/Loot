import Entry from './Entry'
import UniqueItem from '../Entity/UniqueItem'
import UniqueList from '../Entity/UniqueList'

export default class ItemSet extends UniqueItem {
    label: string = ''
    minAmount: number = 1
    maxAmount: number = 1
    readonly EntryManager = new UniqueList<Entry>(Entry)

    SetWeight: number = 1
    MinNumItems: number = 1
    MaxNumItems: number = 1

    deploy(minQuality: number, maxQuality: number) {
        return {
            SetName: this.label,
            SetWeight: this.SetWeight,
            MinNumItems: this.minAmount,
            MaxNumItems: this.maxAmount,
            NumItemsPower: 1.0,
            bItemsRandomWithoutReplacement: true,
            ItemEntries: this.EntryManager.list.map(entry => entry.deploy(minQuality, maxQuality)),
        }
    }

}
