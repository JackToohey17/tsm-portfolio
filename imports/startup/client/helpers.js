import {Template} from 'meteor/templating';
import {humanizeDate, shortenDescription} from '../../modules';

Template.registerHelper("humanizeDate", humanizeDate);
Template.registerHelper("shortenDescription", shortenDescription);
