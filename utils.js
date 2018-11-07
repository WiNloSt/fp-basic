// const curry = (fn, arity = fn.length) => (a, ...args) =>
//   args.length >= arity - 1 ? fn(a, ...args) : curry(fn.bind(null, a, ...args), arity - args.length)

const compose = (...fn) => input => fn.reduceRight((result, fn) => fn(result), input)

function log(...args) {
  console.log(...args)
}

const unary = fn => arg => fn(arg)

const curry = (fn, arity = fn.length) => (...args) =>
  args.length >= arity
    ? fn(...args)
    : curry((...newArgs) => fn(...args, ...newArgs), arity - args.length)

const pick = curry((keys, user) => keys.reduce((acc, key) => ({ ...acc, [key]: user[key] }), {}))

const tap = fn => output => {
  fn(output)
  return output
}

const prop = curry((key, object) => object[key])

const uncurry = fn => (...args) => args.reduce((fn, arg) => fn(arg), fn)

const when = (pred, fn) => input => {
  if (pred(input)) {
    fn(input)
  }
}

const partial = (fn, ...args) => (...newArgs) => fn(...args, ...newArgs)

const partialRight = (fn, ...args) => (...newArgs) => fn(...newArgs, ...args)

const reverseArgs = fn => (...args) => fn(...args.reverse())

const map = (fn, array) => array.map(fn)

module.exports = {
  curry,
  // looseCurry,
  compose,
  log,
  tap,
  pick,
  prop,
  uncurry,
  when,
  reverseArgs,
  partial,
  partialRight,
  map,
  unary
}
