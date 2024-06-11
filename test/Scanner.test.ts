import * as Scanner from '../src/parts/Scanner/Scanner.ts'
import * as JsoncTokenType from '../src/parts/JsoncTokenType/JsoncTokenType.ts'
import { test, expect } from '@jest/globals'

test('scanValue - empty', () => {
  const text = ''
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Eof)
})

test('scanValue - curlyOpen', () => {
  const text = '{'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.CurlyOpen)
})

test('scanValue - curlyClose', () => {
  const text = '}'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.CurlyClose)
})

test('scanValue - squareOpen', () => {
  const text = '['
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.SquareOpen)
})

test('scanValue - squareClose', () => {
  const text = ']'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.SquareClose)
})

test('scanValue - doubleQuote', () => {
  const text = '"'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.DoubleQuote)
})

test('scanValue - number - zero', () => {
  const text = '0'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Numeric)
})

test('scanValue - number - one', () => {
  const text = '1'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Numeric)
})

test('scanValue - number - two', () => {
  const text = '2'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Numeric)
})

test('scanValue - number - three', () => {
  const text = '3'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Numeric)
})

test('scanValue - number - four', () => {
  const text = '4'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Numeric)
})

test('scanValue - number - five', () => {
  const text = '5'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Numeric)
})

test('scanValue - number - six', () => {
  const text = '6'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Numeric)
})

test('scanValue - number - seven', () => {
  const text = '7'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Numeric)
})

test('scanValue - number - eight', () => {
  const text = '8'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Numeric)
})

test('scanValue - number - nine', () => {
  const text = '9'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Numeric)
})

test('scanValue - number - dot', () => {
  const text = '.'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Numeric)
})

test('scanValue - whitespace - carriage return', () => {
  const text = '\r'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Eof)
})

test('scanValue - whitespace - line feed', () => {
  const text = '\n'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Eof)
})

test('scanValue - whitespace - tab', () => {
  const text = '\t'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Eof)
})

test('scanValue - whitespace - space', () => {
  const text = ' '
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Eof)
})

test('scanValue - slash', () => {
  const text = '/'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Slash)
})

test('scanValue - literal', () => {
  const text = 'a'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanValue()).toBe(JsoncTokenType.Literal)
})

test('scanComment - block comment', () => {
  const text = '*/'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanComment()).toBe(undefined)
})

test('scanComment - partial block comment', () => {
  const text = '*a'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanComment()).toBe(undefined)
})

test('scanComment - line comment', () => {
  const text = '/'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanComment()).toBe(undefined)
})
test('scanComment - other', () => {
  const text = 'a'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanComment()).toBe(undefined)
})

test('scanString', () => {
  const text = '"abc"'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanString()).toBe('abc')
})

test('scanString - with whitespace', () => {
  const text = ' "abc"'
  const scanner = Scanner.createScanner(text)
  expect(scanner.scanString()).toBe('abc')
})

test('getOffset', () => {
  const text = ' '
  const scanner = Scanner.createScanner(text)
  expect(scanner.getOffset()).toBe(0)
})
