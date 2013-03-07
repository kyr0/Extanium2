/**
 * @class Ext.iter.Filterable
 * @extends Ext.Class
 *
 * Implements filtering for iterable data structures.
 */
Ext.define('Ext.iter.Filterable', {

    /**
     * @property {Boolean} [isFilterable=true]
     * Defines if the data structure is filterable
     */
    isSortable: true,

    /**
     * @property {Array} filters
     * The array of filters currently used to filter the data structure.
     * You can call addFilter(Ext.filter(...)) and removeFilter(filter) to accomplish multi-filtering.
     * @readonly
     */
    filters: [],

    /**
     * Initializes the filtering of data structures
     * @private
     * @return void
     */
    initFilterable: function() {

        this.addEvents(

            /**
             * @event beforefilter
             * This event gets fired before filtering happens
             * @param {Ext.iter.Interface} this
             * @param {Array} filters
             */
            'beforefilter',

            /**
             * @event filter
             * This event gets fired when filtering has happened
             * @param {Ext.iter.Interface} this
             * @param {Array} filter
             */
            'filter',

            /**
             * @event filteradded
             * This event gets fired when a filter gets added
             * @param {Ext.iter.Interface} this
             * @param {Ext.util.Filter} filter
             */
            'filteradded',

            /**
             * @event filterremoved
             * This event gets fired when a filter gets removed
             * @param {Ext.iter.Interface} this
             * @param {Ext.util.Filter} filter
             */
            'filterremoved',

            /**
             * @event filterscleared
             * This event gets fired when all filters are removed
             * @param {Ext.iter.Interface} this
             */
            'filterscleared'
        );

        // Init filters array
        this.clearFilters(true);
    },


    /**
     * Adds a filter. You can create a new filter using Ext.filter(...).
     * @param {Ext.util.Filter} filter Filter to add
     * @param {Boolean} [noAutoFilter=false] (optional) Automatically filter on call
     * @param {Boolean} [silent=false] (optional) If silent, no event will be fired
     * @return {Ext.iter.Interface}
     */
    addFilter: function(filter, noAutoFilter, silent) {

        if (filter && filter instanceof Ext.util.Filter) {
            this.filters.push(filter);
        }

        if (!silent) {
            this.fireEvent('filteradded', this, filter);
        }

        if (!noAutoFilter) {
            this.filter([], silent);
        }
        return this;
    },

    /**
     * Removes a filter.
     * @param {Ext.util.Filter} filter Filter to remove
     * @param {Boolean} [noAutoFilter=false] (optional) Automatically filter on call
     * @param {Boolean} [silent=false] (optional) If silent, no event will be fired
     * @return {Ext.iter.Interface}
     */
    removeFilter: function(filter, noAutoFilter, silent) {

        // Remove filter
        Ext.Array.remove(this.filters, filter);

        if (!silent) {
            this.fireEvent('filterremoved', this, filter);
        }

        if (!noAutoFilter) {
            this.filter([], silent);
        }
        return this;
    },

    /**
     * Removes all filters currently set
     * @param {Boolean} [silent=false] (optional) If silent, no event will be fired
     * @return void
     */
    clearFilters: function(silent) {

        this.filters = [];

        if (!silent) {
            this.fireEvent('filterscleared', this);
        }
    }
});