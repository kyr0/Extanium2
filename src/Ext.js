/**
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
};