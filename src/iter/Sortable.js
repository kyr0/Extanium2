/**
 * @class Ext.iter.Sortable
 * @extends Ext.Class
 *
 * Implements sorting for iterable, Array-based data structures.
 */
Ext.define('Ext.iter.Sortable', {

    /**
     * @property {Boolean} [isSortable=true]
     * Defines if the data structure is sortable
     */
    isSortable: true,

    /**
     * @property {Array} sorters
     * The array of sorters currently used to sort the data structure.
     * You can call addSorter(Ext.sorter(...)) and removeSorter(sorter) to accomplish multi-sorting.
     * @readonly
     */
    sorters: [],

    /**
     * Initializes the sorting of data structures
     * @private
     * @return void
     */
    initSortable: function() {

        this.addEvents(

            /**
             * @event beforesort
             * This event gets fired before sorting happens
             * @param {Ext.iter.Interface} this
             * @param {Array} sorters
             */
            'beforesort',

            /**
             * @event sort
             * This event gets fired when sorting has happened
             * @param {Ext.iter.Interface} this
             * @param {Array} sorters
             */
            'sort',

            /**
             * @event sorteradded
             * This event gets fired when a sorter gets added
             * @param {Ext.iter.Interface} this
             * @param {Ext.util.Sorter} sorter
             */
            'sorteradded',

            /**
             * @event sorterremoved
             * This event gets fired when a sorter gets removed
             * @param {Ext.iter.Interface} this
             * @param {Ext.util.Sorter} sorter
             */
            'sorterremoved',

            /**
             * @event sorterscleared
             * This event gets fired when all sorters are removed
             * @param {Ext.iter.Interface} this
             */
            'sorterscleared'
        );

        // Init sorters array
        this.clearSorters(true);
    },

    /**
     * Helper method to create sorters
     * @param {Ext.util.Sorter|Object|Array} sorters Sorter(s) to add
     * @param {Boolean} [silent=false] (optional) If silent, no event will be fired
     * @private
     * @return void
     */
    _addSorters: function(sorters, silent) {

        var sorter = null;

        if (sorters && !Ext.isArray(sorters)) {
            sorters = [sorters];
        }

        for (var i=0; i<sorters.length; i++) {

            sorter = sorters[i];

            // Omit invalid sorters
            if (!sorter || !Ext.isObject(sorter)) {
                Ext.throwError("The sorter given is not a valid sorter instance or sorter specification object: " + sorter);
            }

            if (sorter && Ext.isObject(sorter) && !(sorter instanceof Ext.util.Sorter)) {
                sorter = Ext.sorter(sorter.direction || sorter.dir, sorter.property || sorter.prop);
            }
            this.addSorter(sorter, silent);
        }
    },

    /**
     * Sorts an iterable, array-based data structure as specified.
     *
     * This method can be called using lazy sorter objects and explicitly created sorters:
     *
     *     var c = Ext.collection();
     *     c.add('a', {sub: {firstname: 'Aron', lastname: 'Homberg1'}});
     *     c.add('b', {sub: {firstname: 'Andre', lastname: 'Homberg2'}});
     *     c.add('c', {sub: {firstname: 'Bernd', lastname: 'Homberg3'}});
     *     c.add('d', {sub: {firstname: 'Bernd', lastname: 'Homberg4'}});
     *     c.add('e', {sub: {firstname: 'Bernd', lastname: 'Homberg5'}});
     *
     *     // Explicit creating a sorter
     *     c.sort(Ext.sorter('DESC', 'sub.firstname'));
     *
     *     // Lazy sorter object
     *     sort({
     *         dir: 'DESC',
     *         prop: 'sub.firstname'
     *     });
     *
     * Further more, you can do multi-sorting too:
     *
     *     c.sort([
     *          Ext.sorter('DESC', 'sub.firstname')
     *          Ext.sorter('ASC', 'sub.lastname')
     *     ]);
     *
     *     c.sort([
     *         {dir: 'DESC', prop: 'sub.firstname'},
     *         {dir: 'ASC', prop: 'sub.lastname'},
     *     ]);
     *
     * @param {Ext.util.Sorter|Object|Array} sorters Sorter instance OR array of sorter instance(s)
     * @param {Boolean} [append=false] (optional)
     * If set to true, the sorters, added while the last sort() call will not be removed
     * @param {Boolean} [silent=false] (optional) If silent, no event will be fired
     * @return {Ext.iter.Interface}
     */
    sort: function(sorters, append, silent) {

        var me = this;

        if (!me.isSortable) {
            Ext.throwError("This data structure isn't sortable, sorry! (this.isSortable said so...)");
        }

        // Clear sorters first
        if (!append) {
            me.clearSorters(silent);
        }

        // Add sorters
        me._addSorters(sorters, silent);

        if (!silent) {
            me.fireEvent('beforesort', me, me.sorters);
        }

        // Multi-sort implementation
        me[me.dataPropertyName].sort(function(value1, value2) {

            var ret = 0;
            for (var i=0; i<me.sorters.length; i++) {

                ret = me.sorters[i].comparatorFn(
                    value1, value2
                );

                if (ret !== 0) {
                    return ret;
                }
            }
            return ret;
        });

        if (!silent) {
            me.fireEvent('sort', me, me.sorters);
        }
    },

    /**
     * Adds a sorter. You can create a new sorter using Ext.sorter(...).
     * @param {Ext.util.Sorter} sorter Sorter to add
     * @param {Boolean} [noAutoResort=false] (optional) Automatically resort on call
     * @param {Boolean} [silent=false] (optional) If silent, no event will be fired
     * @return {Ext.iter.Interface}
     */
    addSorter: function(sorter, noAutoResort, silent) {

        if (sorter && sorter instanceof Ext.util.Sorter) {
            this.sorters.push(sorter);
        }

        if (!silent) {
            this.fireEvent('sorteradded', this, sorter);
        }

        if (!noAutoResort) {
            this.sort([], silent);
        }
        return this;
    },

    /**
     * Removes a sorter.
     * @param {Ext.util.Sorter} sorter Sorter to remove
     * @param {Boolean} [noAutoResort=false] (optional) Automatically resort on call
     * @param {Boolean} [silent=false] (optional) If silent, no event will be fired
     * @return {Ext.iter.Interface}
     */
    removeSorter: function(sorter, noAutoResort, silent) {

        // Remove sorter
        Ext.Array.remove(this.sorters, sorter);

        if (!silent) {
            this.fireEvent('sorterremoved', this, sorter);
        }

        if (!noAutoResort) {
            this.sort([], silent);
        }
        return this;
    },

    /**
     * Removes all sorters currently set
     * @param {Boolean} [silent=false] (optional) If silent, no event will be fired
     * @return void
     */
    clearSorters: function(silent) {

        this.sorters = [];

        if (!silent) {
            this.fireEvent('sorterscleared', this);
        }
    }
});