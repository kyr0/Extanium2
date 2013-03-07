/**
 * @class Ext.iter.Summable
 * @extends Ext.Class
 *
 * Implements aggregation for iterable and map data structures. (Collection, Map)
 */
Ext.define('Ext.iter.Summable', {

    /**
     * Sums all values of the iterable and returns it's sum
     * @param {String} [property=value] (optional) Property name or path to access data per item
     * @return {Number}
     */
    sum: function(property) {

        var flatData = this._toFlatArray(this[this.dataPropertyName], property), sum = 0;

        for (var i=0; i<flatData.length; i++) {
            sum += flatData[i];
        }
        return sum;
    },

    /**
     * Returns the maximum value of the iterable data
     * @param {String} [property=value] (optional) Property name or path to access data per item
     * @return {Number}
     */
    max: function(property) {

        var flatData = this._toFlatArray(this[this.dataPropertyName], property);
        return Ext.Array.max(flatData);
    },

    /**
     * Returns the minimum value of the iterable data
     * @param {String} [property=value] (optional) Property name or path to access data per item
     * @return {Number}
     */
    min: function(property) {
        var flatData = this._toFlatArray(this[this.dataPropertyName], property);
        return Ext.Array.min(flatData);
    },

    /**
     * Returns the average value of the iterable data
     * @param {String} [property=value] (optional) Property name or path to access data per item
     * @return {Number}
     */
    avg: function(property) {
        return (this.sum(property) / this.count());
    },

    /**
     * Returns an array of flat data
     * @param {Array|Object} data Data
     * @param {String} [property=value] (optional) Property name or path to access data per item
     * @return {Array}
     * @private
     */
    _toFlatArray: function(data, property) {

        if (Ext.isCollection(this) && property !== 'value') {
            property = 'value.' + property;
        }

        if (Ext.isObject(data)) {
            data = Ext.Object.toArray(data, true);
        }

        if (Ext.isArray(data)) {
            data = Ext.Array.flatten(data, property);
        }
        return data;
    }
});