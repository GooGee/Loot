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
                this.item.clear();
                this.item.load(json.item);
                this.bag.clear();
                this.bag.load(json.bag);
                this.crate.clear();
                this.crate.load(json.crate);
            }
        }

        save() {
            return JSON.stringify(this);
        }

        deploy() {
            let array = this.crate.list;
            let list = [];
            for (let index = 0; index < array.length; index++) {
                const crate = array[index];
                if (crate.included) {
                    list.push(crate.deploy());
                }
            }
            if (list.length == 0) {
                throw 'No crate included!';
            }
            return list.join("\n");
        }
    }

}
