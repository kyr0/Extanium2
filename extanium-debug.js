/*!
 * Extanium 2.0
 *
 * High performance, ultra-minimal, opensource OOP javascript framework in style 
 * of Ext Core. Uses portions of the Ext Core 3.1. Implements the Ext JS 4 OOP API 
 * in a clean way on top of it. Meant to be used for native mobile application
 * development on the Appcelerator Titanium platform combined with the Alloy framework.
 * 
 * Extanium is MIT licensed. 
 * Copyright(c) 2012-2013, Aron Homberg
 *  
 * USED PORTIONS OF:
 * 
 * Ext Core Library 3.1
 * http://extjs.com/
 * Copyright(c) 2006-2009, Ext JS, LLC.
 * 
 * MIT Licensed - http://extjs.com/license/mit.txt
 *
 * The MIT License
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */;module.exports = (function() {
;/**
 * @class Ext
 * @extends Ext.oop.Class
 * @singleton
 *
 * ## Introduction
 *
 * When using Extanium you don't need to worry about formatting e.g. of Numbers, Strings or Dates.
 * Using the static methods of Extanium.util.Format and it's shortcut methods, formatting everything
 * (except your hard disk ;) in a snap!
 *
 * ## Quick examples
 *
 *     Ext.formatDate(new Date(), 'dd-hh-mm:MM:SS'); // => e.g. bla blubb
 *
 * ## In detail
 * TODO
 */
var Ext = {
	
	/**
	 * Initial, commonJS-local-bound GLOBAL scope reference
	 */
	GLOBAL: {},

    /**
     * Framework versions (modularized)
     */
    versions: {
        core: '0.4.0'
    },

    /**
     * Framework name
     */
    name: 'Extanium',

    /**
     * Initialize util namespace
     * @private
     */
    util: {},

    /**
     * Initialize oop namespace
     * @private
     */
    oop: {},

    /**
     * Initialize lang namespace
     * @private
     */
    lang: {},

    /**
     * Initialize iter namespace
     * @private
     */
    iter: {},
    
    /**
     * Initializes the framework by finalizing the namespacing
     * and enabling the class loader.
 	 * @param {Object} GLOBAL New GLOBAL scope object reference
 	 * @return {Ext}
     */
    init: function(GLOBAL) {
    	
    	// Finalizes the namespacing...
    	Ext.ClassManager.finalizeNamespacing(GLOBAL);
    	
    	// Enable the class loader initially...
		Ext.Loader.enable();
    	
    	return this;
    }
};;/**
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
Ext.isCollection = Ext.is.isCollection;;/**
 * @class Ext.Log
 * @singleton
 * @extends Object
 *
 * Implements methods for platform-independent logging.
 */
Ext.Log = {

    /**
     * Controls, if log messages will be shown or not (default: false)
     */
    enableLogging: true,

    /**
     * Method for logging
     *
     * @param {arguments} logMessages Message to log (Can be array)
     * @param {String} severity  Severity role name
     * @return Ext.Log
     */
    _log: function (logMessages, severity) {

        var toLog = [];
        if (!severity) {
            severity = 'log';
        }

		// Collect messages into a flat array
		if (logMessages.length > 1) {
			
	        for (var i = 0; i < logMessages.length; i++) {
	            toLog.push(logMessages[i]);
	        }
        } else {
        	toLog = logMessages[0];
        } 

        // Only log if debugging is enabled
        if (Ext.Log.enableLogging === true) {

            try {
                console[severity](toLog);
            } catch (e) {
                console.log(toLog);
            }
        }
        return Ext;
    },
    log: function () {
        return Ext.Log._log(arguments, 'info')
    },
    info: function () {
        return Ext.Log._log(arguments, 'info')
    },
    debug: function () {
        return Ext.Log._log(arguments, 'debug')
    },
    warn: function () {
        return Ext.Log._log(arguments, 'warn')
    },
    error: function() {
    	return Ext.Log._log(arguments, 'error')
    }
};

// Shortcuts
Ext.log = Ext.Log.log;
Ext.warn = Ext.Log.warn;
Ext.debug = Ext.Log.debug;
Ext.dir = Ext.Log.log;
Ext.info = Ext.Log.info;
Ext.error = Ext.Log.error;;/**
 * @class Ext.iter.Iterable
 * @extends Object
 * @singleton
 * Class for working with iterable datatype instances.
 */
Ext.iter.Iterable = {

    /**
     * Returns true if a given value is iterable (simple spoken: accessible by [$propertyName])
     * @param {Mixed} v Value to check
     * @return {Boolean}
     */
    isIterable: function (v) {

        //check for array or arguments
        if (Ext.isArray(v) || v.callee || Ext.isString(v) || Ext.isObject(v)) {
            return true;
        }
        return false;
    },

    /**
     * Iterates either the elements in an array, or each of the properties in an object.
     * <b>Note</b>: If you are only iterating arrays, it is better to call {@link #each}.
     * @param {Object/Array} object The object or array to be iterated
     * @param {Function} fn The function to be called for each iteration.
     * The iteration will stop if the supplied function returns false, or
     * all array elements / object properties have been covered. The signature
     * varies depending on the type of object being interated:
     * <div class="mdetail-params"><ul>
     * <li>Arrays : <tt>(Object item, Number index, Array allItems)</tt>
     * <div class="sub-desc">
     * When iterating an array, the supplied function is called with each item.</div></li>
     * <li>Objects : <tt>(String key, Object value, Object)</tt>
     * <div class="sub-desc">
     * When iterating an object, the supplied function is called with each key-value pair in
     * the object, and the iterated object</div></li>
     * <li>Strings : <tt>(Index key, String value, String)</tt>
     * <div class="sub-desc">
     * When iterating a string, the supplied function is called with each char in
     * the string, and the iterated string</div></li>
     * </ul></div>
     * @param {Object} scope The scope (<code>this</code> reference) in which the specified function is executed. Defaults to
     * the <code>object</code> being iterated.
     */
    iterate: function (iterable, fn, scope) {

        if (Ext.isEmpty(iterable)) {
            return;
        }
        if (Ext.isString(iterable)) {
            iterable = Ext.String.toArray(iterable);
        }
        if (Ext.isArray(iterable)) {
            Ext.Array.each(iterable, fn, scope);
        } else if (Ext.isObject(iterable)) {
            Ext.Object.each(iterable, fn, scope);
        }
    },

    /**
     * Returns the count (length) of a data structure
     * @param {Mixed} input Arbitrary input data
     * @return {Number}
     */
    count: function(input) {

        if (Ext.isArray(input) || Ext.isString(input)) {
            return input.length;
        } else if (Ext.isObject(input)) {
            return Ext.Object.count(input);
        } else if (Ext.isMap(input)) {
            return input.count();
        } else if (Ext.isCollection(input)) {
            return input.count();
        } else {
            return 0;
        }
    }
};

// Shortcuts

/**
 * Shorthand for {@link Ext.iter.Iterable#isIterable}
 * @param {Mixed} v Value to check
 * @return {Boolean}
 * @member Ext
 * @method iterate
 */
Ext.isIterable = Ext.iter.Iterable.isIterable;
Ext.iterate = Ext.iter.Iterable.iterate;
Ext.each = Ext.iter.Iterable.iterate;;/**
 * @class Ext.Object
 * @extends Object
 * @singleton
 * Singleton class as helper working with objects.
 */
Ext.Object = {

    /**
     * Clones an object given
     *
     * @author Jozef Sakalos, aka Saki
     * @param {Object} o Object to clone
     * @return {Object}
     */
    clone: function (o) {

        if (!o || 'object' !== typeof o) {
            return o;
        }

        if ('function' === typeof o.clone) {
            return o.clone();
        }

        var c = '[object Array]' === Object.prototype.toString.call(o) ? [] : {};
        var p, v;

        for (p in o) {

            if (o.hasOwnProperty(p)) {

                v = o[p];
                if (v && 'object' === typeof v) {
                    c[p] = Ext.clone(v);
                }
                else {
                    c[p] = v;
                }
            }
        }
        return c;
    },


    /**
     * Copies all the properties of config to obj.
     * @param {Object} obj The receiver of the properties
     * @param {Object} config The source of the properties
     * @param {Object} defaults A different object that will also be applied for default values
     * @return {Object} returns obj
     * @member Ext apply
     */
    apply: function (o, c, defaults) {

        if (defaults) {
            Ext.apply(o, defaults);
        }
        if (o && c && typeof c === 'object') {
            for (var p in c) {
                if (true) {
                    o[p] = c[p];
                }
            }
        }
        return o;
    },

    /**
     * Copies all the properties of config to obj if they don't already exist.
     * @param {Object} obj The receiver of the properties
     * @param {Object} config The source of the properties
     * @return {Object} returns obj
     */
    applyIf: function (o, c) {

        if (o) {

            for (var p in c) {
                if (!Ext.isDefined(o[p])) {
                    o[p] = c[p];
                }
            }
        }
        return o;
    },

    /**
     * Iterates an Object calling the supplied function.
     * @param {Object} o The Object to be iterated.
     * @param {Function} fn The function to be called with each item. If the
     * supplied function returns false, iteration stops and this method returns
     * the current index. This function is called with the following items:
     * {Mixed} item, {Mixed} propertyName, {Object} allItems
     * @param {Object} scope The scope (this reference) in which the specified function is executed.
     * Defaults to the item at the current index
     * within the passed object.
     * @return {Mixed}
     */
    each: function(o, fn, scope) {

        if (!Ext.isObject(o)) {
            throw "The given Object to loop via Ext.Object.each() is not an Object!";
        }

        for (var prop in o) {
            if (o.hasOwnProperty(prop)) {
                if (fn.call(scope || o, o[prop], prop, o) === false) {
                    return prop;
                }
            }
        }
    },

    /**
     * Returns this object as Array
     * @param {Object} o Object to be casted
     * @param {Boolean} [flatten=false] (optional) Indicator if a flat array without keys should be returned
     * @return {Array}
     */
    toArray: function(o, flatten) {

        var arr = [];
        if (!Ext.isObject(o)) {
            throw "The given Object to be casted as Array via Ext.Object.toArray() is not an Object!";
        }

        if (!flatten) {

            for (var p in o) {
                arr.push({
                    key: p,
                    value: o[p]
                });
            }
        } else {

            for (var p in o) {
                arr.push(o[p]);
            }
        }
        return arr;
    },

    /**
     * Just a simple equalizing method for any Object-based instance
     * @return {Boolean}
     */
    equals: function(a, b) {
        return a === b;
    },

    /**
     * Returns the count of keys in an object (non-recursive)
     * @param {Object} o Object to count
     * @return {Number}
     */
    count: function(o) {

        var size = 0;
        for (var p in o) {
            if (o.hasOwnProperty(p)) {
                size++;
            }
        }
        return size;
    },

    /**
     * Generates an extractor function for extracting data values out
     * of complex object/array data structures as defined by property JSON-path.
     * @param {String} property Property JSON-path
     * @return {Function}
     */
    generatePropertyExtractor: function(property) {

        if (property && property.indexOf('.') > -1) {

            var accessor = property.replace(/(\.*\.)/g, "['");
            accessor = "['" + accessor.replace(/(\[)/g, "\'][") + "']";
            return Ext.Function.create('return arguments[0]' + accessor);

        } else {
            return function(value) {
                return value[property];
            }
        }
    },

    /**
     *
     * @param {Object} destObject
     * @param {Object...} additionalObjects
     */
    merge: function(destObject) {

    },

    getKeys: function(object) {

    },

    getKey: function(object, value) {

    },

    getValues: function(object) {

    },

    getValue: function(key) {

    },

    /**
     * Creates an Object
     * @param value
     * @return {Object}
     */
    from: function(value) {
        return Object(value);
    },

    /**
     * Creates a map from a given object
     * @param {Object} object Object to transform to an Ext.Map
     * @return {Ext.Map}
     */
    toMap: function(object) {
        return new Ext.Map(object);
    }
};

// Create shortcuts
Ext.apply = Ext.Object.apply;
Ext.applyIf = Ext.Object.applyIf;
Ext.clone = Ext.Object.clone;
Ext.equals = Ext.Object.equals;
Ext.toObject = Ext.Object.from;
Ext.toMap = Ext.Object.toMap;;/**
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
Ext.random = Ext.Number.getRandom;;/**
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
Ext.toDate = Ext.Date.parse;;/**
 * @class Ext.String
 * @extends Object
 * @singleton
 * Singleton class as helper working with string.
 */
Ext.String = {

    /**
     * An empty string
     */
    emptyString: '',

    /**
     * Escape chars e.g. for JSON-encode
     * @private
     */
    escapeChars: {
        "\b": '\\b',
        "\t": '\\t',
        "\n": '\\n',
        "\f": '\\f',
        "\r": '\\r',
        '"' : '\\"',
        "\\": '\\\\'
    },

    htmlEntities: {
        "&": "&amp;"
    },

    /**
     * Allows you to define a tokenized string and pass an arbitrary number of arguments to replace the tokens.  Each
     * token must be unique, and must increment in the format {0}, {1}, etc.  Example usage:
     * <pre><code>
     var cls = 'my-class', text = 'Some text';
     var s = String.format('&lt;div class="{0}">{1}&lt;/div>', cls, text);
     // s now contains the string: '&lt;div class="my-class">Some text&lt;/div>'
     * </code></pre>
     * @param {String} input Input string
     * @param {String...} strings The tokenized string to be formatted
     * @return {String} The formatted string
     */
    format: function (format) {
        var args = Ext.toArray(arguments, 1);
        return format.replace(/\{(\d+)\}/g, function (m, i) {
            return args[i];
        });
    },

    /**
     * Encodes an String as JSON-text
     *
     * @param {String} string String to encode
     * @return {String}
     */
    encode: function (string) {
        if (/["\\\x00-\x1f]/.test(string)) {
            return '"' + string.replace(/([\x00-\x1f\\"])/g, function (a, b) {
                var c = Ext.String.escapeChars[b];
                if (c) {
                    return c;
                }
                c = b.charCodeAt();
                return "\\u00" +
                    Math.floor(c / 16).toString(16) +
                    (c % 16).toString(16);
            }) + '"';
        }
        return '"' + string + '"';
    },

    /**
     * Returns the given String as Array (chars)
     * @param {String} string String to cast to an Array
     * @return {Array}
     */
    toArray: function(string) {
        return string.match(/./g);
    },
    
    
    htmlEncode: function(string) {
        
    },

    htmlDecode: function(string) {

    },

    capitalize: function(string) {

    },

    ellipsis: function(string, length, wordDetection) {

    },

    escape: function(string) {

    },

    escapeRegexp: function(string) {

    },

    leftPad: function(string, size, char) {

    },

    repeat: function(string, times, separator) {

    },

    toggle: function(string, value1, value2){

    },

    trim: function(string) {

    },

    uncapitalize: function(string) {

    },

    toLower: function(string) {

    },

    toUpper: function(string) {

    },


    nl2br: function(string) {

    },

    substr: function(string, startIdx, length) {

    },

    stripTags: function(string) {

    },

    stripScripts: function(string) {

    },

    /**
     * Returns an empty string if value is undefined
     * @param {Mixed} value Whatever may be undefined
     * @return {String}
     */
    undef: function(value) {
        if (typeof value === 'undefined') {
            return '';
        }
    },

    /**
     * Returns a String from any value
     * @param {Mixed} value Whatever value
     * @return {String}
     */
    from: function(value) {
        return String(value);
    }
};

// Create shortcuts
Ext.format = Ext.String.format;
Ext.emptyString = Ext.String.emptyString;
Ext.toString = Ext.String.from;
Ext.undef = Ext.String.undef;;/**
 * @class Ext.Array
 * @extends Object
 * @singleton
 * Singleton class as helper working with Array's.
 */
Ext.Array = {

    /**
     * Checks whether or not the specified object exists in the array.
     *
     * @param {Array} ar Input array to work on
     * @param {Object} o The object to check for
     * @param {Number} from (optional) The index at which to begin the search
     * @return {Number} The index of o in the array (or -1 if it is not found)
     */
    indexOf: function (ar, o, from) {
        var len = ar.length;
        from = from || 0;
        from += (from < 0) ? len : 0;
        for (; from < len; ++from) {
            if (ar[from] === o) {
                return from;
            }
        }
        return -1;
    },

    /**
     * Removes the specified object from the array.
     * If the object is not found nothing happens.
     *
     * @param {Array} ar Input array to work on
     * @param {Object} o The object to remove
     * @return {Array} The array
     */
    remove: function (ar, o) {
        var index = ar.indexOf(o);
        if (index !== -1) {
            ar.splice(index, 1);
        }
        return ar;
    },

    /**
     * Encodes an Array as JSON-text
     *
     * @param {Array} o Array to encode
     * @return {String}
     */
    encode: function (o) {
        var a = ["["], b, i, l = o.length, v;
        for (i = 0; i < l; i += 1) {
            v = o[i];
            switch (typeof v) {
                case "undefined":
                case "function":
                case "unknown":
                    break;
                default:
                    if (b) {
                        a.push(',');
                    }
                    a.push(v === null ? "null" : Ext.util.JSON.encode(v));
                    b = true;
            }
        }
        a.push("]");
        return a.join("");
    },

    /**
     * Iterates an array calling the supplied function.
     * @param {Array/Mixed} array The array to be iterated. If this
     * argument is not really an array, the supplied function is called once.
     * @param {Function} fn The function to be called with each item. If the
     * supplied function returns false, iteration stops and this method returns
     * the current index. This function is called with the following items:
     * {Mixed} item, {Number} index, {Array} allItems
     * @param {Object} scope The scope (this reference) in which the specified function is executed.
     * Defaults to the item at the current index
     * within the passed array.
     * @return {Mixed}
     */
    each: function(array, fn, scope) {

        if (Ext.isEmpty(array, true)) {
            return undefined;
        }

        if (Ext.isPrimitive(array)) {
            array = [array];
        }

        for (var i = 0, len = array.length; i < len; i++) {
            if (fn.call(scope || array[i], array[i], i, array) === false) {
                return i;
            }
        }
    },

    /**
     * Removes all items from the array
     * @param {Array} array Array to clean
     * @return {Array}
     */
    clean: function(array) {
        return (array = []);
    },

    /**
     * Returns true if the given array contains the given item
     * @param {Array} array Array to search in
     * @param {Mixed} item Item to search for
     * @return {Boolean}
     */
    contains: function(array, item) {

        for (var i=0; i<array.length; i++) {
            if (array[i] === item) {
                return true;
            }
        }
        return false;
    },

    /**
     * Removes all items from the specified index + the eraseCount.
     * Returns the erased array.
     * @param {Array} array Array to erase items from
     * @param {Number} startIndex Index to start from
     * @param {Number} eraseCount
     * @return {Array}
     */
    erase: function(array, startIndex, eraseCount) {

        var tempArray = [];
        for (var i=0; i<array.length; i++) {

            if (i===startIndex || i<(startIndex+eraseCount)) {
                // Omit
            } else {
                tempArray.push(tempArray[i]);
            }
        }

        // Replace array by temporary
        array = tempArray;

        return array;
    },



    difference: function(array1, array2) {

    },

    /**
     * Filters an array by a given comparator function.
     * Returns a new array holding the matching values.
     * @param {Array} array Array to filter
     * @param {Function} comparatorFn Comparator function (first parameter is value)
     * @param {Object} [scope=array] (optional) Scope of the comparator function execution
     * @return {Array}
     */
    filterBy: function(array, comparatorFn, scope) {

        if (typeof array.filter !== 'function') {

            var ar = [], filterResult;
            for (var i=0; i<array.length; i++) {

                filterResult = comparatorFn.apply(scope || array, array[i]);

                if (filterResult) {
                    ar.push(filterResult);
                }
            }
            return ar;

        } else {
            return array.filter(comparatorFn, scope || array);
        }
    },

    /**
     * Filters an array by a given value, the operator
     * @param array
     * @param value
     * @param property
     * @param operator
     */
    filter: function(array, value, property, operator) {

    },

    /**
     * Flattens an array - returns a plain value array from
     * an object array given. The valueProperty parameter specifies,
     * which property should be used as value property. This can
     * either be a property name or JSON-path.
     * @param {Array} array Array to flatten
     * @param {String} [property=value] (optional) Object property name
     * @return {Array}
     */
    flatten: function(array, property) {

        if (!property) {
            property = 'value';
        }

        var extractor = Ext.Object.generatePropertyExtractor(property),
            value = null, ar = [];

        for (var i=0; i<array.length; i++) {

            value = array[i];

            if (Ext.isObject(value)) {
                value = extractor(value);
            }
            ar.push(value);
        }
        return ar;
    },

    from: function(value, cloneIfArray) {

    },

    include: function(array, item) {

    },

    /**
     *
     * @param array
     * @param index
     * @param items
     */
    insert: function(array, index, items) {

    },

    /**
     * Calls the given function for each array item and returns a new Array
     * consisting of the data the function calls return.
     * @param array
     * @param fn
     * @param scope
     * @return {Array}
     */
    map: function(array, fn, scope) {

        var ar = [];
        for (var i=0; i<array.length; i++) {
            ar.push(fn.apply(scope || array[i], array[i]));
        }
        return ar;
    },

    /**
     * Merges a arbitrary count of arrays
     * @param {Array...} arrays Arrays to merge
     * @return {Array}
     */
    merge: function() {

    },

    /**
     * Merges a arbitrary count of arrays but omits duplicate items
     * @param {Array...} arrays Arrays to merge
     * @return {Array}
     */
    union: function() {

    },

    /**
     * Plucks the value of the property named of each array item from the array
     * @param {Array} array Array to pluck from
     * @param {String} propertyName Property to delete form objects in array
     * @return {Array}
     */
    pluck: function(array, propertyName) {

        for (var i=0; i<array.length; i++) {
            if (array[i] && array[i][propertyName]) {
                delete array[i][propertyName];
            }
        }
        return array;
    },

    /**
     * Pushes an arbitrary count of items on the end of the array given.
     * If an Array is pushed as value, the items of the array get pushed, not the array itself. (Array gets flatten)
     * @param {Array} array Array to push to
     * @param {Mixed} value Value to push
     * @return {Array}
     */
    push: function(array, value) {

        if (Ext.isArray(value)) {

            for (var i=0; i<value.length; i++) {
                array.push(value[i]);
            }
        } else {
            array.push(value);
        }
        return array;
    },

    /**
     * Returns the maximum value of an flat array
     * @param {Array} array Array to fetch maximum value
     * @return {Number}
     */
    max: function(array) {
        return Math.max.apply(Math, array);
    },

    /**
     * Returns the minimum value of an flat array
     * @param {Array} array Array to fetch minimum value
     * @return {Number}
     */
    min: function(array) {
        return Math.min.apply(Math, array);
    },

    /**
     * Removes the specified item from array
     * @param {Array} array Array to remove from
     * @param {Mixed} item Item to remove
     * @return {Array}
     */
    remove: function(array, item) {

        var tempArray = [];
        for (var i=0; i<array.length; i++) {
            if (array[i] !== item) {
                tempArray.push(array[i]);
            }
        }
        array = tempArray;
        return array;
    },

    /**
     * Removes the item at the specified index
     * @param {Array} array Array to remove from
     * @param {Number} index Index to remove at
     * @return {Array}
     */
    removeAt: function(array, index) {

        var tempArray = [];
        for (var i=0; i<array.length; i++) {
            if (i!==index) {
                tempArray.push(array[i]);
            }
        }
        array = tempArray;
        return array;
    },

    /**
     * Replaces an item with another
     * @param {Array} array Array to replace items in
     * @param {Mixed} item1 Item to be replaced
     * @param {Mixed} item2 Item which replaces item1
     * @return {Array}
     */
    replace: function(array, item1, item2) {

        for (var i=0; i<array.length; i++) {
            if (array[i] === item1) {
                array[i] = item2;
            }
        }
        return array;
    },

    /**
     * Returns an object for an array given.
     * By default, this method returns an object holding index -> value association data.
     * But you can specify property names/JSON-path for key and value to be filled customized
     * when array items are objects.
     * @param {Array} array Array to transform
     * @param {String} keyProperty (optional) Name or JSON-path to the key property in the array items
     * @param {String} valueProperty (optional) Name or JSON-path to the value property in the array items
     * @return {Object}
     */
    toObject: function(array, keyProperty, valueProperty) {

        var o = {},
            keyExtractor = Ext.Object.generatePropertyExtractor(keyProperty),
            valueExtractor = Ext.Object.generatePropertyExtractor(valueProperty),
            key = null,
            value = null;

        for (var i=0; i<array.length; i++) {

            if (Ext.isObject(array[i]) && keyProperty) {
                key = keyExtractor(array[i]);
            } else {
                key = i;
            }

            if (Ext.isObject(array[i]) && valueProperty) {
                value = valueExtractor(array[i]);
            } else {
                value = array[i];
            }
            o[key] = value;
        }
        return o;
    },

    /**
     * Returns a collection for an array given
     * @param {Array} array Array to fetch a collection for
     * @return {Ext.Collection}
     */
    toCollection: function(array) {
        return new Ext.Collection(array);
    },

    /**
     * Converts any iterable (numeric indices and a length property) into a true array
     * Don't use this on strings. For strings, use this instead:
     *
     * @param {Mixed} input Any type to be casted as Array
     * @param {Boolean} [flatten=false] (optional) Indicator if a flat array without keys should be returned
     * @return {Array}
     */
    from: function(input, flatten) {

        if (Ext.isObject(input)) {
            return Ext.Object.toArray(input, flatten);
        } else if (Ext.isArray(input)) {
            return input;
        } else if (Ext.isString(input)) {
            return Ext.String.toArray(input);
        } else if (Ext.isMap(input)) {
            return input.toArray(flatten);
        } else if (Ext.isCollection(input)) {
            return input.toArray(flatten);
        } else {
            return [input];
        }
    },

    /**
     * Sorts an Array's (1-dimensional) plain values
     * @param {Array} array Array to be sorted by object property
     * @param {String} [direction=ASC] (optional) Direction to sort to
     * @return {Array}
     */
    sort: function(array, direction) {
        array.sort(Ext.generateSortComparator(direction));
        return array;
    },

    /**
     * Sorts an Array by a property when the Array consists of Object items.
     *
     *     var ar = [{vorname: 'Aron'}, {vorname: 'Andre'}, {vorname: 'Bernd'}];
     *     Ext.Array.sortByProperty(ar, 'vorname', 'DESC');
     *
     * Sorting of deeply-structured data is also possible:
     *
     *     var ar = [{foo: [{bar: 123}]}, {foo: [{bar: 345}]}, {foo: [{bar: 789}]}];
     *     Ext.Array.sortByProperty(ar, 'foo.0.bar', 'DESC');
     *
     * If you want to accomplish multi-property sorting, try Ext.toCollection(ar).sort(...)!
     *
     * @param {Array} array Array to be sorted by object property
     * @param {String} [direction=ASC] (optional) Direction to sort to
     * @param {String} [property=plain array item] (optional) Name/Path of the object property to be sorted
     * @return {Array}
     */
    sortByProperty: function(array, direction, property) {
        array.sort(Ext.generateSortComparator(direction, property));
        return array;
    },

    /**
     * Sorts an Array by a custom comparator function as seen here:
     *
     *     var ar = [
     *         {objs: [{name: 'Group 1'}, {count: 12}]},
     *         {objs: [{name: 'Group 2'}, {count: 200}]},
     *         {objs: [{name: 'Group 3'}, {count: 300}]}
     *     ];
     *
     *     Ext.Array.sortBy(ar, function(value1, value2) {
     *         // DESC; for ASC use compare() instead of compareInverted()!
     *         return Ext.util.Comparator.compareInverted(
     *             value1['objs'][0]['name'],
     *             value2['objs'][0]['name']
     *         );
     *     });
     *
     * @param {Array} array Array to sort
     * @param {Function} comparatorFn Comparator function to use.
     * @return {Array}
     */
    sortBy: function(array, comparatorFn) {
        array.sort(comparatorFn);
        return array;
    }
};

// Shortcuts
Ext.toArray = Ext.Array.from;
Ext.toCollection = Ext.Array.toCollection;;/**
 * @class Ext.util.JSON
 * @extends Object
 * @singleton
 *
 * Modified version of Douglas Crockford's json.js (http://www.json.org/js.html),
 * extended version of Ext Core 3.1's Ext.util JSON class.
 */
Ext.util.JSON = {

    /**
     * Decodes/evals a given JSON text
     * @param {String} json JSON text
     * @return {Object}
     * @private
     */
    _decode: function (json) {
        return eval("(" + json + ')');
    },

    /**
     * Encodes a given data structure
     * @param {Object} o Object-like data structure type
     * @return {String}
     * @private
     */
    _encode: function (o) {
        if (!Ext.isDefined(o) || o === null) {
            return "null";
        } else if (Ext.isArray(o)) {
            return Ext.Array.encode(o);
        } else if (Ext.isDate(o)) {
            return Ext.Date.encode(o);
        } else if (Ext.isString(o)) {
            return Ext.String.encode(o);
        } else if (typeof o === "number") {
            //don't use isNumber here, since finite checks happen inside isNumber
            return isFinite(o) ? new String(o) : "null";
        } else if (Ext.isBoolean(o)) {
            return new String(o);
        } else {
            var a = ["{"], b, i, v;
            for (i in o) {
                // don't encode DOM objects
                if (!o.getElementsByTagName) {
                    if (!Ext.supports.objectHasOwnProperty || o.hasOwnProperty(i)) {
                        v = o[i];
                        switch (typeof v) {
                            case "undefined":
                            case "function":
                            case "unknown":
                                break;
                            default:
                                if (b) {
                                    a.push(',');
                                }
                                a.push(Ext.util.JSON._encode(i), ":",
                                    v === null ? "null" : Ext.util.JSON._encode(v));
                                b = true;
                        }
                    }
                }
            }
            a.push("}");
            return a.join("");
        }
    },

    /**
     * Encodes an Object, Array or other value
     * @param {Mixed} o The variable to encode
     * @return {String} The JSON string
     */
    encode: function (o) {
        var encodeFn = JSON ? JSON.stringify : Ext.util.JSON._encode;
        return encodeFn(o);
    },

    /**
     * Decodes (parses) a JSON string to an object. If the JSON is invalid, this function throws a SyntaxError unless the safe option is set.
     * @param {String} json The JSON string
     * @return {Object} The resulting object
     */
    decode: function (json) {
        var decodeFn = JSON ? JSON.parse : Ext.util.JSON._decode;
        return decodeFn(json);
    }
};

/**
 * Shorthand for {@link Ext.util.JSON#encode}
 * @param {Mixed} o The variable to encode
 * @return {String} The JSON string
 * @member Ext
 * @method encode
 */
Ext.encode = Ext.util.JSON.encode;
Ext.toJSON = Ext.util.JSON.encode;

/**
 * Shorthand for {@link Ext.util.JSON#decode}
 * @param {String} json The JSON string
 * @param {Boolean} safe (optional) Whether to return null or throw an exception if the JSON is invalid.
 * @return {Object} The resulting object
 * @member Ext
 * @method decode
 */
Ext.decode = Ext.util.JSON.decode;
Ext.fromJSON = Ext.util.JSON.decode;;/**
 * @class Ext.URL
 * @extends Object
 * @singleton
 * Class for working with URL's.
 */
Ext.URL = {

    /**
     * Appends content to the query string of a URL, handling logic for whether to place
     * a question mark or ampersand.
     * @param {String} url The URL to append to.
     * @param {String} string The content to append to the URL.
     * @return (String) The resulting URL
     */
    append: function (url, string) {
        if (!Ext.isEmpty(string)) {
            return url + (url.indexOf('?') === -1 ? '?' : '&') + string;
        }
        return url;
    },

    /**
     * Takes an object and converts it to an encoded URL. e.g. Ext.urlEncode({foo: 1, bar: 2});
     * would return "foo=1&bar=2". Optionally, property values can be arrays,
     * instead of keys and the resulting string that's returned will contain a name/value pair for each array value.
     * @param {Object} o
     * @param {String} pre (optional) A prefix to add to the url encoded string
     * @return {String}
     */
    encode: function (o, pre) {
        var empty,
            buf = [],
            e = encodeURIComponent;

        Ext.iterate(o, function (key, item) {
            empty = Ext.isEmpty(item);
            Ext.each(empty ? key : item, function (val) {
                buf.push('&', e(key), '=',
                    (!Ext.isEmpty(val) && (val !== key || !empty)) ? (Ext.isDate(val) ? Ext.encode(val).replace(/"/g,
                        '') : e(val)) : '');
            });
        });
        if (!pre) {
            buf.shift();
            pre = '';
        }
        return pre + buf.join('');
    },

    /**
     * Takes an encoded URL and and converts it to an object. Example: <pre><code>
     Ext.urlDecode("foo=1&bar=2"); // returns {foo: "1", bar: "2"}
     Ext.urlDecode("foo=1&bar=2&bar=3&bar=4", false); // returns {foo: "1", bar: ["2", "3", "4"]}
     </code></pre>
     * @param {String} string
     * @param {Boolean} overwrite (optional) Items of the same name will overwrite previous values instead of creating an an array (Defaults to false).
     * @return {Object} A literal with members
     */
    decode: function (string, overwrite) {
        if (Ext.isEmpty(string)) {
            return {};
        }
        var obj = {},
            pairs = string.split('&'),
            d = decodeURIComponent,
            name,
            value;
        Ext.each(pairs, function (pair) {
            pair = pair.split('=');
            name = d(pair[0]);
            value = d(pair[1]);
            obj[name] = overwrite || !obj[name] ? value :
                [].concat(obj[name]).concat(value);
        });
        return obj;
    },

    /**
     * TODO
     * @param queryString
     */
    objectFromQueryString: function(queryString) {

    },

    /**
     * TODO
     * @param objects
     * @param recursive
     */
    toQueryObjects: function(objects, recursive) {

    },

    /**
     * TODO
     * Returns a query string URL
     * @param objects
     */
    toQueryString: function(objects, recursive) {

    }
};

// Shortcuts
Ext.urlEncode = Ext.URL.encode;
Ext.urlDecode = Ext.URL.decode;
Ext.urlAppend = Ext.URL.append;;/**
 * @class Ext.Loader
 * @extends Object
 * @singleton
 *
 * ATTENTION: You cannot load libraries outside of the app/lib folder when using Alloy.
 * 
 * Loader class that implements a wrapper for the require.js library.
 */
Ext.Loader = {


    /**
     * Runtime-based classloader history
     */
    history: [],

    /**
     * Paths specification map (namespace -> file path)
     */
    paths: {
        /* e.g.:
         * 'Ext.util': 'core/ext/util'
         */
    },

    /**
     * Flag if dynamic class loading is enabled or not
     */
    enabled: false,

    /**
     * Base directory to load source files from
     */
    baseDir: '',

    /**
     * Method which loads class(es) asynchronously in sequence.
     *
     * Loading classes in sequence allows dead simple requirement resolution.
     * (Because dynamic class loading is meant to be used in dev-mode only
     * and one should concatenate/build JS projects for production in a single file,
     * this even doesn't result in a performance issue caused by the lack of
     * parallel async.
     *
     * @param {String|Array} cls Class(es) name specification
     * @param {Function} cb Callback to call when loading of class(es) is done
     * @return {Ext.Loader}
     */
    require: function (cls, cb) {

		var ref;
		
        if (!Ext.Loader.enabled) {
            throw "Dynamic class loader isn't enabled. So the class: " + cls +
                " couldn't be loaded dynamically. Just call Ext.Loader.enable({/*Optional config*/}) to enable it.";
        }

        if (Ext.isArray(cls)) {

            // Require classes in sequence
            Ext.Loader._requireSequencial(cls, cb);

        } else {

            // Log history
            Ext.Loader.history.push(cls);

            // Require the single class and call callback
            ref = require(Ext.Loader._classNameToFilePath(cls));
            
            // Call module and provide callback to call
            if (ref && (ref instanceof Function)) {
            	ref(cb);
            } else {
	            // Call callback if return value is not a promise function
	            if (cb && (cb instanceof Function)) {
	            	cb(ref);
	            }
            }
        }
        return this;
    },

    /**
     * Helper method to require classes async-sequencially.
     *
     * @param {Array} classes Class names to load
     * @param {Function} cb Callback to call finally
     * @private
     */
    _requireSequencial: function (classes, cb) {

        var me = Ext.Loader, ref, idx = 0, maxIdx = classes.length - 1,
            callRequireInSequence = function (idx) {

                // Log history
                me.history.push(classes[idx]);

                ref = require(me._classNameToFilePath(classes[idx]));
                
                // Call module and provide global scope reference
                if (ref && (ref instanceof Function)) {
                	ref(Ext);
                }
                
                if (idx < maxIdx) {
                    idx++;
                    callRequireInSequence(idx);
                } else {
                	if (cb && (cb instanceof Function)) {
                   		cb(ref);
                   	}
                }
            };

        callRequireInSequence(idx);
    },

    /**
     * Resolves a class name to a file path
     *
     * @param {String} className Class name to transform
     * @return {String}
     * @private
     */
    _classNameToFilePath: function (className) {

        // Walk all namespaces and map to paths
        for (var namespace in Ext.Loader.paths) {

            // Class name begins with namespace name
            if (className.indexOf(namespace) === 0) {

                className = className.replace(namespace, Ext.Loader.paths[namespace]);
            }
        }

        // Prepend base directory path, concatenate namespace-replaced
        // className and replace dots by slashes
        className = Ext.Loader.baseDir + (className.replace(/\./g, '/'));

        Ext.log('Loading class dynamically: ' + className)

        return className;
    },

    /**
     * Enables the class loader using a configuration
     *
     * @param {Object} cfg Loader configuration like {
     *     baseDir: '../',
     *     paths: {
     *         'Ext.util': 'core/ext/util'
     *     }
     * }
     * Ext.Loader.require('Ext.util.Sample') would result
     * in a load of ../core/ext/util/Sample.js.
     *
     * Note that the baseDir property will only be prepended
     * as a string to each path configuration.
     *
     * @return {Ext.Loader}
     */
    enable: function (cfg) {

        this.enabled = true;

        // Set config if given
        if (cfg) {
            Ext.Loader.setConfig(cfg);
        }
        return this;
    },

    /**
     * Changes the class loader configuration
     *
     * @param {Object} cfg Loader configuration like {
     *     baseDir: '../',
     *     paths: {
     *         'Ext.util': 'core/ext/util'
     *     }
     * }
     * Ext.Loader.require('Ext.util.Sample') would result
     * in a load of ../core/ext/util/Sample.js.
     *
     * Note that the baseDir property will only be prepended
     * as a string to each path configuration.
     *
     * @return {Ext.Loader}
     */
    setConfig: function (cfg) {

        if (cfg.paths) {
            Ext.apply(Ext.Loader.paths, cfg.paths);
        }

        if (cfg.baseDir) {
            Ext.Loader.baseDir = cfg.baseDir;
        }
        return this;
    }
};

// Assign shortcut
Ext.require = Ext.Loader.require;
Ext.include = Ext.Loader.require;;/**
 * @class Ext.Interface
 * @extends Object
 * @private
 *
 * Simple interface implementation. Allows class specifications to be compared with a
 * defined interface and the definition of those interfaces. Currently only checks
 * member existence, not the type/class inheritance of members but this could be
 * implemented easily.
 */
Ext.Interface = {

    /**
     * @property {String} STRING
     * String data type definition for class member interface checks
     * @readonly
     */
    STRING: 'string',

    /**
     * @property {String} FUNCTION
     * Function data type definition for class member interface checks
     * @readonly
     */
    FUNCTION: 'function',

    /**
     * @property {String} BOOLEAN
     * Boolean data type definition for class member interface checks
     * @readonly
     */
    BOOLEAN: 'boolean',

    /**
     * @property {String} NUMBER
     * Number data type definition for class member interface checks
     * @readonly
     */
    NUMBER: 'number',

    /**
     * @property {String} OBJECT
     * Object data type definition for class member interface checks
     * @readonly
     */
    OBJECT: 'object',

    /**
     * @property {String} PRESENCE
     * Presence data type definition for class member interface checks
     * @readonly
     */
    PRESENCE: 'presence',

    /**
     * Defines an interface (to be implemented by classes)
     *
     * @param {String} name Interface name
     * @param {Object} def Interface definition
     * @return {Ext.Interface}
     */
    define: function(name, def) {

        if (Ext.isObject(def)) {
            Ext.Interfaces[name] = def;
        }
        return Ext.Interface;
    },

    /**
     * Checks a given class prototype definition against an
     * interface named inside of the prototype itself ('implement'-property).
     *
     * @param {String} clsName Name of the class to check
     * @param {Object} p Class prototype definition to check
     * @return {Boolean}
     */
    check: function(clsName, p) {

        var iface = null,
            lastFail = false;

        // Fetch interface
        if (p.implement) {

            iface = Ext.Interfaces[p.implement];

            if (!iface) {
                throw "Interface '" + p.implement + "' doesn't exist but is required by class: '" + clsName + "'!";
            }

            // Simple member existence by name check
            for (var iPropName in iface) {

                // Presence-check
                if (!p[iPropName]) {
                    lastFail = Ext.Interface.PRESENCE;
                } else {

                    if (!iface[iPropName]) {

                        throw "The type for class member '" + iPropName + "' specified in interface '" +
                              p.implement + "' is not defined!";
                    }

                    // Check
                    switch (iface[iPropName]) {

                        case Ext.Interface.STRING:
                            if (typeof p[iPropName] !== "string") {
                                lastFail = Ext.Interface.STRING;
                            }
                            break;

                        case Ext.Interface.BOOLEAN:
                            if (typeof p[iPropName] !== "boolean") {
                                lastFail = Ext.Interface.BOOLEAN;
                            }
                            break;

                        case Ext.Interface.NUMBER:
                            if (typeof p[iPropName] !== "number") {
                                lastFail = Ext.Interface.NUMBER;
                            }
                            break;

                        case Ext.Interface.FUNCTION:
                            if (typeof p[iPropName] !== "function") {
                                lastFail = Ext.Interface.FUNCTION;
                            }
                            break;

                        case Ext.Interface.OBJECT:
                            if (typeof p[iPropName] !== "object") {
                                lastFail = Ext.Interface.OBJECT;
                            }
                            break;
                    }
                }

                if (lastFail) {

                    if (lastFail === Ext.Interface.PRESENCE) {

                        throw "Class member '" + iPropName + "' is not a member of class '" + clsName +
                              "' but interface '" + p.implement + "' requires it's implementation!";
                    } else {

                        throw "Class member '" + iPropName + "' of class '" + clsName + "' has wrong type. It's '" +
                              typeof p[iPropName] + "' but interface '" + p.implement + "' requires: '" + lastFail + "'!";
                    }
                }
            }
            return true;

        } else {

            // No interface reference found, that's valid!
            return true;
        }
    }
};

// Init global interfaces map
Ext.Interfaces = {};

/**
 * Defines an interface (to be implemented by classes)
 *
 * @member Ext
 * @method defineInterface
 * @param {String} name Interface name
 * @param {Object} def Interface definition
 * @return {Ext.Interface}
 */
Ext.defineInterface = Ext.Interface.define;;/**
 * @class Ext.ClassManager
 * @extends Object
 *
 * Implements the central API for OOP-style JavaScript programming, multiple inheritance and more advanced stuff.
 */
Ext.ClassManager = {

    /**
     * @property {Array} instances
     * Class instances already created
     * @readonly
     */
    instances: [],

    /**
     * Extends one class to create a subclass and optionally overrides members with the passed literal.
     *
     * @param {String|Function} superclass The constructor of class being extended
     * @param {String|Object} Class member object
     * @param {Object} overrides <p>A literal with members which are copied into the subclass's
     * prototype, and are therefore shared between all instances of the new class.</p>
     * <p>This may contain a special member named <tt><b>constructor</b></tt>. This is used
     * to define the constructor of the new class, and is returned. If this property is
     * <i>not</i> specified, a constructor is generated and returned which just calls the
     * superclass's constructor passing on its parameters.</p>
     * <p><b>It is essential that you call the superclass constructor in any provided constructor. See example code.</b></p>
     * @return {Function} The subclass constructor from the <code>overrides</code> parameter, or a generated one if not provided.
     */
    extend: (function () {

        var io = function (o) {
            for (var m in o) {
                if (this) {
                    this[m] = o[m];
                }
            }
        };
        var oc = Object.prototype.constructor;

        return function (superclass, subclass, overrides) {


            // If sb or sp is undefined
            if (!Ext.isDefined(superclass) || !Ext.isDefined(subclass)) {
                return null;
            }

            // Resolve string superclass name
            if (Ext.isString(superclass)) {
                superclass = Ext.resolveNamespace(superclass);
            }

            // Resolve string subclass name
            if (Ext.isString(subclass)) {
                subclass = Ext.resolveNamespace(subclass);
            }

            if (Ext.isObject(subclass)) {

                overrides = subclass;
                subclass = superclass;

                if (overrides.$constructor) {
                    superclass = overrides.$constructor;
                } else if (overrides.constructor !== oc) {
                    superclass = overrides.constructor;
                } else {
                    superclass = function () {
                        subclass.apply(this, arguments);
                    };
                }

                var F = function () {
                    },
                    superclassPrototype,
                    subclassPrototype = subclass.prototype;

                F.prototype = subclassPrototype;
                superclassPrototype = superclass.prototype = new F();
                superclassPrototype.constructor = superclass;

                superclassPrototype.override = io;

                Ext.override(superclass, overrides);

                return superclass;
            }
        };
    }()),

    /**
     * Defines a class prototype in Ext JS 4-style.
     *
     * Currently supported:
     * - singleton
     * - extend
     * - statics
     * - mixins (multiple inheritance)
     * - implicit naming (given string name references class constructor function)
     * - callback after define
     * - alternateClassName name
     * - auto dependency check -> but no autoloading! (antipattern!)
     *
     *  Example of old style Ext JS 3 (also works):
     *
     *  var lala = Ext.extend(Object, {
     *    muah1: true
     *  });
     *  new lala();
     *
     *  // You can now use:
     *
     *  Ext.define("lulu", {
     *     haha: 15
     *  });
     *
     *  Ext.define("lala2.lala", {
     *      implement: 'InterfaceSmth',
     *      muah: false,
     *      extend: 'lala',
     *      mixins: ['lulu'],
     *      statics: {
     *          uha: true
     *      },
     *      alternateClassName: 'another.classname',
     *      singleton: true
     *  }, function(classRef) {
     *      console.debug('yeah, class was defined!');
     *  });
     *
     *  Ext.log(another.classname);
     *
     * @param {String} className Name of the class (even with namespaces)
     * @param {Object} classDef Class definition
     * @param {Function} callback Callback function called when class is defined
     * @return {Function} Class proto constructor function
     */
    define: function () {

        var nameOfClass = arguments[0],
            classDef = arguments[1],
            cb = arguments[2],
            superClassRef = Object,
            ClsCtor;

        // Anonymous inner function to manage the class defining
        var defineFn = function () {

            // Manage class extension and return super class prototype reference
            superClassRef = Ext.ClassManager._manageExtending(classDef, nameOfClass);

            // Handle multiple inheritance, mixins
            classDef = Ext.ClassManager._manageMixing(classDef, nameOfClass);

            // Annotate the method name to any function
            // to allow callParent() to know their names.
            for (var mName in classDef) {

                if (Ext.isFunction(classDef[mName])) {

                    //console.debug("Annotating", classDef[mName], mName);
                    classDef[mName]['$name'] = mName;
                }
            }

            // Extend the extending class of object
            ClsCtor = Ext.extend(superClassRef, classDef);

            // Annotate the superclass on instance level
            ClsCtor.prototype['$superclass'] = superClassRef;
            ClsCtor.prototype['$name'] = nameOfClass;

            // Set debug point for WebKit-based browsers / debuggers
            ClsCtor.$className = nameOfClass;

            if (ClsCtor == null) {
                throw "The class definition of class named " + nameOfClass +
                    " failed. Maybe the inheritance function references are undefined.";
            }

            // Append statics to the prototype
            ClsCtor = Ext.ClassManager._manageStatics(classDef, ClsCtor);

            // If singleton, instantiate
            if (Ext.isDefined(classDef.singleton) &&
                classDef.singleton == true) {

                // Executing this results in a bad naming of the variable.
                // After executing, there is an instance reference stored in clsCtor.
                ClsCtor = new ClsCtor();
            }

            // Reference the given class name with the proto
            Ext.assignNamespace(nameOfClass, ClsCtor);

            // Manage alternate class names
            Ext.ClassManager._manageAlternateClassNames(classDef, ClsCtor);

            // Check interface implementation (throws error if not valid impl.)
            Ext.Interface.check(nameOfClass, classDef);

            // Call after-create callback function
            if (cb) {
                cb(ClsCtor);
            }

            // Return reference to class proto constructor
            return ClsCtor;
        };

        if (!Ext.isDefined(nameOfClass)) {
            throw "Error: Please specify a class name when using Ext.define()!";
        }

        if (!Ext.isDefined(classDef)) {

            throw "Error: Please provide a class definition object for class '" +
                nameOfClass + "' when using Ext.define()!";
        }

        // Dereference extend class
        if (!Ext.isDefined(classDef.extend)) {
            classDef.extend = 'Ext.Class';
        }

        if (Ext.Loader.enabled) {

            // Auto-load required classes, then define the class
            Ext.ClassManager._loadRequiredClasses(classDef, defineFn);

        } else {
            return defineFn();
        }
    },

    /**
     * Assigns alternate names to a class
     * @param {Object} classDef Prototype class definition
     * @param {Function} clsCtor Class constructor function
     * @return void
     * @private
     */
    _manageAlternateClassNames: function (classDef, clsCtor) {

        // Assign alternateClassName name if given
        if (Ext.isDefined(classDef.alternateClassName)) {

            // Assign more than one alternateClassName
            if (Ext.isArray(classDef.alternateClassName)) {

                for (var i = 0; i < classDef.alternateClassName.length; i++) {
                    Ext.assignNamespace(classDef.alternateClassName[i], clsCtor);
                }
            }

            // Assign one alternateClassName
            if (Ext.isString(classDef.alternateClassName)) {
                Ext.assignNamespace(classDef.alternateClassName, clsCtor);
            }
        }
    },

    /**
     * Manages class extension; returns the reference to the superclass.
     *
     * @param {Object} classDef Class definition object (prototype)
     * @param {String} nameOfClass Name of the class
     * @return {Function}
     * @private
     */
    _manageExtending: function (classDef, nameOfClass) {

        var superClassRef;

        if (Ext.isDefined(classDef.extend)) {

            var clsNotPresentErr = "Error: The class '" + classDef.extend +
                "' the class '" + nameOfClass + "' should extend from isn't present.";
            try {
            	// e.g. classDef.extend === "Object", then it's not contained in Ext GLOBAL in pre-init() state
                superClassRef = eval("(Ext.GLOBAL." + classDef.extend + "||" + classDef.extend + ")");

                if (!Ext.isDefined(superClassRef)) {
                    throw clsNotPresentErr;
                }

            } catch (e) {
                throw clsNotPresentErr;
            }
        }
        return superClassRef;
    },

    /**
     * Manages class extension by multiple inheritance; returns the modified class prototype
     *
     * @param {Object} classDef Class definition object (prototype)
     * @param {String} nameOfClass Name of the class
     * @return {Object}
     * @private
     */
    _manageMixing: function (classDef, nameOfClass) {

        var currentMixRef, mixinClone;

        // Alias to even support 'uses'-syntax
        if (classDef.uses) {
            classDef.mixins = classDef.uses;
        }

        // Handle multiple inheritance, mixins
        if (Ext.isDefined(classDef.mixins) && Ext.isObject(classDef.mixins)) {

            for (var mixinLocalRefName in classDef.mixins) {

                try {

                    currentMixRef = eval("(Ext.GLOBAL." + classDef.mixins[mixinLocalRefName] + ")");

                } catch (e) {

                    throw "Error: The class '" + classDef.mixins[mixinLocalRefName] +
                        "' you want to mixin in '" + nameOfClass + "' is not present.";
                }

                // Apply prototype objects of mixins onto classDef by native order
                if (Ext.isDefined(currentMixRef) && Ext.isFunction(currentMixRef)) {

                    mixinClone = Ext.clone(currentMixRef.prototype);
                    delete mixinClone.constructor;

                    // Reference the prototype object of the mixin on it's local inner-mixin property name
                    classDef.mixins[mixinLocalRefName] = mixinClone;

                    // Apply prototype of mixin onto class
                    Ext.apply(classDef, mixinClone);
                }
            }

            for (var i = 0; i < classDef.mixins.length; i++) {

                try {
                    currentMixRef = eval("(Ext.GLOBAL." + classDef.mixins[i] + ")");
                } catch (e) {

                    throw "Error: The class '" + classDef.mixins[i] +
                        "' you want to mixin in '" + nameOfClass + "' is not present.";
                }
            }
        }
        return classDef;
    },

    /**
     * Assigns the statics onto the class constructor
     *
     * @param {Object} classDef Class definition prototype object
     * @param {Function} clsCtor Class constructor function
     * @return {Function}
     * @private
     */
    _manageStatics: function (classDef, clsCtor) {

        var superProto = clsCtor.prototype['$superclass'].prototype,
            name;

        if (superProto.statics) {

            for (name in superProto.statics) {
                clsCtor[name] = Ext.Function.bind(superProto.statics[name], clsCtor.prototype);
            }
        }

        // Apply all statics statically
        for (name in classDef.statics) {

            // Bind the class def to the static methods so they can even work
            // with this.* on constructor function level
            clsCtor[name] = Ext.Function.bind(classDef.statics[name], clsCtor.prototype);
        }
        return clsCtor;
    },

    /**
     * Collects the classes to be loaded dynamically and
     * calls the Ext.Loader to load them. Afterwards
     * @param classDef
     * @param cb
     * @private
     */
    _loadRequiredClasses: function (classDef, cb) {

        //console.debug('_loadRequiredClasses', classDef);

        var classesToLoad = [];

        if (classDef.requires && Ext.isArray(classDef.requires)) {

            // Load required classes
            for (var i = 0; i < classDef.requires.length; i++) {
                classesToLoad.push(classDef.requires[i]);
            }
        }

        // Load extending class
        if (classDef.extend && !Ext.resolveNamespace(classDef.extend)) {
            classesToLoad.push(classDef.extend);
        }

        // Load interface
        if (classDef.implement && !Ext.resolveNamespace(classDef.implement)) {
            classesToLoad.push(classDef.implement);
        }

        // Load mixin classes which are not already loaded
        if (classDef.mixins && Ext.isObject(classDef.mixins)) {

            for (var mixinPropName in classDef.mixins) {

                if (!Ext.resolveNamespace(classDef.mixins[mixinPropName])) {
                    classesToLoad.push(classDef.mixins[mixinPropName]);
                }
            }
        }

        if (classesToLoad.length > 0) {

            try {

                Ext.require(classesToLoad, cb);

            } catch (e) {

                throw "Class cannot be defined because of requires, mixins or extend class(es) couldn't be loaded.";
            }

        } else {
            cb();
        }
    },

    /**
     * Resolves a namespace and returns it's object reference.
     * Creates empty namespaces if not existing until the last
     * namespace/class name.
     *
     * @param {String} name Namespace name
     * @param {Boolean} fetchLastExistingScope If true, the method never returns undefined,
     * it creates namespaces when not existing until the last
     * @return {Mixed}
     */
    resolveNamespace: function (name, fetchLastExistingScope) {

        var scope,
            splits = name.split("."),
            len = splits.length;

        // Resolving from global or native type
        if (len === 1) {
        	
        	console.log('Namespace resolution with one part!');

            try {
                scope = eval("(Ext.GLOBAL." + name + ")");
            } catch (e) {
            	
                // scope is undefined, return global scope
                return Ext.GLOBAL;

            }
            return scope;

        } else {
        	
        	console.log('Namespace resolution with more parts.');
        	
            scope = Ext.GLOBAL[splits[0]] = Ext.GLOBAL[splits[0]] || {};
        }

        var splitIter = 1;
        Ext.each(splits.slice(1), function (nameSplit) {

            splitIter++;

            if (len === splitIter) {

                if (fetchLastExistingScope && !scope[nameSplit]) {
                    return scope;
                }
                scope = scope[nameSplit];
            } else {
                scope = scope[nameSplit] = scope[nameSplit] || {};
            }
        });
        return scope;
    },

    /**
     * Returns the class name from a given namespace (last sibling)
     *
     * @param {String} name Namespace name
     * @return {String}
     */
    getClassnameOfNamespace: function (name) {

        var nameSplit = name.split('.');
        return nameSplit[nameSplit.length - 1];
    },

    /**
     * Assigns the given reference on a resolved class namespace.
     *
     * @param {String} name Namespace name
     * @param {Mixed} ref Whatever to assign
     * @return {Mixed}
     */
    assignNamespace: function (name, ref) {

        var ns = Ext.resolveNamespace(name, true);
        ns[Ext.getClassnameOfNamespace(name)] = ref;
    },

    /**
     * Creates an instance of the named class with an instance overlay to use.
     *
     * @param {String} className Name of the class (even with namespaces)
     * @param {Object} instOverlay Overlay configuration for the instance
     * @return {Object} Class instance
     */
    create: function(className, instOverlay, cb) {

        var ret,
            p = Ext.ClassManager.resolveNamespace(className);

        if (!instOverlay) {
            instOverlay = {};
        }

        var instanciate = function (P) {

            var inst = null;
            if (Ext.isArray(instOverlay)) {

                // Somewhat crazy construction to call a class constructor
                // with more than one argument at once in target instance scope
                var Cfn = function() {
                    Cfn.prototype.constructor.apply(this, instOverlay);
                };
                Cfn.prototype = P.prototype;
                inst = new Cfn;

            } else {
                inst = new P(instOverlay);
            }

            // Reflection/Inspection info
            inst.$className = className;

            if (cb) {
                cb(inst);
            }
            return inst;
        };

        if (!Ext.isFunction(p)) {

            try {

                Ext.require(className, function () {

                    var p = Ext.ClassManager.resolveNamespace(className);
                    ret = instanciate(p);
                });

            } catch (e) {
                throw e;
            }
        } else {
            ret = instanciate(p);
        }
        return ret;
    },

    /**
     * Adds a list of functions to the prototype of an existing class,
     * overwriting any existing methods with the same name.
     * Usage:<pre><code>
     Ext.override(MyClass, {
     newMethod1: function(){
     // etc.
     },
     newMethod2: function(foo){
     // etc.
     }
     });
     </code></pre>
     * Note: The method Ext.ClassManager.addMembers() is an alias method of this method.
     *
     * @param {Object|String} origclass The class to override
     * @param {Object} overrides The list of functions to add to origClass.
     * This should be specified as an object literal containing one or more methods.
     * @method override
     */
    override: function (origclass, overrides) {

        var origClassName = origclass;
        if (Ext.isString(origclass)) {
            origclass = Ext.resolveNamespace(origclass);
        }

        if (!origclass) {
            throw "The class " + origClassName + " meant to be overridden is not defined.";
        }

        if (overrides) {

            var p = origclass.prototype;

            p.$overridden = {};

            for (var overridePropName in overrides) {

                if (overrides[overridePropName]) {

                    //console.debug('overriding', overridePropName, ' in ', origclass);

                    if (Ext.isFunction(overrides[overridePropName])) {
                        overrides[overridePropName]['$name'] = overridePropName;
                    }

                    p.$overridden[overridePropName] = Ext.clone(p[overridePropName]);
                    p[overridePropName] = overrides[overridePropName];
                }
            }
            return p.constructor;
        }
    },

    /**
     * Adds static methods to the class
     *
     * Note: Static members added dynamically in runtime, will not be added to
     * subclasses of this class. Use class inheritance using Ext.define() is needed!
     *
     * @param {Function} clsCtor Class constructor function
     * @param {Object} statics Members of this object will be added as statics
     * @return {Ext.Class}
     */
    addStatics: function (clsCtor, statics) {

        Ext.apply(clsCtor, statics);
        return clsCtor;
    },

    /**
     * Creates aliases for existing methods of the prototype
     *
     * @param {Function} clsCtor Class constructor function
     * @param {Object|String} alias Method aliases object or string
     * @param {String} origin (optional)Origin method name
     * @return {Ext.Class}
     */
    addMethodAliases: function (clsCtor, alias, origin) {

        var p = clsCtor.prototype,
            createMethodAlias = function (aliasName, originName) {

                if (!Ext.isString(originName)) {
                    throw 'Cannot create alias method with name ' + aliasName +
                        ', origin function name is not a String: ' + originName;
                }

                if (!p[originName]) {

                    throw 'Cannot create alias method with name ' + aliasName + ', origin function ' + originName +
                        ' of class ' + p.$name + ' is not existing.';
                }

                // Create alias for method
                p[aliasName] = p[originName];
            };

        if (Ext.isObject(alias)) {

            // Create aliases for many methods
            for (var memberAliasName in alias) {
                createMethodAlias(memberAliasName, alias[memberAliasName]);
            }

        } else {

            createMethodAlias(alias, origin);
        }
        return clsCtor;
    },

    /**
     * Creates namespaces to be used for scoping variables and classes so that they are not global.
     * Specifying the last node of a namespace implicitly creates all other nodes. Usage:
     * <pre><code>
     Ext.namespace('Company', 'Company.data');
     Ext.namespace('Company.data'); // equivalent and preferable to above syntax
     Company.Widget = function() { ... }
     Company.data.CustomStore = function(config) { ... }
     </code></pre>
     * @param {String} namespace1
     * @param {String} namespace2
     * @param {String} etc
     * @return {Object}
     * The namespace object. (If multiple arguments are passed, this will be the last namespace created)
     * @method namespace
     */
    namespace: function () {
        var o, d;

        Ext.each(arguments, function (v) {
            d = v.split(".");
            o = window[d[0]] = window[d[0]] || {};
            Ext.each(d.slice(1), function (v2) {
                o = o[v2] = o[v2] || {};
            });
        });
        return o;
    },
    
    /**
     * Finalizes the namespacing by moving Ext.GLOBAL 
     * objet members into the new GLOBAL scope first.
     * Afterwards, the new GLOBAL reference gets referenced
     * into Ext.GLOBAL so that all future namespace definitions
     * are automatically scoped into the real GLOBAL scope.
 	 * @param {Object} GLOBAL New GLOBAL scope object reference
 	 * @return void
     */
    finalizeNamespacing: function(GLOBAL) {
    	
    	// Export Ext into the GLOBAL scope
    	GLOBAL.Ext = Ext;
    	
    	// Apply collected pseudo-global objects 
    	// really into the global scope...
    	Ext.apply(GLOBAL.Ext, Ext.GLOBAL.Ext);
    	
    	// Set internal GLOBAL scope reference
    	Ext.GLOBAL = GLOBAL;
    }
};

// Assign shortcut references
Ext.create = Ext.ClassManager.create;
Ext.extend = Ext.ClassManager.extend;
Ext.assignNamespace = Ext.ClassManager.assignNamespace;
Ext.override = Ext.ClassManager.override;
Ext.ClassManager.addMembers = Ext.ClassManager.override;
Ext.define = Ext.ClassManager.define;
Ext.namespace = Ext.ClassManager.namespace;
Ext.resolveNamespace = Ext.ClassManager.resolveNamespace;
Ext.getClassnameOfNamespace = Ext.ClassManager.getClassnameOfNamespace;
Ext.ns = Ext.ClassManager.namespace;;/**
 * @class Ext.Function
 * @extends Object
 * @singleton
 *
 * Singleton class as helper for working with functions
 */
Ext.Function = {

    /**
     * An empty function
     */
    emptyFn: function () {},

    /**
     * Creates an interceptor function. The passed function is called before the original one. If it returns false,
     * the original one is not called. The resulting function returns the results of the original function.
     * The passed function is called with the parameters of the original function. Example usage:
     * <pre><code>
     var sayHi = function(name){
     alert('Hi, ' + name);
     }

     sayHi('Fred'); // alerts "Hi, Fred"

     // create a new function that validates input without
     // directly modifying the original function:
     var sayHiToFriend = Ext.Function.createInterceptor(sayHi, function(name){
     return name == 'Brian';
     });

     sayHiToFriend('Fred');  // no alert
     sayHiToFriend('Brian'); // alerts "Hi, Brian"
     </code></pre>
     * @param {Function} fn The function to work with
     * @param {Function} fcn The function to call before the original
     * @param {Object} scope (optional) The scope (<code><b>this</b></code> reference) in which the passed function is executed.
     * <b>If omitted, defaults to the scope in which the original function is called or the browser window.</b>
     * @return {Function} The new function
     */
    createInterceptor: function (fn, fcn, scope) {
        var method = fn;
        return !Ext.isFunction(fcn) ?
            this :
            function () {
                var me = this,
                    args = arguments;
                fcn.target = me;
                fcn.method = method;
                return (fcn.apply(scope || me || global, args) !== false) ?
                    method.apply(me || global, args) :
                    null;
            };
    },

    /**
     * Creates a callback that passes arguments[0], arguments[1], arguments[2], ...
     * Call directly on any function. Example: <code>Ext.Function.createCallback(myFunction, arg1, arg2)</code>
     * Will create a function that is bound to those 2 args. <b>If a specific scope is required in the
     * callback, use {@link #createDelegate} instead.</b> The function returned by createCallback always
     * executes in the window scope.
     * <p>This method is required when you want to pass arguments to a callback function.  If no arguments
     * are needed, you can simply pass a reference to the function as a callback (e.g., callback: myFn).
     * However, if you tried to pass a function with arguments (e.g., callback: myFn(arg1, arg2)) the function
     * would simply execute immediately when the code is parsed. Example usage:
     * <pre><code>
     var sayHi = function(name){
     alert('Hi, ' + name);
     }

     // clicking the button alerts "Hi, Fred"
     new Ext.Button({
     text: 'Say Hi',
     renderTo: Ext.getBody(),
     handler: Ext.Function.createCallback(sayHi, 'Fred')
     });
     </code></pre>
     * @param {Function} fn The function to work with
     * @return {Function} The new function
     */
    createCallback: function (fn /*, args...*/) {
        var args = Array.prototype.slice.call(arguments, 1),
            method = fn;
        return function () {
            return method.apply(window, args);
        };
    },

    /**
     * Creates a delegate (callback) that sets the scope to obj.
     * Call directly on any function. Example: <code>this.myFunction.createDelegate(this, [arg1, arg2])</code>
     * Will create a function that is automatically scoped to obj so that the <tt>this</tt> variable inside the
     * callback points to obj. Example usage:
     * <pre><code>
     var sayHi = function(name){
     // Note this use of "this.text" here.  This function expects to
     // execute within a scope that contains a text property.  In this
     // example, the "this" variable is pointing to the btn object that
     // was passed in createDelegate below.
     alert('Hi, ' + name + '. You clicked the "' + this.text + '" button.');
     }

     var btn = new Ext.Button({
     text: 'Say Hi',
     renderTo: Ext.getBody()
     });

     // This callback will execute in the scope of the
     // button instance. Clicking the button alerts
     // "Hi, Fred. You clicked the "Say Hi" button."
     btn.on('click', Ext.Function.createDelegate(sayHi, btn, ['Fred']));
     </code></pre>
     * @param {Function} fn The function to work with
     * @param {Object} scope (optional) The scope (<code><b>this</b></code> reference) in which the function is executed.
     * <b>If omitted, defaults to the browser window.</b>
     * @param {Array} args (optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)
     * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
     * if a number the args are inserted at the specified position
     * @return {Function} The new function
     */
    bind: function (fn, obj, args, appendArgs) {
        var method = fn;
        return function () {
            var callArgs = args || arguments;
            if (appendArgs === true) {
                callArgs = Array.prototype.slice.call(arguments, 0);
                callArgs = callArgs.concat(args);
            } else if (Ext.isNumber(appendArgs)) {
                callArgs = Array.prototype.slice.call(arguments, 0);
                var applyArgs = [appendArgs, 0].concat(args);
                Array.prototype.splice.apply(callArgs, applyArgs);
            }
            return method.apply(obj || window, callArgs);
        };
    },

    /**
     * Calls this function after the number of millseconds specified, optionally in a specific scope. Example usage:
     <pre><code>
     var sayHi = function(name){
     alert('Hi, ' + name);
     }

     // executes immediately:
     sayHi('Fred');

     // executes after 2 seconds:
     Ext.Function.defer(sayHi, 2000, this, ['Fred']);

     // this syntax is sometimes useful for deferring
     // execution of an anonymous function:
     (function(){
     alert('Anonymous');
     }).defer(100);
     </code></pre>
     * @param {Function} fn The function to work with
     * @param {Number} millis The number of milliseconds for the setTimeout call (if less than or equal to 0 the function is executed immediately)
     * @param {Object} scope (optional) The scope (<code><b>this</b></code> reference) in which the function is executed.
     * <b>If omitted, defaults to the browser window.</b>
     * @param {Array} args (optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)
     * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
     * if a number the args are inserted at the specified position
     * @return {Number} The timeout id that can be used with clearTimeout
     */
    defer: function (fn, millis, obj, args, appendArgs) {
        fn = Ext.Function.createDelegate(obj, args, appendArgs);
        if (millis > 0) {
            return setTimeout(fn, millis);
        }
        fn();
        return 0;
    },

    /**
     * Clones a given function
     * @param {Function} fn Function to clone
     * @return {Function}
     */
    clone: function(fn) {
        return function() {
            return fn.apply(this, arguments);
        };
    },

    createBuffered: function(fn, millis, scope, args) {

    },


    createDelayed: function(fn, millis, scope, args) {

    },

    createThrottled: function(fn, milliInterval, scope) {

    },

    interceptAfter: function(object, methodName, fn, scope) {

    },

    interceptBefore: function(object, methodName, fn, scope) {

    },

    pass: function(fn, args, scope) {

    },

    /**
     * Creates a new function from given code and returns it's reference
     * @param code
     */
    create: function(code) {
        return Function(code);
    }
};

// Assign shortcut functions
Ext.bind = Ext.Function.bind;
Ext.callback = Ext.Function.createCallback;
Ext.interceptor = Ext.Function.createInterceptor;
Ext.defer = Ext.Function.defer;
Ext.emptyFn = Ext.Function.emptyFn;
Ext.toFunction = Ext.Function.create;;/**
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
});;/**
 * @class Ext.ClassObservable
 * @extends Object
 *
 * Mixin class to support event handling inside of classes.
 */
Ext.define("Ext.ClassObservable", {

    extend: 'Object',

    /**
     * Array holding all known event names
     * @private
     */
    eventNames: [],

    /**
     * Object map holding all listener functions referenced by name
     * @private
     */
    listenersMap: {},

    /**
     * @cfg {Object} listeners
     * Listeners object containing event name to handler function map
     */
    listeners: {},

    /**
     * @cfg {Boolean} [lazyEventing=false]
     * Enabling lazy eventing allows you to fire events even when they are not added/registered before
     */
    lazyEventing: false,

    /**
     * Processes the this.listeners object maybe containing
     * event handler methods.
     * @return void
     */
    processListenersObject: function () {

        for (var eventName in this.listeners) {

            // Function-only listener
            if (Ext.isFunction(this.listeners[eventName])) {

                this.on(eventName, this.listeners[eventName]);

            } else if (Ext.isObject(this.listeners[eventName])) {

                // Process listener object and register using addListener()/on()
                this._registerListenerByObject(eventName, this.listeners[eventName]);

            } else {

                throw "Listener for event name " + eventName + " on class " +
                      this.$name + " has no valid specification (Object or Function)";
            }
        }
    },

    /**
     * Processes a listener from the listeners-Object
     * @param {String} eventName Name of the event
     * @param {Object} listener Listener object
     * @private
     * @return void
     */
    _registerListenerByObject: function(eventName, listener) {

        var scope = this, fn;

        if (listener.fn && Ext.isFunction(listener.fn)) {
            fn = listener.fn;
        } else {
            throw "No listener function found for event listener " + eventName;
        }

        if (listener.scope && Ext.isObject(listener.scope)) {
            scope = listener.scope;
        }

        // Register listener
        this.on(eventName, fn, scope, listener);
    },

    /**
     * Fires a named event
     *
     * @param {String} evtName Name of the event to fire
     * @param {Mixed] ... As many additional params as you want to transmit to the event handler.
        * @return void
     */
    fireEvent: function (evtName /*, ...*/) {

        var shouldRemoveListener = false, currentOptions = null,
            delayListenerExecution = false, bufferListenerExecution = false,
            targetListenerCheck = false, currentScope = this;

        if ((Ext.Array.indexOf(this.eventNames, evtName) < 0) && !this.lazyEventing) {
            throw "The event with name " + evtName + " cannot be fired. " +
                "It wasn't added before. (@see addEvents(...)).";
        }

        // Create listener array if not already existing
        if (this.lazyEventing && !this.listenersMap[evtName]) {
            this.listenersMap[evtName] = [];
        }

        var newArgs = [];
        for (var index in arguments) {
            if (index > 0) {
                newArgs.push(arguments[index]);
            }
        }

        // Call any registered listener directly with the given arguments
        for (var i = 0; i < this.listenersMap[evtName].length; i++) {

            if (Ext.isDefined(this.listenersMap[evtName][i])) {

                // Temporary variables for special listener
                // option handling
                shouldRemoveListener = false;
                delayListenerExecution = false;
                bufferListenerExecution = false;
                targetListenerCheck = false;
                currentOptions = this.listenersMap[evtName][i].options;
                currentScope = this.listenersMap[evtName][i].scope;

                // Handle additional options
                if (Ext.isDefined(currentOptions) && Ext.isObject(currentOptions)) {


                    // Check for "single" option
                    if (Ext.isDefined(currentOptions.single) &&
                        currentOptions.single === true) {
                        shouldRemoveListener = true;
                    }

                    // Check for "delay" option
                    if (Ext.isDefined(currentOptions.delay) &&
                        Ext.isNumber(currentOptions.delay)) {
                        delayListenerExecution = true;
                    }

                    // Check for "buffer" option
                    if (Ext.isDefined(currentOptions.buffer) &&
                        Ext.isNumber(currentOptions.buffer)) {
                        bufferListenerExecution = true;
                    }

                    // Check for "target" option
                    if (Ext.isDefined(currentOptions.target) &&
                        Ext.isNumber(currentOptions.target)) {
                        targetListenerCheck = true;
                    }
                }

                // Do not execute if listener is marked as single executible
                // and it was marked (so it was already executed)
                if (Ext.isDefined(this.listenersMap[evtName][i].$singleWasExecuted)) {
                    return;
                }

                // If "target" is given we need to check if "this" 
                // equals the target instance. The listener should only
                // be called on this instance. This is useful when an
                // event is relayed
                if (targetListenerCheck === true) {
                    if (currentOptions.target !== this) {
                        return;
                    }
                }

                if (delayListenerExecution === true) {

                    // Delay the execution by currentAdditionalOpts.delay
                    setTimeout(Ext.Function.bind(function () {
                        this.listenersMap[evtName][i].apply(currentScope, newArgs);
                    }, this), currentOptions.delay);

                } else if (bufferListenerExecution === true) {

                    // If buffer is set by date timestamp
                    // check against (stored timestamp + buffer ms - 
                    // current timestamp) > 0 execute
                    if (Ext.isDefined(this.listenersMap[evtName][i].$bufferTimestamp) &&
                        Ext.isDate(this.listenersMap[evtName][i].$bufferTimestamp)) {

                        if (((this.listenersMap[evtName][i].$bufferTimestamp.getTime() +
                            currentOptions.buffer) - new Date().getTime()) > 0) {

                            // Execute the buffered function and reset buffer flag
                            this.listenersMap[evtName][i].apply(currentScope, newArgs);

                            // Reset buffer flag
                            delete this.listenersMap[evtName][i].$bufferTimestamp;
                        }

                    } else {

                        // Set current timestamp of time when the buffer was started
                        this.listenersMap[evtName][i].$bufferTimestamp = new Date();
                        return;
                    }

                } else {

                    // Standard direct execution
                    this.listenersMap[evtName][i].apply(currentScope, newArgs);
                }

                // Remove listener if single option was enabled
                if (shouldRemoveListener) {
                    this.listenersMap[evtName][i].$singleWasExecuted = true;
                }
            }
        }
    },

    /**
     * Fires a named event.
     * Shortcut for fireEvent()
     *
     * @param {String} evtName Name of the event to fire
     * @param {Mixed] ... As many additional params as you want to transmit to the event handler.
        * @return void
     */
    emit: function (evtName /*, ...*/) {
        this.fireEvent.apply(this, arguments);
    },

    /**
     * Registers event names
     *
     * @param {String} ... As many event names as you want to register
     * @return void
     */
    addEvents: function (/*...*/) {

        var me = this, _addEvent = function(eventName) {

            // Push to known event names list
            me.eventNames.push(eventName);

            // Create named listener stack
            me.listenersMap[eventName] = [];
        };

        if (Ext.isDefined(arguments[0]) && Ext.isArray(arguments[0])) {
            throw "Don't use array as input. Just provide a lot of event names in sequence!";
        }

        // Collect event registrations as object map
        if (arguments.length === 1 && arguments[0] && Ext.isObject(arguments[0])) {

            // Walk event name map
            for (var eventName in arguments[0]) {

                // If it is Boolean and true, add event
                if (arguments[0][eventName] && Ext.isBoolean(arguments[0][eventName])) {
                    _addEvent(arguments[0][eventName]);
                }
            }

        } else {

            // Create a listener array in the
            // listeners map for any event name
            for (var i = 0; i < arguments.length; i++) {

                // Add event
                _addEvent(arguments[i]);

            }
        }
    },

    /**
     * Registers the given event handler function
     * for the given event name. If the event gets fired
     * all registered event handlers will be called.
     *
     * @param {String} evtName Name of the event
     * @param {Function} fn Function to register
     * @param {Object} scope Scope to call event listener on
     * @param {Object} options Additional options
     * @return void
     */
    addListener: function (evtName, fn, options, scope) {

        var me = this, regListener = function (evtName, fn, options) {

            // Assign additional info
            fn.options = options;
            fn.scope = scope || me;

            // Add to the listeners map
            this.listenersMap[evtName].push(fn);
        };

        try {
            regListener.call(this, evtName, fn, options);
        } catch (e) {

            // Automatically add the event 
            this.addEvents(evtName);
            regListener.call(this, evtName, fn, options);
        }
    },

    /**
     * Registers the given event handler function
     * for the given event name. If the event gets fired
     * all registered event handlers will be called.
     * Shortcut for addListener()
     *
     * @param {String} evtName Name of the event
     * @param {Function} fn Function to register
     * @param {Object} additionalOpts Additional options
     * @return void
     */
    on: function (evtName, fn, additionalOpts) {

        // Call core method for that...
        return this.addListener(evtName, fn, additionalOpts);
    },


    /**
     * Relays events to the given component instance
     * so they get fired on the given class instance too.
     *
     * @param {Object} clsInst Class instance object (Mixin: Ext.ClassObservable)
     * @param {Array} eventNames Events to relay from source class instance
     * @return void
     */
    relayEvents: function (clsInst, eventNames) {

        var me = this,
            execScope = null;

        if (Ext.isDefined(clsInst.addEvents) &&
            Ext.isFunction(clsInst.addEvents)) {

            me.addEvents(eventNames);

            // For each event of the clsInst to attach
            // register a local listener which fires the
            // local, relay event 
            for (var i = 0; i < eventNames.length; i++) {

                execScope = {};
                execScope.me = me;
                execScope._eventName = eventNames[i];
                execScope._clsInst = clsInst;

                with (execScope) {

                    _clsInst.on(_eventName, function () {

                        me.fireEvent(_eventName, arguments);
                    });
                }
            }
        }
    },

    /**
     * Removes one or many listeners from the instance depending on the
     * call parameters.
     *
     * // Removes all listeners
     * removeListener()
     *
     * // Removes all listeners named 'message'
     * removeListener('message')
     *
     * // Remove the specific listener function
     * removeListener('message', this.onMessage)
     *
     * @param {String} targetEvtName (optional) Name of the event to remove
     * @param {Function} handlerFn (optional) Specific handler function previously attached
     * @return void
     */
    removeListener: function (targetEvtName, handlerFn) {

        var eventName, i;
        for (eventName in this.listenersMap) {
            for (i = 0; i < this.listenersMap[eventName].length; i++) {

                if (Ext.isDefined(targetEvtName) && Ext.isString(targetEvtName)) {

                    // If name is given, only remove if name matches
                    if (targetEvtName === eventName) {

                        // If handler given also check for handler matching
                        if (Ext.isDefined(handlerFn) && Ext.isFunction(handlerFn)) {

                            // Check for handler
                            if (this.listenersMap[eventName][i] === handlerFn) {
                                this.listenersMap[eventName] = Ext.Array.remove(this.listenersMap[eventName],
                                    this.listenersMap[eventName][i]);
                            }

                        } else {

                            // No handler given? Remove all listeners with matching name
                            this.listenersMap[eventName] = Ext.Array.remove(this.listenersMap[eventName],
                                this.listenersMap[eventName][i]);
                        }
                    }

                } else {

                    // Remove all handlers if targetEvtName is not a String or not defined
                    this.listenersMap[eventName] = Ext.Array.remove(this.listenersMap[eventName],
                        this.listenersMap[eventName][i]);
                }
            }
        }
    },

    /**
     * Removes one or many listeners from the instance depending on the
     * call parameters.
     * Shortcut for removeListener()
     *
     * // Removes all listeners
     * removeListener()
     *
     * // Removes all listeners named 'message'
     * removeListener('message')
     *
     * // Remove the specific listener function
     * removeListener('message', this.onMessage)
     *
     * @param {String} targetEvtName (optional) Name of the event to remove
     * @param {Function} handlerFn (optional) Specific handler function previously attached
     * @return void
     */
    un: function (fn) {
        this.removeListener.apply(this, arguments);
    }
});;/**
 * @class Ext.Class
 * @extends Object
 * @alternateClassName Ext.Base
 * @mixins Ext.ClassObservable
 * @mixins Ext.util.Serializable
 *
 * Base class of all other classes specialized for instantiation
 * and dynamic configuration.
 */
Ext.define('Ext.Class', {

    mixins: {
        observable: 'Ext.ClassObservable',
        serializable: 'Ext.util.Serializable'
    },

    alternateClassName: 'Ext.Base',

    extend: 'Object',

    /**
     * Initial config of class instance
     */
    initialConfig: {},

    /**
     * Gets called on instance creation.
     * Maps the given config object onto the
     * local object instance if given.
     *
     * @param {Object} cfg (optional) Overlay config
     * @private
     */
    $constructor: function () {

        if (Ext.isDefined(arguments[0]) &&
            Ext.isObject(arguments[0])) {

            this.initialConfig = arguments[0];

            // Apply config object onto local instance
            Ext.apply(this, this.initialConfig);
        }

        // Register class instance
        Ext.ClassManager.instances.push(this);

        // Process Ext.util.Observable listeners object of this.listeners
        this.processListenersObject();
    },

    /**
     * Returns the initial config passed to the constructor
     * @return {Object}
     */
    getInitialConfig: function () {
        return this.initialConfig;
    },

    /**
     * Calls the parent method of this class using reflection
     *
     * @param {Array} args Arguments to be called with
     * @return {Mixed}
     */
    callParent: function (args) {

        var methodCallerRef = this.callParent.caller,
            constructorFn = this.$superclass.prototype.constructor;

        // Call super-constructor
        if (Ext.isFunction(methodCallerRef.$name)) {

            if (this.$superclass.prototype.$constructor) {
                constructorFn = this.$superclass.prototype.$constructor;
            }
            return constructorFn.apply(this, args || []);
        }

        // Call a super-method
        if (!Ext.isDefined(methodCallerRef)) {
            throw "callParent() failed. Caller not found.";
        }

        if (!Ext.isDefined(this.$superclass.prototype)) {
            throw "callParent() failed. There is no superclass that could be referred to.";
        }

        if (!Ext.isDefined(this.$superclass.prototype[methodCallerRef.$name]) ||
            !Ext.isFunction(this.$superclass.prototype[methodCallerRef.$name])) {
            throw "callParent() failed. There is no parent method (function) named " +
                  methodCallerRef.$name + " in superclass.";
        } else {
            return this.$superclass.prototype[methodCallerRef.$name].apply(this, args || []);
        }
    },

    /**
     * Calls on overridden method of this class using reflection
     *
     * @param {Array} args Arguments to be called with
     * @return {Mixed}
     */
    callOverridden: function (args) {

        var methodCallerRef = this.callOverridden.caller;

        if (!Ext.isDefined(methodCallerRef)) {
            throw "callOverridden() failed. Caller not found.";
        }

        if (!Ext.isDefined(this.$overridden)) {
            throw "callOverridden() failed. This class seems not to have been overridden. Missing overrides map.";
        }

        if (!Ext.isDefined(this.$overridden[methodCallerRef.$name]) ||
            !Ext.isFunction(this.$overridden[methodCallerRef.$name])) {
            throw "callParent() failed. There is no overridden method (function) named " + methodCallerRef.$name + ".";
        } else {
            return this.$overridden[methodCallerRef.$name].apply(this, args || []);
        }
    },

    // Static methods for reflection purposes
    statics: {

        /**
         * @static
         * @inheritable
         * Creates aliases for existing methods of the prototype
         * @param {Object|String} alias Method aliases object or string
         * @param {String} origin (optional) Origin method name
         * @return {Ext.Class}
         */
        createAlias: function (alias, origin) {
            return Ext.ClassManager.addMethodAliases(this.constructor, alias, origin);
        },

        /**
         * @static
         * @inheritable
         * Adds static methods to the class
         *
         * Note: Static members added dynamically in runtime, will not be added to
         * subclasses of this class. Use class inheritance using Ext.define() is needed!
         *
         * @param {Object} statics Members of this object will be added as statics
         * @return {Ext.Class}
         */
        addStatics: function (statics) {
            return Ext.ClassManager.addStatics(this.constructor, statics);
        },

        /**
         * @static
         * @inheritable
         * Adds the given object members to the prototype of this class
         *
         * @param {Object} members Object that contains properties to be overridden in prototype
         * @return {Function}
         */
        addMembers: function (members) {
            return Ext.ClassManager.addMembers(this.$name, members);
        },

        /**
         * @static
         * @inheritable
         * Overrides the class prototype members itself by the given object members
         * @param {Object} overrides Object that contains properties to be overridden in prototype
         * @return {Function}
         */
        override: function (overrides) {
            return Ext.ClassManager.override(this.$name, overrides);
        },

        /**
         * @static
         * @inheritable
         * Overrides the class prototype members itself by the given object members
         * @param {String|Function} subclass Name of function reference to subclass
         * @param {Object} overrides Object that contains properties to be overridden in prototype
         * @return {Function}
         */
        extend: function (subclass, overrides) {
            return Ext.ClassManager.extend(subclass, this.$name, overrides);
        },

        /**
         * @static
         * @inheritable
         * Returns the classes class name
         * @return {String}
         */
        getName: function () {
            return this.$name;
        },

        /**
         * @static
         * @inheritable
         * Creates an instance of this class
         * @param {Object} cfg Instance configuration
         * @param {Function} cb Callback to call when instance was created
         * @return {Mixed}
         */
        create: function (cfg, cb) {
            return Ext.create(this.$name, cfg, cb);
        }
    }

}, function (ctor) {

    // Transform the Ext object into an observable
    // class instance...
    var _Ext = new ctor({
        lazyEventing: true
    });

    Ext.apply(_Ext, Ext);
    Ext = _Ext;
});;/**
 * @class Ext.app.Module
 * Defines a module with it's members.
 * Exports a callback to be called when module is ready.
 * @param {String} moduleName Name of the module
 * @param {Object} members Members of the module
 * @return {Function}
 */
Ext.module = function(moduleName, members) {
	
	console.log('defining a module...');
	
	var moduleInstance = null;
	
	// Let it be a singleton
	members.singleton = true;
	
	// Default initializer...
	if (!members.init) {
		members.init = function() {
			return moduleInstance;
		}
	}
	
	return function(readyCb) {
    	
		console.log('init called.');
    	
    	// Create a singleton class instance
		moduleInstance = Ext.define(moduleName, members, function(moduleInst) {
			
			console.log('callback after define called.');
			
			// Now, this class has been fully defined and instantiated!
			var initExport, moduleExports;
			
			if (moduleInst.init && Ext.isFunction(moduleInst.init)) {
				initExport = moduleInst.init();
			}
			
			// Module exports is the return value of init() or the instance itself 
			// is a custom init() doesn't return anything!
			moduleExports = initExport || moduleInst;
			
			// Call the callback if given
			if (readyCb && Ext.isFunction(readyCb)) {
				
				console.log('calling readyCb');
				readyCb(moduleExports);
			}
		});
		
		// Return a promise...
		return moduleInstance;
    }
};
;/**
 * @class Ext.Error
 * @extends Object
 * @singleton
 *
 * Error management class.
 */
Ext.define('Ext.Error', {

    singleton: true,

    /**
     * Throws an error, but prepends origin information (class name and method) if known.
     * @param {String} message Error message
     * @return void
     */
    throwError: function(message) {

        var callerMethod = this.throwError.caller,
            classErrorOriginMsg = "";

        if (callerMethod.$className && callerMethod.$name) {
            classErrorOriginMsg = "Error raised by: " + callerMethod.$className + "'s " + callerMethod.$name + "():\n";
        }
        message = classErrorOriginMsg + message;

        throw new Error(message);
    }
}, function(ctor) {
	
	// Shortcuts
	Ext.throwError = ctor.throwError;
});
;/**
 * @class Ext.util.Comparator
 * @extends Ext.Class
 * @singleton
 *
 * Compares values - used by Ext.util.Sorter.
 */
Ext.define('Ext.util.Comparator', {

    singleton: true,

    /**
     * Returns -1 if value1 is less than value2.
     * Returns 1 if value1 is greater than value2.
     * Returns 0 if both values are equal.
     *
     * e.g. used for ASC sorting and filtering.
     *
     * @param {Mixed} value1 First value
     * @param {Mixed} value2 Second value
     * @return {Number}
     */
    compare: function(value1, value2) {

        if (typeof value1 !== typeof value2) {
            value1 = Ext.toString(value1);
            value2 = Ext.toString(value2);
        }

        if (Ext.isMap(value1) || Ext.isCollection(value1)) {
            value1 = value1.count();
            value2 = value2.count();
        }

        if (Ext.isString(value1)) {
            value1.toLowerCase();
            value2.toLowerCase();
        }

        if (value1 < value2) {
            return -1;
        }

        if (value1 > value2) {
            return 1;
        }
        return 0;
    },

    /**
     * Returns 1 if value1 is less than value2.
     * Returns -1 if value1 is greater than value2.
     * Returns 0 if both values are equal.
     *
     * e.g. used for DESC sorting.
     *
     * @param {Mixed} value1 First value
     * @param {Mixed} value2 Second value
     * @return {Number}
     */
    compareInverted: function(value1, value2) {

        if (typeof value1 !== typeof value2) {
            value1 = Ext.toString(value1);
            value2 = Ext.toString(value2);
        }

        if (Ext.isMap(value1) || Ext.isCollection(value1)) {
            value1 = value1.count();
            value2 = value2.count();
        }

        if (Ext.isString(value1)) {
            value1.toLowerCase();
            value2.toLowerCase();
        }

        if (value1 < value2) {
            return 1;
        }

        if (value1 > value2) {
            return -1;
        }
        return 0;
    },

    /**
     * Generates a sort comparator function for object array data.
     * The property name defines, which sub-object should be accessed for sorting inside an array.
     * This means, that if the following data structure is given:
     *
     *     var ar = [{vorname: 'Aron'}, {vorname: 'Andre'}, {vorname: 'Bernd'}];
     *
     * A sorting of the array items by the property vorname can be accomplished by generating
     * a comparator function, accessing the vorname property for sorting this way:
     *
     *     Ext.Array.sortBy(ar, Ext.generateSortComparator('ASC', 'vorname'));
     *
     * If no property name is given, the value will be used itself.
     *
     * Sorting of n-dimensional Arrays is not supported too:
     *
     *     var ar = [{foo: [{bar: 123}]}];
     *
     *     Ext.Array.sortBy(ar, Ext.generateSortComparator('ASC', 'foo.0.bar'));
     *
     * @param {String} [direction=ASC] (optional) Direction to sort to
     * @param {String} [property=plain array item] (optional) Property name or JSON-Path to access in array objects
     * @return {Function}
     */
    generateForSorting: function(direction, property) {

        var sortFn = Ext.util.Comparator.compare,
            extractor = null;

        if (!direction) {
            // Omit
        } else if (direction === 'ASC') {
            sortFn = Ext.util.Comparator.compare;
        } else {

            // DESC or invalid direction
            sortFn = Ext.util.Comparator.compareInverted;
        }

        if (property && property.indexOf('.') > -1) {
            extractor = Ext.Object.generatePropertyExtractor(property);
        }

        if (property && !extractor) {

            return function(value1, value2) {
                return sortFn(value1[property], value2[property]);
            };

        } if (property && extractor) {

            return function(value1, value2) {
                return sortFn(extractor(value1), extractor(value2));
            };

        } else {
            return sortFn;
        }
    },

    /**
     * Compares two values for filtering.
     * 
     * @param value1
     * @param value2
     */
    filterCompare: function(value1, value2) {

        // Lookup default compare result
        var compareResult = this.compare(value1, value2);



    },

    /**
     * Generates a filter comparator function for object array data.
     * The property name defines, which sub-object should be accessed for filtering inside an array.
     * This means, that if the following data structure is given:
     *
     *     var ar = [{vorname: 'Aron'}, {vorname: 'Andre'}, {vorname: 'Bernd'}];
     *
     * A filtering of the array items by the property vorname can be accomplished by generating
     * a comparator function, accessing the vorname property for filtering this way:
     *
     *     Ext.Array.filterBy(ar, Ext.generateFilterComparator('vorname'));
     *
     * If no property name is given, the value will be used itself.
     *
     * Sorting of n-dimensional Arrays is not supported too:
     *
     *     var ar = [{foo: [{bar: 123}]}];
     *
     *     Ext.Array.filterBy(ar, Ext.generateFilterComparator('foo.0.bar'));
     *
     * @param {String} [operator==] (optional) Operator to use for filtering
     * @param {String} [property=plain array item] (optional) Property name or JSON-Path to access in array objects
     * @return {Function}
     */
    generateForFiltering: function(property, operator) {

        var filterFn = Ext.util.Comparator.filterCompare,
            extractor = null;

        // Set filter function operator, equalizer by default
        filterFn.$operator = operator || '=';

        if (property && property.indexOf('.') > -1) {
            extractor = Ext.Object.generatePropertyExtractor(property);
        }

        if (property && !extractor) {

            return function(value1, value2) {
                return filterFn(value1[property], value2[property]);
            };

        } if (property && extractor) {

            return function(value1, value2) {
                return filterFn(extractor(value1), extractor(value2));
            };

        } else {
            return filterFn;
        }
    }
}, function(ctor) {

	// Shortcuts
	Ext.compare = ctor.compare;
	Ext.generateSortComparator = ctor.generateForSorting;
	Ext.generateFilterComparator = ctor.generateForFiltering;	
});
;/**
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
;/**
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
;/**
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
});;/**
 * @class Ext.iter.Summable
 * @extends Ext.Class
 *
 * Implements aggregation for iterable and map data structures. (Collection, Map)
 */
Ext.define('Ext.iter.Summable', {

    /**
     * Sums all values of the iterable and returns it's sum
     * @param {String} [property=value] (optional) Property name or path to access data per item
     * @return {Number}
     */
    sum: function(property) {

        var flatData = this._toFlatArray(this[this.dataPropertyName], property), sum = 0;

        for (var i=0; i<flatData.length; i++) {
            sum += flatData[i];
        }
        return sum;
    },

    /**
     * Returns the maximum value of the iterable data
     * @param {String} [property=value] (optional) Property name or path to access data per item
     * @return {Number}
     */
    max: function(property) {

        var flatData = this._toFlatArray(this[this.dataPropertyName], property);
        return Ext.Array.max(flatData);
    },

    /**
     * Returns the minimum value of the iterable data
     * @param {String} [property=value] (optional) Property name or path to access data per item
     * @return {Number}
     */
    min: function(property) {
        var flatData = this._toFlatArray(this[this.dataPropertyName], property);
        return Ext.Array.min(flatData);
    },

    /**
     * Returns the average value of the iterable data
     * @param {String} [property=value] (optional) Property name or path to access data per item
     * @return {Number}
     */
    avg: function(property) {
        return (this.sum(property) / this.count());
    },

    /**
     * Returns an array of flat data
     * @param {Array|Object} data Data
     * @param {String} [property=value] (optional) Property name or path to access data per item
     * @return {Array}
     * @private
     */
    _toFlatArray: function(data, property) {

        if (Ext.isCollection(this) && property !== 'value') {
            property = 'value.' + property;
        }

        if (Ext.isObject(data)) {
            data = Ext.Object.toArray(data, true);
        }

        if (Ext.isArray(data)) {
            data = Ext.Array.flatten(data, property);
        }
        return data;
    }
});;/**
 * @class Ext.iter.Sliceable
 * @extends Ext.Class
 *
 * Implements slicing methods for Array-based iterable data structures.
 */
Ext.define('Ext.iter.Sliceable', {

    /**
     * Replaces a slice of the data.
     * If the count of replace items doesn't match with the count of items
     * to be replaced, an exception gets thrown.
     *
     *     var c = Ext.collection();
     *
     *     c.add('a', {lala: 3});
     *     c.add('b', {lala: 3});
     *     c.add('c', {lala: 2});
     *
     *     c.replaceSlice(0, 1, [{lala: 4}, {lala: 5}])
     *
     * @param {Number} startIdx Index to start replacing from
     * @param {Number} endIdx End index for replacing
     * @param {Array} replaceItems Array of replacement items
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.iter.Interface}
     */
    replaceSlice: function(startIdx, endIdx, replaceItems, silent) {

        var dataPool = this[this.dataPropertyName], j=0;

        // Check length of replacements
        if (((endIdx - startIdx)+1) === replaceItems.length) {

            // Do replace
            for (var i=startIdx; i<=endIdx; i++) {

                // Prepare replacement item to match to internal data structure
                if (!Ext.isObject(replaceItems[j])) {
                    replaceItems[j] = {
                        value: replaceItems[j]
                    };
                }
                replaceItems[j] = this.buildItem(replaceItems[j]);

                // Replace original item by replacement
                this.replaceItem(dataPool[i], replaceItems[j], silent);

                j++;
            }

        } else {
            throw "The count of items to replace MUST match with the count of replacement items!";
        }
        return this;
    },

    /**
     * Copies and returns a slice of the data.
     * @param {Number} startIdx Index to start replacing from
     * @param {Number} endIdx End index
     * @return {Array}
     */
    getSlice: function(startIdx, endIdx) {

        var dataPool = this[this.dataPropertyName], ar = [];

        // Loop range
        for (var i=startIdx; i<=endIdx; i++) {
            ar.push(dataPool[i]);
        }
        return ar;
    }
});;/**
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
});;/**
 * @class Ext.Template
 * @extends Object
 *
 * Ext.Template can be used in four different ways:
 *
 *     new Ext.Template(['lala ', '{lol}']).render({lol: 123})
 *     new Ext.Template('lala {lol}').render({lol: 123})
 *     new Ext.Template('lala ', '{lol}').render({lol: 123})
 *
 *     // Compiles the template (instance can be reused -> higher performance when using multiple times)
 *     new Ext.Template({
 *         content: 'lala {lol}', // Array of parts is allowed here too
 *         compile: true
 *     }).render({lol: 123})
 */
Ext.define('Ext.Template', {

    extend: 'Object',

    /**
     * Internal flag if the template is already compiled
     * @private
     */
    compiled: false,

    /**
     * The regular expression used to match template variables.
     * Defaults to:<pre><code>
     re : /\{([\w-]+)\}/g
     </code></pre>
     */
    re: /\{([\w\-]+)\}/g,

    /**
     * Internal content holder
     * @private
     */
    content: '',

    /**
     * Constructor function
     *
     * @param {Object|String|Array} cfg Template config Object or tpl String or Array or template parts
     * @param {String...} parts (optional) More String template parts
     */
    constructor: function (cfg) {

        var me = this,
            a = arguments,
            buf = [],
            content = cfg,
            compile = false;

        // If configuration object, resolve
        if (Ext.isObject(cfg)) {
            content = cfg.content;
            if (cfg.compile) {
                compile = cfg.compile;
            }
        }

        // Process content call-input variants
        if (Ext.isArray(content)) {
            content = content.join("");
        } else if (a.length > 1) {
            Ext.each(a, function (v) {
                if (Ext.isObject(v)) {
                    Ext.apply(me, v);
                } else {
                    buf.push(v);
                }
            });
            content = buf.join('');
        }

        // Persist content instance-locally
        me.content = content;

        // Compile if requested (only possible with Object as param)
        if (compile) {
            me.compile();
        }
    },

    /**
     * Returns an content fragment of this template with the specified <code>values</code> applied.
     * @param {Object/Array} values
     * The template values. Can be an array if the params are numeric (i.e. <code>{0}</code>)
     * or an object (i.e. <code>{foo: 'bar'}</code>).
     * @return {String} The content fragment
     */
    render: function (values) {
        var me = this;

        return me.compiled ?
            me.compiled(values) :
            me.content.replace(me.re, function (m, name) {
                return values[name] !== undefined ? values[name] : "";
            });
    },

    /**
     * Compiles the template into an internal function, eliminating the RegEx overhead.
     * @return {Ext.Template} this
     */
    compile: function () {
        var me = this,
            sep = "+";

        function fn(m, name) {
            name = "values['" + name + "']";
            return "'" + sep + '(' + name + " == undefined ? '' : " + name + ')' + sep + "'";
        }

        eval("this.compiled = function(values){ return " + ("'") +
            me.content.replace(/\\/g, '\\\\').replace(/(\r\n|\n)/g, '\\n').replace(/'/g, "\\'").replace(this.re, fn) +
            ("';};"));
        return me;
    }
});

// Shortcuts
Ext.template = function(cfg) {
    return Ext.create('Ext.Template', cfg);
};;/**
 * @class Ext.util.TaskRunner
 * @extends Object
 *
 * Implements a manager class for simple to use multitasking inside of JS.
 * Just create a Task using Ext.task({...}) (contains prepared function) and
 * let this or many of those tasks execute in an TaskRunner instance via
 * start(task), stop(task), pause(task) or even stopAll() and pauseAll()
 * for multi-task management.
 *
 * The standard delay between task calls is 10 milliseconds. This can be
 * adjusted by creating a new instance: e.g. Ext.util.TaskRunner(50);
 *
 * Every Task may have arguments, scope and a call time delay bound.
 *
 * To simplify the usage even more, a singleton instance of this call,
 * Ext.TaskManager can be used for concurrent multi-tasking function call-loops.
 */
Ext.define('Ext.util.TaskRunner', {

    extend: 'Object',

    /**
     * Precision in milliseconds (between async task executions)
     */
    interval: 10,

    /**
     * Internal list of threads
     * @private
     */
    threads: [],

    /**
     * Constructs an TaskRunner instance
     * @param {Number} interval Milliseconds to pause between task executions
     */
    constructor: function(interval) {
        this.interval = interval;
        this.threads = [];
    },

    /**
     * Starts a task execution
     * @param {Ext.util.Task|Array} task Task instance or array of tasks to start
     * @param {Number} repeat How often to execute the task (optional, default: 0 (call 1 time)).
     * Setting this parameter to Infinity results in an (not evil) endless call loop.
     * @return {Ext.util.TaskRunner}
     */
    start: function(task, repeat) {

        var me = this;

        if (Ext.isArray(task)) {

            Ext.Array.each(task, function(task) {
                me._startThread(task, repeat);
            });

        } else {
            me._startThread(task, repeat);
        }
        return this;
    },

    /**
     * Starts/Restarts a thread
     * @private
     */
    _startThread: function(task, repeat) {

        // Set to one task execution iteration
        if (!repeat) {
            repeat = 0;
        }

        // Initially set thread/task state
        task.repeat = repeat;
        task.paused = false;

        // Try to fetch maybe already existing thread
        var thread = this.getThreadForTask(task);

        if (!thread) {

            // Build thread
            thread = {
                task: task,
                thread: setInterval(
                    Ext.Function.bind(
                        this._threadLoop,
                        this,
                        [task]
                    ),
                    this.interval
                )
            }

            // Add new thread
            this.threads.push(thread);
        }
    },

    /**
     * Execution of one loop for an arbitrary task
     * @param {Ext.util.Task} task Task instance
     * @private
     */
    _threadLoop: function(task) {

        // Do not execute
        if (task.paused) {
            return;
        }

        // Execute but
        if (task.repeat !== Infinity && task.repeat !== true) {

            if (task.repeat > -1) {

                task.repeat--;
                task.execute();

            } else {

                this.stop(task);
            }

        } else {

            // Execute inifitely
            task.execute();
        }
    },

    /**
     * Pauses a specific task execution
     * @param {Ext.util.Task} task Task instance
     * @return {Ext.util.TaskRunner}
     */
    pause: function(task) {
        task.paused = true;
        return this;
    },

    /**
     * Stops a specific task execution
     * @param {Ext.util.Task} task Task instance
     * @return {Ext.util.TaskRunner}
     */
    stop: function(task) {

        var thread = this.getThreadForTask(task);

        if (!thread) {
            throw "Cannot stop task, it's not running";
        } else {
            clearTimeout(thread.interval);
        }
        return this;
    },

    /**
     * Stop all task executions of all tasks started
     * @return {Ext.util.TaskRunner}
     */
    stopAll: function() {

        this._eachThread(function(thread) {
            clearTimeout(thread.interval);
        });
        return this;
    },

    /**
     * Pauses the execution loop of all started tasks
     * @return {Ext.util.TaskRunner}
     */
    pauseAll: function() {

        this._eachThread(function(thread) {
            thread.task.paused = true;
        });
        return this;
    },

    /**
     * Returns the thread object (task + interval ref.) for a given task.
     * @param {Ext.util.Task} task Task reference
     * @return {Object}
     */
    getThreadForTask: function(task) {

        var result = null;
        this._eachThread(function(thread) {

            if (thread.task === task) {
                result = thread;
            }
        });
        return result;
    },

    /**
     * Calls a given callback for each active thread
     * @param {Function} fn Function to call for each thread
     * @private
     */
    _eachThread: function(fn) {

        Ext.Array.each(this.threads, function(thread) {

            if (typeof thread === 'undefined') {
                return;
            }

            // Call callback function if function is given
            fn(thread);

        }, this);
    }
}, function(ctor) {
		
	/**
	 * @class Ext.TaskManager
	 * @extends Ext.util.TaskRunner
	 * @singleton
	 *
	 * Singleton instance of Ext.TaskRunner.
	 */
	Ext.TaskManager = new ctor();
});


/**
 * Simply executes a task using Ext.TaskManager
 * @member Ext
 * @method run
 * @param {Ext.util.Task} task Task to run (create one using {@Ext#task})
 * @param {Number} [times=1] (optional) How many times the task may executed
 * @return {Ext.TaskManager}
 */
Ext.run = function(task, times) {

    if (!times) {
        times = 1;
    }
    Ext.TaskManager.start(task, --times);

    return Ext.TaskManager;
};;/**
 * @class Ext.util.Task
 * @extends Object
 * @alternateClassName Ext.util.DelayedTask
 *
 * Abstract task implementation as a wrapper for a function
 * with bound scope, arguments and delay information.
 *
 * The Ext.util.TaskRunner and Ext.TaskManager classes extend
 * these features by supporting interval calling, starting, stopping, pausing of tasks etc.
 */
Ext.define('Ext.util.Task', {

    extend: 'Object',

    /**
     * Function to handle as task
     */
    fn: Ext.emptyFn,

    /**
     * Delay in milliseconds (ms)
     */
    delay: 0,

    /**
     * Arguments to call the task function with
     */
    args: [],

    /**
     * Scope to call the task function in
     */
    scope: this,

    /**
     * Task instance constructor
     *
     * @param {Function} fn Task function
     * @param {Object} scope Scope object (optional)
     * @param {Array} args Arguments of the task (optional)
     * @param {Number} delay Delay in milliseconds until call after call() was executed (optional)
     */
    constructor: function(fn, scope, args, delay) {
        this.fn = fn;
        this.scope = scope;
        this.args = args;
        this.delay = delay;
    },

    /**
     * Calls the task function
     * @return {Ext.util.Task}
     */
    execute: function() {

        var me = this, t = setTimeout(function() {
            me.fn.apply(me.scope, me.args);
            clearTimeout(t);
        }, this.delay);

        return this;
    }
});

// Shortcuts
Ext.task = function(fn, scope, args, delay) {
    return Ext.create('Ext.util.Task', [fn, scope, args, delay]);
};
;/**
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
Ext.set = Ext.Registry.set;;/**
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
});;/**
 * @class Ext.Collection
 * @extends Ext.Class
 * @alternateClassName Ext.Collection
 * @implements Ext.iter.Interface
 * @mixins Ext.util.Sortable
 * @mixins Ext.iter.Summable
 * @mixins Ext.iter.Sliceable
 * @mixins Ext.iter.Filterable
 *
 * Implements the collection data type.
 *
 * Test code:
 *    
      var c = Ext.collection();

      c.on('add', function(collection, key, item) {
          console.debug('observed added a key', key, item);
      });
	
	  c.add('a', {lala: 1});
	  c.add('b', {lala: 2});
	  c.add('c', {lala: 3});
	
      c.getSlice(0, 1);
 */
Ext.define('Ext.Collection', {

    implement: 'Ext.iter.Interface',

    uses: {
        sortable: 'Ext.iter.Sortable',
        summable: 'Ext.iter.Summable',
        sliceable: 'Ext.iter.Sliceable',
        filterable: 'Ext.iter.Filterable'
    },

    /**
     * Internal data storage
     */
    items: [],

    /**
     * Size of the map
     */
    size: 0,

    /**
     * @cfg {String} [keyProperty=id]
     * Key property name
     */
    keyProperty: 'id',

    /**
     * @property {String} dataPropertyName
     * Name of the data property on the local iterable class implementation
     * @readonly
     */
    dataPropertyName: 'items',

    /**
     * @cfg {Function} keyFn Key generating function
     */
    keyFn: function(item) {

        if (item[this.keyProperty]) {
            return item[this.keyProperty];
        }
        return Ext.id('collection');
    },

    /**
     * Constructor for the Collection
     * @return void
     */
    constructor: function() {

        this.addEvents(

            /**
             * @event beforeadd
             * This event gets fired before an item gets added to the collection
             * @param {Ext.Collection} this
             * @param {Object} item
             */
            'beforeadd',

            /**
             * @event add
             * This event gets fired when an item gets added to the collection
             * @param {Ext.Collection} this
             * @param {Object} item
             */
            'add',

            /**
             * @event beforeremove
             * This event gets fired before an item gets removed from the collection
             * @param {Ext.Collection} this
             * @param {Object|Number|String|Mixed} itemOrIndexOrKeyOrValue
             */
            'beforeremove',

            /**
             * @event remove
             * This event gets fired when an item gets removed from the collection
             * @param {Ext.Collection} this
             * @param {Object|Number|String|Mixed} itemOrIndexOrKeyOrValue
             */
            'remove',

            /**
             * @event beforereplace
             * This event gets fired before an item gets replaced in the collection
             * @param {Ext.Collection} this
             * @param {Object|String|Mixed} oldItemOrKeyOrValue
             * @param {Object|Mixed} newItemOrValue
             */
            'beforereplace',

            /**
             * @event replace
             * This event gets fired when an item gets replaced in the collection
             * @param {Ext.Collection} this
             * @param {Object|String|Mixed} oldItemOrKeyOrValue
             * @param {Object|Mixed} newItemOrValue
             */
            'replace',

            /**
             * @event beforeclear
             * This event gets fired before the collection has been cleared
             * @param {Ext.Collection} this
             */
            'beforeclear',

            /**
             * @event clear
             * This event gets fired when the collection has been cleared
             * @param {Ext.Collection} this
             */
            'clear'
        );

        this.callParent(arguments);

        // Initialize mixins
        this.initSortable();
        this.initFilterable();

        // Clear initially
        this.clear(true);
    },

    /**
     * Adds an array of items to the collection at once
     * @param {Array} items Array of Object-items to be added
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    addAll: function(items, silent) {

        Ext.each(items, function(item) {
            this.add(item, silent);
        }, this);

        return this;
    },

    /**
     * Builds an item out of key and value information
     * @param {String|Object} key Key
     * @param {Mixed} value Value
     * @return {Object}
     */
    buildItem: function(key, value) {

        if (!value) {
            value = key;

            // Object-item already has a key
            if (value.key) {
                key = value.key;
            } else {

                // Generate key
                key = this.keyFn(value);
            }
        }

        if (value && !key) {

            // 2-arg call but no key given
            key = this.keyFn(value);
        }

        return {
            key: key,
            value: value
        }
    },

    /**
     * Adds an item to the collection
     * @param {String|Object} key The key of the item or the whole item as Object (id property should be set or key will be auto-generated)
     * @param {Object} item Item to be added to the map
     * @param {Boolean} [silent=false] (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    add: function(key, item, silent) {

        // Build item
        item = this.buildItem(key, item);

        if (!silent) {
            this.fireEvent('beforeadd', this, item);
        }

        this.items.push(item);
        this.size++;

        if (!silent) {
            this.fireEvent('add', this, item);
        }
        return this;
    },

    /**
     * Returns the item for the given key OR index
     * @param {String|Number} key Key of the item OR index
     * @return {Mixed}
     */
    get: function(key) {

        if (Ext.isNumber(key)) {
            return this.getAt(key);
        }

        var foundItem = undefined;

        this.each(function(curItem, curKey) {
            if (curKey === key) {
                foundItem = curItem;
            }
        });
        return foundItem;
    },

    /**
     * Returns the item of the given index
     * @param {Number} index Index to fetch item from
     * @return {Mixed}
     */
    getAt: function(index) {

        if (this.items[index] && this.items[index].value) {
            return this.items[index].value;
        }
        return undefined;
    },

    /**
     * Returns the key for a given item
     * @param {Mixed} item Item to fetch key for
     * @return {Number}
     */
    getKey: function(item) {

        var foundKey = undefined;
        this.each(function(curItem, curKey) {

            if (curItem === item) {
                foundKey = curKey;
            }
        });
        return foundKey;
    },

    /**
     * Returns the last item of the collection
     * @return {Mixed}
     */
    last: function() {
        return this.items[(this.items.length-1)].value;
    },

    /**
     * Returns the first item of the collection
     * @return {Mixed}
     */
    first: function() {
        return this.items[0].value;
    },

    /**
     * Clears the whole collection by reassigning the collection's data with an empty Array
     * @param {Boolean} silent If silent, no event will be fired
     * @return {Ext.Collection}
     */
    clear: function(silent) {

        if (!silent) {
            this.fireEvent('beforeclear', this);
        }

        this.items = [];
        this.size = 0;

        if (!silent) {
            this.fireEvent('clear', this);
        }
        return this;
    },

    /**
     * Returns the count of a collection's items
     * @return {Number}
     */
    count: function() {
        return this.items.length;
    },

    /**
     * Returns the clone of the collection.
     * Please note that listeners aren't cloned.
     * @return {Ext.Collection}
     */
    clone: function() {

        var cloneData = Ext.clone(this.items),
            cloneCollection = new Ext.Collection();

        cloneCollection.items = cloneData;
        cloneCollection.size = this.size;
        cloneCollection.keyFn = this.keyFn;

        return cloneCollection;
    },

    /**
     * Calls the given function for each item in the collection
     * @param {Function} fn Function to call per item
     * <div class="mdetail-params"><ul>
     * <li><b>value</b> : Mixed<p class="sub-desc">The item</p></li>
     * <li><b>key</b> : String<p class="sub-desc">The item's key</p></li>
     * <li><b>index</b> : Number<p class="sub-desc">The current index in collection (may change on sort)</p></li>
     * <li><b>length</b> : Number<p class="sub-desc">Length of the collection</p></li>
     * </ul></div>
     * @param {Object} [scope=this] (optional) Callback call scope
     * @return {Ext.Collection}
     */
    each: function(fn, scope) {

        var me = this;
        Ext.Array.each(this.items, function(item, index) {
            fn.call(scope || me, item.value, item.key, index, me.items.length);
        });
        return this;
    },

    /**
     * Returns true of the collection contains the given item
     * @param {Mixed} item Item to search for
     * @return {Boolean}
     */
    contains: function(item) {

        var doesContain = false;
        this.each(function(curItem) {

            if (item === curItem) {
                doesContain = true;
            }
        });
        return doesContain;
    },

    /**
     * Returns true of the collection contains the given key
     * @param {String} key Key to search for
     * @return {Boolean}
     */
    containsKey: function(key) {

        var doesContain = false;
        this.each(function(curItem, curKey) {
            if (key === curKey) {
                doesContain = true;
            }
        });
        return doesContain;
    },

    /**
     * Calls the given search function for every item in the collection.
     * If the search function returns true, this function returns that item, the function returned true for.
     * @param {Function} searchFn Function which gets executed to search per item:
     * <div class="mdetail-params"><ul>
     * <li><b>value</b> : Mixed<p class="sub-desc">The item</p></li>
     * <li><b>key</b> : String<p class="sub-desc">The item's key</p></li>
     * </ul></div>
     * @param {Object} [scope=this] (optional)
     * @return {Mixed}
     */
    findBy: function(searchFn, scope) {

        var me = this, foundItem = undefined;
        this.each(function(item, key) {

            if (searchFn.call(scope || me, item, key)) {
                foundItem = item;
            }
        });
        return foundItem;
    },

    /**
     * Returns the index of the first matching key/value pair in the collection.
     * If no key was given, only the item get's matched.
     * @param {Mixed} item Item to match
     * @param {String} key (optional) Key to match
     * @return {Number}
     */
    findIndex: function(item, key) {

        var foundIndex = undefined;
        this.each(function(curItem, curKey, index) {

            if (item && key) {

                if (curItem === item && curKey === key) {
                    foundIndex = index;
                    return false;
                }
            }

            if (key) {

                if (curKey === key) {
                    foundIndex = index;
                    return false;
                }
            }

            if (item) {

                if (curItem === item) {
                    foundIndex = index;
                    return false;
                }
            }
        });
        return foundIndex;
    },

    /**
     * Calls the given search function for every item in the collection.
     * If the search function returns true, this function returns the index of the item, the function returned true for.
     * @param {Function} searchFn Function which gets executed to search per item:
     * <div class="mdetail-params"><ul>
     * <li><b>value</b> : Mixed<p class="sub-desc">The item</p></li>
     * <li><b>key</b> : String<p class="sub-desc">The item's key</p></li>
     * </ul></div>
     * @param {Object} [scope=this] (optional)
     * @return {Mixed}
     */
    findIndexBy: function(searchFn, scope) {

        var me = this, foundInndex = undefined;
        this.each(function(item, key, index) {

            if (searchFn.call(scope || me, item, key)) {
                foundInndex = index;
            }
        });
        return foundInndex;
    },

    /**
     * Returns an array of the collection.
     * If the flatten parameter is set to true, the keys get lost.
     * Each member of the array is an item in this case.
     * @param {Boolean} [flatten=false] (optional) Indicator if a flat array without keys should be returned
     * @return {Array}
     */
    toArray: function(flatten) {

        if (!flatten) {
            return this.items;
        } else {

            var flatArray = [];
            this.each(function(item) {
                flatArray.push(item);
            });
            return flatArray;
        }
    },

    /**
     * Returns the index of the given item
     * @param {Mixed} item Item to search for
     * @return {Number}
     */
    indexOf: function(item) {
        return this.findIndex(item);
    },

    /**
     * Returns the index of a given key
     * @param {String} key Key to search for
     * @return {Number}
     */
    indexOfKey: function(key) {
        return this.findIndex(undefined, key);
    },

    /**
     * Adds an item at a given index. Please ensure that item = this.buildItem(...)!
     * If you're not sure, use this.add() instead.
     * @param {Number} idx Index to insert at
     * @param {Mixed} item (optional) Item to insert
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    insertItem: function(idx, item, silent) {

        if (!silent) {
            this.fireEvent('beforeadd', this, item);
        }

        Ext.Array.insert(this.items, idx, item);
        this.size++;

        if (!silent) {
            this.fireEvent('add', this, item);
        }
        return this;
    },

    /**
     * Removes items with a given value
     * @param {Mixed} value Value to match and remove
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    removeValues: function(value, silent) {

        if (!silent) {
            this.fireEvent('beforeremove', this, value);
        }

        for (var i=0; i<this.items.length; i++) {
            if (this.items[i].value === value) {
                Ext.Array.remove(this.items, this.items[i]);
            }
        }
        this.size--;

        if (!silent) {
            this.fireEvent('remove', this, value);
        }
        return this;
    },

    /**
     * Removes the given item from the collection
     * @param {Mixed} item Item to remove
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    removeItem: function(item, silent) {

        if (!silent) {
            this.fireEvent('beforeremove', this, item);
        }

        Ext.Array.remove(this.items, item);
        this.size--;

        if (!silent) {
            this.fireEvent('remove', this, item);
        }
        return this;
    },

    /**
     * Removes all items from the collection
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    removeAll: function(silent) {
        return this.clear(silent);
    },

    /**
     * Removes the item of the collection at the given idex
     * @param {Number} idx Index to remove item at
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    removeAt: function(idx, silent) {

        if (!silent) {
            this.fireEvent('beforeremove', this, idx);
        }

        Ext.Array.removeAt(this.items, idx);
        this.size--;

        if (!silent) {
            this.fireEvent('remove', this, idx);
        }
        return this;
    },

    /**
     * Removes item(s) identified by given key from collection
     * @param {String} key Key to remove item(s) for
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    removeAtKey: function(key, silent) {

        var _items = [];

        if (!silent) {
            this.fireEvent('beforeremove', this, key);
        }

        for (var i=0; i<this.items.length; i++) {
            if (this.items[i].key !== key) {
                _items.push(this.items[i]);
            }
        }

        // All items included instead of that to remove by key if found
        this.items = _items;
        this.size--;

        if (!silent) {
            this.fireEvent('remove', this, key);
        }
        return this;
    },

    /**
     * Replaces items with the same values
     * @param {Mixed} oldValue Old value
     * @param {Mixed} newValue New value
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    replaceValues: function(oldValue, newValue, silent) {

        if (!silent) {
            this.fireEvent('beforereplace', this, oldValue, newValue);
        }

        for (var i=0; i<this.items.length; i++) {
            if (this.items[i].value === oldValue) {
                this.items[i].value = newValue;
            }
        }

        if (!silent) {
            this.fireEvent('replace', this, oldValue, newValue);
        }
        return this;
    },

    /**
     * Replaces a specific item of the collection.
     * Assumes valid Collection data structure (ensure that item = this.buildItem(key, value))
     * It you're not sure, use this.replaceAtKey() instead.
     * @param {Mixed} item1 Old item
     * @param {Mixed} item2 New item
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    replaceItem: function(item1, item2, silent) {

        if (!silent) {
            this.fireEvent('beforereplace', this, item1, item2);
        }

        Ext.Array.replace(this.items, item1, item2);

        if (!silent) {
            this.fireEvent('replace', this, this.items[i], item2);
        }
        return this;
    },

    /**
     * Replaces a specific item of the collection
     * @param {String} key Key of item to replace
     * @param {Mixed} value New value for key
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Collection}
     */
    replaceAtKey: function(key, value, silent) {

        if (!silent) {
            this.fireEvent('beforereplace', this, key, value);
        }

        for (var i=0; i<this.items.length; i++) {
            if (this.items[i].key === key) {

                this.items[i].value = value;
                this.size--;
            }
        }

        if (!silent) {
            this.fireEvent('replace', this, key, value);
        }
        return this;
    },

    /**
     * Transforms the collection into an Ext.Map instance
     * @param {Boolean} [flatten=false] (optional)
     * Flattens the data structure so that the map becomes a key -> value map instead of an index -> item object map.
     * This may result in loosing data if the collection held duplicate keys.
     * @return {Ext.Map}
     */
    toMap: function(flatten) {

        var o = Ext.Array.toObject(this.items);
        if (flatten) {
            o = Ext.Array.toObject(this.items, 'key', 'value');
        }
        return Ext.map(o);
    }
});


/**
 * Creates an instance of Ext.Collection.
 * @param {Array} array (optional) Initial array data to be added
 * @param {Boolean} silent (optional) If silent, no event will be fired
 * @member Ext
 * @method collection
 */
Ext.collection = function(array, silent) {

    var c = Ext.create('Ext.Collection');

    // Add all initial given collection items
    if (array) {
        c.addAll(array, silent);
    }
    return c;
};;/**
 * @class Ext.Map
 * @alternateClassName Ext.Set
 * @extends Ext.Class
 * @implements Ext.iter.Interface
 * @mixins Ext.iter.Summable
 * @mixins Ext.iter.Filterable
 *
 * Implements a hash map.
 */
Ext.define('Ext.Map', {

    implement: 'Ext.iter.Interface',

    alternateClassName: 'Ext.Set',

    uses: {
        summable: 'Ext.iter.Summable',
        filterable: 'Ext.iter.Filterable'
    },

    /**
     * Internal data storage
     */
    map: {},

    /**
     * Size of the map
     */
    size: 0,

    /**
     * @property {String} dataPropertyName
     * Name of the data property on the local iterable class implementation
     * @readonly
     */
    dataPropertyName: 'map',

    /**
     * @cfg {Function} [keyFn=autogenerated] Key generating function
     */
    keyFn: function() {
        return Ext.id('map');
    },

    /**
     * Constructor for the map
     * @return void
     */
    constructor: function() {

        this.addEvents(

            /**
             * @event beforeadd
             * This event gets fired before an item gets added to the map
             * @param {Ext.Map} this
             * @param {Mixed} key
             * @param {Mixed} item
             */
            'beforeadd',

            /**
             * @event add
             * This event gets fired when an item gets added to the map
             * @param {Ext.Map} this
             * @param {Mixed} key
             * @param {Mixed} item
             */
            'add',

            /**
             * @event beforeremove
             * This event gets fired before an item gets removed from the map
             * @param {Ext.Map} this
             * @param {Mixed} key
             * @param {Mixed} item
             */
            'beforeremove',

            /**
             * @event remove
             * This event gets fired when an item gets removed from the map
             * @param {Ext.Map} this
             * @param {Mixed} key
             * @param {Mixed} item
             */
            'remove',

            /**
             * @event beforereplace
             * This event gets fired before an item gets replaced in the map
             * @param {Ext.Map} this
             * @param {Mixed} key
             * @param {Mixed} item
             * @param {Mixed} oldItem
             */
            'beforereplace',

            /**
             * @event replace
             * This event gets fired when an item gets replaced in the map
             * @param {Ext.Map} this
             * @param {Mixed} key
             * @param {Mixed} item
             * @param {Mixed} oldItem
             */
            'replace',

            /**
             * @event beforeclear
             * This event gets fired before the map has been cleared
             * @param {Ext.Map} this
             */
            'beforeclear',

            /**
             * @event clear
             * This event gets fired when the map has been cleared
             * @param {Ext.Map} this
             */
            'clear',

            /**
             * @event beforetranspose
             * This event gets fired before the map get's transposed
             * @param {Ext.Map} this
             */
            'beforetranspose',

            /**
             * @event transpose
             * This event gets fired when the map has been transposed
             * @param {Ext.Map} this
             * @param {Ext.Map} transposedMap
             */
            'transpose'
        );

        this.callParent(arguments);

        // Init mixins
        this.initFilterable();

        // Clear map silently
        this.clear(true);
    },

    /**
     * Adds a whole object with all items to the map
     * @param {Object} object Object of data
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Map}
     */
    addAll: function(object, silent) {

        var me = this;

        for (var propName in object) {
            me.add(propName, object[propName], silent);
        }
        return this;
    },

    /**
     * Builds an item out of key and value information
     * @param {String|Object} key Key
     * @param {Mixed} value Value
     * @return {Object}
     */
    buildItem: function(key, value) {

        if (!value) {
            value = key;
            key = this.keyFn()
        }
        return {
            key: key,
            value: value
        }
    },

    /**
     * Adds an item to the map
     *
     * @param {Mixed} key Key or item object (key auto-generated then)
     * @param {Mixed} item (optional) Item can be first argument too
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Map}
     */
    add: function(key, item, silent) {

        var item = this.buildItem(key, item);

        if (!silent) {
            this.fireEvent('beforeadd', this, item.key, item.value);
        }
        this.size++;
        this.map[item.key] = item.value;

        if (!silent) {
            this.fireEvent('add', this, item.key, item.value);
        }
        return this;
    },

    /**
     * Removes an item from the map by key identifier
     * @param {Mixed} key Key identifier
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Map}
     */
    removeAtKey: function(key, silent) {

        if (!silent) {
            this.fireEvent('beforeremove', this, key, this.map[key]);
        }
        this.size--;
        delete this.map[key];

        if (!silent) {
            this.fireEvent('remove', this, key, this.map[key]);
        }
        return this;
    },

    /**
     * Replaces a key of the map
     * @param {Mixed} key Key identifier
     * @param {Mixed} item Item value
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Map}
     */
    replace: function(key, item, silent) {

        if (!silent) {
            this.fireEvent('beforereplace', this, key, item, this.map[key]);
        }
        this.map[key] = item;

        if (!silent) {
            this.fireEvent('replace', this, key, item, this.map[key]);
        }
        return this;
    },

    /**
     * Clears the whole map by reassigning the map with an empty Object
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Map}
     */
    clear: function(silent) {

        if (!silent) {
            this.fireEvent('beforeclear', this);
        }
        this.map = {};
        this.size = 0;

        if (!silent) {
            this.fireEvent('clear', this);
        }
        return this;
    },

    /**
     * Returns the map size
     * @return {Number}
     */
    getCount: function() {
        return this.size;
    },

    /**
     * Returns an item for a given key
     * @param {Mixed} key Key identifier
     * @return {Mixed}
     */
    get: function(key) {
        return this.map[key];
    },

    /**
     * Calls the given function for each property in the map
     * @param {Function} fn Function to call per property
     * <div class="mdetail-params"><ul>
     * <li><b>key</b> : String<p class="sub-desc">The key (property name)</p></li>
     * <li><b>value</b> : Mixed<p class="sub-desc">The value (value data)</p></li>
     * <li><b>object</b> : Object<p class="sub-desc">The map's data object</p></li>
     * </ul></div>
     * @param {Object} scope (optional) Callback call scope
     * @return {Ext.Map}
     */
    each: function(fn, scope) {
        Ext.Object.each(this.map, fn, scope);
        return this;
    },

    /**
     * Clones this map instance. Please note that listeners aren't cloned.
     * @return {Ext.Map}
     */
    clone: function() {

        var cloneData = Ext.clone(this.map),
            cloneMap = new Ext.Map();

        cloneMap.map = cloneData;
        cloneMap.size = this.size;
        cloneMap.keyFn = this.keyFn;

        return cloneMap;
    },

    /**
     * Returns the values of this map as Array
     * @return {Array}
     */
    getValues: function() {

        var values = [];
        this.each(function(key, value) {
           values.push(value);
        });
        return values;
    },

    /**
     * Returns the keys of this map as Array
     * @return {Array}
     */
    getKeys: function() {

        var keys = [];
        this.each(function(key) {
           keys.push(key);
        });
        return keys;
    },

    /**
     * Returns true if the given item is a member of the map
     * @param {Mixed} item Item to check for
     * @return {Boolean}
     */
    contains: function(item) {

        var contains = false;
        this.each(function(key, value) {
           if (value === item) {
               contains = true;
           }
        });
        return contains;
    },

    /**
     * Returns true if the given key is a member of the map
     * @param {Mixed} key Key to check for
     * @return {Boolean}
     */
    containsKey: function(key) {

        var containsKey = false;
        this.each(function(itemKey) {
           if (key === itemKey) {
               containsKey = true;
           }
        });
        return containsKey;
    },

    /**
     * Removes an item from the map
     * @param {Mixed} item Item to remove
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Map}
     */
    remove: function(item, silent) {

        var me = this;
        this.each(function(key, value) {
           if (item === value) {
               me.removeAtKey(key, silent);
           }
        });
        return this;
    },

    /**
     * Returns the internal map
     * @protected
     * @return {Object}
     */
    getMap: function() {
        return this.map;
    },

    /**
     * Returns the count of a map's keys
     * @return {Number}
     */
    count: function() {
        return Ext.Object.count(this.map);
    },

    /**
     * Returns true if the map is empty
     * @return {Boolean}
     */
    isEmpty: function() {
        return (this.count() > 0) ? true : false
    },

    /**
     * Returns an Array out of the Map
     * @param {Boolean} [flatten=false] (optional) Indicator if a flat array without keys should be returned
     * @return {Array}
     */
    toArray: function(flatten) {
        return Ext.toArray(this.map, flatten);
    },

    /**
     * Returns the map's data object
     * @return {Object}
     */
    toObject: function() {
        return this.map;
    },

    /**
     * Returns a map (clone) in which all the keys and values are interchanged.
     * Note that duplicate keys are not allowed in maps. So if you transpose a map
     * and duplicate values occur, the last value wins in it's new role as key.
     * @param {Boolean} silent (optional) If silent, no event will be fired
     * @return {Ext.Map}
     */
    transpose: function(silent) {

        if (!silent) {
            this.fireEvent('beforetranspose', this);
        }

        var cloneMap = this.clone(),
            cloneMapData = cloneMap.map;
            transposedMap = {};

        // Transpose key and value
        Ext.each(cloneMapData, function(value, key) {
            transposedMap[value] = key;
        });

        cloneMap.map = transposedMap;
        cloneMap.size = Ext.Object.count(cloneMap.map);

        if (!silent) {
            this.fireEvent('transpose', this, cloneMap);
        }
        return cloneMap;
    },

    /**
     * Transforms the map into an Ext.Collection instance
     * @return {Ext.Collection}
     */
    toCollection: function() {

        return Ext.collection(
            Ext.Object.toArray(this.map)
        );
    }
});

/**
 * Creates an instance of Ext.Map.
 * @param {Object} object (optional) Initial map data to be added
 * @param {Boolean} silent (optional) If silent, no event will be fired
 * @member Ext
 * @method map
 */
Ext.map = function(object, silent) {

    var m = Ext.create('Ext.Map');

    // Set map if given
    if (object) {
        m.addAll(object, silent);
    }
    return m;
};;// Export "Ext" into global scope
return Ext;

})();