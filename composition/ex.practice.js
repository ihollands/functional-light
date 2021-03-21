"use strict";

const compose = (...fns) => {
  return (result) => {
    for (let fn of fns.reverse()) {
      result = fn(result);
    }
    return result;
  }
}

const trim = (x) => x.trim();
const number = (x) => parseInt(x);
const increment = (x) => x + 1;
const getCharFromCode = (x) => String.fromCharCode(x);
const log = (x) => (console.log(x), x);

const nextCharForNumberString = compose(
  log,
  getCharFromCode,
  increment,
  number,
  trim
);

nextCharForNumberString(' 61   ');


// identity (functor) implementation

const Box = x => 
({
  map: f => Box(f(x)),
  inspect: `Box(${x})`,
  fold: f => f(x)
});

const nextCharForNumberStringBox = str => 
  Box(str)
  .map(x => x.trim())
  .map(trimmed => parseInt(trimmed, 10))
  .map(number => new Number(number + 1))
  .fold(String.fromCharCode)

const result = nextCharForNumberStringBox('  64   ');

console.log(result);
