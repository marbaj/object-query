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
    var o = objectQuery.parse('first', obj)
    expect(o).to.equal('first value');
  });

  it('test value parse 2 level', function() {  
    var o = objectQuery.parse('second.first', obj)
    expect(o).to.equal('first value');
  });

  it('test array parse', function() {  
    var o = objectQuery.parse('list[0]', obj)
    expect(o).to.equal(1);
  });
});