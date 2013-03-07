Ext.data.JsonP.Ext_URL({"extends":null,"enum":null,"html_meta":{},"meta":{},"linenr":1,"inheritable":null,"aliases":{},"singleton":true,"subclasses":[],"component":false,"mixins":[],"inheritdoc":null,"statics":{"cfg":[],"property":[],"css_var":[],"method":[],"event":[],"css_mixin":[]},"files":[{"href":"URL.html#Ext-URL","filename":"URL.js"}],"mixedInto":[],"superclasses":[],"members":{"cfg":[],"property":[],"css_var":[],"method":[{"meta":{},"owner":"Ext.URL","name":"append","id":"method-append","tagname":"method"},{"meta":{},"owner":"Ext.URL","name":"decode","id":"method-decode","tagname":"method"},{"meta":{},"owner":"Ext.URL","name":"encode","id":"method-encode","tagname":"method"},{"meta":{},"owner":"Ext.URL","name":"objectFromQueryString","id":"method-objectFromQueryString","tagname":"method"},{"meta":{},"owner":"Ext.URL","name":"toQueryObjects","id":"method-toQueryObjects","tagname":"method"},{"meta":{},"owner":"Ext.URL","name":"toQueryString","id":"method-toQueryString","tagname":"method"}],"event":[],"css_mixin":[]},"alternateClassNames":[],"override":null,"private":null,"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/URL.html#Ext-URL' target='_blank'>URL.js</a></div></pre><div class='doc-contents'><p>Class for working with URL's.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-append' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.URL'>Ext.URL</span><br/><a href='source/URL.html#Ext-URL-method-append' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.URL-method-append' class='name expandable'>append</a>( <span class='pre'>url, string</span> )</div><div class='description'><div class='short'>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand. ...</div><div class='long'><p>Appends content to the query string of a URL, handling logic for whether to place\na question mark or ampersand.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>url</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The URL to append to.</p>\n</div></li><li><span class='pre'>string</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The content to append to the URL.</p>\n</div></li></ul></div></div></div><div id='method-decode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.URL'>Ext.URL</span><br/><a href='source/URL.html#Ext-URL-method-decode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.URL-method-decode' class='name expandable'>decode</a>( <span class='pre'>string, [overwrite]</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Takes an encoded URL and and converts it to an object. ...</div><div class='long'><p>Takes an encoded URL and and converts it to an object. Example:</p>\n\n<pre><code>     Ext.urlDecode(\"foo=1&bar=2\"); // returns {foo: \"1\", bar: \"2\"}\n     Ext.urlDecode(\"foo=1&bar=2&bar=3&bar=4\", false); // returns {foo: \"1\", bar: [\"2\", \"3\", \"4\"]}\n     </code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>string</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'>\n</div></li><li><span class='pre'>overwrite</span> : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a> (optional)<div class='sub-desc'><p>Items of the same name will overwrite previous values instead of creating an an array (Defaults to false).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>A literal with members</p>\n</div></li></ul></div></div></div><div id='method-encode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.URL'>Ext.URL</span><br/><a href='source/URL.html#Ext-URL-method-encode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.URL-method-encode' class='name expandable'>encode</a>( <span class='pre'>o, [pre]</span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Takes an object and converts it to an encoded URL. ...</div><div class='long'><p>Takes an object and converts it to an encoded URL. e.g. Ext.urlEncode({foo: 1, bar: 2});\nwould return \"foo=1&amp;bar=2\". Optionally, property values can be arrays,\ninstead of keys and the resulting string that's returned will contain a name/value pair for each array value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>pre</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a> (optional)<div class='sub-desc'><p>A prefix to add to the url encoded string</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-objectFromQueryString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.URL'>Ext.URL</span><br/><a href='source/URL.html#Ext-URL-method-objectFromQueryString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.URL-method-objectFromQueryString' class='name expandable'>objectFromQueryString</a>( <span class='pre'>queryString</span> )</div><div class='description'><div class='short'>TODO ...</div><div class='long'><p>TODO</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>queryString</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toQueryObjects' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.URL'>Ext.URL</span><br/><a href='source/URL.html#Ext-URL-method-toQueryObjects' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.URL-method-toQueryObjects' class='name expandable'>toQueryObjects</a>( <span class='pre'>objects, recursive</span> )</div><div class='description'><div class='short'>TODO ...</div><div class='long'><p>TODO</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>objects</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li><li><span class='pre'>recursive</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-toQueryString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.URL'>Ext.URL</span><br/><a href='source/URL.html#Ext-URL-method-toQueryString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.URL-method-toQueryString' class='name expandable'>toQueryString</a>( <span class='pre'>objects</span> )</div><div class='description'><div class='short'>TODO\nReturns a query string URL ...</div><div class='long'><p>TODO\nReturns a query string URL</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>objects</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","parentMixins":[],"name":"Ext.URL","uses":[],"id":"class-Ext.URL","tagname":"class","requires":[]});