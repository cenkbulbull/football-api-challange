import { FlowRouter } from 'meteor/ostrio:flow-router-extra'
import { BlazeLayout } from 'meteor/kadira:blaze-layout'

import '../pages/Home/index.html'
import '../pages/NotFound/index.html'

// Home
FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('app-layout', { content: 'home' })
  },
})

// 404
FlowRouter.route('*', {
  action() {
    BlazeLayout.render('notFound-layout', { content: 'notFound' })
  },
})
