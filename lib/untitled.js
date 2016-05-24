"use strict"

var reg =[]

reg[0] = /\[[0-9]\]+/g;

reg[1]= /[\[0-9\]]+$/g;
reg[2] = /^[^\[\]()]/g;

var regex = /\[[0-9]\]/g;

var regex = /(\[[0-9]\])*$/g;

var str = 'sso[1]me[1][2][3]';

//var split = str.split(regex);
//var match = str.match(regex);

for (const r in reg) {
	const s = str.match(r);
	console.log(s);
}

//console.log(match);
//console.log(split);