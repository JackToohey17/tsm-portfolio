// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Factory } from 'meteor/dburles:factory';

import { Portfolios } from '../../api/portfolios/portfolios.js';

const seedPortfolios = (count = 10) => {
  const seedCount = count - Portfolios.find().count();
  if (seedCount > 0) seedPortfolio(seedCount);
};

const portfolios = [{
  title: 'Total Request Now',
  description: 'Accusamus sit eos ut quae.\nUt laborum magni voluptatem.\nOdit sapiente perferendis voluptatem doloribus dolores.\nVoluptas eos qui ad enim.\n \rDoloremque dolor minus qui sit aut corrupti at.\nAtque porro quasi deleniti provident non velit doloremque vel vero.\nTenetur qui aliquid at repellendus.\nEum in corrupti.\nQui architecto accusantium eum facilis.\n \rUt a iusto architecto qui vero quisquam quas quia ratione.\nEt ut perferendis voluptas quis cupiditate id ea eius numquam.\nSed porro nemo voluptas qui.\nVel dolorum magnam qui aspernatur sed temporibus sit illum.\nConsequatur omnis velit odit qui sed ut dolores maiores harum.\nNesciunt ut labore recusandae.',
  link: 'http://totalrequestnow-testing.herokuapp.com/rd-app-view',
  img: 'https://s3.amazonaws.com/myfangate.com/rdvote/trnow.png',
  endDate: Factory.tree('portfolio').endDate,
}, {
  title: 'Which Are You',
  description: 'Accusamus sit eos ut quae.\nUt laborum magni voluptatem.\nOdit sapiente perferendis voluptatem doloribus dolores.\nVoluptas eos qui ad enim.\n \rDoloremque dolor minus qui sit aut corrupti at.\nAtque porro quasi deleniti provident non velit doloremque vel vero.\nTenetur qui aliquid at repellendus.\nEum in corrupti.\nQui architecto accusantium eum facilis.\n \rUt a iusto architecto qui vero quisquam quas quia ratione.\nEt ut perferendis voluptas quis cupiditate id ea eius numquam.\nSed porro nemo voluptas qui.\nVel dolorum magnam qui aspernatur sed temporibus sit illum.\nConsequatur omnis velit odit qui sed ut dolores maiores harum.\nNesciunt ut labore recusandae.',
  link: 'https://tsm-which-are-you.herokuapp.com/',
  img: 'http://placekitten.com/200/300',
  endDate: Factory.tree('portfolio').endDate,
}];

const seedPortfolioByTitle = (portfolio) => {
  const portfolioExists = Portfolios.findOne({title: portfolio.title});
  if (!portfolioExists) {
    Portfolios.insert(portfolio);
  }
}

const seedPortfolio = (count = 1) => {
  portfolios.forEach(seedPortfolioByTitle);
  for (let i = 0; i < count ; i += 1) Factory.create('portfolio');
};

Meteor.startup(() => {
  seedPortfolios(10);
});
