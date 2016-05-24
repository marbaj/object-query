
"use strict"

const chai = require('chai');
const expect = chai.expect;
const objectQuery = require('./../lib/object-query.js');

var obj = { 
	'first': 'first value',
	'second': {
		'first': 'first value'
	},
	'list': [1,2,3]
 }

describe('parse', function() {
  it('test value parse 1 level', function() {  
    const o = objectQuery.parse('first', obj)
    expect(o).to.equal(obj.first);
  });

  it('test value parse 2 level', function() {  
    const o = objectQuery.parse('second.first', obj)
    expect(o).to.equal(obj.second.first);
  });

  it('test array parse', function() {  
    const o = objectQuery.parse('list[0]', obj)
    expect(o).to.equal(obj.list[0]);
  });

  it('test get array', function() {  
    const o = objectQuery.parse('list', obj)
    expect(o).to.equal(obj.list);
  }); 
});