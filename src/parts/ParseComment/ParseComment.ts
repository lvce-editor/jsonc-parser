import type { Scanner } from '../Scanner/Scanner.ts'

export const parseComment = (scanner: Scanner) => {
  scanner.scanComment()
}
