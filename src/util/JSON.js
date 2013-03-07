/**
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
Ext.fromJSON = Ext.util.JSON.decode;