import Item from '../Entity/Item'
import ArkItemManager from './ArkItemManager'
import Creature from './Creature'
import Engram from './Engram'
import Loot from './Loot'

export default class Game extends Item {
    readonly CreatureManager = new ArkItemManager<Creature>(Creature)
    readonly EngramManager = new ArkItemManager<Engram>(Engram)
    readonly LootManager = new ArkItemManager<Loot>(Loot)

}
