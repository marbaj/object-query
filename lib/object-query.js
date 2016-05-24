"use strict"
const objectQuery = require('object-systex');

var parseObject = (str, obj) => {

	if (!str) {
		return undefined;
	}
	
	var parse = (parts, obj) => {
		if (obj === undefined) {
			return undefined;
		} else if (parts.length == 0) {
			return obj;
		}
		
		const part = parts.shift()

		const arrayOpenIndex = part.indexOf('[');
		const arrayCloseIndex = part.indexOf(']');
		var name;
		var index = -1;

		if (arrayOpenIndex > -1 && arrayCloseIndex > -1) {
			name = part.substring(0, arrayOpenIndex);
			index = part.substring(arrayOpenIndex+1, arrayCloseIndex+1);
			index = parseInt(index);
		} else if (arrayOpenIndex > -1 || arrayCloseIndex > -1) {
			return;
		} else {
			name = part;
		}

		var o = obj[name];
		if (o !== undefined) {
			if (index > -1 && Array.isArray(o) && o.length > index) {
				o = o[index];
			} 	
		} 

		return parse(parts, o);	
	}

	var parts = str.split('.');

	return parse(parts, obj)
}

module.exports.parse = parseObject