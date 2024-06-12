Template.tabView.onCreated(function () {
  const instance = this
  instance.info = new ReactiveVar(null) 

  this.autorun(() => {
    const activeTab = Template.currentData().activeTab
    const selectedLeague = Template.currentData().selectedLeague
    instance.loading = new ReactiveVar(true)
    
    Meteor.call('getFootballApi',activeTab , selectedLeague,(error, result) => {
      if (error) {
        console.log(error)
      } else {
        console.log(result)
        instance.info.set(result.data.result)
        instance.loading.set(false)
      }
    })
  });
});

Template.tabView.helpers({
  isLoading() {
    return Template.instance().loading.get()
  },
  league() {
    return Template.instance().data.selectedLeague
  },
  isActive(tabName) {
    return Template.instance().data.activeTab === tabName
  },
  info(){
    return Template.instance().info.get()
  }
});

Template.registerHelper('increment', function(value) {
  return value + 1;
});