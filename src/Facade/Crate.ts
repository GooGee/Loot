/// <reference path="../Item.ts"/>

namespace Facade {

    export class Crate extends Item {
        class: string = '';
        min: number = 1;
        max: number = 1;
        map: number = 1;
        custom: boolean = false;
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

        deploy() {
            if (this.class.length == 0) {
                throw this.name + ' : ClassString can not be empty!';
            }
            if (this.disabled) {
                // allow empty
            } else {
                if (this.bag.list.length == 0) {
                    throw this.name + ' : ItemSet list is empty!';
                }
            }

            let ccc = new Loot.Crate();
            ccc.load(this);
            if (this.disabled) {
                ccc.MinItemSets = 0;
                ccc.MaxItemSets = 0;
                delete ccc.ItemSets;
            }

            let json = JSON.stringify(ccc);
            let line = replace(json, '\\{', '(');
            line = replace(line, '\\[', '(');
            line = replace(line, '\\}', ')');
            line = replace(line, '\\]', ')');
            line = replace(line, /\"([^"]+)\":/, '$1=');
            return 'ConfigOverrideSupplyCrateItems=' + line;
        }

    }

}
