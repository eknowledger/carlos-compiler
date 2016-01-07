var should = require('should');
var fs = require('fs');
var ohm = require('ohm-js');

describe('The compiler', () => {
  it('is alive', () => {
    var contents = fs.readFileSync('./carlos.ohm');
    var myGrammar = ohm.grammar(contents);
    console.log(myGrammar);
  });
});
