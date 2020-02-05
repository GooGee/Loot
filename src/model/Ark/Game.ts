import Item from '../Entity/Item'
import ArkItemManager from './ArkItemManager'
import Creature from './Creature'
import Engram from './Engram'
import Loot from './Loot'
import ItemSet from './ItemSet'
import UniqueList from '../Entity/UniqueList'

export default class Game extends Item {
    readonly CreatureManager = new ArkItemManager<Creature>(Creature)
    readonly EngramManager = new ArkItemManager<Engram>(Engram)
    readonly LootManager = new ArkItemManager<Loot>(Loot)
    readonly ItemSetManager = new UniqueList<ItemSet>(ItemSet)

    clear() {
        this.CreatureManager.clear()
        this.EngramManager.clear()
        this.LootManager.clear()
        this.ItemSetManager.clear()
    }

    addEngramToSet(engram: Engram, set: ItemSet) {
        const item = set.EntryManager.make(engram.name)
        item.label = engram.label
        item.canBeBluePrint = engram.canBeBluePrint
        set.EntryManager.add(item)
    }

    updateLoot() {
        this.LootManager.list.forEach(loot => {
            loot.update(this.ItemSetManager)
        })
    }

    deployCreature() {
        const list = this.CreatureManager.list
            .filter(item => item.included)
            .map(item => item.deploy())
        return list.join('\n')
    }

    deployHarvest() {
        const list = this.EngramManager.list
            .filter(item => item.included)
            .map(item => item.deploy())
        return list.join('\n')
    }

    deployLoot() {
        const list = this.LootManager.list
            .filter(item => item.included)
            .map(item => item.deploy())
        return list.join('\n')
    }

    deploy() {
        const list: Array<string> = []
        list.push(this.deployCreature())
        list.push(this.deployHarvest())
        list.push(this.deployLoot())
        return list.join('\n')
    }
}
