const poper = require('./')

const input = `
{
  foo: /* @@foo */ options.foo /* foo@@ */,
  bar: /* @@bar */ options.bar /* bar@@ */
}
`

const result = poper(input, {
  foo: 123,
  bar: 'hahaha'
}, {stringify: true})

console.log(input)
console.log(result)
