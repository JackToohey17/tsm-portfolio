import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { Portfolios } from '../../api/portfolios/portfolios.js';
// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/not-found/not-found.js';
import '../../ui/pages/portfolio/portfolio.js';
import '../../ui/pages/portfolios/portfolios.js';

FlowRouter.route('/', {
  action(params) {
    FlowRouter.go('/portfolios', params);
  }
});

FlowRouter.route('/portfolios', {
  name: 'portfolios',
  action() {
    BlazeLayout.render('App_body', { main: 'portfolios' });
  },
});

FlowRouter.route('/portfolio/:_id', {
  name: 'portfolio',
  action(params) {
    BlazeLayout.render('App_body', { main: 'portfolio' });
  },
});

FlowRouter.notFound = {
  action() {
    BlazeLayout.render('App_body', { main: 'App_notFound' });
  },
};
