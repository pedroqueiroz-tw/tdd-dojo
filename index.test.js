const { fizzBuzz } = require("./index");

describe('fizzBuzz', () => {
  it('should print fizz when input is 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz')
  })

  it('should print fizz when input is 6', () => {
    expect(fizzBuzz(6)).toBe('Fizz')
  })

  it('should print buzz when input is multiple of 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz')
    expect(fizzBuzz(10)).toBe('Buzz')
  })

  it('should print fizzbuzz when input is 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
  })

  it('should print fizzbuzz when input is 30', () => {
    expect(fizzBuzz(30)).toBe('FizzBuzz')
  })

  it('should print empty string when input is 2', () => {
    expect(fizzBuzz(2)).toBe('')
  })


})