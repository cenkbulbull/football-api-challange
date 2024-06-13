Template.registerHelper('getFirstTwoCharsUpperCase', function (word) {
  return (word.length < 2 ? word : word.substring(0, 2)).toUpperCase();
})

Template.registerHelper('getInitialsUpperCase', function (word) {
  const words = word.split(' ')
  const firstNameInitial = words[0].charAt(0).toUpperCase()
  const lastNameInitial = words[1].charAt(0).toUpperCase()
  return firstNameInitial + lastNameInitial
})

Template.registerHelper('getShortenText', function (text) {
  return typeof text === 'string' ? text.substring(0, 10) : '';
})
