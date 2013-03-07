/**
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
Ext.include = Ext.Loader.require;