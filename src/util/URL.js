/**
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
Ext.urlAppend = Ext.URL.append;