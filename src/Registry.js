/**
 * @class Ext.Registry
 * @extends Object
 * @singleton
 *
 * Class for working with global variables.
 */
Ext.Registry = {

    /**
     * Internal storage of registry items
     * @private
     */
    registry: {},

    /**
     * Sets a value identified by name
     * @param {String} name Name identifier
     * @param {Mixed} value Value to set
     * @return {Ext.Registry}
     */
    set: function (name, value) {
        Ext.Registry.registry[name] = value;
        return Ext.Registry;
    },

    /**
     * Returns value by name
     * @return {Mixed} Value
     */
    get: function (name) {
        return Ext.Registry.registry[name];
    },

    /**
     * Checks if a key is exisitng in global registry
     * @return {Boolean}
     */
    isset: function (name) {

        if (Ext.Registry.registry[name]) {
            return true;
        }
        return false;
    }
};

// Create registry namespace in global scope
Ext.get = Ext.Registry.get;
Ext.isset = Ext.Registry.isset;
Ext.set = Ext.Registry.set;