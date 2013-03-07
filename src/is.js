/**
 * @class Ext.is
 * @extends Object
 * @singleton
 *
 * Determines what environment the JavaScript code is executing in.
 */
Ext.is = {

    /**
     * <p>Returns true if the passed value is empty.</p>
     * <p>The value is deemed to be empty if it is<div class="mdetail-params"><ul>
     * <li>null</li>
     * <li>undefined</li>
     * <li>an empty array</li>
     * <li>a zero length string (Unless the <tt>allowBlank</tt> parameter is <tt>true</tt>)</li>
     * </ul></div>
     * @param {Mixed} value The value to test
     * @param {Boolean} [allowBlank=false] (optional) true to allow empty strings
     * @return {Boolean}
     */
    isEmpty: function (v, allowBlank) {
        return v === null || v === undefined || ((Ext.isArray(v) && !v.length)) || (!allowBlank ? v === '' : false);
    },

    /**
     * Returns true if the passed value is a JavaScript array, otherwise false.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
    isArray: function (v) {
        return Object.prototype.toString.apply(v) === '[object Array]';
    },

    /**
     * Returns true if the passed object is a JavaScript date object, otherwise false.
     * @param {Object} object The object to test
     * @return {Boolean}
     */
    isDate: function (v) {
        return Object.prototype.toString.apply(v) === '[object Date]';
    },

    /**
     * Returns true if the passed value is a JavaScript Object, otherwise false.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
    isObject: function (v) {
        return !!v && Object.prototype.toString.call(v) === '[object Object]';
    },

    /**
     * Returns true if the passed value is a JavaScript 'primitive', a string, number or boolean.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
    isPrimitive: function (v) {
        return Ext.isString(v) || Ext.isNumber(v) || Ext.isBoolean(v);
    },

    /**
     * Returns true if the passed value is a JavaScript Function, otherwise false.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
    isFunction: function (v) {
        return Object.prototype.toString.apply(v) === '[object Function]';
    },

    /**
     * Returns true if the passed value is a number. Returns false for non-finite numbers.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
    isNumber: function (v) {
        return typeof v === 'number' && isFinite(v);
    },

    /**
     * Returns true if the passed value is a string.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
    isString: function (v) {
        return typeof v === 'string';
    },

    /**
     * Returns true if the passed value is a boolean.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
    isBoolean: function (v) {
        return typeof v === 'boolean';
    },

    /**
     * Returns true if the passed value is not undefined.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
    isDefined: function (v) {
        return typeof v !== 'undefined';
    },

    /**
     * Returns true if the passed value is an instance of Ext.Map.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
    isMap: function(v) {
        return v instanceof Ext.Map;
    },

    /**
     * Returns true if the passed value is an instance of Ext.Collection.
     * @param {Mixed} value The value to test
     * @return {Boolean}
     */
    isCollection: function(v) {
        return v instanceof Ext.Collection;
    }
};

// Shortcuts
Ext.isDefined = Ext.is.isDefined;
Ext.isBoolean = Ext.is.isBoolean;
Ext.isString = Ext.is.isString;
Ext.isNumber = Ext.is.isNumber;
Ext.isFunction = Ext.is.isFunction;
Ext.isPrimitive = Ext.is.isPrimitive;
Ext.isScalar = Ext.is.isPrimitive;
Ext.isDate = Ext.is.isDate;
Ext.isArray = Ext.is.isArray;
Ext.isEmpty = Ext.is.isEmpty;
Ext.isObject = Ext.is.isObject;
Ext.isMap = Ext.is.isMap;
Ext.isCollection = Ext.is.isCollection;