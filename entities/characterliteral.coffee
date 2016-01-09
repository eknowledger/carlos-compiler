class CharacterLiteral

  constructor: (@contents) ->

  toString: () ->
    "(CharLit \\u{#{@contents.charCodeAt(1).toString(16)}})"

module.exports = CharacterLiteral
