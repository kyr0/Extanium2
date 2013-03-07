/**
 * @class Ext.Template
 * @extends Object
 *
 * Ext.Template can be used in four different ways:
 *
 *     new Ext.Template(['lala ', '{lol}']).render({lol: 123})
 *     new Ext.Template('lala {lol}').render({lol: 123})
 *     new Ext.Template('lala ', '{lol}').render({lol: 123})
 *
 *     // Compiles the template (instance can be reused -> higher performance when using multiple times)
 *     new Ext.Template({
 *         content: 'lala {lol}', // Array of parts is allowed here too
 *         compile: true
 *     }).render({lol: 123})
 */
Ext.define('Ext.Template', {

    extend: 'Object',

    /**
     * Internal flag if the template is already compiled
     * @private
     */
    compiled: false,

    /**
     * The regular expression used to match template variables.
     * Defaults to:<pre><code>
     re : /\{([\w-]+)\}/g
     </code></pre>
     */
    re: /\{([\w\-]+)\}/g,

    /**
     * Internal content holder
     * @private
     */
    content: '',

    /**
     * Constructor function
     *
     * @param {Object|String|Array} cfg Template config Object or tpl String or Array or template parts
     * @param {String...} parts (optional) More String template parts
     */
    constructor: function (cfg) {

        var me = this,
            a = arguments,
            buf = [],
            content = cfg,
            compile = false;

        // If configuration object, resolve
        if (Ext.isObject(cfg)) {
            content = cfg.content;
            if (cfg.compile) {
                compile = cfg.compile;
            }
        }

        // Process content call-input variants
        if (Ext.isArray(content)) {
            content = content.join("");
        } else if (a.length > 1) {
            Ext.each(a, function (v) {
                if (Ext.isObject(v)) {
                    Ext.apply(me, v);
                } else {
                    buf.push(v);
                }
            });
            content = buf.join('');
        }

        // Persist content instance-locally
        me.content = content;

        // Compile if requested (only possible with Object as param)
        if (compile) {
            me.compile();
        }
    },

    /**
     * Returns an content fragment of this template with the specified <code>values</code> applied.
     * @param {Object/Array} values
     * The template values. Can be an array if the params are numeric (i.e. <code>{0}</code>)
     * or an object (i.e. <code>{foo: 'bar'}</code>).
     * @return {String} The content fragment
     */
    render: function (values) {
        var me = this;

        return me.compiled ?
            me.compiled(values) :
            me.content.replace(me.re, function (m, name) {
                return values[name] !== undefined ? values[name] : "";
            });
    },

    /**
     * Compiles the template into an internal function, eliminating the RegEx overhead.
     * @return {Ext.Template} this
     */
    compile: function () {
        var me = this,
            sep = "+";

        function fn(m, name) {
            name = "values['" + name + "']";
            return "'" + sep + '(' + name + " == undefined ? '' : " + name + ')' + sep + "'";
        }

        eval("this.compiled = function(values){ return " + ("'") +
            me.content.replace(/\\/g, '\\\\').replace(/(\r\n|\n)/g, '\\n').replace(/'/g, "\\'").replace(this.re, fn) +
            ("';};"));
        return me;
    }
});

// Shortcuts
Ext.template = function(cfg) {
    return Ext.create('Ext.Template', cfg);
};