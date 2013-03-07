/**
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
