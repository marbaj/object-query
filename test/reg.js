"use strict"

var reg =[]
let c = 0;
reg[c++] = /\[[0-9]\]+/g;
reg[c++]= /[\[0-9\]]+$/g;
//reg[2] = /^[^\[\]()]/g;
//reg[c++] = /\[[0-9]\]/g;
reg[c++] = /(\[[0-9]\])*$/g;

var str = 'sso[1]me[1][2][3]';

//var split = str.split(regex);
//var match = str.match(regex);

for (let i = 0; i <  reg.length; i++) {
	const s = str.split(reg[i]);
	const m = str.match(reg[i]);
	console.log(s + m);
	console.log(m);
	console.log('###############');
}

//console.log(match);
//console.log(split);