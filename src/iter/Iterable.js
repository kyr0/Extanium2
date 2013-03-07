/**
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
Ext.each = Ext.iter.Iterable.iterate;