export default interface IData {
    loot_sources: Array<ICrate>
    engrams: Array<IEngram>
    creatures: Array<ICreature>
}

export interface IItem {
    id: string
    label: string
    class_string: string
    path: string
    tags: Array<string>
    environments: Array<string>
}

export interface ICrate extends IItem {
    multipliers: IMinMax
}

export interface IEngram extends IItem {
    can_blueprint: boolean
}

export interface ICreature extends IItem {
}

export interface IMinMax {
    min: number
    max: number
}
