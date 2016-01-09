fs = require 'fs'
ohm = require 'ohm-js'
BreakStatement = require './entities/breakstatement'
ReturnStatement = require './entities/returnstatement'
CharacterLiteral = require './entities/characterliteral'
Program = require './entities/program'

grammar = ohm.grammar fs.readFileSync './carlos.ohm';

astGenerator = grammar.semantics().addOperation('tree', {
  Program: (stmts) -> new Program stmts.children.map((s) -> s.tree())
  Stmt_break: (k, _) -> new BreakStatement()
  Stmt_return: (r, e, _) -> new ReturnStatement e?.tree()
  charlit: (_, c, q) -> new CharacterLiteral(@interval.contents)
});

parse = (source) ->
  match = grammar.match source
  throw match.message if not match.succeeded()
  astGenerator(match).tree().toString()

console.log parse "break;return 'C';"
