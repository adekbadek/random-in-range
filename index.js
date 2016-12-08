function getRandomInt (min, max, returnFloat) {
  if (min >= max) {
    throw new Error('Minimum value must be smaller than the maximum value')
  }
  var num = Math.random() * (max - min + 1) + min
  return returnFloat ? num : Math.floor(num)
}

module.exports = getRandomInt
