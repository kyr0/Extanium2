/**
 * @class Ext.iter.Sliceable
 * @extends Ext.Class
 *
 * Implements slicing methods for Array-based iterable data structures.
 */
Ext.define('Ext.iter.Sliceable', {

    /**
     * Replaces a slice of the data.
     * If the count of replace items doesn't match with the count of items
     * to be replaced, an exception gets thrown.
     *
     *     var c = Ext.collection();
     *
     *     c.add('a', {lala: 3});
     *     c.add('b', {lala: 3});
     *     c.add('c', {lala: 2});
     *
     *     c.replaceSlice(0, 1, [{lala: 4}, {lala: 5}])
     *
     * @param {Number} startIdx Index to start replacing from
     * @param {Number} endIdx End index for replacing
     * @param {Array} replaceItems Array of replacement items
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.iter.Interface}
     */
    replaceSlice: function(startIdx, endIdx, replaceItems, silent) {

        var dataPool = this[this.dataPropertyName], j=0;

        // Check length of replacements
        if (((endIdx - startIdx)+1) === replaceItems.length) {

            // Do replace
            for (var i=startIdx; i<=endIdx; i++) {

                // Prepare replacement item to match to internal data structure
                if (!Ext.isObject(replaceItems[j])) {
                    replaceItems[j] = {
                        value: replaceItems[j]
                    };
                }
                replaceItems[j] = this.buildItem(replaceItems[j]);

                // Replace original item by replacement
                this.replaceItem(dataPool[i], replaceItems[j], silent);

                j++;
            }

        } else {
            throw "The count of items to replace MUST match with the count of replacement items!";
        }
        return this;
    },

    /**
     * Copies and returns a slice of the data.
     * @param {Number} startIdx Index to start replacing from
     * @param {Number} endIdx End index
     * @return {Array}
     */
    getSlice: function(startIdx, endIdx) {

        var dataPool = this[this.dataPropertyName], ar = [];

        // Loop range
        for (var i=startIdx; i<=endIdx; i++) {
            ar.push(dataPool[i]);
        }
        return ar;
    }
});