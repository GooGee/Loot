
namespace Facade {

    let BagIndex: number = 0;

    export class Bag extends Entity.Item {
        id: string = '';
        index: number = 0;
        name: string = '';
        weight: string = '1';
        min: string = '1';
        max: string = '1';
        custom: boolean = true;
        entry: Entity.List<Item>;

        constructor() {
            super();
            BagIndex++;
            this.index = BagIndex;
            this.identify();
            this.entry = new Entity.List<Item>(Item);
        }

        identify() {
            let dt = new Date().toISOString();
            dt = replace(dt, /[-:TZ]/, '');   // YYYY-MM-DDTHH:mm:ss.sssZ
            let array = dt.split('.');
            dt = array[0];
            dt = dt.substring(4);

            let index = pad(this.index % 1000, 3);
            let rn = pad(Math.floor(Math.random() * 1000000), 6);
            this.id = '' + dt + index + rn;
        }

        update(bag: Bag) {
            this.entry.clear();
            let weight = this.weight;
            this.load(bag);
            this.weight = weight;
        }
    }

}
