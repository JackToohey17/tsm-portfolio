// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';

import { Portfolios } from '../../api/portfolios/portfolios.js';

const seedPortfolios = (count = 10) => {
  const seedCount = count - Portfolios.find().count();
  console.log('seedPortfolios:', count);
  if (seedCount > 0) seedPortfolio(seedCount);
};

const seedPortfolio = (count = 1) => {
  console.log('seedPortfolio:', count);
  for (let i = 0; i < count ; i += 1) Factory.create('portfolio');
};

Meteor.startup(() => {
  seedPortfolios(10);
});
