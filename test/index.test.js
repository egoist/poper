import poper from '../src'

const input = `
{
  foo: /* @@foo */ options.foo /* foo@@ */,
  bar: /* @@bar */ options.bar /* bar@@ */
}
`

const output = `
{
  foo: 123,
  bar: "hahaha"
}
`

test('main', () => {
  expect(poper(input, {
    foo: 123,
    bar: 'hahaha'
  }, {stringify: true})).toBe(output)
})
