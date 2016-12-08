const expect = require('expect')

const getRandomInt = require('./index.js')

const isInt = (n) => n % 1 === 0

describe('getRandomInt', function () {
  it('should return an integer by default', function () {
    const result = getRandomInt(1, 42)
    expect(result).toBeA('number')
    expect(isInt(result)).toBeTruthy()
  })
  it('should return a float if third argument is true', function () {
    const result = getRandomInt(1, 42, true)
    expect(result).toBeA('number')
    expect(isInt(result)).toBeFalsy()
  })
  it('should throw if min >= max', function () {
    expect(() => getRandomInt(42, 1)).toThrow()
  })
})
