import type { Scanner } from '../Scanner/Scanner.ts'

export const parseString = (scanner: Scanner) => {
  scanner.goBack(1)
  const value = scanner.scanString()
  return value
}
