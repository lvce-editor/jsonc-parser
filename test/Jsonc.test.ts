import { expect, test } from '@jest/globals'
import * as Jsonc from '../src/parts/Jsonc/Jsonc.ts'

test('parse - line comment and object', () => {
  expect(
    Jsonc.parse(`// test
{}`),
  ).toEqual({})
})

test('parse - block comment and object', () => {
  expect(
    Jsonc.parse(`/* test */
{}`),
  ).toEqual({})
})

test('parse - object', () => {
  expect(Jsonc.parse('{}')).toEqual({})
})

test('parse - line comment inside object', () => {
  expect(
    Jsonc.parse(`{
  // test
}`),
  ).toEqual({})
})

test('parse - line comment inside array', () => {
  expect(
    Jsonc.parse(`[
  // test
]`),
  ).toEqual([])
})

test('parse - array', () => {
  expect(Jsonc.parse('[]')).toEqual([])
})

test('parse - number', () => {
  expect(Jsonc.parse('1')).toBe(1)
})

test('parse - number inside object', () => {
  expect(Jsonc.parse('{1}')).toEqual({})
})
test('parse - text inside object', () => {
  expect(Jsonc.parse('{abc}')).toEqual({})
})

test('parse - zero length string', () => {
  expect(Jsonc.parse('""')).toBe('')
})

test('parse - string', () => {
  expect(Jsonc.parse('"test"')).toBe('test')
})

test('parse - object inside array', () => {
  expect(Jsonc.parse('[{}]')).toEqual([{}])
})

test('parse - line comment inside array', () => {
  expect(
    Jsonc.parse(`[//
]`),
  ).toEqual([])
})

test('parse - block comment inside array', () => {
  expect(Jsonc.parse('[/**/]')).toEqual([])
})

test('parse - array inside array', () => {
  expect(Jsonc.parse('[[]]')).toEqual([[]])
})

test('parse - string inside array', () => {
  expect(Jsonc.parse('[""]')).toEqual([''])
})

test('parse - multiple numbers inside array', () => {
  expect(Jsonc.parse('[1,2,3]')).toEqual([1, 2, 3])
})

test('parse - empty object', () => {
  expect(Jsonc.parse('{}')).toEqual({})
})

test('parse - object with multiple properties', () => {
  expect(
    Jsonc.parse(`{
  "a": 1,
  "b": 2
}`),
  ).toEqual({ a: 1, b: 2 })
})

test('parse - object with array and other property', () => {
  expect(
    Jsonc.parse(`{
  "config": [
    {
      "name": "test"
    }
  ],
  "key": "value"
}`),
  ).toEqual({
    config: [
      {
        name: 'test',
      },
    ],
    key: 'value',
  })
})

test('parse - boolean - true', () => {
  expect(Jsonc.parse('true')).toEqual(true)
})

test('parse - boolean - false', () => {
  expect(Jsonc.parse('false')).toEqual(false)
})

test('parse - null', () => {
  expect(Jsonc.parse('null')).toEqual(null)
})

test('parse - object with multiple properties and trailing comma', () => {
  expect(
    Jsonc.parse(`{
  "a": 1,
  "b": 2,
}`),
  ).toEqual({ a: 1, b: 2 })
})

test('parse - boolean property value', () => {
  expect(
    Jsonc.parse(`{
  "enabled": true
}`),
  ).toEqual({ enabled: true })
})

test('parse - object inside object', () => {
  expect(
    Jsonc.parse(`{
  "a": {
    "b": {}
  }
}`),
  ).toEqual({ a: { b: {} } })
})

test('parse - block comment inside array', () => {
  expect(
    Jsonc.parse(`[
  "test" /* comment */
]`),
  ).toEqual(['test'])
})

test('parse - floating point number', () => {
  expect(Jsonc.parse('0.5')).toEqual(0.5)
})

test('parse - boolean property value', () => {
  expect(
    Jsonc.parse(`{
  "enabled": true
}`),
  ).toEqual({ enabled: true })
})

test('parse - boolean property value and whitespace', () => {
  expect(
    Jsonc.parse(`{
  "a": true,

  "b": false
}`),
  ).toEqual({ a: true, b: false })
})

test('parse - invalid - unclosed quote', () => {
  expect(
    Jsonc.parse(`{
  "git.confirmDiscard": "t,
  "editor.lineHeight": 20
}`),
  ).toEqual({
    'git.confirmDiscard': 't,\n  ',
  })
})

test('parse - invalid - text after quote', () => {
  expect(
    Jsonc.parse(`{
  "git.confirmDiscard": "t"t
}`),
  ).toEqual({ 'git.confirmDiscard': 't' })
})

test('parse - text', () => {
  expect(Jsonc.parse('abc')).toBe(undefined)
})

test('parse - empty string', () => {
  expect(Jsonc.parse('')).toBe(undefined)
})
