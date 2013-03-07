/**
 * @class Ext.util.Task
 * @extends Object
 * @alternateClassName Ext.util.DelayedTask
 *
 * Abstract task implementation as a wrapper for a function
 * with bound scope, arguments and delay information.
 *
 * The Ext.util.TaskRunner and Ext.TaskManager classes extend
 * these features by supporting interval calling, starting, stopping, pausing of tasks etc.
 */
Ext.define('Ext.util.Task', {

    extend: 'Object',

    /**
     * Function to handle as task
     */
    fn: Ext.emptyFn,

    /**
     * Delay in milliseconds (ms)
     */
    delay: 0,

    /**
     * Arguments to call the task function with
     */
    args: [],

    /**
     * Scope to call the task function in
     */
    scope: this,

    /**
     * Task instance constructor
     *
     * @param {Function} fn Task function
     * @param {Object} scope Scope object (optional)
     * @param {Array} args Arguments of the task (optional)
     * @param {Number} delay Delay in milliseconds until call after call() was executed (optional)
     */
    constructor: function(fn, scope, args, delay) {
        this.fn = fn;
        this.scope = scope;
        this.args = args;
        this.delay = delay;
    },

    /**
     * Calls the task function
     * @return {Ext.util.Task}
     */
    execute: function() {

        var me = this, t = setTimeout(function() {
            me.fn.apply(me.scope, me.args);
            clearTimeout(t);
        }, this.delay);

        return this;
    }
});

// Shortcuts
Ext.task = function(fn, scope, args, delay) {
    return Ext.create('Ext.util.Task', [fn, scope, args, delay]);
};
