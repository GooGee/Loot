import Entry from './Entry'
import UniqueItem from '../Entity/UniqueItem'
import UniqueList from '../Entity/UniqueList'

export default class ItemSet extends UniqueItem {
    label: string = ''
    minAmountFactor: number = 8
    maxAmountFactor: number = 4
    readonly EntryManager = new UniqueList<Entry>(Entry)

    SetWeight: number = 1
    MinNumItems: number = 1
    MaxNumItems: number = 1

    deploy(minQuality: number, maxQuality: number) {
        const minAmount = Math.ceil(this.EntryManager.list.length / this.minAmountFactor)
        const maxAmount = Math.ceil(this.EntryManager.list.length / this.maxAmountFactor)
        return {
            SetName: this.label,
            SetWeight: this.SetWeight,
            MinNumItems: minAmount,
            MaxNumItems: maxAmount,
            NumItemsPower: 1.0,
            bItemsRandomWithoutReplacement: true,
            ItemEntries: this.EntryManager.list.map(entry => entry.deploy(minQuality, maxQuality)),
        }
    }

}
