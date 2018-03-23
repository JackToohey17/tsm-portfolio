import {Template} from 'meteor/templating';
import {Portfolios} from '../../../api/portfolios/portfolios.js';
import {FlowRouter} from 'meteor/kadira:flow-router';

import './portfolios.html';


Template.portfolios.onCreated(function() {
  // console.log(this);
});

Template.portfolios.onRendered(function() {
  // console.log(this);
});

Template.portfolios.helpers({
  portfolios: function() {
    return Portfolios.find().fetch();
  },
});
