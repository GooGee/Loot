
class List<T extends Item> {
    readonly itemType: new () => T;
    readonly list: T[];

    constructor(type: new () => T, ) {
        this.itemType = type;
        this.list = [];
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
        for (let index = 0; index < array.length; index++) {
            let item = this.create();
            item.load(array[index]);
            this.push(item);
        }
    }

    toJSON() {
        return this.list;
    }

    find(name: string): T {
        for (let index = 0; index < this.list.length; index++) {
            let item = this.list[index];
            if (item.name == name) {
                return item;
            }
        }
        return null;
    }

    create(): T {
        return this.make(this.itemType);
    }

    make(type: new () => T): T {
        return new type();
    }

    makeUniqueName(name: string): string {
        let index = 1;
        while (this.find(name)) {
            name = name + index;
            index += 1;
        }
        return name;
    }

    push(item: T) {
        this.list.push(item);
    }

    insert(item: T, where: T) {
        let index = this.list.indexOf(where);
        this.insertAt(index, item);
    }

    insertAt(index: number, item: T) {
        this.list.splice(index, 0, item);
    }

    merge(array: T[]): T[] {
        let list = this.list.concat();
        for (let index = 0; index < array.length; index++) {
            const item = array[index];
            if (this.find(item.name)) {
                continue;
            }
            list.push(item);
        }
        return list;
    }

    remove(item: T) {
        let index = this.list.indexOf(item);
        this.list.splice(index, 1);
    }

    clear() {
        this.list.length = 0;
        this.list.splice(0, 0);
    }

    moveUp(item: T) {
        moveUp(this.list, item);
    }

    moveDown(item: T) {
        moveDown(this.list, item);
    }
}
