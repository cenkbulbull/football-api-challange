Template.registerHelper('getFirstTwoCharsUpperCase', function (word) {
  if (word.length < 2) {
    return word.toUpperCase()
  }
  let firstTwoChars = word.substring(0, 2)

  return firstTwoChars.toUpperCase()
})