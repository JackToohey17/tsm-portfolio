import { Template } from 'meteor/templating';
import { Portfolios } from '../../../api/portfolios/portfolios.js';
import { FlowRouter } from 'meteor/kadira:flow-router';

import './portfolio.html';


Template.portfolio.onCreated(function() {});

Template.portfolio.onRendered(function() {});

Template.portfolio.helpers({
  portfolio: function() {
    return Portfolios.findOne({_id: FlowRouter.current().params._id});
  },
});

// Template.portfolio.events({})
