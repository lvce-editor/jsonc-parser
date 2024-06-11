import type { Scanner } from '../Scanner/Scanner.ts'

export const parseNumber = (scanner: Scanner) => {
  scanner.goBack(1)
  const rawValue = scanner.scanNumber()
  const value = parseFloat(rawValue)
  return value
}
