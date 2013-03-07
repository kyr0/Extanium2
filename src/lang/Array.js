/**
 * @class Ext.Array
 * @extends Object
 * @singleton
 * Singleton class as helper working with Array's.
 */
Ext.Array = {

    /**
     * Checks whether or not the specified object exists in the array.
     *
     * @param {Array} ar Input array to work on
     * @param {Object} o The object to check for
     * @param {Number} from (optional) The index at which to begin the search
     * @return {Number} The index of o in the array (or -1 if it is not found)
     */
    indexOf: function (ar, o, from) {
        var len = ar.length;
        from = from || 0;
        from += (from < 0) ? len : 0;
        for (; from < len; ++from) {
            if (ar[from] === o) {
                return from;
            }
        }
        return -1;
    },

    /**
     * Removes the specified object from the array.
     * If the object is not found nothing happens.
     *
     * @param {Array} ar Input array to work on
     * @param {Object} o The object to remove
     * @return {Array} The array
     */
    remove: function (ar, o) {
        var index = ar.indexOf(o);
        if (index !== -1) {
            ar.splice(index, 1);
        }
        return ar;
    },

    /**
     * Encodes an Array as JSON-text
     *
     * @param {Array} o Array to encode
     * @return {String}
     */
    encode: function (o) {
        var a = ["["], b, i, l = o.length, v;
        for (i = 0; i < l; i += 1) {
            v = o[i];
            switch (typeof v) {
                case "undefined":
                case "function":
                case "unknown":
                    break;
                default:
                    if (b) {
                        a.push(',');
                    }
                    a.push(v === null ? "null" : Ext.util.JSON.encode(v));
                    b = true;
            }
        }
        a.push("]");
        return a.join("");
    },

    /**
     * Iterates an array calling the supplied function.
     * @param {Array/Mixed} array The array to be iterated. If this
     * argument is not really an array, the supplied function is called once.
     * @param {Function} fn The function to be called with each item. If the
     * supplied function returns false, iteration stops and this method returns
     * the current index. This function is called with the following items:
     * {Mixed} item, {Number} index, {Array} allItems
     * @param {Object} scope The scope (this reference) in which the specified function is executed.
     * Defaults to the item at the current index
     * within the passed array.
     * @return {Mixed}
     */
    each: function(array, fn, scope) {

        if (Ext.isEmpty(array, true)) {
            return undefined;
        }

        if (Ext.isPrimitive(array)) {
            array = [array];
        }

        for (var i = 0, len = array.length; i < len; i++) {
            if (fn.call(scope || array[i], array[i], i, array) === false) {
                return i;
            }
        }
    },

    /**
     * Removes all items from the array
     * @param {Array} array Array to clean
     * @return {Array}
     */
    clean: function(array) {
        return (array = []);
    },

    /**
     * Returns true if the given array contains the given item
     * @param {Array} array Array to search in
     * @param {Mixed} item Item to search for
     * @return {Boolean}
     */
    contains: function(array, item) {

        for (var i=0; i<array.length; i++) {
            if (array[i] === item) {
                return true;
            }
        }
        return false;
    },

    /**
     * Removes all items from the specified index + the eraseCount.
     * Returns the erased array.
     * @param {Array} array Array to erase items from
     * @param {Number} startIndex Index to start from
     * @param {Number} eraseCount
     * @return {Array}
     */
    erase: function(array, startIndex, eraseCount) {

        var tempArray = [];
        for (var i=0; i<array.length; i++) {

            if (i===startIndex || i<(startIndex+eraseCount)) {
                // Omit
            } else {
                tempArray.push(tempArray[i]);
            }
        }

        // Replace array by temporary
        array = tempArray;

        return array;
    },



    difference: function(array1, array2) {

    },

    /**
     * Filters an array by a given comparator function.
     * Returns a new array holding the matching values.
     * @param {Array} array Array to filter
     * @param {Function} comparatorFn Comparator function (first parameter is value)
     * @param {Object} [scope=array] (optional) Scope of the comparator function execution
     * @return {Array}
     */
    filterBy: function(array, comparatorFn, scope) {

        if (typeof array.filter !== 'function') {

            var ar = [], filterResult;
            for (var i=0; i<array.length; i++) {

                filterResult = comparatorFn.apply(scope || array, array[i]);

                if (filterResult) {
                    ar.push(filterResult);
                }
            }
            return ar;

        } else {
            return array.filter(comparatorFn, scope || array);
        }
    },

    /**
     * Filters an array by a given value, the operator
     * @param array
     * @param value
     * @param property
     * @param operator
     */
    filter: function(array, value, property, operator) {

    },

    /**
     * Flattens an array - returns a plain value array from
     * an object array given. The valueProperty parameter specifies,
     * which property should be used as value property. This can
     * either be a property name or JSON-path.
     * @param {Array} array Array to flatten
     * @param {String} [property=value] (optional) Object property name
     * @return {Array}
     */
    flatten: function(array, property) {

        if (!property) {
            property = 'value';
        }

        var extractor = Ext.Object.generatePropertyExtractor(property),
            value = null, ar = [];

        for (var i=0; i<array.length; i++) {

            value = array[i];

            if (Ext.isObject(value)) {
                value = extractor(value);
            }
            ar.push(value);
        }
        return ar;
    },

    from: function(value, cloneIfArray) {

    },

    include: function(array, item) {

    },

    /**
     *
     * @param array
     * @param index
     * @param items
     */
    insert: function(array, index, items) {

    },

    /**
     * Calls the given function for each array item and returns a new Array
     * consisting of the data the function calls return.
     * @param array
     * @param fn
     * @param scope
     * @return {Array}
     */
    map: function(array, fn, scope) {

        var ar = [];
        for (var i=0; i<array.length; i++) {
            ar.push(fn.apply(scope || array[i], array[i]));
        }
        return ar;
    },

    /**
     * Merges a arbitrary count of arrays
     * @param {Array...} arrays Arrays to merge
     * @return {Array}
     */
    merge: function() {

    },

    /**
     * Merges a arbitrary count of arrays but omits duplicate items
     * @param {Array...} arrays Arrays to merge
     * @return {Array}
     */
    union: function() {

    },

    /**
     * Plucks the value of the property named of each array item from the array
     * @param {Array} array Array to pluck from
     * @param {String} propertyName Property to delete form objects in array
     * @return {Array}
     */
    pluck: function(array, propertyName) {

        for (var i=0; i<array.length; i++) {
            if (array[i] && array[i][propertyName]) {
                delete array[i][propertyName];
            }
        }
        return array;
    },

    /**
     * Pushes an arbitrary count of items on the end of the array given.
     * If an Array is pushed as value, the items of the array get pushed, not the array itself. (Array gets flatten)
     * @param {Array} array Array to push to
     * @param {Mixed} value Value to push
     * @return {Array}
     */
    push: function(array, value) {

        if (Ext.isArray(value)) {

            for (var i=0; i<value.length; i++) {
                array.push(value[i]);
            }
        } else {
            array.push(value);
        }
        return array;
    },

    /**
     * Returns the maximum value of an flat array
     * @param {Array} array Array to fetch maximum value
     * @return {Number}
     */
    max: function(array) {
        return Math.max.apply(Math, array);
    },

    /**
     * Returns the minimum value of an flat array
     * @param {Array} array Array to fetch minimum value
     * @return {Number}
     */
    min: function(array) {
        return Math.min.apply(Math, array);
    },

    /**
     * Removes the specified item from array
     * @param {Array} array Array to remove from
     * @param {Mixed} item Item to remove
     * @return {Array}
     */
    remove: function(array, item) {

        var tempArray = [];
        for (var i=0; i<array.length; i++) {
            if (array[i] !== item) {
                tempArray.push(array[i]);
            }
        }
        array = tempArray;
        return array;
    },

    /**
     * Removes the item at the specified index
     * @param {Array} array Array to remove from
     * @param {Number} index Index to remove at
     * @return {Array}
     */
    removeAt: function(array, index) {

        var tempArray = [];
        for (var i=0; i<array.length; i++) {
            if (i!==index) {
                tempArray.push(array[i]);
            }
        }
        array = tempArray;
        return array;
    },

    /**
     * Replaces an item with another
     * @param {Array} array Array to replace items in
     * @param {Mixed} item1 Item to be replaced
     * @param {Mixed} item2 Item which replaces item1
     * @return {Array}
     */
    replace: function(array, item1, item2) {

        for (var i=0; i<array.length; i++) {
            if (array[i] === item1) {
                array[i] = item2;
            }
        }
        return array;
    },

    /**
     * Returns an object for an array given.
     * By default, this method returns an object holding index -> value association data.
     * But you can specify property names/JSON-path for key and value to be filled customized
     * when array items are objects.
     * @param {Array} array Array to transform
     * @param {String} keyProperty (optional) Name or JSON-path to the key property in the array items
     * @param {String} valueProperty (optional) Name or JSON-path to the value property in the array items
     * @return {Object}
     */
    toObject: function(array, keyProperty, valueProperty) {

        var o = {},
            keyExtractor = Ext.Object.generatePropertyExtractor(keyProperty),
            valueExtractor = Ext.Object.generatePropertyExtractor(valueProperty),
            key = null,
            value = null;

        for (var i=0; i<array.length; i++) {

            if (Ext.isObject(array[i]) && keyProperty) {
                key = keyExtractor(array[i]);
            } else {
                key = i;
            }

            if (Ext.isObject(array[i]) && valueProperty) {
                value = valueExtractor(array[i]);
            } else {
                value = array[i];
            }
            o[key] = value;
        }
        return o;
    },

    /**
     * Returns a collection for an array given
     * @param {Array} array Array to fetch a collection for
     * @return {Ext.Collection}
     */
    toCollection: function(array) {
        return new Ext.Collection(array);
    },

    /**
     * Converts any iterable (numeric indices and a length property) into a true array
     * Don't use this on strings. For strings, use this instead:
     *
     * @param {Mixed} input Any type to be casted as Array
     * @param {Boolean} [flatten=false] (optional) Indicator if a flat array without keys should be returned
     * @return {Array}
     */
    from: function(input, flatten) {

        if (Ext.isObject(input)) {
            return Ext.Object.toArray(input, flatten);
        } else if (Ext.isArray(input)) {
            return input;
        } else if (Ext.isString(input)) {
            return Ext.String.toArray(input);
        } else if (Ext.isMap(input)) {
            return input.toArray(flatten);
        } else if (Ext.isCollection(input)) {
            return input.toArray(flatten);
        } else {
            return [input];
        }
    },

    /**
     * Sorts an Array's (1-dimensional) plain values
     * @param {Array} array Array to be sorted by object property
     * @param {String} [direction=ASC] (optional) Direction to sort to
     * @return {Array}
     */
    sort: function(array, direction) {
        array.sort(Ext.generateSortComparator(direction));
        return array;
    },

    /**
     * Sorts an Array by a property when the Array consists of Object items.
     *
     *     var ar = [{vorname: 'Aron'}, {vorname: 'Andre'}, {vorname: 'Bernd'}];
     *     Ext.Array.sortByProperty(ar, 'vorname', 'DESC');
     *
     * Sorting of deeply-structured data is also possible:
     *
     *     var ar = [{foo: [{bar: 123}]}, {foo: [{bar: 345}]}, {foo: [{bar: 789}]}];
     *     Ext.Array.sortByProperty(ar, 'foo.0.bar', 'DESC');
     *
     * If you want to accomplish multi-property sorting, try Ext.toCollection(ar).sort(...)!
     *
     * @param {Array} array Array to be sorted by object property
     * @param {String} [direction=ASC] (optional) Direction to sort to
     * @param {String} [property=plain array item] (optional) Name/Path of the object property to be sorted
     * @return {Array}
     */
    sortByProperty: function(array, direction, property) {
        array.sort(Ext.generateSortComparator(direction, property));
        return array;
    },

    /**
     * Sorts an Array by a custom comparator function as seen here:
     *
     *     var ar = [
     *         {objs: [{name: 'Group 1'}, {count: 12}]},
     *         {objs: [{name: 'Group 2'}, {count: 200}]},
     *         {objs: [{name: 'Group 3'}, {count: 300}]}
     *     ];
     *
     *     Ext.Array.sortBy(ar, function(value1, value2) {
     *         // DESC; for ASC use compare() instead of compareInverted()!
     *         return Ext.util.Comparator.compareInverted(
     *             value1['objs'][0]['name'],
     *             value2['objs'][0]['name']
     *         );
     *     });
     *
     * @param {Array} array Array to sort
     * @param {Function} comparatorFn Comparator function to use.
     * @return {Array}
     */
    sortBy: function(array, comparatorFn) {
        array.sort(comparatorFn);
        return array;
    }
};

// Shortcuts
Ext.toArray = Ext.Array.from;
Ext.toCollection = Ext.Array.toCollection;