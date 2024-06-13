Meteor.methods({
  getFootballApi: function (endpoint, league) {
    
    const url = `${Meteor.settings.API_URL}/${endpoint}${league ? `?data.league=${league}` : ''}`

    try {
      const result = HTTP.call('GET', url, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': Meteor.settings.API_KEY,
        },
      })
      return result
    } catch (e) {
      return e
    }
  },
})
