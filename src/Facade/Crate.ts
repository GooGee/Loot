/// <reference path="../Item.ts"/>

namespace Facade {

    export class Crate extends Item {
        class: string = '';
        min: number = 1;
        max: number = 1;
        map: number = 1;
        included: boolean = false;
        disabled: boolean = false;
        bag: List<Bag>;

        constructor() {
            super();
            this.bag = new List<Bag>(Bag);
        }

        update(array: Bag[]) {
            let myList = this.bag.list;
            for (let index = 0; index < myList.length; index++) {
                const myBag = myList[index];
                for (let iii = 0; iii < array.length; iii++) {
                    const bag = array[iii];
                    if (myBag.id == bag.id) {
                        myBag.update(bag);
                    }
                }
            }

        }

    }

}
