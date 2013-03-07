/**
 * @class Ext.Interface
 * @extends Object
 * @private
 *
 * Simple interface implementation. Allows class specifications to be compared with a
 * defined interface and the definition of those interfaces. Currently only checks
 * member existence, not the type/class inheritance of members but this could be
 * implemented easily.
 */
Ext.Interface = {

    /**
     * @property {String} STRING
     * String data type definition for class member interface checks
     * @readonly
     */
    STRING: 'string',

    /**
     * @property {String} FUNCTION
     * Function data type definition for class member interface checks
     * @readonly
     */
    FUNCTION: 'function',

    /**
     * @property {String} BOOLEAN
     * Boolean data type definition for class member interface checks
     * @readonly
     */
    BOOLEAN: 'boolean',

    /**
     * @property {String} NUMBER
     * Number data type definition for class member interface checks
     * @readonly
     */
    NUMBER: 'number',

    /**
     * @property {String} OBJECT
     * Object data type definition for class member interface checks
     * @readonly
     */
    OBJECT: 'object',

    /**
     * @property {String} PRESENCE
     * Presence data type definition for class member interface checks
     * @readonly
     */
    PRESENCE: 'presence',

    /**
     * Defines an interface (to be implemented by classes)
     *
     * @param {String} name Interface name
     * @param {Object} def Interface definition
     * @return {Ext.Interface}
     */
    define: function(name, def) {

        if (Ext.isObject(def)) {
            Ext.Interfaces[name] = def;
        }
        return Ext.Interface;
    },

    /**
     * Checks a given class prototype definition against an
     * interface named inside of the prototype itself ('implement'-property).
     *
     * @param {String} clsName Name of the class to check
     * @param {Object} p Class prototype definition to check
     * @return {Boolean}
     */
    check: function(clsName, p) {

        var iface = null,
            lastFail = false;

        // Fetch interface
        if (p.implement) {

            iface = Ext.Interfaces[p.implement];

            if (!iface) {
                throw "Interface '" + p.implement + "' doesn't exist but is required by class: '" + clsName + "'!";
            }

            // Simple member existence by name check
            for (var iPropName in iface) {

                // Presence-check
                if (!p[iPropName]) {
                    lastFail = Ext.Interface.PRESENCE;
                } else {

                    if (!iface[iPropName]) {

                        throw "The type for class member '" + iPropName + "' specified in interface '" +
                              p.implement + "' is not defined!";
                    }

                    // Check
                    switch (iface[iPropName]) {

                        case Ext.Interface.STRING:
                            if (typeof p[iPropName] !== "string") {
                                lastFail = Ext.Interface.STRING;
                            }
                            break;

                        case Ext.Interface.BOOLEAN:
                            if (typeof p[iPropName] !== "boolean") {
                                lastFail = Ext.Interface.BOOLEAN;
                            }
                            break;

                        case Ext.Interface.NUMBER:
                            if (typeof p[iPropName] !== "number") {
                                lastFail = Ext.Interface.NUMBER;
                            }
                            break;

                        case Ext.Interface.FUNCTION:
                            if (typeof p[iPropName] !== "function") {
                                lastFail = Ext.Interface.FUNCTION;
                            }
                            break;

                        case Ext.Interface.OBJECT:
                            if (typeof p[iPropName] !== "object") {
                                lastFail = Ext.Interface.OBJECT;
                            }
                            break;
                    }
                }

                if (lastFail) {

                    if (lastFail === Ext.Interface.PRESENCE) {

                        throw "Class member '" + iPropName + "' is not a member of class '" + clsName +
                              "' but interface '" + p.implement + "' requires it's implementation!";
                    } else {

                        throw "Class member '" + iPropName + "' of class '" + clsName + "' has wrong type. It's '" +
                              typeof p[iPropName] + "' but interface '" + p.implement + "' requires: '" + lastFail + "'!";
                    }
                }
            }
            return true;

        } else {

            // No interface reference found, that's valid!
            return true;
        }
    }
};

// Init global interfaces map
Ext.Interfaces = {};

/**
 * Defines an interface (to be implemented by classes)
 *
 * @member Ext
 * @method defineInterface
 * @param {String} name Interface name
 * @param {Object} def Interface definition
 * @return {Ext.Interface}
 */
Ext.defineInterface = Ext.Interface.define;