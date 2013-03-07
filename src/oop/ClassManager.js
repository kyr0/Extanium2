/**
 * @class Ext.ClassManager
 * @extends Object
 *
 * Implements the central API for OOP-style JavaScript programming, multiple inheritance and more advanced stuff.
 */
Ext.ClassManager = {

    /**
     * @property {Array} instances
     * Class instances already created
     * @readonly
     */
    instances: [],

    /**
     * Extends one class to create a subclass and optionally overrides members with the passed literal.
     *
     * @param {String|Function} superclass The constructor of class being extended
     * @param {String|Object} Class member object
     * @param {Object} overrides <p>A literal with members which are copied into the subclass's
     * prototype, and are therefore shared between all instances of the new class.</p>
     * <p>This may contain a special member named <tt><b>constructor</b></tt>. This is used
     * to define the constructor of the new class, and is returned. If this property is
     * <i>not</i> specified, a constructor is generated and returned which just calls the
     * superclass's constructor passing on its parameters.</p>
     * <p><b>It is essential that you call the superclass constructor in any provided constructor. See example code.</b></p>
     * @return {Function} The subclass constructor from the <code>overrides</code> parameter, or a generated one if not provided.
     */
    extend: (function () {

        var io = function (o) {
            for (var m in o) {
                if (this) {
                    this[m] = o[m];
                }
            }
        };
        var oc = Object.prototype.constructor;

        return function (superclass, subclass, overrides) {


            // If sb or sp is undefined
            if (!Ext.isDefined(superclass) || !Ext.isDefined(subclass)) {
                return null;
            }

            // Resolve string superclass name
            if (Ext.isString(superclass)) {
                superclass = Ext.resolveNamespace(superclass);
            }

            // Resolve string subclass name
            if (Ext.isString(subclass)) {
                subclass = Ext.resolveNamespace(subclass);
            }

            if (Ext.isObject(subclass)) {

                overrides = subclass;
                subclass = superclass;

                if (overrides.$constructor) {
                    superclass = overrides.$constructor;
                } else if (overrides.constructor !== oc) {
                    superclass = overrides.constructor;
                } else {
                    superclass = function () {
                        subclass.apply(this, arguments);
                    };
                }

                var F = function () {
                    },
                    superclassPrototype,
                    subclassPrototype = subclass.prototype;

                F.prototype = subclassPrototype;
                superclassPrototype = superclass.prototype = new F();
                superclassPrototype.constructor = superclass;

                superclassPrototype.override = io;

                Ext.override(superclass, overrides);

                return superclass;
            }
        };
    }()),

    /**
     * Defines a class prototype in Ext JS 4-style.
     *
     * Currently supported:
     * - singleton
     * - extend
     * - statics
     * - mixins (multiple inheritance)
     * - implicit naming (given string name references class constructor function)
     * - callback after define
     * - alternateClassName name
     * - auto dependency check -> but no autoloading! (antipattern!)
     *
     *  Example of old style Ext JS 3 (also works):
     *
     *  var lala = Ext.extend(Object, {
     *    muah1: true
     *  });
     *  new lala();
     *
     *  // You can now use:
     *
     *  Ext.define("lulu", {
     *     haha: 15
     *  });
     *
     *  Ext.define("lala2.lala", {
     *      implement: 'InterfaceSmth',
     *      muah: false,
     *      extend: 'lala',
     *      mixins: ['lulu'],
     *      statics: {
     *          uha: true
     *      },
     *      alternateClassName: 'another.classname',
     *      singleton: true
     *  }, function(classRef) {
     *      console.debug('yeah, class was defined!');
     *  });
     *
     *  Ext.log(another.classname);
     *
     * @param {String} className Name of the class (even with namespaces)
     * @param {Object} classDef Class definition
     * @param {Function} callback Callback function called when class is defined
     * @return {Function} Class proto constructor function
     */
    define: function () {

        var nameOfClass = arguments[0],
            classDef = arguments[1],
            cb = arguments[2],
            superClassRef = Object,
            ClsCtor;

        // Anonymous inner function to manage the class defining
        var defineFn = function () {

            // Manage class extension and return super class prototype reference
            superClassRef = Ext.ClassManager._manageExtending(classDef, nameOfClass);

            // Handle multiple inheritance, mixins
            classDef = Ext.ClassManager._manageMixing(classDef, nameOfClass);

            // Annotate the method name to any function
            // to allow callParent() to know their names.
            for (var mName in classDef) {

                if (Ext.isFunction(classDef[mName])) {

                    //console.debug("Annotating", classDef[mName], mName);
                    classDef[mName]['$name'] = mName;
                }
            }

            // Extend the extending class of object
            ClsCtor = Ext.extend(superClassRef, classDef);

            // Annotate the superclass on instance level
            ClsCtor.prototype['$superclass'] = superClassRef;
            ClsCtor.prototype['$name'] = nameOfClass;

            // Set debug point for WebKit-based browsers / debuggers
            ClsCtor.$className = nameOfClass;

            if (ClsCtor == null) {
                throw "The class definition of class named " + nameOfClass +
                    " failed. Maybe the inheritance function references are undefined.";
            }

            // Append statics to the prototype
            ClsCtor = Ext.ClassManager._manageStatics(classDef, ClsCtor);

            // If singleton, instantiate
            if (Ext.isDefined(classDef.singleton) &&
                classDef.singleton == true) {

                // Executing this results in a bad naming of the variable.
                // After executing, there is an instance reference stored in clsCtor.
                ClsCtor = new ClsCtor();
            }

            // Reference the given class name with the proto
            Ext.assignNamespace(nameOfClass, ClsCtor);

            // Manage alternate class names
            Ext.ClassManager._manageAlternateClassNames(classDef, ClsCtor);

            // Check interface implementation (throws error if not valid impl.)
            Ext.Interface.check(nameOfClass, classDef);

            // Call after-create callback function
            if (cb) {
                cb(ClsCtor);
            }

            // Return reference to class proto constructor
            return ClsCtor;
        };

        if (!Ext.isDefined(nameOfClass)) {
            throw "Error: Please specify a class name when using Ext.define()!";
        }

        if (!Ext.isDefined(classDef)) {

            throw "Error: Please provide a class definition object for class '" +
                nameOfClass + "' when using Ext.define()!";
        }

        // Dereference extend class
        if (!Ext.isDefined(classDef.extend)) {
            classDef.extend = 'Ext.Class';
        }

        if (Ext.Loader.enabled) {

            // Auto-load required classes, then define the class
            Ext.ClassManager._loadRequiredClasses(classDef, defineFn);

        } else {
            return defineFn();
        }
    },

    /**
     * Assigns alternate names to a class
     * @param {Object} classDef Prototype class definition
     * @param {Function} clsCtor Class constructor function
     * @return void
     * @private
     */
    _manageAlternateClassNames: function (classDef, clsCtor) {

        // Assign alternateClassName name if given
        if (Ext.isDefined(classDef.alternateClassName)) {

            // Assign more than one alternateClassName
            if (Ext.isArray(classDef.alternateClassName)) {

                for (var i = 0; i < classDef.alternateClassName.length; i++) {
                    Ext.assignNamespace(classDef.alternateClassName[i], clsCtor);
                }
            }

            // Assign one alternateClassName
            if (Ext.isString(classDef.alternateClassName)) {
                Ext.assignNamespace(classDef.alternateClassName, clsCtor);
            }
        }
    },

    /**
     * Manages class extension; returns the reference to the superclass.
     *
     * @param {Object} classDef Class definition object (prototype)
     * @param {String} nameOfClass Name of the class
     * @return {Function}
     * @private
     */
    _manageExtending: function (classDef, nameOfClass) {

        var superClassRef;

        if (Ext.isDefined(classDef.extend)) {

            var clsNotPresentErr = "Error: The class '" + classDef.extend +
                "' the class '" + nameOfClass + "' should extend from isn't present.";
            try {
            	// e.g. classDef.extend === "Object", then it's not contained in Ext GLOBAL in pre-init() state
                superClassRef = eval("(Ext.GLOBAL." + classDef.extend + "||" + classDef.extend + ")");

                if (!Ext.isDefined(superClassRef)) {
                    throw clsNotPresentErr;
                }

            } catch (e) {
                throw clsNotPresentErr;
            }
        }
        return superClassRef;
    },

    /**
     * Manages class extension by multiple inheritance; returns the modified class prototype
     *
     * @param {Object} classDef Class definition object (prototype)
     * @param {String} nameOfClass Name of the class
     * @return {Object}
     * @private
     */
    _manageMixing: function (classDef, nameOfClass) {

        var currentMixRef, mixinClone;

        // Alias to even support 'uses'-syntax
        if (classDef.uses) {
            classDef.mixins = classDef.uses;
        }

        // Handle multiple inheritance, mixins
        if (Ext.isDefined(classDef.mixins) && Ext.isObject(classDef.mixins)) {

            for (var mixinLocalRefName in classDef.mixins) {

                try {

                    currentMixRef = eval("(Ext.GLOBAL." + classDef.mixins[mixinLocalRefName] + ")");

                } catch (e) {

                    throw "Error: The class '" + classDef.mixins[mixinLocalRefName] +
                        "' you want to mixin in '" + nameOfClass + "' is not present.";
                }

                // Apply prototype objects of mixins onto classDef by native order
                if (Ext.isDefined(currentMixRef) && Ext.isFunction(currentMixRef)) {

                    mixinClone = Ext.clone(currentMixRef.prototype);
                    delete mixinClone.constructor;

                    // Reference the prototype object of the mixin on it's local inner-mixin property name
                    classDef.mixins[mixinLocalRefName] = mixinClone;

                    // Apply prototype of mixin onto class
                    Ext.apply(classDef, mixinClone);
                }
            }

            for (var i = 0; i < classDef.mixins.length; i++) {

                try {
                    currentMixRef = eval("(Ext.GLOBAL." + classDef.mixins[i] + ")");
                } catch (e) {

                    throw "Error: The class '" + classDef.mixins[i] +
                        "' you want to mixin in '" + nameOfClass + "' is not present.";
                }
            }
        }
        return classDef;
    },

    /**
     * Assigns the statics onto the class constructor
     *
     * @param {Object} classDef Class definition prototype object
     * @param {Function} clsCtor Class constructor function
     * @return {Function}
     * @private
     */
    _manageStatics: function (classDef, clsCtor) {

        var superProto = clsCtor.prototype['$superclass'].prototype,
            name;

        if (superProto.statics) {

            for (name in superProto.statics) {
                clsCtor[name] = Ext.Function.bind(superProto.statics[name], clsCtor.prototype);
            }
        }

        // Apply all statics statically
        for (name in classDef.statics) {

            // Bind the class def to the static methods so they can even work
            // with this.* on constructor function level
            clsCtor[name] = Ext.Function.bind(classDef.statics[name], clsCtor.prototype);
        }
        return clsCtor;
    },

    /**
     * Collects the classes to be loaded dynamically and
     * calls the Ext.Loader to load them. Afterwards
     * @param classDef
     * @param cb
     * @private
     */
    _loadRequiredClasses: function (classDef, cb) {

        //console.debug('_loadRequiredClasses', classDef);

        var classesToLoad = [];

        if (classDef.requires && Ext.isArray(classDef.requires)) {

            // Load required classes
            for (var i = 0; i < classDef.requires.length; i++) {
                classesToLoad.push(classDef.requires[i]);
            }
        }

        // Load extending class
        if (classDef.extend && !Ext.resolveNamespace(classDef.extend)) {
            classesToLoad.push(classDef.extend);
        }

        // Load interface
        if (classDef.implement && !Ext.resolveNamespace(classDef.implement)) {
            classesToLoad.push(classDef.implement);
        }

        // Load mixin classes which are not already loaded
        if (classDef.mixins && Ext.isObject(classDef.mixins)) {

            for (var mixinPropName in classDef.mixins) {

                if (!Ext.resolveNamespace(classDef.mixins[mixinPropName])) {
                    classesToLoad.push(classDef.mixins[mixinPropName]);
                }
            }
        }

        if (classesToLoad.length > 0) {

            try {

                Ext.require(classesToLoad, cb);

            } catch (e) {

                throw "Class cannot be defined because of requires, mixins or extend class(es) couldn't be loaded.";
            }

        } else {
            cb();
        }
    },

    /**
     * Resolves a namespace and returns it's object reference.
     * Creates empty namespaces if not existing until the last
     * namespace/class name.
     *
     * @param {String} name Namespace name
     * @param {Boolean} fetchLastExistingScope If true, the method never returns undefined,
     * it creates namespaces when not existing until the last
     * @return {Mixed}
     */
    resolveNamespace: function (name, fetchLastExistingScope) {

        var scope,
            splits = name.split("."),
            len = splits.length;

        // Resolving from global or native type
        if (len === 1) {
        	
        	console.log('Namespace resolution with one part!');

            try {
                scope = eval("(Ext.GLOBAL." + name + ")");
            } catch (e) {
            	
                // scope is undefined, return global scope
                return Ext.GLOBAL;

            }
            return scope;

        } else {
        	
        	console.log('Namespace resolution with more parts.');
        	
            scope = Ext.GLOBAL[splits[0]] = Ext.GLOBAL[splits[0]] || {};
        }

        var splitIter = 1;
        Ext.each(splits.slice(1), function (nameSplit) {

            splitIter++;

            if (len === splitIter) {

                if (fetchLastExistingScope && !scope[nameSplit]) {
                    return scope;
                }
                scope = scope[nameSplit];
            } else {
                scope = scope[nameSplit] = scope[nameSplit] || {};
            }
        });
        return scope;
    },

    /**
     * Returns the class name from a given namespace (last sibling)
     *
     * @param {String} name Namespace name
     * @return {String}
     */
    getClassnameOfNamespace: function (name) {

        var nameSplit = name.split('.');
        return nameSplit[nameSplit.length - 1];
    },

    /**
     * Assigns the given reference on a resolved class namespace.
     *
     * @param {String} name Namespace name
     * @param {Mixed} ref Whatever to assign
     * @return {Mixed}
     */
    assignNamespace: function (name, ref) {

        var ns = Ext.resolveNamespace(name, true);
        ns[Ext.getClassnameOfNamespace(name)] = ref;
    },

    /**
     * Creates an instance of the named class with an instance overlay to use.
     *
     * @param {String} className Name of the class (even with namespaces)
     * @param {Object} instOverlay Overlay configuration for the instance
     * @return {Object} Class instance
     */
    create: function(className, instOverlay, cb) {

        var ret,
            p = Ext.ClassManager.resolveNamespace(className);

        if (!instOverlay) {
            instOverlay = {};
        }

        var instanciate = function (P) {

            var inst = null;
            if (Ext.isArray(instOverlay)) {

                // Somewhat crazy construction to call a class constructor
                // with more than one argument at once in target instance scope
                var Cfn = function() {
                    Cfn.prototype.constructor.apply(this, instOverlay);
                };
                Cfn.prototype = P.prototype;
                inst = new Cfn;

            } else {
                inst = new P(instOverlay);
            }

            // Reflection/Inspection info
            inst.$className = className;

            if (cb) {
                cb(inst);
            }
            return inst;
        };

        if (!Ext.isFunction(p)) {

            try {

                Ext.require(className, function () {

                    var p = Ext.ClassManager.resolveNamespace(className);
                    ret = instanciate(p);
                });

            } catch (e) {
                throw e;
            }
        } else {
            ret = instanciate(p);
        }
        return ret;
    },

    /**
     * Adds a list of functions to the prototype of an existing class,
     * overwriting any existing methods with the same name.
     * Usage:<pre><code>
     Ext.override(MyClass, {
     newMethod1: function(){
     // etc.
     },
     newMethod2: function(foo){
     // etc.
     }
     });
     </code></pre>
     * Note: The method Ext.ClassManager.addMembers() is an alias method of this method.
     *
     * @param {Object|String} origclass The class to override
     * @param {Object} overrides The list of functions to add to origClass.
     * This should be specified as an object literal containing one or more methods.
     * @method override
     */
    override: function (origclass, overrides) {

        var origClassName = origclass;
        if (Ext.isString(origclass)) {
            origclass = Ext.resolveNamespace(origclass);
        }

        if (!origclass) {
            throw "The class " + origClassName + " meant to be overridden is not defined.";
        }

        if (overrides) {

            var p = origclass.prototype;

            p.$overridden = {};

            for (var overridePropName in overrides) {

                if (overrides[overridePropName]) {

                    //console.debug('overriding', overridePropName, ' in ', origclass);

                    if (Ext.isFunction(overrides[overridePropName])) {
                        overrides[overridePropName]['$name'] = overridePropName;
                    }

                    p.$overridden[overridePropName] = Ext.clone(p[overridePropName]);
                    p[overridePropName] = overrides[overridePropName];
                }
            }
            return p.constructor;
        }
    },

    /**
     * Adds static methods to the class
     *
     * Note: Static members added dynamically in runtime, will not be added to
     * subclasses of this class. Use class inheritance using Ext.define() is needed!
     *
     * @param {Function} clsCtor Class constructor function
     * @param {Object} statics Members of this object will be added as statics
     * @return {Ext.Class}
     */
    addStatics: function (clsCtor, statics) {

        Ext.apply(clsCtor, statics);
        return clsCtor;
    },

    /**
     * Creates aliases for existing methods of the prototype
     *
     * @param {Function} clsCtor Class constructor function
     * @param {Object|String} alias Method aliases object or string
     * @param {String} origin (optional)Origin method name
     * @return {Ext.Class}
     */
    addMethodAliases: function (clsCtor, alias, origin) {

        var p = clsCtor.prototype,
            createMethodAlias = function (aliasName, originName) {

                if (!Ext.isString(originName)) {
                    throw 'Cannot create alias method with name ' + aliasName +
                        ', origin function name is not a String: ' + originName;
                }

                if (!p[originName]) {

                    throw 'Cannot create alias method with name ' + aliasName + ', origin function ' + originName +
                        ' of class ' + p.$name + ' is not existing.';
                }

                // Create alias for method
                p[aliasName] = p[originName];
            };

        if (Ext.isObject(alias)) {

            // Create aliases for many methods
            for (var memberAliasName in alias) {
                createMethodAlias(memberAliasName, alias[memberAliasName]);
            }

        } else {

            createMethodAlias(alias, origin);
        }
        return clsCtor;
    },

    /**
     * Creates namespaces to be used for scoping variables and classes so that they are not global.
     * Specifying the last node of a namespace implicitly creates all other nodes. Usage:
     * <pre><code>
     Ext.namespace('Company', 'Company.data');
     Ext.namespace('Company.data'); // equivalent and preferable to above syntax
     Company.Widget = function() { ... }
     Company.data.CustomStore = function(config) { ... }
     </code></pre>
     * @param {String} namespace1
     * @param {String} namespace2
     * @param {String} etc
     * @return {Object}
     * The namespace object. (If multiple arguments are passed, this will be the last namespace created)
     * @method namespace
     */
    namespace: function () {
        var o, d;

        Ext.each(arguments, function (v) {
            d = v.split(".");
            o = window[d[0]] = window[d[0]] || {};
            Ext.each(d.slice(1), function (v2) {
                o = o[v2] = o[v2] || {};
            });
        });
        return o;
    },
    
    /**
     * Finalizes the namespacing by moving Ext.GLOBAL 
     * objet members into the new GLOBAL scope first.
     * Afterwards, the new GLOBAL reference gets referenced
     * into Ext.GLOBAL so that all future namespace definitions
     * are automatically scoped into the real GLOBAL scope.
 	 * @param {Object} GLOBAL New GLOBAL scope object reference
 	 * @return void
     */
    finalizeNamespacing: function(GLOBAL) {
    	
    	// Export Ext into the GLOBAL scope
    	GLOBAL.Ext = Ext;
    	
    	// Apply collected pseudo-global objects 
    	// really into the global scope...
    	Ext.apply(GLOBAL.Ext, Ext.GLOBAL.Ext);
    	
    	// Set internal GLOBAL scope reference
    	Ext.GLOBAL = GLOBAL;
    }
};

// Assign shortcut references
Ext.create = Ext.ClassManager.create;
Ext.extend = Ext.ClassManager.extend;
Ext.assignNamespace = Ext.ClassManager.assignNamespace;
Ext.override = Ext.ClassManager.override;
Ext.ClassManager.addMembers = Ext.ClassManager.override;
Ext.define = Ext.ClassManager.define;
Ext.namespace = Ext.ClassManager.namespace;
Ext.resolveNamespace = Ext.ClassManager.resolveNamespace;
Ext.getClassnameOfNamespace = Ext.ClassManager.getClassnameOfNamespace;
Ext.ns = Ext.ClassManager.namespace;