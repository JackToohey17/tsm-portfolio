import {Template} from 'meteor/templating';
import {Portfolios} from '../../../api/portfolios/portfolios.js';
import {FlowRouter} from 'meteor/kadira:flow-router';

import './portfolio.html';


Template.portfolio.onCreated(function() {
  // console.log(this);
});

Template.portfolio.onRendered(function() {
  // console.log(this);
});

Template.portfolio.helpers({
  portfolio: function() {
    return Portfolios.findOne({_id: FlowRouter.current().params._id});
  },
});

const handleIframeScroll = (event) => {
  console.log("handleIframeScroll", event);
  const $iframe = $(event.target).children("iframe");
  const scrollTop = $iframe.scrollTop();
  const {wheelDeltaY} = event;
  // $iframe.scrollTop(wheelDeltaY + scrollTop);
  document.getElementById('iframe').contentWindow.scrollTo(wheelDeltaY + scrollTop);
  console.log(scrollTop, $iframe.scrollTop(), wheelDeltaY, $iframe);
}

Template.portfolio.events({
  'mouseover .iframe-wrapper': (event, template) => {
    console.log("mouseover", event);
    window.addEventListener("wheel", handleIframeScroll);
  },
  'mouseout .iframe-wrapper': (event, template) => {
    console.log("mouseout", event);
    window.removeEventListener("wheel", handleIframeScroll);
  }
})
