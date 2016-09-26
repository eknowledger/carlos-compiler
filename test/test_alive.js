const should = require('should');
const fs = require('fs');
const ohm = require('ohm-js');

describe('The compiler', () => {
  const contents = fs.readFileSync('./carlos.ohm');
  const grammar = ohm.grammar(contents);

  it('is alive', () => {
    grammar.should.be.ok;
    grammar.name.should.equal('Carlos');
  });

  it('can parse break statements', () => {
    const program = `  break ; break;    break;`
    grammar.match(program).succeeded().should.be.true();
  });

  it('rejects the empty program', () => {
    const program = ``
    grammar.match(program).succeeded().should.be.false();
  });

  it('rejects a misspelled break statement', () => {
    const program = `  break ; break;    breakz;`
    grammar.match(program).succeeded().should.be.false();
  });
});
