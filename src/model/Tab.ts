export default class Tab {
    name: string = 'home'

    is(tab: string) {
        return this.name == tab
    }

    show(tab: string) {
        this.name = tab
    }
}
