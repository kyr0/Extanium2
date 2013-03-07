/**
 * @class Ext.Function
 * @extends Object
 * @singleton
 *
 * Singleton class as helper for working with functions
 */
Ext.Function = {

    /**
     * An empty function
     */
    emptyFn: function () {},

    /**
     * Creates an interceptor function. The passed function is called before the original one. If it returns false,
     * the original one is not called. The resulting function returns the results of the original function.
     * The passed function is called with the parameters of the original function. Example usage:
     * <pre><code>
     var sayHi = function(name){
     alert('Hi, ' + name);
     }

     sayHi('Fred'); // alerts "Hi, Fred"

     // create a new function that validates input without
     // directly modifying the original function:
     var sayHiToFriend = Ext.Function.createInterceptor(sayHi, function(name){
     return name == 'Brian';
     });

     sayHiToFriend('Fred');  // no alert
     sayHiToFriend('Brian'); // alerts "Hi, Brian"
     </code></pre>
     * @param {Function} fn The function to work with
     * @param {Function} fcn The function to call before the original
     * @param {Object} scope (optional) The scope (<code><b>this</b></code> reference) in which the passed function is executed.
     * <b>If omitted, defaults to the scope in which the original function is called or the browser window.</b>
     * @return {Function} The new function
     */
    createInterceptor: function (fn, fcn, scope) {
        var method = fn;
        return !Ext.isFunction(fcn) ?
            this :
            function () {
                var me = this,
                    args = arguments;
                fcn.target = me;
                fcn.method = method;
                return (fcn.apply(scope || me || global, args) !== false) ?
                    method.apply(me || global, args) :
                    null;
            };
    },

    /**
     * Creates a callback that passes arguments[0], arguments[1], arguments[2], ...
     * Call directly on any function. Example: <code>Ext.Function.createCallback(myFunction, arg1, arg2)</code>
     * Will create a function that is bound to those 2 args. <b>If a specific scope is required in the
     * callback, use {@link #createDelegate} instead.</b> The function returned by createCallback always
     * executes in the window scope.
     * <p>This method is required when you want to pass arguments to a callback function.  If no arguments
     * are needed, you can simply pass a reference to the function as a callback (e.g., callback: myFn).
     * However, if you tried to pass a function with arguments (e.g., callback: myFn(arg1, arg2)) the function
     * would simply execute immediately when the code is parsed. Example usage:
     * <pre><code>
     var sayHi = function(name){
     alert('Hi, ' + name);
     }

     // clicking the button alerts "Hi, Fred"
     new Ext.Button({
     text: 'Say Hi',
     renderTo: Ext.getBody(),
     handler: Ext.Function.createCallback(sayHi, 'Fred')
     });
     </code></pre>
     * @param {Function} fn The function to work with
     * @return {Function} The new function
     */
    createCallback: function (fn /*, args...*/) {
        var args = Array.prototype.slice.call(arguments, 1),
            method = fn;
        return function () {
            return method.apply(window, args);
        };
    },

    /**
     * Creates a delegate (callback) that sets the scope to obj.
     * Call directly on any function. Example: <code>this.myFunction.createDelegate(this, [arg1, arg2])</code>
     * Will create a function that is automatically scoped to obj so that the <tt>this</tt> variable inside the
     * callback points to obj. Example usage:
     * <pre><code>
     var sayHi = function(name){
     // Note this use of "this.text" here.  This function expects to
     // execute within a scope that contains a text property.  In this
     // example, the "this" variable is pointing to the btn object that
     // was passed in createDelegate below.
     alert('Hi, ' + name + '. You clicked the "' + this.text + '" button.');
     }

     var btn = new Ext.Button({
     text: 'Say Hi',
     renderTo: Ext.getBody()
     });

     // This callback will execute in the scope of the
     // button instance. Clicking the button alerts
     // "Hi, Fred. You clicked the "Say Hi" button."
     btn.on('click', Ext.Function.createDelegate(sayHi, btn, ['Fred']));
     </code></pre>
     * @param {Function} fn The function to work with
     * @param {Object} scope (optional) The scope (<code><b>this</b></code> reference) in which the function is executed.
     * <b>If omitted, defaults to the browser window.</b>
     * @param {Array} args (optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)
     * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
     * if a number the args are inserted at the specified position
     * @return {Function} The new function
     */
    bind: function (fn, obj, args, appendArgs) {
        var method = fn;
        return function () {
            var callArgs = args || arguments;
            if (appendArgs === true) {
                callArgs = Array.prototype.slice.call(arguments, 0);
                callArgs = callArgs.concat(args);
            } else if (Ext.isNumber(appendArgs)) {
                callArgs = Array.prototype.slice.call(arguments, 0);
                var applyArgs = [appendArgs, 0].concat(args);
                Array.prototype.splice.apply(callArgs, applyArgs);
            }
            return method.apply(obj || window, callArgs);
        };
    },

    /**
     * Calls this function after the number of millseconds specified, optionally in a specific scope. Example usage:
     <pre><code>
     var sayHi = function(name){
     alert('Hi, ' + name);
     }

     // executes immediately:
     sayHi('Fred');

     // executes after 2 seconds:
     Ext.Function.defer(sayHi, 2000, this, ['Fred']);

     // this syntax is sometimes useful for deferring
     // execution of an anonymous function:
     (function(){
     alert('Anonymous');
     }).defer(100);
     </code></pre>
     * @param {Function} fn The function to work with
     * @param {Number} millis The number of milliseconds for the setTimeout call (if less than or equal to 0 the function is executed immediately)
     * @param {Object} scope (optional) The scope (<code><b>this</b></code> reference) in which the function is executed.
     * <b>If omitted, defaults to the browser window.</b>
     * @param {Array} args (optional) Overrides arguments for the call. (Defaults to the arguments passed by the caller)
     * @param {Boolean/Number} appendArgs (optional) if True args are appended to call args instead of overriding,
     * if a number the args are inserted at the specified position
     * @return {Number} The timeout id that can be used with clearTimeout
     */
    defer: function (fn, millis, obj, args, appendArgs) {
        fn = Ext.Function.createDelegate(obj, args, appendArgs);
        if (millis > 0) {
            return setTimeout(fn, millis);
        }
        fn();
        return 0;
    },

    /**
     * Clones a given function
     * @param {Function} fn Function to clone
     * @return {Function}
     */
    clone: function(fn) {
        return function() {
            return fn.apply(this, arguments);
        };
    },

    createBuffered: function(fn, millis, scope, args) {

    },


    createDelayed: function(fn, millis, scope, args) {

    },

    createThrottled: function(fn, milliInterval, scope) {

    },

    interceptAfter: function(object, methodName, fn, scope) {

    },

    interceptBefore: function(object, methodName, fn, scope) {

    },

    pass: function(fn, args, scope) {

    },

    /**
     * Creates a new function from given code and returns it's reference
     * @param code
     */
    create: function(code) {
        return Function(code);
    }
};

// Assign shortcut functions
Ext.bind = Ext.Function.bind;
Ext.callback = Ext.Function.createCallback;
Ext.interceptor = Ext.Function.createInterceptor;
Ext.defer = Ext.Function.defer;
Ext.emptyFn = Ext.Function.emptyFn;
Ext.toFunction = Ext.Function.create;