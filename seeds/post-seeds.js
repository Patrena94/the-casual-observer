const { Post } = require('../models');

const postdata = [
  {
    title: 'Authentic Italian Recipes.',
    post_url: 'https://foodnetwork.com',
    user_id: 10
  },
  {
    title: 'Explore Moon to MARS.',
    post_url: 'https://www.nasa.gov/topics/moon-to-mars',
    user_id: 8
  },
  {
    title: 'Top Toy Makers say their products will be harder to find and more expensive this holiday season',
    post_url: 'https://cnn.com',
    user_id: 1
  },
  {
    title: 'Chocolate Cake',
    post_url: 'http://foodnetwork.com',
    user_id: 4
  },
  {
    title: 'Johny Cash.',
    post_url: 'http://wikipedia.com',
    user_id: 7
  },
  {
    title: 'Responsive Web Design with HTML5 and CSS.',
    post_url: 'https://border.com',
    user_id: 4
  },
  {
    title: 'HTML & CSS design and build websites.',
    post_url: 'http://barnesand noble.com',
    user_id: 1
  },
  {
    title: 'PHP,MySQL & JavaScript All in One.',
    post_url: 'http://amazon.com',
    user_id: 1
  },
  {
    title: 'JavaScript& JQuery interactive front-end web development.',
    post_url: 'http://ebay.com',
    user_id: 9
  },
  {
    title: 'Ida, Already A Category 4 Hurricane, is still Intensifying as i nears the Gulf Coast.',
    post_url: 'https://npr.com',
    user_id: 5
  },
  {
    title: 'How to finally become a morning person and enjoy it.',
    post_url: 'http://womenshealth.com',
    user_id: 3
  },
  {
    title: 'Humans can Develop a Sixth Sense, Study Proves.',
    post_url: 'http://popularmechanics',
    user_id: 10
  },
  {
    title: 'The Best Habits and Hacks for homing form work.',
    post_url: 'https://menshealth.com',
    user_id: 8
  },
  {
    title: 'Why Nearly 80 percent of Autoimmune Sufferers are Female.',
    post_url: 'https://scientificAmerican.com',
    user_id: 3
  },
  {
    title: 'Treasury Demands Shows Resilience as Fed Signals Bond-Buying Pullback.',
    post_url: 'https://wsj.com',
    user_id: 3
  },
  {
    title: 'Stock Market Turns Cautious as Defesive Shares Surge',
    post_url: 'https://wsj.com',
    user_id: 7
  },
  {
    title: 'Lifing room wall ideas 10 inspirational design tips for the blank wall in your lounge.',
    post_url: 'http://homesand gardens.com',
    user_id: 6
  },
  {
    title: '8 Best Browsers for Windows 10.',
    post_url: 'https://gadgetliv.com',
    user_id: 4
  },
  {
    title: '10 Best Gaming PCs.',
    post_url: 'http://buyersguide.org',
    user_id: 6
  },
  {
    title: 'Best Calamari.',
    post_url: 'https://ruthchris.com',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
