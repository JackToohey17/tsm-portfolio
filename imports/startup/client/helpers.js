import {Template} from 'meteor/templating';
import {humanizeDate} from '../../modules';

Template.registerHelper("humanizeDate", humanizeDate);
