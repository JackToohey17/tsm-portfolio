
import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/dburles:factory';
import { faker } from 'meteor/practicalmeteor:faker';

export const Portfolios = new Mongo.Collection('portfolios');
export default Portfolios;

Factory.define('portfolio', Portfolios, {
  title: () => faker.lorem.words(),
  description: () => faker.lorem.paragraphs(),
  link: () => 'http://totalrequestnow-testing.herokuapp.com/rd-app-view',
  img: () => 'https://s3.amazonaws.com/myfangate.com/rdvote/trnow.png',
  endDate: () => faker.date.past(),
});
