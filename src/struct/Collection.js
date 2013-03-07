/**
 * @class Ext.Collection
 * @extends Ext.Class
 * @alternateClassName Ext.Collection
 * @implements Ext.iter.Interface
 * @mixins Ext.util.Sortable
 * @mixins Ext.iter.Summable
 * @mixins Ext.iter.Sliceable
 * @mixins Ext.iter.Filterable
 *
 * Implements the collection data type.
 *
 * Test code:
 *    
      var c = Ext.collection();

      c.on('add', function(collection, key, item) {
          console.debug('observed added a key', key, item);
      });
	
	  c.add('a', {lala: 1});
	  c.add('b', {lala: 2});
	  c.add('c', {lala: 3});
	
      c.getSlice(0, 1);
 */
Ext.define('Ext.Collection', {

    implement: 'Ext.iter.Interface',

    uses: {
        sortable: 'Ext.iter.Sortable',
        summable: 'Ext.iter.Summable',
        sliceable: 'Ext.iter.Sliceable',
        filterable: 'Ext.iter.Filterable'
    },

    /**
     * Internal data storage
     */
    items: [],

    /**
     * Size of the map
     */
    size: 0,

    /**
     * @cfg {String} [keyProperty=id]
     * Key property name
     */
    keyProperty: 'id',

    /**
     * @property {String} dataPropertyName
     * Name of the data property on the local iterable class implementation
     * @readonly
     */
    dataPropertyName: 'items',

    /**
     * @cfg {Function} keyFn Key generating function
     */
    keyFn: function(item) {

        if (item[this.keyProperty]) {
            return item[this.keyProperty];
        }
        return Ext.id('collection');
    },

    /**
     * Constructor for the Collection
     * @return void
     */
    constructor: function() {

        this.addEvents(

            /**
             * @event beforeadd
             * This event gets fired before an item gets added to the collection
             * @param {Ext.Collection} this
             * @param {Object} item
             */
            'beforeadd',

            /**
             * @event add
             * This event gets fired when an item gets added to the collection
             * @param {Ext.Collection} this
             * @param {Object} item
             */
            'add',

            /**
             * @event beforeremove
             * This event gets fired before an item gets removed from the collection
             * @param {Ext.Collection} this
             * @param {Object|Number|String|Mixed} itemOrIndexOrKeyOrValue
             */
            'beforeremove',

            /**
             * @event remove
             * This event gets fired when an item gets removed from the collection
             * @param {Ext.Collection} this
             * @param {Object|Number|String|Mixed} itemOrIndexOrKeyOrValue
             */
            'remove',

            /**
             * @event beforereplace
             * This event gets fired before an item gets replaced in the collection
             * @param {Ext.Collection} this
             * @param {Object|String|Mixed} oldItemOrKeyOrValue
             * @param {Object|Mixed} newItemOrValue
             */
            'beforereplace',

            /**
             * @event replace
             * This event gets fired when an item gets replaced in the collection
             * @param {Ext.Collection} this
             * @param {Object|String|Mixed} oldItemOrKeyOrValue
             * @param {Object|Mixed} newItemOrValue
             */
            'replace',

            /**
             * @event beforeclear
             * This event gets fired before the collection has been cleared
             * @param {Ext.Collection} this
             */
            'beforeclear',

            /**
             * @event clear
             * This event gets fired when the collection has been cleared
             * @param {Ext.Collection} this
             */
            'clear'
        );

        this.callParent(arguments);

        // Initialize mixins
        this.initSortable();
        this.initFilterable();

        // Clear initially
        this.clear(true);
    },

    /**
     * Adds an array of items to the collection at once
     * @param {Array} items Array of Object-items to be added
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    addAll: function(items, silent) {

        Ext.each(items, function(item) {
            this.add(item, silent);
        }, this);

        return this;
    },

    /**
     * Builds an item out of key and value information
     * @param {String|Object} key Key
     * @param {Mixed} value Value
     * @return {Object}
     */
    buildItem: function(key, value) {

        if (!value) {
            value = key;

            // Object-item already has a key
            if (value.key) {
                key = value.key;
            } else {

                // Generate key
                key = this.keyFn(value);
            }
        }

        if (value && !key) {

            // 2-arg call but no key given
            key = this.keyFn(value);
        }

        return {
            key: key,
            value: value
        }
    },

    /**
     * Adds an item to the collection
     * @param {String|Object} key The key of the item or the whole item as Object (id property should be set or key will be auto-generated)
     * @param {Object} item Item to be added to the map
     * @param {Boolean} [silent=false] (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    add: function(key, item, silent) {

        // Build item
        item = this.buildItem(key, item);

        if (!silent) {
            this.fireEvent('beforeadd', this, item);
        }

        this.items.push(item);
        this.size++;

        if (!silent) {
            this.fireEvent('add', this, item);
        }
        return this;
    },

    /**
     * Returns the item for the given key OR index
     * @param {String|Number} key Key of the item OR index
     * @return {Mixed}
     */
    get: function(key) {

        if (Ext.isNumber(key)) {
            return this.getAt(key);
        }

        var foundItem = undefined;

        this.each(function(curItem, curKey) {
            if (curKey === key) {
                foundItem = curItem;
            }
        });
        return foundItem;
    },

    /**
     * Returns the item of the given index
     * @param {Number} index Index to fetch item from
     * @return {Mixed}
     */
    getAt: function(index) {

        if (this.items[index] && this.items[index].value) {
            return this.items[index].value;
        }
        return undefined;
    },

    /**
     * Returns the key for a given item
     * @param {Mixed} item Item to fetch key for
     * @return {Number}
     */
    getKey: function(item) {

        var foundKey = undefined;
        this.each(function(curItem, curKey) {

            if (curItem === item) {
                foundKey = curKey;
            }
        });
        return foundKey;
    },

    /**
     * Returns the last item of the collection
     * @return {Mixed}
     */
    last: function() {
        return this.items[(this.items.length-1)].value;
    },

    /**
     * Returns the first item of the collection
     * @return {Mixed}
     */
    first: function() {
        return this.items[0].value;
    },

    /**
     * Clears the whole collection by reassigning the collection's data with an empty Array
     * @param {Boolean} silent If silent, no event will be fired
     * @return {Ext.Collection}
     */
    clear: function(silent) {

        if (!silent) {
            this.fireEvent('beforeclear', this);
        }

        this.items = [];
        this.size = 0;

        if (!silent) {
            this.fireEvent('clear', this);
        }
        return this;
    },

    /**
     * Returns the count of a collection's items
     * @return {Number}
     */
    count: function() {
        return this.items.length;
    },

    /**
     * Returns the clone of the collection.
     * Please note that listeners aren't cloned.
     * @return {Ext.Collection}
     */
    clone: function() {

        var cloneData = Ext.clone(this.items),
            cloneCollection = new Ext.Collection();

        cloneCollection.items = cloneData;
        cloneCollection.size = this.size;
        cloneCollection.keyFn = this.keyFn;

        return cloneCollection;
    },

    /**
     * Calls the given function for each item in the collection
     * @param {Function} fn Function to call per item
     * <div class="mdetail-params"><ul>
     * <li><b>value</b> : Mixed<p class="sub-desc">The item</p></li>
     * <li><b>key</b> : String<p class="sub-desc">The item's key</p></li>
     * <li><b>index</b> : Number<p class="sub-desc">The current index in collection (may change on sort)</p></li>
     * <li><b>length</b> : Number<p class="sub-desc">Length of the collection</p></li>
     * </ul></div>
     * @param {Object} [scope=this] (optional) Callback call scope
     * @return {Ext.Collection}
     */
    each: function(fn, scope) {

        var me = this;
        Ext.Array.each(this.items, function(item, index) {
            fn.call(scope || me, item.value, item.key, index, me.items.length);
        });
        return this;
    },

    /**
     * Returns true of the collection contains the given item
     * @param {Mixed} item Item to search for
     * @return {Boolean}
     */
    contains: function(item) {

        var doesContain = false;
        this.each(function(curItem) {

            if (item === curItem) {
                doesContain = true;
            }
        });
        return doesContain;
    },

    /**
     * Returns true of the collection contains the given key
     * @param {String} key Key to search for
     * @return {Boolean}
     */
    containsKey: function(key) {

        var doesContain = false;
        this.each(function(curItem, curKey) {
            if (key === curKey) {
                doesContain = true;
            }
        });
        return doesContain;
    },

    /**
     * Calls the given search function for every item in the collection.
     * If the search function returns true, this function returns that item, the function returned true for.
     * @param {Function} searchFn Function which gets executed to search per item:
     * <div class="mdetail-params"><ul>
     * <li><b>value</b> : Mixed<p class="sub-desc">The item</p></li>
     * <li><b>key</b> : String<p class="sub-desc">The item's key</p></li>
     * </ul></div>
     * @param {Object} [scope=this] (optional)
     * @return {Mixed}
     */
    findBy: function(searchFn, scope) {

        var me = this, foundItem = undefined;
        this.each(function(item, key) {

            if (searchFn.call(scope || me, item, key)) {
                foundItem = item;
            }
        });
        return foundItem;
    },

    /**
     * Returns the index of the first matching key/value pair in the collection.
     * If no key was given, only the item get's matched.
     * @param {Mixed} item Item to match
     * @param {String} key (optional) Key to match
     * @return {Number}
     */
    findIndex: function(item, key) {

        var foundIndex = undefined;
        this.each(function(curItem, curKey, index) {

            if (item && key) {

                if (curItem === item && curKey === key) {
                    foundIndex = index;
                    return false;
                }
            }

            if (key) {

                if (curKey === key) {
                    foundIndex = index;
                    return false;
                }
            }

            if (item) {

                if (curItem === item) {
                    foundIndex = index;
                    return false;
                }
            }
        });
        return foundIndex;
    },

    /**
     * Calls the given search function for every item in the collection.
     * If the search function returns true, this function returns the index of the item, the function returned true for.
     * @param {Function} searchFn Function which gets executed to search per item:
     * <div class="mdetail-params"><ul>
     * <li><b>value</b> : Mixed<p class="sub-desc">The item</p></li>
     * <li><b>key</b> : String<p class="sub-desc">The item's key</p></li>
     * </ul></div>
     * @param {Object} [scope=this] (optional)
     * @return {Mixed}
     */
    findIndexBy: function(searchFn, scope) {

        var me = this, foundInndex = undefined;
        this.each(function(item, key, index) {

            if (searchFn.call(scope || me, item, key)) {
                foundInndex = index;
            }
        });
        return foundInndex;
    },

    /**
     * Returns an array of the collection.
     * If the flatten parameter is set to true, the keys get lost.
     * Each member of the array is an item in this case.
     * @param {Boolean} [flatten=false] (optional) Indicator if a flat array without keys should be returned
     * @return {Array}
     */
    toArray: function(flatten) {

        if (!flatten) {
            return this.items;
        } else {

            var flatArray = [];
            this.each(function(item) {
                flatArray.push(item);
            });
            return flatArray;
        }
    },

    /**
     * Returns the index of the given item
     * @param {Mixed} item Item to search for
     * @return {Number}
     */
    indexOf: function(item) {
        return this.findIndex(item);
    },

    /**
     * Returns the index of a given key
     * @param {String} key Key to search for
     * @return {Number}
     */
    indexOfKey: function(key) {
        return this.findIndex(undefined, key);
    },

    /**
     * Adds an item at a given index. Please ensure that item = this.buildItem(...)!
     * If you're not sure, use this.add() instead.
     * @param {Number} idx Index to insert at
     * @param {Mixed} item (optional) Item to insert
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    insertItem: function(idx, item, silent) {

        if (!silent) {
            this.fireEvent('beforeadd', this, item);
        }

        Ext.Array.insert(this.items, idx, item);
        this.size++;

        if (!silent) {
            this.fireEvent('add', this, item);
        }
        return this;
    },

    /**
     * Removes items with a given value
     * @param {Mixed} value Value to match and remove
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    removeValues: function(value, silent) {

        if (!silent) {
            this.fireEvent('beforeremove', this, value);
        }

        for (var i=0; i<this.items.length; i++) {
            if (this.items[i].value === value) {
                Ext.Array.remove(this.items, this.items[i]);
            }
        }
        this.size--;

        if (!silent) {
            this.fireEvent('remove', this, value);
        }
        return this;
    },

    /**
     * Removes the given item from the collection
     * @param {Mixed} item Item to remove
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    removeItem: function(item, silent) {

        if (!silent) {
            this.fireEvent('beforeremove', this, item);
        }

        Ext.Array.remove(this.items, item);
        this.size--;

        if (!silent) {
            this.fireEvent('remove', this, item);
        }
        return this;
    },

    /**
     * Removes all items from the collection
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    removeAll: function(silent) {
        return this.clear(silent);
    },

    /**
     * Removes the item of the collection at the given idex
     * @param {Number} idx Index to remove item at
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    removeAt: function(idx, silent) {

        if (!silent) {
            this.fireEvent('beforeremove', this, idx);
        }

        Ext.Array.removeAt(this.items, idx);
        this.size--;

        if (!silent) {
            this.fireEvent('remove', this, idx);
        }
        return this;
    },

    /**
     * Removes item(s) identified by given key from collection
     * @param {String} key Key to remove item(s) for
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    removeAtKey: function(key, silent) {

        var _items = [];

        if (!silent) {
            this.fireEvent('beforeremove', this, key);
        }

        for (var i=0; i<this.items.length; i++) {
            if (this.items[i].key !== key) {
                _items.push(this.items[i]);
            }
        }

        // All items included instead of that to remove by key if found
        this.items = _items;
        this.size--;

        if (!silent) {
            this.fireEvent('remove', this, key);
        }
        return this;
    },

    /**
     * Replaces items with the same values
     * @param {Mixed} oldValue Old value
     * @param {Mixed} newValue New value
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    replaceValues: function(oldValue, newValue, silent) {

        if (!silent) {
            this.fireEvent('beforereplace', this, oldValue, newValue);
        }

        for (var i=0; i<this.items.length; i++) {
            if (this.items[i].value === oldValue) {
                this.items[i].value = newValue;
            }
        }

        if (!silent) {
            this.fireEvent('replace', this, oldValue, newValue);
        }
        return this;
    },

    /**
     * Replaces a specific item of the collection.
     * Assumes valid Collection data structure (ensure that item = this.buildItem(key, value))
     * It you're not sure, use this.replaceAtKey() instead.
     * @param {Mixed} item1 Old item
     * @param {Mixed} item2 New item
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    replaceItem: function(item1, item2, silent) {

        if (!silent) {
            this.fireEvent('beforereplace', this, item1, item2);
        }

        Ext.Array.replace(this.items, item1, item2);

        if (!silent) {
            this.fireEvent('replace', this, this.items[i], item2);
        }
        return this;
    },

    /**
     * Replaces a specific item of the collection
     * @param {String} key Key of item to replace
     * @param {Mixed} value New value for key
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    replaceAtKey: function(key, value, silent) {

        if (!silent) {
            this.fireEvent('beforereplace', this, key, value);
        }

        for (var i=0; i<this.items.length; i++) {
            if (this.items[i].key === key) {

                this.items[i].value = value;
                this.size--;
            }
        }

        if (!silent) {
            this.fireEvent('replace', this, key, value);
        }
        return this;
    },

    /**
     * Transforms the collection into an Ext.Map instance
     * @param {Boolean} [flatten=false] (optional)
     * Flattens the data structure so that the map becomes a key -> value map instead of an index -> item object map.
     * This may result in loosing data if the collection held duplicate keys.
     * @return {Ext.Map}
     */
    toMap: function(flatten) {

        var o = Ext.Array.toObject(this.items);
        if (flatten) {
            o = Ext.Array.toObject(this.items, 'key', 'value');
        }
        return Ext.map(o);
    }
});


/**
 * Creates an instance of Ext.Collection.
 * @param {Array} array (optional) Initial array data to be added
 * @param {Boolean} silent (optional) If silent, no event will be fired
 * @member Ext
 * @method collection
 */
Ext.collection = function(array, silent) {

    var c = Ext.create('Ext.Collection');

    // Add all initial given collection items
    if (array) {
        c.addAll(array, silent);
    }
    return c;
};