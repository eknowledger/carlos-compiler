var should = require('should');
var fs = require('fs');
var path = require('path');
var ohm = require('ohm-js');

var TEST_DIR = 'test/data/good-programs'

describe('The compiler', () => {

  var grammar = ohm.grammar(fs.readFileSync('./carlos.ohm'));

  fs.readdirSync(TEST_DIR).forEach(name => {
    it('should compile ' + name + ' without errors', done => {
      var program = fs.readFileSync(path.join(TEST_DIR, name)).toString();
      grammar.match(program).succeeded().should.be.true();
      done();
    });
  });
});
