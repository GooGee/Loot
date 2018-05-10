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
var Entity;
(function (Entity) {
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
                    if (this[key] && this[key].load) {
                        this[key].load(item);
                        continue;
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
    Entity.Item = Item;
    Item.prototype.ignoreList = [];
})(Entity || (Entity = {}));
/// <reference path="Entity/Item.ts" />
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
            _this.ItemSets = new Entity.List(Loot.ItemSet);
            return _this;
        }
        Crate.prototype.load = function (crate) {
            this.SupplyCrateClassString = crate.class;
            this.MinItemSets = parseInt(crate.min);
            this.MaxItemSets = parseInt(crate.max);
            this.ItemSets.load(crate.bag.list);
            this.ItemSets.list.forEach(function (bag) {
                bag.ItemEntries.list.forEach(function (item) {
                    item.MinQuality = crate.xmin;
                    item.MaxQuality = crate.xmax;
                });
            });
        };
        return Crate;
    }(Entity.Item));
    Loot.Crate = Crate;
})(Loot || (Loot = {}));
var Loot;
(function (Loot) {
    var Entry = /** @class */ (function (_super) {
        __extends(Entry, _super);
        function Entry() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.ItemEntryName = '';
            _this.EntryWeight = 1;
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
                this.ItemClassStrings[0] = name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Entry.prototype, "weight", {
            get: function () {
                return this.ItemsWeights[0];
            },
            set: function (weight) {
                this.ItemsWeights[0] = weight;
            },
            enumerable: true,
            configurable: true
        });
        Entry.prototype.load = function (item) {
            this.ItemEntryName = item.name;
            this.name = item.class;
            this.weight = parseInt(item.weight);
            this.EntryWeight = this.weight;
            this.MinQuantity = parseInt(item.min);
            this.MaxQuantity = parseInt(item.max);
            this.ChanceToBeBlueprintOverride = parseFloat(item.chance);
        };
        return Entry;
    }(Entity.Item));
    Loot.Entry = Entry;
})(Loot || (Loot = {}));
var Loot;
(function (Loot) {
    var ItemSet = /** @class */ (function (_super) {
        __extends(ItemSet, _super);
        function ItemSet() {
            var _this = _super.call(this) || this;
            _this.SetName = '';
            _this.SetWeight = 1;
            _this.MinNumItems = 1;
            _this.MaxNumItems = 1;
            _this.NumItemsPower = 1.0;
            _this.bItemsRandomWithoutReplacement = true;
            _this.ItemEntries = new Entity.List(Loot.Entry);
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
    }(Entity.Item));
    Loot.ItemSet = ItemSet;
})(Loot || (Loot = {}));
var Entity;
(function (Entity) {
    var List = /** @class */ (function () {
        function List(type) {
            this.list = Array();
            this.itemType = type;
        }
        List.prototype.create = function () {
            return new this.itemType();
        };
        List.prototype.add = function (item) {
            this.list.push(item);
        };
        List.prototype.push = function (item) {
            this.add(item);
        };
        List.prototype.remove = function (item) {
            var index = this.list.indexOf(item);
            this.list.splice(index, 1);
        };
        List.prototype.clear = function () {
            this.list.length = 0;
            this.list.splice(0, 0);
        };
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
            this.clear();
            for (var index = 0; index < array.length; index++) {
                var item = this.create();
                item.load(array[index]);
                this.add(item);
            }
        };
        List.prototype.toJSON = function () {
            return this.list;
        };
        return List;
    }());
    Entity.List = List;
})(Entity || (Entity = {}));
/// <reference path="../Entity/Item.ts" />
var Facade;
(function (Facade) {
    var BagIndex = 0;
    var Bag = /** @class */ (function (_super) {
        __extends(Bag, _super);
        function Bag() {
            var _this = _super.call(this) || this;
            _this.id = '';
            _this.index = 0;
            _this.name = '';
            _this.weight = '1';
            _this.min = '1';
            _this.max = '1';
            _this.custom = true;
            BagIndex++;
            _this.index = BagIndex;
            _this.identify();
            _this.entry = new Entity.List(Facade.Item);
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
    }(Entity.Item));
    Facade.Bag = Bag;
})(Facade || (Facade = {}));
var Facade;
(function (Facade) {
    var Crate = /** @class */ (function (_super) {
        __extends(Crate, _super);
        function Crate() {
            var _this = _super.call(this) || this;
            _this.name = '';
            _this.class = '';
            _this.min = '1';
            _this.max = '1';
            _this.cmin = '1';
            _this.cmax = '1';
            _this.qmin = '1';
            _this.qmax = '1';
            _this.map = 1;
            _this.kind = '';
            _this.custom = false;
            _this.included = false;
            _this.disabled = false;
            _this.bag = new Entity.List(Facade.Bag);
            return _this;
        }
        Object.defineProperty(Crate.prototype, "xmin", {
            get: function () {
                return parseFloat(this.cmin) / parseFloat(this.qmin);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Crate.prototype, "xmax", {
            get: function () {
                return parseFloat(this.cmax) / parseFloat(this.qmax);
            },
            enumerable: true,
            configurable: true
        });
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
            if (this.class.length == 0) {
                throw this.name + ' : ClassString can not be empty!';
            }
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
            return this.make(ccc);
        };
        Crate.prototype.make = function (crate) {
            var json = JSON.stringify(crate);
            var line = replace(json, '\\{', '(');
            line = replace(line, '\\[', '(');
            line = replace(line, '\\}', ')');
            line = replace(line, '\\]', ')');
            line = replace(line, /\"([^"]+)\":/, '$1=');
            return 'ConfigOverrideSupplyCrateItems=' + line;
        };
        return Crate;
    }(Entity.Item));
    Facade.Crate = Crate;
})(Facade || (Facade = {}));
var Facade;
(function (Facade) {
    var Game = /** @class */ (function (_super) {
        __extends(Game, _super);
        function Game() {
            var _this = _super.call(this) || this;
            _this.version = 2;
            _this.crate = new Entity.List(Facade.Crate);
            _this.bag = new Entity.List(Facade.Bag);
            _this.item = new Entity.List(Facade.Item);
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
        };
        Game.prototype.save = function () {
            return JSON.stringify(this);
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
    }(Entity.Item));
    Facade.Game = Game;
})(Facade || (Facade = {}));
var Facade;
(function (Facade) {
    var Item = /** @class */ (function (_super) {
        __extends(Item, _super);
        function Item() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.name = '';
            _this.weight = '1';
            _this.class = '';
            _this.kind = '';
            _this.path = '';
            _this.min = '1';
            _this.max = '1';
            _this.map = '1';
            _this.chance = '0';
            _this.blueprint = false;
            _this.custom = false;
            return _this;
        }
        return Item;
    }(Entity.Item));
    Facade.Item = Item;
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
