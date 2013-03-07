/**
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
Ext.undef = Ext.String.undef;