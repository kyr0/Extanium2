/**
 * @class Ext.util.Filter
 * @extends Ext.Class
 *
 * Filter which implement a filter method.
 */
Ext.define('Ext.util.Filter', {

    /**
     * @property {String} [property=key]
     * Name of property to filter on (of data item object e.g. in an Ext.Collection instance)
     */
    property: 'value',

    /**
     * @property {Function} [comparatorFn=auto generated]
     * Filter function used to filter the data
     */
    comparatorFn: Ext.emptyFn,

    /**
     * Generates the comparator function
     * @param {Object} cfg Filter configuration
     */
    constructor: function(cfg) {

        // Allow short notation
        if (cfg.dir) {
            cfg.direction = cfg.dir;
        }

        if (cfg.prop) {
            cfg.property = cfg.prop;
        }

        // Prepend value path selector for dev comfort
        if (cfg.property && cfg.property !== 'key' && cfg.property !== 'value') {
            cfg.property = 'value.' + cfg.property;
        }

        // Call parent
        this.callParent(arguments);

        // Generate comparator function
        this.comparatorFn = Ext.util.Comparator.generate(this.direction, this.property);
    },

    statics: {

        /**
         * Creates a filter
         * @param {String} [direction=ASC] Sort direction
         * @param {String} [property=key Property name
         * @return {Ext.util.Sorter}
         */
        create: function(direction, property) {

            return new Ext.util.Filter({
                direction: direction || Ext.util.Sorter.prototype.direction,
                property: property || Ext.util.Sorter.prototype.property
            });
        }
    }
}, function(ctor) {
	
	// Shortcuts
	Ext.filter = ctor.create;	
});
