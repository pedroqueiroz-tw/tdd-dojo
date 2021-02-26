const fizzBuzz = (input) => {
  if (input % 3 === 0 && input % 5 === 0) {
    return "FizzBuzz"
  }
  
  if (input % 5 === 0) {
    return "Buzz"
  }

  return "Fizz"
}

module.exports = { fizzBuzz }