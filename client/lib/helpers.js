Template.registerHelper('getFirstTwoCharsUpperCase', function (word) {
  if (word.length < 2) {
    return word.toUpperCase()
  }
  let firstTwoChars = word.substring(0, 2)

  return firstTwoChars.toUpperCase()
})

Template.registerHelper('getInitialsUpperCase', function (word) {
  const words = word.split(' ')
  const firstNameInitial = words[0].charAt(0).toUpperCase()
  const lastNameInitial = words[1].charAt(0).toUpperCase()
  return firstNameInitial + lastNameInitial
})

Template.registerHelper('getShortenText', function (text) {
  if (typeof text !== 'string') {
    return ''
  }
  return text.substring(0, 10)
})
