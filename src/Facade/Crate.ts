
namespace Facade {

    export class Crate extends Entity.Item {
        name: string = ''
        class: string = ''
        min: string = '1'
        max: string = '1'
        cmin: string = '1'
        cmax: string = '1'
        qmin: string = '1'
        qmax: string = '1'
        map: number = 1
        kind: string = ''
        custom: boolean = false
        included: boolean = false
        disabled: boolean = false
        bag: Entity.List<Bag>

        constructor() {
            super();
            this.bag = new Entity.List<Bag>(Bag);
        }

        get xmin(): number {
            return parseFloat(this.cmin) / parseFloat(this.qmin);
        }

        get xmax(): number {
            return parseFloat(this.cmax) / parseFloat(this.qmax);
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

            return this.make(ccc)
        }

        make(crate: Loot.Crate) {
            let json = JSON.stringify(crate);
            let line = replace(json, '\\{', '(');
            line = replace(line, '\\[', '(');
            line = replace(line, '\\}', ')');
            line = replace(line, '\\]', ')');
            line = replace(line, /\"([^"]+)\":/, '$1=');
            return 'ConfigOverrideSupplyCrateItems=' + line;
        }

    }

}
