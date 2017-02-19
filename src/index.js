export default function (input, data = {}, {
  stringify = false
} = {}) {
  if (typeof input !== 'string') {
    throw new Error('Expected input to be string')
  }

  //          |        match start       | match content   |         match end        |
  const re = /\/\*\s*@@([\w.\-_]+)\s*\*\/\s*([\s\S]*?)\s*\/\*\s*([\w.\-_]+)@@\s*\*\//g

  return input.replace(re, (match, key, _, endKey) => {
    if (key === endKey) {
      let ret = data

      for (const prop of key.split('.')) {
        ret = ret ? ret[prop] : ''
      }

      return stringify ? JSON.stringify(ret) : ret
    }

    return match
  })
}
