
import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/dburles:factory';
import { faker } from 'meteor/practicalmeteor:faker';

export const Portfolios = new Mongo.Collection('portfolios');
export default Portfolios;

Factory.define('portfolio', Portfolios, {
  title: () => faker.lorem.word(),
  description: () => faker.lorem.paragraphs(),
  link: () => 'https://www.google.com/',
  img: () => 'https://www.placecage.com/c/200/800',
  endDate: () => faker.date.past(),
});
