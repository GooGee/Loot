/// <reference path="../Item.ts"/>

namespace Facade {

    let index: number = 0;

    export class Bag extends Item {
        id: string = '';
        index: number = 0;
        weight: number = 10;
        min: number = 1;
        max: number = 1;
        entry: List<Entry>;

        constructor() {
            super();
            index++;
            this.index = index;
            this.identify();
            this.entry = new List<Entry>(Entry);
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
