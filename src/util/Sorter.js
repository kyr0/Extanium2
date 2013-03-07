/**
 * @class Ext.util.Sorter
 * @extends Ext.Class
 *
 * Sorter which implement a sort method.
 */
Ext.define('Ext.util.Sorter', {

    /**
     * @property {String} [direction=ASC]
     * Sort direction to sort to
     */
    direction: 'ASC',

    /**
     * @property {String} [property=key]
     * Name of property to sort by (of data item object e.g. in an Ext.Collection instance)
     */
    property: 'key',

    /**
     * @property {Function} [comparatorFn=auto generated]
     * Comparator function used to sort the data
     */
    comparatorFn: Ext.emptyFn,

    /**
     * Generates the comparator function
     * @param {Object} cfg Sorter configuration
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
         * Creates a sorter
         * @param {String} [direction=ASC] Sort direction
         * @param {String} [property=key Property name
         * @return {Ext.util.Sorter}
         */
        create: function(direction, property) {

            return new Ext.util.Sorter({
                direction: direction || Ext.util.Sorter.prototype.direction,
                property: property || Ext.util.Sorter.prototype.property
            });
        }
    }
}, function(ctor) {
	
	// Shortcuts
	Ext.sorter = ctor.create;	
});
