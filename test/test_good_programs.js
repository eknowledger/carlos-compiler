const should = require('should');
const fs = require('fs');
const path = require('path');
const ohm = require('ohm-js');

const TEST_DIR = 'test/data/good-programs'

describe('The compiler', () => {

  const grammar = ohm.grammar(fs.readFileSync('./carlos.ohm'));

  fs.readdirSync(TEST_DIR).forEach(name => {
    it('should compile ' + name + ' without errors', done => {
      const program = fs.readFileSync(path.join(TEST_DIR, name)).toString();
      grammar.match(program).succeeded().should.be.true();
      done();
    });
  });
});
