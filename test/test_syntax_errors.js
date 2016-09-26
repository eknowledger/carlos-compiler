const should = require('should');
const fs = require('fs');
const path = require('path');
const ohm = require('ohm-js');

const TEST_DIR = 'test/data/syntax-errors'

describe('The compiler', () => {

  const grammar = ohm.grammar(fs.readFileSync('./carlos.ohm'));

  fs.readdirSync(TEST_DIR).forEach(name => {
    it('should find syntax errors in ' + name, done => {
      const program = fs.readFileSync(path.join(TEST_DIR, name)).toString();
      grammar.match(program).succeeded().should.be.false();
      done();
    });
  });
});
