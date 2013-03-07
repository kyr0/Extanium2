/**
 * @class Ext.util.Serializable
 * @extends Object
 * Implements a method to serialize data transfer objects
 */
Ext.define('Ext.util.Serializable', {

    extend: 'Object',

    /**
     * Encodes itself to JSON
     * @return {String}
     */
    serialize: function () {
        return Ext.encode(this);
    }
});