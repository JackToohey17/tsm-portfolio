import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/portfolio/portfolio.js';
import '../../ui/pages/work/work.js';

// Set up all routes in the app
FlowRouter.route('/', {
  name: 'App.home',
  action() {
    BlazeLayout.render('App_body', { main: 'App_home' });
  },
});

FlowRouter.route('/home', {
  action(params) {
    FlowRouter.go('/', params);
  }
});

FlowRouter.route('/portfolio', {
  name: 'portfolio',
  action() {
    BlazeLayout.render('App_body', { main: 'portfolio' });
  },
});

FlowRouter.route('/work', {
  name: 'work',
  action() {
    BlazeLayout.render('App_body', { main: 'work' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
