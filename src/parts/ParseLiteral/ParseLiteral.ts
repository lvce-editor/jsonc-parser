import * as Literal from '../Literal/Literal.js'

export const parseLiteral = (scanner) => {
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
