/**
 * @class Ext.iter.Interface
 * @extends Object
 * @private
 * Interface definition for every Iteratable data type.
 * Defines the members and their type, the implementing class MUST provide.
 */
Ext.defineInterface('Ext.iter.Interface', {
    toArray: Ext.Interface.FUNCTION,
    count: Ext.Interface.FUNCTION,
    each: Ext.Interface.FUNCTION,
    dataPropertyName: Ext.Interface.STRING
});