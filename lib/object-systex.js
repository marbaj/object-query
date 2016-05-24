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

var str = '[1][1][2][3]';
//parse(str)


module.exports.parse = parse

var reg =[]
let c = 0;
//reg[c++] = /\[[0-9]\]+/g;
//reg[c++]= /[\[0-9\]]+$/g;
//reg[c++] = /^[^\[\]()]/g;
reg[c++] = /\[([0-9]+)\]/g;
//reg[c++] = /(\[[0-9]\])*$/g;

//var split = str.split(regex);
//var match = str.match(regex);

for (let i = 0; i <  reg.length; i++) {
	const s = str.split(reg[i]);
	const m = str.match(reg[i]);
	console.log(s);
	console.log(m);


	console.log('###############');
}

//console.log(match);
//console.log(split);