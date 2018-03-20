// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';

import { Portfolios } from '../../api/portfolios/portfolios.js';

const seedPortfolios = ({count = 1}) => {
  const seedCount = count - Portfolios.find().count();
  if (seedCount > 0) seedPortfolio({ count: seedCount });
};

const seedPortfolio = () => {
  Factory.create('portfolio');
};

Meteor.startup(() => {
  seedPortfolios({ count: 1 });
});
