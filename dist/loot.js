var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Item = /** @class */ (function () {
    function Item() {
    }
    Item.prototype.load = function (data) {
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                if (this.ignoreList.indexOf(key) >= 0) {
                    continue;
                }
                var item = data[key];
                if ("object" == typeof item) {
                    if (this[key] && this[key].load) {
                        this[key].load(item);
                        continue;
                    }
                }
                this[key] = item;
            }
        }
    };
    Item.prototype.toJSON = function () {
        var object = {};
        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                if (this.ignoreList.indexOf(key) >= 0) {
                    continue;
                }
                object[key] = this[key];
            }
        }
        return object;
    };
    return Item;
}());
Item.prototype.ignoreList = [];
/// <reference path="Item.ts"/>
var Loot;
(function (Loot) {
    var Crate = /** @class */ (function (_super) {
        __extends(Crate, _super);
        function Crate() {
            var _this = _super.call(this) || this;
            _this.SupplyCrateClassString = '';
            _this.MinItemSets = 1;
            _this.MaxItemSets = 1;
            _this.NumItemSetsPower = 1.0;
            _this.bSetsRandomWithoutReplacement = true;
            _this.ItemSets = new List(Loot.ItemSet);
            return _this;
        }
        Crate.prototype.load = function (crate) {
            this.SupplyCrateClassString = crate.class;
            this.MinItemSets = parseInt(crate.min);
            this.MaxItemSets = parseInt(crate.max);
            this.ItemSets.load(crate.bag.list);
        };
        return Crate;
    }(Item));
    Loot.Crate = Crate;
    Crate.prototype.ignoreList = ['name'];
})(Loot || (Loot = {}));
/// <reference path="Item.ts"/>
var Loot;
(function (Loot) {
    var Entry = /** @class */ (function (_super) {
        __extends(Entry, _super);
        function Entry() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ItemEntryName = '';
            _this.EntryWeight = 10;
            _this.MinQuantity = 1;
            _this.MaxQuantity = 1;
            _this.MinQuality = 1;
            _this.MaxQuality = 1;
            _this.bForceBlueprint = false;
            _this.ChanceToBeBlueprintOverride = 0.0;
            _this.ItemClassStrings = [''];
            _this.ItemsWeights = [1];
            return _this;
        }
        Object.defineProperty(Entry.prototype, "name", {
            get: function () {
                return this.ItemClassStrings[0];
            },
            set: function (name) {
                this.ItemClassStrings = [name];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Entry.prototype, "weight", {
            get: function () {
                return this.ItemsWeights[0];
            },
            set: function (weight) {
                this.ItemsWeights = [weight];
            },
            enumerable: true,
            configurable: true
        });
        Entry.prototype.load = function (entry) {
            this.name = entry.class;
            this.weight = entry.weight;
            this.ItemEntryName = entry.name;
            this.EntryWeight = parseInt(entry.weight);
            this.MinQuantity = parseInt(entry.min);
            this.MaxQuantity = parseInt(entry.max);
            this.ChanceToBeBlueprintOverride = parseFloat(entry.chance);
        };
        return Entry;
    }(Item));
    Loot.Entry = Entry;
    Entry.prototype.ignoreList = ['name'];
})(Loot || (Loot = {}));
/// <reference path="Item.ts"/>
var Loot;
(function (Loot) {
    var ItemSet = /** @class */ (function (_super) {
        __extends(ItemSet, _super);
        function ItemSet() {
            var _this = _super.call(this) || this;
            _this.SetName = '';
            _this.SetWeight = 10;
            _this.MinNumItems = 1;
            _this.MaxNumItems = 1;
            _this.NumItemsPower = 1.0;
            _this.bItemsRandomWithoutReplacement = true;
            _this.ItemEntries = new List(Loot.Entry);
            return _this;
        }
        ItemSet.prototype.load = function (bag) {
            this.SetName = bag.name;
            this.SetWeight = parseInt(bag.weight);
            this.MinNumItems = parseInt(bag.min);
            this.MaxNumItems = parseInt(bag.max);
            this.ItemEntries.load(bag.entry.list);
        };
        return ItemSet;
    }(Item));
    Loot.ItemSet = ItemSet;
    ItemSet.prototype.ignoreList = ['name'];
})(Loot || (Loot = {}));
var List = /** @class */ (function () {
    function List(type) {
        this.itemType = type;
        this.list = [];
    }
    List.prototype.load = function (object) {
        var array;
        if (Array.isArray(object)) {
            array = object;
        }
        else {
            if (Array.isArray(object.list)) {
                array = object.list;
            }
            else {
                return;
            }
        }
        for (var index = 0; index < array.length; index++) {
            var item = this.create();
            item.load(array[index]);
            this.push(item);
        }
    };
    List.prototype.toJSON = function () {
        return this.list;
    };
    List.prototype.find = function (name) {
        for (var index = 0; index < this.list.length; index++) {
            var item = this.list[index];
            if (item.name == name) {
                return item;
            }
        }
        return null;
    };
    List.prototype.create = function () {
        return this.make(this.itemType);
    };
    List.prototype.make = function (type) {
        return new type();
    };
    List.prototype.makeUniqueName = function (name) {
        var index = 1;
        while (this.find(name)) {
            name = name + index;
            index += 1;
        }
        return name;
    };
    List.prototype.push = function (item) {
        this.list.push(item);
    };
    List.prototype.insert = function (item, where) {
        var index = this.list.indexOf(where);
        this.insertAt(index, item);
    };
    List.prototype.insertAt = function (index, item) {
        this.list.splice(index, 0, item);
    };
    List.prototype.merge = function (array) {
        var list = this.list.concat();
        for (var index = 0; index < array.length; index++) {
            var item = array[index];
            if (this.find(item.name)) {
                continue;
            }
            list.push(item);
        }
        return list;
    };
    List.prototype.remove = function (item) {
        var index = this.list.indexOf(item);
        this.list.splice(index, 1);
    };
    List.prototype.clear = function () {
        this.list.length = 0;
        this.list.splice(0, 0);
    };
    List.prototype.moveUp = function (item) {
        moveUp(this.list, item);
    };
    List.prototype.moveDown = function (item) {
        moveDown(this.list, item);
    };
    return List;
}());
/// <reference path="../Item.ts"/>
var Facade;
(function (Facade) {
    var index = 0;
    var Bag = /** @class */ (function (_super) {
        __extends(Bag, _super);
        function Bag() {
            var _this = _super.call(this) || this;
            _this.id = '';
            _this.index = 0;
            _this.weight = 10;
            _this.min = 1;
            _this.max = 1;
            index++;
            _this.index = index;
            _this.identify();
            _this.entry = new List(Facade.Entry);
            return _this;
        }
        Bag.prototype.identify = function () {
            var dt = new Date().toISOString();
            dt = replace(dt, /[-:TZ]/, ''); // YYYY-MM-DDTHH:mm:ss.sssZ
            var array = dt.split('.');
            dt = array[0];
            dt = dt.substring(4);
            var index = pad(this.index % 1000, 3);
            var rn = pad(Math.floor(Math.random() * 1000000), 6);
            this.id = '' + dt + index + rn;
        };
        Bag.prototype.update = function (bag) {
            this.entry.clear();
            var weight = this.weight;
            this.load(bag);
            this.weight = weight;
        };
        return Bag;
    }(Item));
    Facade.Bag = Bag;
})(Facade || (Facade = {}));
/// <reference path="../Item.ts"/>
var Facade;
(function (Facade) {
    var Crate = /** @class */ (function (_super) {
        __extends(Crate, _super);
        function Crate() {
            var _this = _super.call(this) || this;
            _this.class = '';
            _this.min = 1;
            _this.max = 1;
            _this.map = 1;
            _this.included = false;
            _this.disabled = false;
            _this.bag = new List(Facade.Bag);
            return _this;
        }
        Crate.prototype.update = function (array) {
            var myList = this.bag.list;
            for (var index = 0; index < myList.length; index++) {
                var myBag = myList[index];
                for (var iii = 0; iii < array.length; iii++) {
                    var bag = array[iii];
                    if (myBag.id == bag.id) {
                        myBag.update(bag);
                    }
                }
            }
        };
        Crate.prototype.deploy = function () {
            if (this.disabled) {
                // allow empty
            }
            else {
                if (this.bag.list.length == 0) {
                    throw this.name + ' : ItemSet list is empty!';
                }
            }
            var ccc = new Loot.Crate();
            ccc.load(this);
            if (this.disabled) {
                ccc.MinItemSets = 0;
                ccc.MaxItemSets = 0;
                delete ccc.ItemSets;
            }
            var json = JSON.stringify(ccc);
            var line = replace(json, '\\{', '(');
            line = replace(line, '\\[', '(');
            line = replace(line, '\\}', ')');
            line = replace(line, '\\]', ')');
            line = replace(line, /\"([^"]+)\":/, '$1=');
            return 'ConfigOverrideSupplyCrateItems=' + line;
        };
        return Crate;
    }(Item));
    Facade.Crate = Crate;
})(Facade || (Facade = {}));
/// <reference path="../Item.ts"/>
var Facade;
(function (Facade) {
    var Entry = /** @class */ (function (_super) {
        __extends(Entry, _super);
        function Entry() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.weight = 10;
            _this.class = '';
            _this.kind = '';
            _this.path = '';
            _this.min = 1;
            _this.max = 1;
            _this.map = 1;
            _this.chance = 0;
            _this.blueprint = false;
            return _this;
        }
        return Entry;
    }(Item));
    Facade.Entry = Entry;
})(Facade || (Facade = {}));
/// <reference path="../Item.ts"/>
var Facade;
(function (Facade) {
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super.call(this) || this;
            _this.version = 1;
            _this.crate = new List(Facade.Crate);
            _this.bag = new List(Facade.Bag);
            _this.item = new List(Facade.Entry);
            return _this;
        }
        Game.prototype.update = function () {
            var array = this.crate.list;
            for (var index = 0; index < array.length; index++) {
                var crate = array[index];
                crate.update(this.bag.list);
            }
        };
        Game.prototype.load = function (json) {
            if (json.version) {
                this.bag.clear();
                this.bag.load(json.bag);
                this.crate.clear();
                this.crate.load(json.crate);
            }
        };
        Game.prototype.save = function () {
            var data = {
                version: this.version,
                crate: this.crate,
                bag: this.bag
            };
            return JSON.stringify(data);
        };
        Game.prototype.deploy = function () {
            var array = this.crate.list;
            var list = [];
            for (var index = 0; index < array.length; index++) {
                var crate = array[index];
                if (crate.included) {
                    list.push(crate.deploy());
                }
            }
            if (list.length == 0) {
                throw 'No crate included!';
            }
            return list.join("\n");
        };
        return Game;
    }(Item));
    Facade.Game = Game;
})(Facade || (Facade = {}));
function flatten(array) {
    return [].concat.apply([], array);
}
function moveUp(array, item) {
    var index = array.indexOf(item);
    if (index == 0) {
        return;
    }
    var tmp = array[index - 1];
    array[index - 1] = item;
    array[index] = tmp;
    array.splice(0, 0);
}
function moveDown(array, item) {
    var index = array.indexOf(item);
    if (index == array.length - 1) {
        return;
    }
    var tmp = array[index + 1];
    array[index + 1] = item;
    array[index] = tmp;
    array.splice(0, 0);
}
function remove(item, array) {
    var index = array.indexOf(item);
    array.splice(index, 1);
}
function unique(array) {
    return new Set(array).slice();
}
function replace(string, search, replacement) {
    return string.replace(new RegExp(search, 'g'), replacement);
}
function pad(number, length) {
    var str = '';
    var digital = 1;
    for (var index = 0; index < length - 1; index++) {
        digital *= 10;
        if (number < digital) {
            str += '0';
        }
    }
    return str + number;
}
function read(file, callback) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var json = JSON.parse(event.target.result);
        callback(json);
    };
    reader.onerror = function (error) {
        alert('Unable to read this file!');
    };
    reader.readAsText(file);
}
function download(name, data) {
    var json;
    if ('string' == typeof data) {
        json = data;
    }
    else {
        json = JSON.stringify(data);
    }
    //console.log(json);
    var blob = new Blob([json], { type: 'application/json' });
    var link = document.createElement('a');
    link.download = name;
    link.href = URL.createObjectURL(blob);
    link.style = "display: none";
    document.body.appendChild(link);
    link.click();
    URL.revokeObjectURL(link.href);
}
