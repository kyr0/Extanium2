Ext.data.JsonP.Ext_util_Task({"extends":null,"enum":null,"html_meta":{},"meta":{},"linenr":1,"inheritable":null,"aliases":{},"singleton":false,"subclasses":[],"component":false,"mixins":[],"inheritdoc":null,"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"Task.html#Ext-util-Task","filename":"Task.js"}],"mixedInto":[],"superclasses":[],"members":{"cfg":[],"property":[{"meta":{},"owner":"Ext.util.Task","name":"args","id":"property-args","tagname":"property"},{"meta":{},"owner":"Ext.util.Task","name":"delay","id":"property-delay","tagname":"property"},{"meta":{},"owner":"Ext.util.Task","name":"scope","id":"property-scope","tagname":"property"}],"css_var":[],"method":[{"meta":{},"owner":"Ext.util.Task","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{"chainable":true},"owner":"Ext.util.Task","name":"execute","id":"method-execute","tagname":"method"},{"meta":{},"owner":"Ext.util.Task","name":"fn","id":"method-fn","tagname":"method"}],"event":[],"css_mixin":[]},"alternateClassNames":["Ext.util.DelayedTask"],"override":null,"code_type":"ext_define","private":null,"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.util.DelayedTask</div><h4>Files</h4><div class='dependency'><a href='source/Task.html#Ext-util-Task' target='_blank'>Task.js</a></div></pre><div class='doc-contents'><p>Abstract task implementation as a wrapper for a function\nwith bound scope, arguments and delay information.</p>\n\n<p>The <a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a> and <a href=\"#!/api/Ext.TaskManager\" rel=\"Ext.TaskManager\" class=\"docClass\">Ext.TaskManager</a> classes extend\nthese features by supporting interval calling, starting, stopping, pausing of tasks etc.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-args' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Task'>Ext.util.Task</span><br/><a href='source/Task.html#Ext-util-Task-property-args' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Task-property-args' class='name expandable'>args</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span></div><div class='description'><div class='short'>Arguments to call the task function with ...</div><div class='long'><p>Arguments to call the task function with</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-delay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Task'>Ext.util.Task</span><br/><a href='source/Task.html#Ext-util-Task-property-delay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Task-property-delay' class='name expandable'>delay</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Delay in milliseconds (ms) ...</div><div class='long'><p>Delay in milliseconds (ms)</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-scope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Task'>Ext.util.Task</span><br/><a href='source/Task.html#Ext-util-Task-property-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Task-property-scope' class='name not-expandable'>scope</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'><p>Scope to call the task function in</p>\n</div><div class='long'><p>Scope to call the task function in</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Task'>Ext.util.Task</span><br/><a href='source/Task.html#Ext-util-Task-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.util.Task-method-constructor' class='name expandable'>Ext.util.Task</a>( <span class='pre'>fn, scope, args, delay</span> ) : <a href=\"#!/api/Ext.util.Task\" rel=\"Ext.util.Task\" class=\"docClass\">Ext.util.Task</a></div><div class='description'><div class='short'>Task instance constructor ...</div><div class='long'><p>Task instance constructor</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Task function</p>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Scope object (optional)</p>\n</div></li><li><span class='pre'>args</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>Arguments of the task (optional)</p>\n</div></li><li><span class='pre'>delay</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Delay in milliseconds until call after call() was executed (optional)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.Task\" rel=\"Ext.util.Task\" class=\"docClass\">Ext.util.Task</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-execute' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Task'>Ext.util.Task</span><br/><a href='source/Task.html#Ext-util-Task-method-execute' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Task-method-execute' class='name expandable'>execute</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.util.Task\" rel=\"Ext.util.Task\" class=\"docClass\">Ext.util.Task</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Calls the task function ...</div><div class='long'><p>Calls the task function</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.Task\" rel=\"Ext.util.Task\" class=\"docClass\">Ext.util.Task</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.Task'>Ext.util.Task</span><br/><a href='source/Task.html#Ext-util-Task-method-fn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Task-method-fn' class='name expandable'>fn</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Function to handle as task ...</div><div class='long'><p>Function to handle as task</p>\n</div></div></div></div></div></div></div>","parentMixins":[],"name":"Ext.util.Task","uses":[],"id":"class-Ext.util.Task","tagname":"class","requires":[]});