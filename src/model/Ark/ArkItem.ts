import UniqueItem from '../Entity/UniqueItem'

export default class ArkItem extends UniqueItem {
    included: boolean = false
    label: string = ''
    path: string = ''
    mapxx: Array<string> = []
    tagxx: Array<string> = []
}
