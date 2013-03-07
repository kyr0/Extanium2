/**
 * @class Ext.Number
 * @extends Object
 * @singleton
 * Singleton class as helper working with Number's.
 */
Ext.Number = {

    /**
     * Internal local ID sequence
     * @private
     */
    idSequence: 0,

    /**
     * Pads a number and returns as String (formatted number)
     *
     * @param {Number} n Number to pad and format
     * @return {String}
     */
    pad: function (n) {
        return n < 10 ? "0" + n : n;
    },

    /**
     * Returns a unique Ext id
     * @return {String}
     */
    id: function (prefix) {

        if (!prefix) {
            prefix = Ext.name;
        }
        Ext.Number.idSequence++;

        return prefix + "-" + Ext.Number.idSequence;
    },

    constrain: function(number, min, max) {

    },

    toNumber: function(value, defaultNumber) {

    },

    getRandom: function(from, to) {

    },

    toFixed: function(value, precision) {

    },

    formatCurrency: function(value, sign, decimalDigits, signAtEnd) {

    },


    formatFileSize: function(size, useIbiFormat) {

    },

    format: function(value, format) {

    },

    from: function(value) {
        return Number(value);
    }
};

// Shortcuts
Ext.id = Ext.Number.id;
Ext.toNumber = Ext.Number.from;
Ext.random = Ext.Number.getRandom;