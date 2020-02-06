import ArkItem from './ArkItem'
import ItemSet from './ItemSet'
import UniqueList from '../Entity/UniqueList'

export default class Loot extends ArkItem {
    minQuality: number = 1
    maxQuality: number = 1
    originalMinQuality: number = 1
    originalMaxQuality: number = 1

    MinItemSets: number = 1
    MaxItemSets: number = 1
    readonly ItemSetManager = new UniqueList<ItemSet>(ItemSet)

    update(manager: UniqueList<ItemSet>) {
        this.ItemSetManager.list.forEach(set => {
            const found = manager.find(set.name)
            if (found) {
                set.EntryManager.clear()
                set.EntryManager.load(found.EntryManager)
            }
        })
    }

    reset() {
        this.minQuality = this.originalMinQuality
        this.maxQuality = this.originalMaxQuality
    }

    pack() {
        const minQuality = this.minQuality / this.originalMinQuality
        const maxQuality = this.maxQuality / this.originalMaxQuality
        return {
            SupplyCrateClassString: this.name,
            MinItemSets: this.MinItemSets,
            MaxItemSets: this.MaxItemSets,
            NumItemSetsPower: 1.0,
            bSetsRandomWithoutReplacement: true,
            ItemSets: this.ItemSetManager.list.map(set => set.deploy(minQuality, maxQuality)),
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
        line = this.replace(line, '"([A-Za-z]+)":', '$1=');
        return 'ConfigOverrideSupplyCrateItems=' + line;
    }

}
