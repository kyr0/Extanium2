Ext.data.JsonP.Ext_ClassManager({"extends":null,"enum":null,"html_meta":{},"meta":{},"linenr":1,"inheritable":null,"aliases":{},"singleton":false,"subclasses":[],"component":false,"mixins":[],"inheritdoc":null,"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"ClassManager.html#Ext-ClassManager","filename":"ClassManager.js"}],"mixedInto":[],"superclasses":[],"members":{"cfg":[],"property":[{"meta":{"readonly":true},"owner":"Ext.ClassManager","name":"instances","id":"property-instances","tagname":"property"}],"css_var":[],"method":[{"meta":{"private":true},"owner":"Ext.ClassManager","name":"_loadRequiredClasses","id":"method-_loadRequiredClasses","tagname":"method"},{"meta":{"private":true},"owner":"Ext.ClassManager","name":"_manageAlternateClassNames","id":"method-_manageAlternateClassNames","tagname":"method"},{"meta":{"private":true},"owner":"Ext.ClassManager","name":"_manageExtending","id":"method-_manageExtending","tagname":"method"},{"meta":{"private":true},"owner":"Ext.ClassManager","name":"_manageMixing","id":"method-_manageMixing","tagname":"method"},{"meta":{"private":true},"owner":"Ext.ClassManager","name":"_manageStatics","id":"method-_manageStatics","tagname":"method"},{"meta":{},"owner":"Ext.ClassManager","name":"addMethodAliases","id":"method-addMethodAliases","tagname":"method"},{"meta":{},"owner":"Ext.ClassManager","name":"addStatics","id":"method-addStatics","tagname":"method"},{"meta":{},"owner":"Ext.ClassManager","name":"assignNamespace","id":"method-assignNamespace","tagname":"method"},{"meta":{},"owner":"Ext.ClassManager","name":"create","id":"method-create","tagname":"method"},{"meta":{},"owner":"Ext.ClassManager","name":"define","id":"method-define","tagname":"method"},{"meta":{},"owner":"Ext.ClassManager","name":"extend","id":"method-extend","tagname":"method"},{"meta":{},"owner":"Ext.ClassManager","name":"finalizeNamespacing","id":"method-finalizeNamespacing","tagname":"method"},{"meta":{},"owner":"Ext.ClassManager","name":"getClassnameOfNamespace","id":"method-getClassnameOfNamespace","tagname":"method"},{"meta":{},"owner":"Ext.ClassManager","name":"namespace","id":"method-namespace","tagname":"method"},{"meta":{},"owner":"Ext.ClassManager","name":"override","id":"method-override","tagname":"method"},{"meta":{},"owner":"Ext.ClassManager","name":"resolveNamespace","id":"method-resolveNamespace","tagname":"method"}],"event":[],"css_mixin":[]},"alternateClassNames":[],"override":null,"private":null,"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/ClassManager.html#Ext-ClassManager' target='_blank'>ClassManager.js</a></div></pre><div class='doc-contents'><p>Implements the central API for OOP-style JavaScript programming, multiple inheritance and more advanced stuff.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-instances' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-property-instances' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-property-instances' class='name expandable'>instances</a><span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a></span><strong class='readonly signature' >readonly</strong></div><div class='description'><div class='short'>Class instances already created ...</div><div class='long'><p>Class instances already created</p>\n<p>Defaults to: <code>[]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_loadRequiredClasses' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-_loadRequiredClasses' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-_loadRequiredClasses' class='name expandable'>_loadRequiredClasses</a>( <span class='pre'>classDef, cb</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Collects the classes to be loaded dynamically and\ncalls the Ext.Loader to load them. ...</div><div class='long'><p>Collects the classes to be loaded dynamically and\ncalls the <a href=\"#!/api/Ext.Loader\" rel=\"Ext.Loader\" class=\"docClass\">Ext.Loader</a> to load them. Afterwards</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>classDef</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>cb</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_manageAlternateClassNames' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-_manageAlternateClassNames' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-_manageAlternateClassNames' class='name expandable'>_manageAlternateClassNames</a>( <span class='pre'>classDef, clsCtor</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Assigns alternate names to a class ...</div><div class='long'><p>Assigns alternate names to a class</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>classDef</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Prototype class definition</p>\n</div></li><li><span class='pre'>clsCtor</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Class constructor function</p>\n</div></li></ul></div></div></div><div id='method-_manageExtending' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-_manageExtending' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-_manageExtending' class='name expandable'>_manageExtending</a>( <span class='pre'>classDef, nameOfClass</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Manages class extension; returns the reference to the superclass. ...</div><div class='long'><p>Manages class extension; returns the reference to the superclass.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>classDef</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Class definition object (prototype)</p>\n</div></li><li><span class='pre'>nameOfClass</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the class</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_manageMixing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-_manageMixing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-_manageMixing' class='name expandable'>_manageMixing</a>( <span class='pre'>classDef, nameOfClass</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Manages class extension by multiple inheritance; returns the modified class prototype ...</div><div class='long'><p>Manages class extension by multiple inheritance; returns the modified class prototype</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>classDef</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Class definition object (prototype)</p>\n</div></li><li><span class='pre'>nameOfClass</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the class</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_manageStatics' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-_manageStatics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-_manageStatics' class='name expandable'>_manageStatics</a>( <span class='pre'>classDef, clsCtor</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Assigns the statics onto the class constructor ...</div><div class='long'><p>Assigns the statics onto the class constructor</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>classDef</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Class definition prototype object</p>\n</div></li><li><span class='pre'>clsCtor</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Class constructor function</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addMethodAliases' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-addMethodAliases' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-addMethodAliases' class='name expandable'>addMethodAliases</a>( <span class='pre'>clsCtor, alias, [origin]</span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></div><div class='description'><div class='short'>Creates aliases for existing methods of the prototype ...</div><div class='long'><p>Creates aliases for existing methods of the prototype</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>clsCtor</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Class constructor function</p>\n</div></li><li><span class='pre'>alias</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Method aliases object or string</p>\n</div></li><li><span class='pre'>origin</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>Origin method name</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addStatics' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-addStatics' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-addStatics' class='name expandable'>addStatics</a>( <span class='pre'>clsCtor, statics</span> ) : <a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></div><div class='description'><div class='short'>Adds static methods to the class\n\nNote: Static members added dynamically in runtime, will not be added to\nsubclasses ...</div><div class='long'><p>Adds static methods to the class</p>\n\n<p>Note: Static members added dynamically in runtime, will not be added to\nsubclasses of this class. Use class inheritance using Ext.define() is needed!</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>clsCtor</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Class constructor function</p>\n</div></li><li><span class='pre'>statics</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Members of this object will be added as statics</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Class\" rel=\"Ext.Class\" class=\"docClass\">Ext.Class</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-assignNamespace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-assignNamespace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-assignNamespace' class='name expandable'>assignNamespace</a>( <span class='pre'>name, ref</span> ) : Mixed</div><div class='description'><div class='short'>Assigns the given reference on a resolved class namespace. ...</div><div class='long'><p>Assigns the given reference on a resolved class namespace.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Namespace name</p>\n</div></li><li><span class='pre'>ref</span> : Mixed<div class='sub-desc'><p>Whatever to assign</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-create' class='name expandable'>create</a>( <span class='pre'>className, instOverlay</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Creates an instance of the named class with an instance overlay to use. ...</div><div class='long'><p>Creates an instance of the named class with an instance overlay to use.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the class (even with namespaces)</p>\n</div></li><li><span class='pre'>instOverlay</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Overlay configuration for the instance</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>Class instance</p>\n</div></li></ul></div></div></div><div id='method-define' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-define' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-define' class='name expandable'>define</a>( <span class='pre'>className, classDef, callback</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>Defines a class prototype in Ext JS 4-style. ...</div><div class='long'><p>Defines a class prototype in Ext JS 4-style.</p>\n\n<p>Currently supported:\n- singleton\n- extend\n- statics\n- mixins (multiple inheritance)\n- implicit naming (given string name references class constructor function)\n- callback after define\n- alternateClassName name\n- auto dependency check -> but no autoloading! (antipattern!)</p>\n\n<p> Example of old style Ext JS 3 (also works):</p>\n\n<p> var lala = Ext.extend(Object, {\n   muah1: true\n });\n new lala();</p>\n\n<p> // You can now use:</p>\n\n<p> Ext.define(\"lulu\", {</p>\n\n<pre><code>haha: 15\n</code></pre>\n\n<p> });</p>\n\n<p> Ext.define(\"lala2.lala\", {</p>\n\n<pre><code> implement: 'InterfaceSmth',\n muah: false,\n extend: 'lala',\n mixins: ['lulu'],\n statics: {\n     uha: true\n },\n alternateClassName: 'another.classname',\n singleton: true\n</code></pre>\n\n<p> }, function(classRef) {</p>\n\n<pre><code> console.debug('yeah, class was defined!');\n</code></pre>\n\n<p> });</p>\n\n<p> Ext.log(another.classname);</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>className</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Name of the class (even with namespaces)</p>\n</div></li><li><span class='pre'>classDef</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>Class definition</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>Callback function called when class is defined</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>Class proto constructor function</p>\n</div></li></ul></div></div></div><div id='method-extend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-extend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-extend' class='name expandable'>extend</a>( <span class='pre'>superclass, Class, overrides</span> ) : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></div><div class='description'><div class='short'>Extends one class to create a subclass and optionally overrides members with the passed literal. ...</div><div class='long'><p>Extends one class to create a subclass and optionally overrides members with the passed literal.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>superclass</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The constructor of class being extended</p>\n</div></li><li><span class='pre'>Class</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>|<a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>member object</p>\n</div></li><li><span class='pre'>overrides</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>A literal with members which are copied into the subclass's\nprototype, and are therefore shared between all instances of the new class.</p>\n\n\n<p>This may contain a special member named <tt><b>constructor</b></tt>. This is used\nto define the constructor of the new class, and is returned. If this property is\n<i>not</i> specified, a constructor is generated and returned which just calls the\nsuperclass's constructor passing on its parameters.</p>\n\n\n<p><b>It is essential that you call the superclass constructor in any provided constructor. See example code.</b></p>\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span><div class='sub-desc'><p>The subclass constructor from the <code>overrides</code> parameter, or a generated one if not provided.</p>\n</div></li></ul></div></div></div><div id='method-finalizeNamespacing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-finalizeNamespacing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-finalizeNamespacing' class='name expandable'>finalizeNamespacing</a>( <span class='pre'>GLOBAL</span> )</div><div class='description'><div class='short'>Finalizes the namespacing by moving Ext.GLOBAL\nobjet members into the new GLOBAL scope first. ...</div><div class='long'><p>Finalizes the namespacing by moving <a href=\"#!/api/Ext-property-GLOBAL\" rel=\"Ext-property-GLOBAL\" class=\"docClass\">Ext.GLOBAL</a>\nobjet members into the new GLOBAL scope first.\nAfterwards, the new GLOBAL reference gets referenced\ninto <a href=\"#!/api/Ext-property-GLOBAL\" rel=\"Ext-property-GLOBAL\" class=\"docClass\">Ext.GLOBAL</a> so that all future namespace definitions\nare automatically scoped into the real GLOBAL scope.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>GLOBAL</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>New GLOBAL scope object reference</p>\n</div></li></ul></div></div></div><div id='method-getClassnameOfNamespace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-getClassnameOfNamespace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-getClassnameOfNamespace' class='name expandable'>getClassnameOfNamespace</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Returns the class name from a given namespace (last sibling) ...</div><div class='long'><p>Returns the class name from a given namespace (last sibling)</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Namespace name</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-namespace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-namespace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-namespace' class='name expandable'>namespace</a>( <span class='pre'>namespace1, namespace2, etc</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Creates namespaces to be used for scoping variables and classes so that they are not global. ...</div><div class='long'><p>Creates namespaces to be used for scoping variables and classes so that they are not global.\nSpecifying the last node of a namespace implicitly creates all other nodes. Usage:</p>\n\n<pre><code>     Ext.namespace('Company', 'Company.data');\n     Ext.namespace('Company.data'); // equivalent and preferable to above syntax\n     Company.Widget = function() { ... }\n     Company.data.CustomStore = function(config) { ... }\n     </code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>namespace1</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>namespace2</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>etc</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>The namespace object. (If multiple arguments are passed, this will be the last namespace created)</p>\n</div></li></ul></div></div></div><div id='method-override' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-override' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-override' class='name expandable'>override</a>( <span class='pre'>origclass, overrides</span> )</div><div class='description'><div class='short'>Adds a list of functions to the prototype of an existing class,\noverwriting any existing methods with the same name. ...</div><div class='long'><p>Adds a list of functions to the prototype of an existing class,\noverwriting any existing methods with the same name.\nUsage:</p>\n\n<pre><code>     Ext.override(MyClass, {\n     newMethod1: function(){\n     // etc.\n     },\n     newMethod2: function(foo){\n     // etc.\n     }\n     });\n     </code></pre>\n\n\n<p>Note: The method Ext.ClassManager.addMembers() is an alias method of this method.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>origclass</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a>|<a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The class to override</p>\n</div></li><li><span class='pre'>overrides</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'><p>The list of functions to add to origClass.\nThis should be specified as an object literal containing one or more methods.</p>\n</div></li></ul></div></div></div><div id='method-resolveNamespace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.ClassManager'>Ext.ClassManager</span><br/><a href='source/ClassManager.html#Ext-ClassManager-method-resolveNamespace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.ClassManager-method-resolveNamespace' class='name expandable'>resolveNamespace</a>( <span class='pre'>name, fetchLastExistingScope</span> ) : Mixed</div><div class='description'><div class='short'>Resolves a namespace and returns it's object reference. ...</div><div class='long'><p>Resolves a namespace and returns it's object reference.\nCreates empty namespaces if not existing until the last\nnamespace/class name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>Namespace name</p>\n</div></li><li><span class='pre'>fetchLastExistingScope</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><div class='sub-desc'><p>If true, the method never returns undefined,\nit creates namespaces when not existing until the last</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","parentMixins":[],"name":"Ext.ClassManager","uses":[],"id":"class-Ext.ClassManager","tagname":"class","requires":[]});