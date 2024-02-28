import * as TokenType from '../JsoncTokenType/JsoncTokenType.js'
import * as Literal from '../Literal/Literal.js'

const parsePropertyName = (scanner) => {
  const propertyName = scanner.scanPropertyName()
  return propertyName
}

const parsePropertyColon = (scanner) => {
  scanner.scanPropertyColon()
}

const parseNumber = (scanner) => {
  scanner.goBack(1)
  const rawValue = scanner.scanNumber()
  const value = parseFloat(rawValue)
  return value
}

const parseObject = (scanner) => {
  const object = {}
  outer: while (true) {
    const token = scanner.scanValue()
    switch (token) {
      case TokenType.Eof:
      case TokenType.None:
      case TokenType.CurlyClose:
        break outer
      case TokenType.DoubleQuote:
        scanner.goBack(1)
        const propertyName = parsePropertyName(scanner)
        parsePropertyColon(scanner)
        const value = parseValue(scanner)
        object[propertyName] = value
      case TokenType.Comma:
        break
      case TokenType.Slash:
        parseComment(scanner)
        break
      case TokenType.Literal:
        parseLiteral(scanner)
        break
      default:
        break
    }
  }
  return object
}

const parseString = (scanner) => {
  scanner.goBack(1)
  const value = scanner.scanString()
  return value
}

const parseArray = (scanner) => {
  const array = []
  outer: while (true) {
    const token = scanner.scanValue()
    switch (token) {
      case TokenType.Eof:
      case TokenType.None:
      case TokenType.SquareClose:
        break outer
      case TokenType.Slash:
        scanner.scanComment()
        break
      default:
        scanner.goBack(1)
        const value = parseValue(scanner)
        array.push(value)
        break
      case TokenType.Comma:
        break
    }
  }
  return array
}

const parseLiteral = (scanner) => {
  const rawValue = scanner.scanLiteral()
  switch (rawValue) {
    case Literal.True:
      return true
    case Literal.False:
      return false
    case Literal.Null:
      return null
    default:
      return undefined
  }
}

const parseComment = (scanner) => {
  scanner.scanComment()
}

export const parseValue = (scanner) => {
  const token = scanner.scanValue()
  switch (token) {
    case TokenType.CurlyOpen:
      return parseObject(scanner)
    case TokenType.DoubleQuote:
      return parseString(scanner)
    case TokenType.Numeric:
      return parseNumber(scanner)
    case TokenType.SquareOpen:
      return parseArray(scanner)
    case TokenType.Literal:
      return parseLiteral(scanner)
    case TokenType.Slash:
      parseComment(scanner)
      return parseValue(scanner)
    default:
      return undefined
  }
}
