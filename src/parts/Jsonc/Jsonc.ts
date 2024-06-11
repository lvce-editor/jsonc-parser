import * as CreateScanner from '../CreateScanner/CreateScanner.ts'
import * as Parser from '../Parser/Parser.ts'

export const parse = (text: string) => {
  const scanner = CreateScanner.createScanner(text)
  const result = Parser.parseValue(scanner)
  return result
}
