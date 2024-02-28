import * as Parser from '../Parser/Parser.js'
import * as Scanner from '../Scanner/Scanner.js'

export const parse = (text) => {
  const scanner = Scanner.createScanner(text)
  const result = Parser.parseValue(scanner)
  return result
}
