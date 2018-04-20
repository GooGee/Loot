/// <reference path="../Item.ts"/>

namespace Facade {

    export class Game extends Item {
        version: number = 1;
        crate: List<Crate>;
        bag: List<Bag>;
        item: List<Entry>;

        constructor() {
            super();
            this.crate = new List<Crate>(Crate);
            this.bag = new List<Bag>(Bag);
            this.item = new List<Entry>(Entry);
        }

        update() {
            let array = this.crate.list;
            for (let index = 0; index < array.length; index++) {
                const crate = array[index];
                crate.update(this.bag.list);
            }
        }

        load(json) {
            if (json.version) {
                this.bag.clear();
                this.bag.load(json.bag);
                this.crate.clear();
                this.crate.load(json.crate);
            }
        }

        save() {
            let data = {
                version: this.version,
                bag: this.bag,
                crate: this.crate
            };
            return JSON.stringify(data);
        }

        deploy() {
            let array = this.crate.list;
            let list = [];
            for (let index = 0; index < array.length; index++) {
                const crate = array[index];
                if (crate.included) {
                    if (crate.bag.list.length == 0) {
                        if (crate.disabled) {
                            // ok
                        } else {
                            throw crate.name + ' : ItemSet is empty!';
                        }
                    }

                    let ccc = new Loot.Crate();
                    ccc.load(crate);
                    if (crate.disabled) {
                        ccc.MinItemSets = 0;
                        ccc.MaxItemSets = 0;
                        delete ccc.ItemSets;
                    }

                    let json = JSON.stringify(ccc);
                    let ini = replace(json, '\\{', '(');
                    ini = replace(ini, '\\[', '(');
                    ini = replace(ini, '\\}', ')');
                    ini = replace(ini, '\\]', ')');
                    ini = replace(ini, /\"([^"]+)\":/, '$1=');
                    ini = 'ConfigOverrideSupplyCrateItems=' + ini;
                    list.push(ini);
                }
            }
            if (list.length == 0) {
                throw 'No crate included!';
            }
            return list.join("\n");
        }
    }

}
