/**
 * @class Ext.Object
 * @extends Object
 * @singleton
 * Singleton class as helper working with objects.
 */
Ext.Object = {

    /**
     * Clones an object given
     *
     * @author Jozef Sakalos, aka Saki
     * @param {Object} o Object to clone
     * @return {Object}
     */
    clone: function (o) {

        if (!o || 'object' !== typeof o) {
            return o;
        }

        if ('function' === typeof o.clone) {
            return o.clone();
        }

        var c = '[object Array]' === Object.prototype.toString.call(o) ? [] : {};
        var p, v;

        for (p in o) {

            if (o.hasOwnProperty(p)) {

                v = o[p];
                if (v && 'object' === typeof v) {
                    c[p] = Ext.clone(v);
                }
                else {
                    c[p] = v;
                }
            }
        }
        return c;
    },


    /**
     * Copies all the properties of config to obj.
     * @param {Object} obj The receiver of the properties
     * @param {Object} config The source of the properties
     * @param {Object} defaults A different object that will also be applied for default values
     * @return {Object} returns obj
     * @member Ext apply
     */
    apply: function (o, c, defaults) {

        if (defaults) {
            Ext.apply(o, defaults);
        }
        if (o && c && typeof c === 'object') {
            for (var p in c) {
                if (true) {
                    o[p] = c[p];
                }
            }
        }
        return o;
    },

    /**
     * Copies all the properties of config to obj if they don't already exist.
     * @param {Object} obj The receiver of the properties
     * @param {Object} config The source of the properties
     * @return {Object} returns obj
     */
    applyIf: function (o, c) {

        if (o) {

            for (var p in c) {
                if (!Ext.isDefined(o[p])) {
                    o[p] = c[p];
                }
            }
        }
        return o;
    },

    /**
     * Iterates an Object calling the supplied function.
     * @param {Object} o The Object to be iterated.
     * @param {Function} fn The function to be called with each item. If the
     * supplied function returns false, iteration stops and this method returns
     * the current index. This function is called with the following items:
     * {Mixed} item, {Mixed} propertyName, {Object} allItems
     * @param {Object} scope The scope (this reference) in which the specified function is executed.
     * Defaults to the item at the current index
     * within the passed object.
     * @return {Mixed}
     */
    each: function(o, fn, scope) {

        if (!Ext.isObject(o)) {
            throw "The given Object to loop via Ext.Object.each() is not an Object!";
        }

        for (var prop in o) {
            if (o.hasOwnProperty(prop)) {
                if (fn.call(scope || o, o[prop], prop, o) === false) {
                    return prop;
                }
            }
        }
    },

    /**
     * Returns this object as Array
     * @param {Object} o Object to be casted
     * @param {Boolean} [flatten=false] (optional) Indicator if a flat array without keys should be returned
     * @return {Array}
     */
    toArray: function(o, flatten) {

        var arr = [];
        if (!Ext.isObject(o)) {
            throw "The given Object to be casted as Array via Ext.Object.toArray() is not an Object!";
        }

        if (!flatten) {

            for (var p in o) {
                arr.push({
                    key: p,
                    value: o[p]
                });
            }
        } else {

            for (var p in o) {
                arr.push(o[p]);
            }
        }
        return arr;
    },

    /**
     * Just a simple equalizing method for any Object-based instance
     * @return {Boolean}
     */
    equals: function(a, b) {
        return a === b;
    },

    /**
     * Returns the count of keys in an object (non-recursive)
     * @param {Object} o Object to count
     * @return {Number}
     */
    count: function(o) {

        var size = 0;
        for (var p in o) {
            if (o.hasOwnProperty(p)) {
                size++;
            }
        }
        return size;
    },

    /**
     * Generates an extractor function for extracting data values out
     * of complex object/array data structures as defined by property JSON-path.
     * @param {String} property Property JSON-path
     * @return {Function}
     */
    generatePropertyExtractor: function(property) {

        if (property && property.indexOf('.') > -1) {

            var accessor = property.replace(/(\.*\.)/g, "['");
            accessor = "['" + accessor.replace(/(\[)/g, "\'][") + "']";
            return Ext.Function.create('return arguments[0]' + accessor);

        } else {
            return function(value) {
                return value[property];
            }
        }
    },

    /**
     *
     * @param {Object} destObject
     * @param {Object...} additionalObjects
     */
    merge: function(destObject) {

    },

    getKeys: function(object) {

    },

    getKey: function(object, value) {

    },

    getValues: function(object) {

    },

    getValue: function(key) {

    },

    /**
     * Creates an Object
     * @param value
     * @return {Object}
     */
    from: function(value) {
        return Object(value);
    },

    /**
     * Creates a map from a given object
     * @param {Object} object Object to transform to an Ext.Map
     * @return {Ext.Map}
     */
    toMap: function(object) {
        return new Ext.Map(object);
    }
};

// Create shortcuts
Ext.apply = Ext.Object.apply;
Ext.applyIf = Ext.Object.applyIf;
Ext.clone = Ext.Object.clone;
Ext.equals = Ext.Object.equals;
Ext.toObject = Ext.Object.from;
Ext.toMap = Ext.Object.toMap;