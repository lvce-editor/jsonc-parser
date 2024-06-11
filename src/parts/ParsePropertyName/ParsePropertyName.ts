import type { Scanner } from '../Scanner/Scanner.ts'

export const parsePropertyName = (scanner: Scanner): string => {
  const propertyName = scanner.scanPropertyName()
  return propertyName
}
