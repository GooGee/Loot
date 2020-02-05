import Game from '../Ark/Game'
import IData from './IData'
import LootAdaptor from './LootAdaptor'
import EngramAdaptor from './EngramAdaptor'
import CreatureAdaptor from './CreatureAdaptor'

export default class Adaptor {
    static run(data: IData, game: Game) {
        game.sourceVersion = data.min_version

        console.log(`Source: ${data.creatures.length}`)
        data.creatures.forEach(item => CreatureAdaptor.run(item, game.CreatureManager))
        console.log(`Creature: ${game.CreatureManager.list.length}`)
        console.log(`Creature duplicated: ${CreatureAdaptor.count}`)

        console.log(`Source: ${data.engrams.length}`)
        data.engrams.forEach(item => EngramAdaptor.run(item, game.EngramManager))
        console.log(`Engram: ${game.EngramManager.list.length}`)
        console.log(`Engram duplicated: ${EngramAdaptor.count}`)

        console.log(`Source: ${data.loot_sources.length}`)
        data.loot_sources.forEach(item => LootAdaptor.run(item, game.LootManager))
        console.log(`Loot: ${game.LootManager.list.length}`)
        console.log(`Loot duplicated: ${LootAdaptor.count}`)
    }

}
