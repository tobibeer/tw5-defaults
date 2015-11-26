/*\
title: $:/.tb/modules/macros/x.js
type: application/javascript
module-type: macro

<<x>>
<<x Plugins>>
<<x Plugins plugins>>

\*/
(function(){

/*jslint node: true, browser: true */
/*global $tw: false */
"use strict";

/*
renders an external link with respect to a base url
*/

exports.name = "x";

exports.params = [
	{ name: "title" },
	{ name: "pretty" }
];

/*
Run the macro
*/
exports.run = function(title,pretty) {
	var target = title || this.getVariable("currentTiddler"),
		text = pretty || title || target,
		url = (this.getVariable("x-url") || "http://tiddlywiki.com") + "#" + encodeURIComponent(target);

	return "[ext[" + text + "|" + url + "]]";
};

})();