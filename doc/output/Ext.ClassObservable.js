Ext.data.JsonP.Ext_ClassObservable({"extends":null,"enum":null,"html_meta":{},"meta":{},"linenr":1,"inheritable":null,"aliases":{},"singleton":false,"subclasses":[],"component":false,"mixins":[],"inheritdoc":null,"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"ClassObservable.html#Ext-ClassObservable","filename":"ClassObservable.js"}],"mixedInto":["Ext.Class"],"superclasses":[],"members":{"cfg":[{"meta":{},"owner":"Ext.ClassObservable","name":"lazyEventing","id":"cfg-lazyEventing","tagname":"cfg"},{"meta":{},"owner":"Ext.ClassObservable","name":"listeners","id":"cfg-listeners","tagname":"cfg"}],"property":[{"meta":{"private":true},"owner":"Ext.ClassObservable","name":"eventNames","id":"property-eventNames","tagname":"property"},{"meta":{"private":true},"owner":"Ext.ClassObservable","name":"listenersMap","id":"property-listenersMap","tagname":"property"}],"css_var":[],"method":[{"meta":{"private":true},"owner":"Ext.ClassObservable","name":"_registerListenerByObject","id":"method-_registerListenerByObject","tagname":"method"},{"meta":{},"owner":"Ext.ClassObservable","name":"addEvents","id":"method-addEvents","tagname":"method"},{"meta":{},"owner":"Ext.ClassObservable","name":"addListener","id":"method-addListener","tagname":"method"},{"meta":{},"owner":"Ext.ClassObservable","name":"emit","id":"method-emit","tagname":"method"},{"meta":{},"owner":"Ext.ClassObservable","name":"fireEvent","id":"method-fireEvent","tagname":"method"},{"meta":{},"owner":"Ext.ClassObservable","name":"on","id":"method-on","tagname":"method"},{"meta":{},"owner":"Ext.ClassObservable","name":"processListenersObject","id":"method-processListenersObject","tagname":"method"},{"meta":{},"owner":"Ext.ClassObservable","name":"relayEvents","id":"method-relayEvents","tagname":"method"},{"meta":{},"owner":"Ext.ClassObservable","name":"removeListener","id":"method-removeListener","tagname":"method"},{"meta":{},"owner":"Ext.ClassObservable","name":"un","id":"method-un","tagname":"method"}],"event":[],"css_mixin":[]},"alternateClassNames":[],"override":null,"code_type":"ext_define","private":null,"html":"<div><pre class=\"hierarchy\"><h4>Mixed into</h4><div class='dependency'><a href='#!/api/Ext.Class' rel='Ext.Class' class='docClass'>Ext.Class</a></div><h4>Files</h4><div class='dependency'><a href='source/ClassObservable.html#Ext-ClassObservable' target='_blank'>ClassObservable.js</a></div></pre><div class='doc-contents'><p>Mixin class to support event handling inside of classes.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-lazyEventing' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassObservable'>Ext.ClassObservable</span><br/><a href='source/ClassObservable.html#Ext-ClassObservable-cfg-lazyEventing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassObservable-cfg-lazyEventing' class='name expandable'>lazyEventing</a><span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span></div><div class='description'><div class='short'>Enabling lazy eventing allows you to fire events even when they are not added/registered before ...</div><div class='long'><p>Enabling lazy eventing allows you to fire events even when they are not added/registered before</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-listeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassObservable'>Ext.ClassObservable</span><br/><a href='source/ClassObservable.html#Ext-ClassObservable-cfg-listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassObservable-cfg-listeners' class='name expandable'>listeners</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span></div><div class='description'><div class='short'>Listeners object containing event name to handler function map ...</div><div class='long'><p>Listeners object containing event name to handler function map</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-eventNames' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassObservable'>Ext.ClassObservable</span><br/><a href='source/ClassObservable.html#Ext-ClassObservable-property-eventNames' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassObservable-property-eventNames' class='name expandable'>eventNames</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Array holding all known event names ...</div><div class='long'><p>Array holding all known event names</p>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-listenersMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassObservable'>Ext.ClassObservable</span><br/><a href='source/ClassObservable.html#Ext-ClassObservable-property-listenersMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassObservable-property-listenersMap' class='name expandable'>listenersMap</a><span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Object map holding all listener functions referenced by name ...</div><div class='long'><p>Object map holding all listener functions referenced by name</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_registerListenerByObject' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassObservable'>Ext.ClassObservable</span><br/><a href='source/ClassObservable.html#Ext-ClassObservable-method-_registerListenerByObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassObservable-method-_registerListenerByObject' class='name expandable'>_registerListenerByObject</a>( <span class='pre'>eventName, listener</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Processes a listener from the listeners-Object ...</div><div class='long'><p>Processes a listener from the listeners-Object</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the event</p>\n</div></li><li><span class='pre'>listener</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Listener object</p>\n</div></li></ul></div></div></div><div id='method-addEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassObservable'>Ext.ClassObservable</span><br/><a href='source/ClassObservable.html#Ext-ClassObservable-method-addEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassObservable-method-addEvents' class='name expandable'>addEvents</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Registers event names ...</div><div class='long'><p>Registers event names</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'></span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>... As many event names as you want to register</p>\n</div></li></ul></div></div></div><div id='method-addListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassObservable'>Ext.ClassObservable</span><br/><a href='source/ClassObservable.html#Ext-ClassObservable-method-addListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassObservable-method-addListener' class='name expandable'>addListener</a>( <span class='pre'>evtName, fn, scope, options</span> )</div><div class='description'><div class='short'>Registers the given event handler function\nfor the given event name. ...</div><div class='long'><p>Registers the given event handler function\nfor the given event name. If the event gets fired\nall registered event handlers will be called.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evtName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the event</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Function to register</p>\n</div></li><li><span class='pre'>scope</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Scope to call event listener on</p>\n</div></li><li><span class='pre'>options</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Additional options</p>\n</div></li></ul></div></div></div><div id='method-emit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassObservable'>Ext.ClassObservable</span><br/><a href='source/ClassObservable.html#Ext-ClassObservable-method-emit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassObservable-method-emit' class='name expandable'>emit</a>( <span class='pre'>evtName, </span> )</div><div class='description'><div class='short'>Fires a named event. ...</div><div class='long'><p>Fires a named event.\nShortcut for fireEvent()</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evtName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the event to fire</p>\n</div></li><li><span class='pre'></span> : Mixed] ... As many additional params as you want to transmit to the event handler.\n@return void\n     <div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fireEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassObservable'>Ext.ClassObservable</span><br/><a href='source/ClassObservable.html#Ext-ClassObservable-method-fireEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassObservable-method-fireEvent' class='name expandable'>fireEvent</a>( <span class='pre'>evtName, </span> )</div><div class='description'><div class='short'>Fires a named event ...</div><div class='long'><p>Fires a named event</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evtName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the event to fire</p>\n</div></li><li><span class='pre'></span> : Mixed] ... As many additional params as you want to transmit to the event handler.\n@return void\n     <div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-on' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassObservable'>Ext.ClassObservable</span><br/><a href='source/ClassObservable.html#Ext-ClassObservable-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassObservable-method-on' class='name expandable'>on</a>( <span class='pre'>evtName, fn, additionalOpts</span> )</div><div class='description'><div class='short'>Registers the given event handler function\nfor the given event name. ...</div><div class='long'><p>Registers the given event handler function\nfor the given event name. If the event gets fired\nall registered event handlers will be called.\nShortcut for addListener()</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>evtName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the event</p>\n</div></li><li><span class='pre'>fn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Function to register</p>\n</div></li><li><span class='pre'>additionalOpts</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Additional options</p>\n</div></li></ul></div></div></div><div id='method-processListenersObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassObservable'>Ext.ClassObservable</span><br/><a href='source/ClassObservable.html#Ext-ClassObservable-method-processListenersObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassObservable-method-processListenersObject' class='name expandable'>processListenersObject</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Processes the this.listeners object maybe containing\nevent handler methods. ...</div><div class='long'><p>Processes the this.listeners object maybe containing\nevent handler methods.</p>\n</div></div></div><div id='method-relayEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassObservable'>Ext.ClassObservable</span><br/><a href='source/ClassObservable.html#Ext-ClassObservable-method-relayEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassObservable-method-relayEvents' class='name expandable'>relayEvents</a>( <span class='pre'>clsInst, eventNames</span> )</div><div class='description'><div class='short'>Relays events to the given component instance\nso they get fired on the given class instance too. ...</div><div class='long'><p>Relays events to the given component instance\nso they get fired on the given class instance too.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>clsInst</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Class instance object (Mixin: <a href=\"#!/api/Ext.ClassObservable\" rel=\"Ext.ClassObservable\" class=\"docClass\">Ext.ClassObservable</a>)</p>\n</div></li><li><span class='pre'>eventNames</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>Events to relay from source class instance</p>\n</div></li></ul></div></div></div><div id='method-removeListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassObservable'>Ext.ClassObservable</span><br/><a href='source/ClassObservable.html#Ext-ClassObservable-method-removeListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassObservable-method-removeListener' class='name expandable'>removeListener</a>( <span class='pre'>[targetEvtName], [handlerFn]</span> )</div><div class='description'><div class='short'>Removes one or many listeners from the instance depending on the\ncall parameters. ...</div><div class='long'><p>Removes one or many listeners from the instance depending on the\ncall parameters.</p>\n\n<p>// Removes all listeners\nremoveListener()</p>\n\n<p>// Removes all listeners named 'message'\nremoveListener('message')</p>\n\n<p>// Remove the specific listener function\nremoveListener('message', this.onMessage)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>targetEvtName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>Name of the event to remove</p>\n</div></li><li><span class='pre'>handlerFn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>Specific handler function previously attached</p>\n</div></li></ul></div></div></div><div id='method-un' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassObservable'>Ext.ClassObservable</span><br/><a href='source/ClassObservable.html#Ext-ClassObservable-method-un' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassObservable-method-un' class='name expandable'>un</a>( <span class='pre'>[targetEvtName], [handlerFn]</span> )</div><div class='description'><div class='short'>Removes one or many listeners from the instance depending on the\ncall parameters. ...</div><div class='long'><p>Removes one or many listeners from the instance depending on the\ncall parameters.\nShortcut for removeListener()</p>\n\n<p>// Removes all listeners\nremoveListener()</p>\n\n<p>// Removes all listeners named 'message'\nremoveListener('message')</p>\n\n<p>// Remove the specific listener function\nremoveListener('message', this.onMessage)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>targetEvtName</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>Name of the event to remove</p>\n</div></li><li><span class='pre'>handlerFn</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a> (optional)<div class='sub-desc'><p>Specific handler function previously attached</p>\n</div></li></ul></div></div></div></div></div></div></div>","parentMixins":[],"name":"Ext.ClassObservable","uses":[],"id":"class-Ext.ClassObservable","tagname":"class","requires":[]});