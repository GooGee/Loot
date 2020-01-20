import ArkItem from './ArkItem'

export default class Crate extends ArkItem {
    minQuality: number = 1
    maxQuality: number = 1

    SupplyCrateClassString: string = ''
    MinItemSets: number = 1
    MaxItemSets: number = 1
    NumItemSetsPower: number = 1.0
    bSetsRandomWithoutReplacement: boolean = true

}
