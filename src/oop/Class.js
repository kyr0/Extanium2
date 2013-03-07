/**
 * @class Ext.Class
 * @extends Object
 * @alternateClassName Ext.Base
 * @mixins Ext.ClassObservable
 * @mixins Ext.util.Serializable
 *
 * Base class of all other classes specialized for instantiation
 * and dynamic configuration.
 */
Ext.define('Ext.Class', {

    mixins: {
        observable: 'Ext.ClassObservable',
        serializable: 'Ext.util.Serializable'
    },

    alternateClassName: 'Ext.Base',

    extend: 'Object',

    /**
     * Initial config of class instance
     */
    initialConfig: {},

    /**
     * Gets called on instance creation.
     * Maps the given config object onto the
     * local object instance if given.
     *
     * @param {Object} cfg (optional) Overlay config
     * @private
     */
    $constructor: function () {

        if (Ext.isDefined(arguments[0]) &&
            Ext.isObject(arguments[0])) {

            this.initialConfig = arguments[0];

            // Apply config object onto local instance
            Ext.apply(this, this.initialConfig);
        }

        // Register class instance
        Ext.ClassManager.instances.push(this);

        // Process Ext.util.Observable listeners object of this.listeners
        this.processListenersObject();
    },

    /**
     * Returns the initial config passed to the constructor
     * @return {Object}
     */
    getInitialConfig: function () {
        return this.initialConfig;
    },

    /**
     * Calls the parent method of this class using reflection
     *
     * @param {Array} args Arguments to be called with
     * @return {Mixed}
     */
    callParent: function (args) {

        var methodCallerRef = this.callParent.caller,
            constructorFn = this.$superclass.prototype.constructor;

        // Call super-constructor
        if (Ext.isFunction(methodCallerRef.$name)) {

            if (this.$superclass.prototype.$constructor) {
                constructorFn = this.$superclass.prototype.$constructor;
            }
            return constructorFn.apply(this, args || []);
        }

        // Call a super-method
        if (!Ext.isDefined(methodCallerRef)) {
            throw "callParent() failed. Caller not found.";
        }

        if (!Ext.isDefined(this.$superclass.prototype)) {
            throw "callParent() failed. There is no superclass that could be referred to.";
        }

        if (!Ext.isDefined(this.$superclass.prototype[methodCallerRef.$name]) ||
            !Ext.isFunction(this.$superclass.prototype[methodCallerRef.$name])) {
            throw "callParent() failed. There is no parent method (function) named " +
                  methodCallerRef.$name + " in superclass.";
        } else {
            return this.$superclass.prototype[methodCallerRef.$name].apply(this, args || []);
        }
    },

    /**
     * Calls on overridden method of this class using reflection
     *
     * @param {Array} args Arguments to be called with
     * @return {Mixed}
     */
    callOverridden: function (args) {

        var methodCallerRef = this.callOverridden.caller;

        if (!Ext.isDefined(methodCallerRef)) {
            throw "callOverridden() failed. Caller not found.";
        }

        if (!Ext.isDefined(this.$overridden)) {
            throw "callOverridden() failed. This class seems not to have been overridden. Missing overrides map.";
        }

        if (!Ext.isDefined(this.$overridden[methodCallerRef.$name]) ||
            !Ext.isFunction(this.$overridden[methodCallerRef.$name])) {
            throw "callParent() failed. There is no overridden method (function) named " + methodCallerRef.$name + ".";
        } else {
            return this.$overridden[methodCallerRef.$name].apply(this, args || []);
        }
    },

    // Static methods for reflection purposes
    statics: {

        /**
         * @static
         * @inheritable
         * Creates aliases for existing methods of the prototype
         * @param {Object|String} alias Method aliases object or string
         * @param {String} origin (optional) Origin method name
         * @return {Ext.Class}
         */
        createAlias: function (alias, origin) {
            return Ext.ClassManager.addMethodAliases(this.constructor, alias, origin);
        },

        /**
         * @static
         * @inheritable
         * Adds static methods to the class
         *
         * Note: Static members added dynamically in runtime, will not be added to
         * subclasses of this class. Use class inheritance using Ext.define() is needed!
         *
         * @param {Object} statics Members of this object will be added as statics
         * @return {Ext.Class}
         */
        addStatics: function (statics) {
            return Ext.ClassManager.addStatics(this.constructor, statics);
        },

        /**
         * @static
         * @inheritable
         * Adds the given object members to the prototype of this class
         *
         * @param {Object} members Object that contains properties to be overridden in prototype
         * @return {Function}
         */
        addMembers: function (members) {
            return Ext.ClassManager.addMembers(this.$name, members);
        },

        /**
         * @static
         * @inheritable
         * Overrides the class prototype members itself by the given object members
         * @param {Object} overrides Object that contains properties to be overridden in prototype
         * @return {Function}
         */
        override: function (overrides) {
            return Ext.ClassManager.override(this.$name, overrides);
        },

        /**
         * @static
         * @inheritable
         * Overrides the class prototype members itself by the given object members
         * @param {String|Function} subclass Name of function reference to subclass
         * @param {Object} overrides Object that contains properties to be overridden in prototype
         * @return {Function}
         */
        extend: function (subclass, overrides) {
            return Ext.ClassManager.extend(subclass, this.$name, overrides);
        },

        /**
         * @static
         * @inheritable
         * Returns the classes class name
         * @return {String}
         */
        getName: function () {
            return this.$name;
        },

        /**
         * @static
         * @inheritable
         * Creates an instance of this class
         * @param {Object} cfg Instance configuration
         * @param {Function} cb Callback to call when instance was created
         * @return {Mixed}
         */
        create: function (cfg, cb) {
            return Ext.create(this.$name, cfg, cb);
        }
    }

}, function (ctor) {

    // Transform the Ext object into an observable
    // class instance...
    var _Ext = new ctor({
        lazyEventing: true
    });

    Ext.apply(_Ext, Ext);
    Ext = _Ext;
});