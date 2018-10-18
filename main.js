const FP = require('./utils')
const { log } = FP

const { users } = require('./data')

const add = (a, b, c, d, e) => a + b + c + d + e

const print = (a, b, c) => `a: ${a}, b: ${b}, c: ${c}`

const curryAdd = FP.curry(add, 5)

// log(curryAdd(1, 2, 3, 4)(5))

const printIf = (predicate, msg) => {
  if (predicate(msg)) {
    log(msg)
  }
}

const printIf2 = (pred, msg) => {
  FP.when(pred, log)(msg)
}

const printIf3 = (pred, msg) => {
  FP.partialRight(FP.when, log)(pred)(msg)
}

const printIf4 = (pred, msg) => {
  FP.uncurry(FP.partialRight(FP.when, log))(pred, msg)
}

const printIfFinal = FP.uncurry(FP.partialRight(FP.when, log))

const printIfFinal2 = FP.uncurry(FP.curry(FP.reverseArgs(FP.when), 2)(log))

const isLongString = str => str.length > 10

FP.when(isLongString, log)('arst')

printIfFinal2(isLongString, 'very very long string')
