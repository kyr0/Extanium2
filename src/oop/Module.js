/**
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
