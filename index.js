function add(a, b) {
  return a + b;
}

//subtract
function subtract(a, b) {
  return a - b;
}
//multiply
function multiply(a, b) {
  return a * b;
}
function divide(a, b) {
  return a / b;
}

function increment(number) {
  number += 1;
  return number;
}
function decrement(number) {
  number -= 1;
  return number;
}

function makeInt(n) {
  if (typeof parseInt(n, 10) === "number") {
    return parseInt(n, 10);
  } else {
    return NaN;
  }
}
function preserveDecimal(n) {
  if (typeof parseFloat(n, 10) === "number") {
    return parseFloat(n, 10);
  } else {
    return NaN;
  }
}
