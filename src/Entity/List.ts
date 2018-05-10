
namespace Entity {

    export class List<T extends Item>
    {
        readonly itemType: new () => T;
        readonly list: T[] = Array<T>();

        constructor(type: new () => T) {
            this.itemType = type;
        }

        create(): T {
            return new this.itemType();
        }

        add(item: T) {
            this.list.push(item);
        }

        push(item: T) {
            this.add(item);
        }

        remove(item: T) {
            let index = this.list.indexOf(item);
            this.list.splice(index, 1);
        }

        clear() {
            this.list.length = 0;
            this.list.splice(0, 0);
        }

        load(object) {
            let array: any[];
            if (Array.isArray(object)) {
                array = object;
            } else {
                if (Array.isArray(object.list)) {
                    array = object.list;
                } else {
                    return;
                }
            }

            this.clear();
            for (let index = 0; index < array.length; index++) {
                let item = this.create();
                item.load(array[index]);
                this.add(item);
            }
        }

        toJSON() {
            return this.list;
        }

    }

}
