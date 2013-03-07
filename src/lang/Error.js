/**
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
