/**
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
Ext.error = Ext.Log.error;