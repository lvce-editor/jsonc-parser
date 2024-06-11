import * as Literal from '../Literal/Literal.ts'
import type { Scanner } from '../Scanner/Scanner.ts'

export const parseLiteral = (scanner: Scanner): any => {
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
