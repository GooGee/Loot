import UniqueItem from '../Entity/UniqueItem'
import ItemSet from './ItemSet'
import ItemSetManager from './ItemSetManager'

export default class Crate extends UniqueItem {
    id: string
    minQuality: number = 1
    maxQuality: number = 1

    SupplyCrateClassString: string = ''
    MinItemSets: number = 1
    MaxItemSets: number = 1
    NumItemSetsPower: number = 1.0
    bSetsRandomWithoutReplacement: boolean = true
    readonly ItemSets = new ItemSetManager(ItemSet)

    constructor(id: string) {
        super(id)
        this.id = id
    }

    replace(string: string, search: string, replacement: string) {
        return string.replace(new RegExp(search, 'g'), replacement);
    }

    deploy() {
        const json = JSON.stringify(this);
        let line = this.replace(json, '\\{', '(');
        line = this.replace(line, '\\[', '(');
        line = this.replace(line, '\\}', ')');
        line = this.replace(line, '\\]', ')');
        line = this.replace(line, '"(.+?)":', '$1=');
        return 'ConfigOverrideSupplyCrateItems=' + line;
    }

}
