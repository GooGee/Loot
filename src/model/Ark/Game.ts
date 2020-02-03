import Item from '../Entity/Item'
import ArkItemManager from './ArkItemManager'
import Creature from './Creature'
import Engram from './Engram'
import Loot from './Loot'
import ItemSet from './ItemSet'

export default class Game extends Item {
    readonly CreatureManager = new ArkItemManager<Creature>(Creature)
    readonly EngramManager = new ArkItemManager<Engram>(Engram)
    readonly LootManager = new ArkItemManager<Loot>(Loot)
    readonly ItemSetManager = new ArkItemManager<ItemSet>(ItemSet)

}
