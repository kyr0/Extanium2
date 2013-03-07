Ext.data.JsonP.Ext_TaskManager({"extends":"Ext.util.TaskRunner","enum":null,"html_meta":{},"meta":{},"linenr":224,"inheritable":null,"aliases":{},"singleton":true,"subclasses":[],"component":false,"mixins":[],"inheritdoc":null,"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"TaskRunner.html#Ext-TaskManager","filename":"TaskRunner.js"}],"mixedInto":[],"superclasses":["Ext.util.TaskRunner"],"members":{"cfg":[],"property":[{"meta":{},"owner":"Ext.util.TaskRunner","name":"interval","id":"property-interval","tagname":"property"},{"meta":{"private":true},"owner":"Ext.util.TaskRunner","name":"threads","id":"property-threads","tagname":"property"}],"css_var":[],"method":[{"meta":{},"owner":"Ext.util.TaskRunner","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{"private":true},"owner":"Ext.util.TaskRunner","name":"_eachThread","id":"method-_eachThread","tagname":"method"},{"meta":{"private":true},"owner":"Ext.util.TaskRunner","name":"_startThread","id":"method-_startThread","tagname":"method"},{"meta":{"private":true},"owner":"Ext.util.TaskRunner","name":"_threadLoop","id":"method-_threadLoop","tagname":"method"},{"meta":{},"owner":"Ext.util.TaskRunner","name":"getThreadForTask","id":"method-getThreadForTask","tagname":"method"},{"meta":{"chainable":true},"owner":"Ext.util.TaskRunner","name":"pause","id":"method-pause","tagname":"method"},{"meta":{"chainable":true},"owner":"Ext.util.TaskRunner","name":"pauseAll","id":"method-pauseAll","tagname":"method"},{"meta":{"chainable":true},"owner":"Ext.util.TaskRunner","name":"start","id":"method-start","tagname":"method"},{"meta":{"chainable":true},"owner":"Ext.util.TaskRunner","name":"stop","id":"method-stop","tagname":"method"},{"meta":{"chainable":true},"owner":"Ext.util.TaskRunner","name":"stopAll","id":"method-stopAll","tagname":"method"}],"event":[],"css_mixin":[]},"alternateClassNames":[],"override":null,"private":null,"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.util.TaskRunner' rel='Ext.util.TaskRunner' class='docClass'>Ext.util.TaskRunner</a><div class='subclass '><strong>Ext.TaskManager</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/TaskRunner.html#Ext-TaskManager' target='_blank'>TaskRunner.js</a></div></pre><div class='doc-contents'><p>Singleton instance of Ext.TaskRunner.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-interval' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.TaskRunner' rel='Ext.util.TaskRunner' class='defined-in docClass'>Ext.util.TaskRunner</a><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-property-interval' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner-property-interval' class='name expandable'>interval</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>Precision in milliseconds (between async task executions) ...</div><div class='long'><p>Precision in milliseconds (between async task executions)</p>\n<p>Defaults to: <code>10</code></p></div></div></div><div id='property-threads' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.TaskRunner' rel='Ext.util.TaskRunner' class='defined-in docClass'>Ext.util.TaskRunner</a><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-property-threads' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner-property-threads' class='name expandable'>threads</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Internal list of threads ...</div><div class='long'><p>Internal list of threads</p>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.TaskRunner' rel='Ext.util.TaskRunner' class='defined-in docClass'>Ext.util.TaskRunner</a><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.util.TaskRunner-method-constructor' class='name expandable'>Ext.TaskManager</a>( <span class='pre'>interval</span> ) : <a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a></div><div class='description'><div class='short'>Constructs an TaskRunner instance ...</div><div class='long'><p>Constructs an TaskRunner instance</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>interval</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>Milliseconds to pause between task executions</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_eachThread' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.TaskRunner' rel='Ext.util.TaskRunner' class='defined-in docClass'>Ext.util.TaskRunner</a><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-method-_eachThread' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner-method-_eachThread' class='name expandable'>_eachThread</a>( <span class='pre'>fn</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Calls a given callback for each active thread ...</div><div class='long'><p>Calls a given callback for each active thread</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Function to call for each thread</p>\n</div></li></ul></div></div></div><div id='method-_startThread' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.TaskRunner' rel='Ext.util.TaskRunner' class='defined-in docClass'>Ext.util.TaskRunner</a><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-method-_startThread' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner-method-_startThread' class='name expandable'>_startThread</a>( <span class='pre'>task, repeat</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Starts/Restarts a thread ...</div><div class='long'><p>Starts/Restarts a thread</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>task</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>repeat</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_threadLoop' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.TaskRunner' rel='Ext.util.TaskRunner' class='defined-in docClass'>Ext.util.TaskRunner</a><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-method-_threadLoop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner-method-_threadLoop' class='name expandable'>_threadLoop</a>( <span class='pre'>task</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Execution of one loop for an arbitrary task ...</div><div class='long'><p>Execution of one loop for an arbitrary task</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>task</span> : <a href=\"#!/api/Ext.util.Task\" rel=\"Ext.util.Task\" class=\"docClass\">Ext.util.Task</a><div class='sub-desc'><p>Task instance</p>\n</div></li></ul></div></div></div><div id='method-getThreadForTask' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.TaskRunner' rel='Ext.util.TaskRunner' class='defined-in docClass'>Ext.util.TaskRunner</a><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-method-getThreadForTask' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner-method-getThreadForTask' class='name expandable'>getThreadForTask</a>( <span class='pre'>task</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Returns the thread object (task + interval ref.) for a given task. ...</div><div class='long'><p>Returns the thread object (task + interval ref.) for a given task.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>task</span> : <a href=\"#!/api/Ext.util.Task\" rel=\"Ext.util.Task\" class=\"docClass\">Ext.util.Task</a><div class='sub-desc'><p>Task reference</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-pause' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.TaskRunner' rel='Ext.util.TaskRunner' class='defined-in docClass'>Ext.util.TaskRunner</a><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-method-pause' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner-method-pause' class='name expandable'>pause</a>( <span class='pre'>task</span> ) : <a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Pauses a specific task execution ...</div><div class='long'><p>Pauses a specific task execution</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>task</span> : <a href=\"#!/api/Ext.util.Task\" rel=\"Ext.util.Task\" class=\"docClass\">Ext.util.Task</a><div class='sub-desc'><p>Task instance</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-pauseAll' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.TaskRunner' rel='Ext.util.TaskRunner' class='defined-in docClass'>Ext.util.TaskRunner</a><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-method-pauseAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner-method-pauseAll' class='name expandable'>pauseAll</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Pauses the execution loop of all started tasks ...</div><div class='long'><p>Pauses the execution loop of all started tasks</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-start' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.TaskRunner' rel='Ext.util.TaskRunner' class='defined-in docClass'>Ext.util.TaskRunner</a><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-method-start' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner-method-start' class='name expandable'>start</a>( <span class='pre'>task, repeat</span> ) : <a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Starts a task execution ...</div><div class='long'><p>Starts a task execution</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>task</span> : <a href=\"#!/api/Ext.util.Task\" rel=\"Ext.util.Task\" class=\"docClass\">Ext.util.Task</a>|<a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>Task instance or array of tasks to start</p>\n</div></li><li><span class='pre'>repeat</span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a><div class='sub-desc'><p>How often to execute the task (optional, default: 0 (call 1 time)).\nSetting this parameter to Infinity results in an (not evil) endless call loop.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stop' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.TaskRunner' rel='Ext.util.TaskRunner' class='defined-in docClass'>Ext.util.TaskRunner</a><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner-method-stop' class='name expandable'>stop</a>( <span class='pre'>task</span> ) : <a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Stops a specific task execution ...</div><div class='long'><p>Stops a specific task execution</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>task</span> : <a href=\"#!/api/Ext.util.Task\" rel=\"Ext.util.Task\" class=\"docClass\">Ext.util.Task</a><div class='sub-desc'><p>Task instance</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stopAll' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.TaskRunner' rel='Ext.util.TaskRunner' class='defined-in docClass'>Ext.util.TaskRunner</a><br/><a href='source/TaskRunner.html#Ext-util-TaskRunner-method-stopAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.TaskRunner-method-stopAll' class='name expandable'>stopAll</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Stop all task executions of all tasks started ...</div><div class='long'><p>Stop all task executions of all tasks started</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.TaskRunner\" rel=\"Ext.util.TaskRunner\" class=\"docClass\">Ext.util.TaskRunner</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","parentMixins":[],"name":"Ext.TaskManager","uses":[],"id":"class-Ext.TaskManager","tagname":"class","requires":[]});