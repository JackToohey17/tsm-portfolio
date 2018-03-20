
import { Mongo } from 'meteor/mongo';
import { Factory } from 'meteor/dburles:factory';
import { faker } from 'meteor/practicalmeteor:faker';

export const Portfolios = new Mongo.Collection('portfolios');
export default Portfolios;

Factory.define('portfolio', Portfolios, {
  title: () => faker.lorem.words(),
  description: () => faker.lorem.sentences(),
  link: () => faker.lorem.words(),
  img: () => 'https://www.placecage.com/c/200/200',
  endDate: () => faker.date.past(),
});
