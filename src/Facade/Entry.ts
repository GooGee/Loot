/// <reference path="../Item.ts"/>

namespace Facade {

    export class Entry extends Item {
        weight: number = 10;
        class: string = '';
        kind: string = '';
        path: string = '';
        min: number = 1;
        max: number = 1;
        map: number = 1;
        chance: number = 0;
        blueprint: boolean = false;

    }

}
