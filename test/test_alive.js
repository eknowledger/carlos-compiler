var should = require('should');
var fs = require('fs');
var ohm = require('ohm-js');

describe('The compiler', () => {
  var contents = fs.readFileSync('./carlos.ohm');
  var grammar = ohm.grammar(contents);

  it('is alive', () => {
    grammar.should.be.ok;
    grammar.name.should.equal('Carlos');
  });

  it('can parse break statements', () => {
    var program = "  break ; break;    break;"
    grammar.match(program).succeeded().should.be.true;
  });

  it('rejects the empty program', () => {
    var program = ""
    grammar.match(program).succeeded().should.be.false;
  });

  it('rejects a misspelled break statement', () => {
    var program = "  break ; break;    breakz;"
    grammar.match(program).succeeded().should.be.false;
  });
});
