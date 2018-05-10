
namespace Facade {

    export class Game extends Entity.Item {
        version: number = 2
        crate: Entity.List<Crate>
        bag: Entity.List<Bag>
        item: Entity.List<Item>

        constructor() {
            super();
            this.crate = new Entity.List<Crate>(Crate);
            this.bag = new Entity.List<Bag>(Bag);
            this.item = new Entity.List<Item>(Item);
        }

        update() {
            let array = this.crate.list;
            for (let index = 0; index < array.length; index++) {
                const crate = array[index];
                crate.update(this.bag.list);
            }
        }

        load(json) {
            if (json.version == this.version) {
                this.item.clear();
                this.item.load(json.item);
                this.bag.clear();
                this.bag.load(json.bag);
                this.crate.clear();
                this.crate.load(json.crate);
                return;
            }
            throw "Version did not match!";
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
