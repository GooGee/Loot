import UniqueItem from '../Entity/UniqueItem'
import Entry from './Entry'
import EntryManager from './EntryManager'

export default class ItemSet extends UniqueItem {
    SetName: string = ''
    SetWeight: number = 1
    MinNumItems: number = 1
    MaxNumItems: number = 1
    NumItemsPower: number = 1.0
    bItemsRandomWithoutReplacement: boolean = true
    ItemEntries = new EntryManager(Entry)

}
