/**
 * @class Ext.Date
 * @extends Object
 * @singleton
 * Singleton class as helper working with Date's.
 */
Ext.Date = {

    /**
    * Date interval constant
    * @type String
    */
   MILLI : "ms",

   /**
    * Date interval constant
    * @type String
    */
   SECOND : "s",

   /**
    * Date interval constant
    * @type String
    */
   MINUTE : "mi",

   /** Date interval constant
    * @type String
    */
   HOUR : "h",

   /**
    * Date interval constant
    * @type String
    */
   DAY : "d",

   /**
    * Date interval constant
    * @type String
    */
   MONTH : "mo",

   /**
    * Date interval constant
    * @type String
    */
   YEAR : "y",

    defaultFormat: 'd/m/Y',

    dayNames: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ],

    monthNames: [
        'Januar',
        'Feburar',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ],

    monthNumbers: {
        'Januar': 0,
        'Jan': 0,
        'Feburar': 1,
        'Feb': 1
        //TODO
    },

    defaults: {
        y: undefined,
        m: undefined,
        d: undefined,
        h: undefined,
        i: undefined,
        s: undefined,
        ms: undefined
    },

    formatCodes: {
        // TODO: implement map of default codes
    },


    formatFunctions: {
        // TODO: Every name is mapped to a formatting function
    },

    /**
     * Encodes a Date as JSON-text
     *
     * @param {Date} date Date to encode
     * @return {String}
     */
    encode: function (date) {

        return '"' + d.getFullYear() + "-" +
            Ext.Number.pad(d.getMonth() + 1) + "-" +
            Ext.Number.pad(d.getDate()) + "T" +
            Ext.Number.pad(d.getHours()) + ":" +
            Ext.Number.pad(d.getMinutes()) + ":" +
            Ext.Number.pad(d.getSeconds()) + '"';
    },

    parse: function(date, format) {
        // TODO
    },


    format: function(date, format) {
        // TODO
    },

    add: function(date, interval, value) {

    },

    isBetween: function(date, startDate, endDate) {

    },

    clearTime: function(date, doClone) {

    },

    clone: function(date) {

    },

    getDayOfYear: function(date) {

    },

    getDaysInMonth: function(date) {

    },

    getElapsedMS: function(date1, date2) {

    },

    getFirstDateOfMonth: function(date) {

    },

    getFirstDayOfMonth: function(date) {

    },

    getGMTOffset: function(date) {

    },

    getLastDateOfMonth: function(date) {

    },

    getLastDayOfMonth: function(date) {

    },

    getMonthNumber: function(name) {

    },

    getTimezone: function(date) {

    },

    getWeekOfYear: function(date) {

    },

    isDST: function(date) {

    },

    isEqual: function(date1, date2) {

    },

    isLeapYear: function(date) {

    },

    isValid: function(year, monh, day, hour, minute, second, millisecond) {
        // TODO: Check for rollover
    },

    now: function() {

    }
};

// Shortcuts
Ext.toDate = Ext.Date.parse;