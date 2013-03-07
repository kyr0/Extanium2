/**
 * @class Ext.util.TaskRunner
 * @extends Object
 *
 * Implements a manager class for simple to use multitasking inside of JS.
 * Just create a Task using Ext.task({...}) (contains prepared function) and
 * let this or many of those tasks execute in an TaskRunner instance via
 * start(task), stop(task), pause(task) or even stopAll() and pauseAll()
 * for multi-task management.
 *
 * The standard delay between task calls is 10 milliseconds. This can be
 * adjusted by creating a new instance: e.g. Ext.util.TaskRunner(50);
 *
 * Every Task may have arguments, scope and a call time delay bound.
 *
 * To simplify the usage even more, a singleton instance of this call,
 * Ext.TaskManager can be used for concurrent multi-tasking function call-loops.
 */
Ext.define('Ext.util.TaskRunner', {

    extend: 'Object',

    /**
     * Precision in milliseconds (between async task executions)
     */
    interval: 10,

    /**
     * Internal list of threads
     * @private
     */
    threads: [],

    /**
     * Constructs an TaskRunner instance
     * @param {Number} interval Milliseconds to pause between task executions
     */
    constructor: function(interval) {
        this.interval = interval;
        this.threads = [];
    },

    /**
     * Starts a task execution
     * @param {Ext.util.Task|Array} task Task instance or array of tasks to start
     * @param {Number} repeat How often to execute the task (optional, default: 0 (call 1 time)).
     * Setting this parameter to Infinity results in an (not evil) endless call loop.
     * @return {Ext.util.TaskRunner}
     */
    start: function(task, repeat) {

        var me = this;

        if (Ext.isArray(task)) {

            Ext.Array.each(task, function(task) {
                me._startThread(task, repeat);
            });

        } else {
            me._startThread(task, repeat);
        }
        return this;
    },

    /**
     * Starts/Restarts a thread
     * @private
     */
    _startThread: function(task, repeat) {

        // Set to one task execution iteration
        if (!repeat) {
            repeat = 0;
        }

        // Initially set thread/task state
        task.repeat = repeat;
        task.paused = false;

        // Try to fetch maybe already existing thread
        var thread = this.getThreadForTask(task);

        if (!thread) {

            // Build thread
            thread = {
                task: task,
                thread: setInterval(
                    Ext.Function.bind(
                        this._threadLoop,
                        this,
                        [task]
                    ),
                    this.interval
                )
            }

            // Add new thread
            this.threads.push(thread);
        }
    },

    /**
     * Execution of one loop for an arbitrary task
     * @param {Ext.util.Task} task Task instance
     * @private
     */
    _threadLoop: function(task) {

        // Do not execute
        if (task.paused) {
            return;
        }

        // Execute but
        if (task.repeat !== Infinity && task.repeat !== true) {

            if (task.repeat > -1) {

                task.repeat--;
                task.execute();

            } else {

                this.stop(task);
            }

        } else {

            // Execute inifitely
            task.execute();
        }
    },

    /**
     * Pauses a specific task execution
     * @param {Ext.util.Task} task Task instance
     * @return {Ext.util.TaskRunner}
     */
    pause: function(task) {
        task.paused = true;
        return this;
    },

    /**
     * Stops a specific task execution
     * @param {Ext.util.Task} task Task instance
     * @return {Ext.util.TaskRunner}
     */
    stop: function(task) {

        var thread = this.getThreadForTask(task);

        if (!thread) {
            throw "Cannot stop task, it's not running";
        } else {
            clearTimeout(thread.interval);
        }
        return this;
    },

    /**
     * Stop all task executions of all tasks started
     * @return {Ext.util.TaskRunner}
     */
    stopAll: function() {

        this._eachThread(function(thread) {
            clearTimeout(thread.interval);
        });
        return this;
    },

    /**
     * Pauses the execution loop of all started tasks
     * @return {Ext.util.TaskRunner}
     */
    pauseAll: function() {

        this._eachThread(function(thread) {
            thread.task.paused = true;
        });
        return this;
    },

    /**
     * Returns the thread object (task + interval ref.) for a given task.
     * @param {Ext.util.Task} task Task reference
     * @return {Object}
     */
    getThreadForTask: function(task) {

        var result = null;
        this._eachThread(function(thread) {

            if (thread.task === task) {
                result = thread;
            }
        });
        return result;
    },

    /**
     * Calls a given callback for each active thread
     * @param {Function} fn Function to call for each thread
     * @private
     */
    _eachThread: function(fn) {

        Ext.Array.each(this.threads, function(thread) {

            if (typeof thread === 'undefined') {
                return;
            }

            // Call callback function if function is given
            fn(thread);

        }, this);
    }
}, function(ctor) {
		
	/**
	 * @class Ext.TaskManager
	 * @extends Ext.util.TaskRunner
	 * @singleton
	 *
	 * Singleton instance of Ext.TaskRunner.
	 */
	Ext.TaskManager = new ctor();
});


/**
 * Simply executes a task using Ext.TaskManager
 * @member Ext
 * @method run
 * @param {Ext.util.Task} task Task to run (create one using {@Ext#task})
 * @param {Number} [times=1] (optional) How many times the task may executed
 * @return {Ext.TaskManager}
 */
Ext.run = function(task, times) {

    if (!times) {
        times = 1;
    }
    Ext.TaskManager.start(task, --times);

    return Ext.TaskManager;
};