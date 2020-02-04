import ArkItem from './ArkItem'
import ArkItemManager from './ArkItemManager'
import ItemSet from './ItemSet'

export default class Loot extends ArkItem {
    minQuality: number = 1
    maxQuality: number = 1
    originalMinQuality: number = 1
    originalMaxQuality: number = 1

    SupplyLootClassString: string = ''
    MinItemSets: number = 1
    MaxItemSets: number = 1
    readonly ItemSetManager = new ArkItemManager<ItemSet>(ItemSet)

    get minRate() {
        return this.minQuality / this.originalMinQuality
    }

    get maxRate() {
        return this.maxQuality / this.originalMaxQuality
    }

    pack() {
        return {
            SupplyLootClassString: this.SupplyLootClassString,
            MinItemSets: this.MinItemSets,
            MaxItemSets: this.MaxItemSets,
            NumItemSetsPower: 1.0,
            bSetsRandomWithoutReplacement: true,
            ItemSets: this.ItemSetManager.list.map(set => set.deploy(this)),
        }
    }

    replace(string: string, search: string, replacement: string) {
        return string.replace(new RegExp(search, 'g'), replacement);
    }

    deploy() {
        const data = this.pack()
        const json = JSON.stringify(data);
        let line = this.replace(json, '\\{', '(');
        line = this.replace(line, '\\[', '(');
        line = this.replace(line, '\\}', ')');
        line = this.replace(line, '\\]', ')');
        line = this.replace(line, '"(.+?)":', '$1=');
        return 'ConfigOverrideSupplyLootItems=' + line;
    }

}
