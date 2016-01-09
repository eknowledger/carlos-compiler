class ReturnStatement

  constructor: (@returnValue) ->

  # TODO there has to be a better way
  toString: ->
    returnValueString = "#{@returnValue}"
    "(Return#{if returnValueString then ' ' + returnValueString else ''})"

module.exports = ReturnStatement
