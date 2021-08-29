const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'ElizabethJ',
    email: 'Ejames@nestscape.net',
    password: 'RAIv1234'
  },
  {
    username: 'Zoehn1',
    email: 'ZHahn@yahoo.com',
    password: 'RAIv1234'
  },
  {
    username: 'Kim8T',
    email: 'Kthomas@gmail.com',
    password: 'RAIv1234'
  },
  {
    username: 'NikkiJ8',
    email: 'NicoleJ@p3corp.com',
    password: 'RAIv1234'
  },
  {
    username: 'djiri4',
    email: 'gmidgley4@weather.com',
    password: 'RAIv1234'
  },
  {
    username: 'Zemi5',
    email: 'ZemiH@aol.com',
    password: 'RAIv1234'
  },
  {
    username: 'maya6',
    email: 'maya@uconn.edu',
    password: 'RAIv1234'
  },
  {
    username: 'Andrew7',
    email: 'AndyJ@ucla.edu',
    password: 'RAIv1234'
  },
  {
    username: 'Jackie8',
    email: 'Jbrown@hotmail.com',
    password: 'RAIv1234'
  },
  {
    username: 'johny9',
    email: 'jcash@Ze.gov',
    password: 'RAIv1234'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
