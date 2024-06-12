Template.home.onCreated(function () {

  const instance = this
  instance.loading = new ReactiveVar(true)
  instance.leagues = new ReactiveVar(null)
  instance.selectedOption = new ReactiveVar('super-lig')
  instance.activeTab = new ReactiveVar(localStorage.getItem('activeTab'))

  Meteor.call('getFootballApi','leaguesList',(error, result) => {
    if (error) {
      console.log(error)
    } else {
      console.log(result)
      instance.leagues.set(result.data.result)
      instance.loading.set(false)
    }
  })

})

Template.home.helpers({
  isLoading() {
    return Template.instance().loading.get()
  },
  leagues() {
    return Template.instance().leagues.get()
  },
  selectedLeague(){
    return Template.instance().selectedOption.get()
  },
  activeTab(){
    return Template.instance().activeTab.get()
  },
});

Template.home.onRendered(function () {
  const activeTab = localStorage.getItem('activeTab')
  if (activeTab) {
    this.$('.tab-item').removeClass('tab-item--active')
    this.$(`.tab-item[id="${activeTab}"]`).addClass('tab-item--active')
  } else {
    this.$('.tab-item').first().addClass('tab-item--active')
  }
})

Template.home.events({
  'click .home__header-menu .tab-item': function (event, template) {
    const activeTabId = $(event.currentTarget).attr('id')

    template.$('.home__header-menu .tab-item').removeClass('tab-item--active')

    $(event.currentTarget).addClass('tab-item--active')

    localStorage.setItem('activeTab', activeTabId)

    template.activeTab.set(activeTabId)
  },

  'change .home__header-title-right-side .select': function (event, template) {
    template.selectedOption.set(event.target.value)
  },
})