"use strict"


var parseObjectName = (str) => {

}

var parse = (str) => {

	const reg1 = /[\[0-9\]]+$/g;
	const parts = str.split(reg1);
	if (parts.length > 2) {
		return null;
	}

	var name = parts[0];


	var o = {
		name: '',
		indices:[]
	}

	var os = [];
}

module.exports.parse = parse