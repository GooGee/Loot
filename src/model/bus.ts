import Tab from './Tab'
import Adaptor from './Adaptor/Adaptor'
import Game from './Ark/Game'

export class Bus {
    tab = new Tab
    private data: Object | null = null
    readonly game =new Game

    constructor() {
        this.loadData()
    }

    loadData() {
        fetch('data.json').then(response => {
            response.json().then(json => {
                if (json) {
                    this.data = json
                    Adaptor.run(this.data as any, this.game)
                }
            })
        }).catch(error => console.error(error))
    }
}

export default new Bus
