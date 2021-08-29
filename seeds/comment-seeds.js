const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'I love the  Pasta alla Norma Recipe.',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'Great explanation of MYSQL.',
    user_id: 6,
    post_id: 8
  },
  {
    comment_text: 'Firfox is good.',
    user_id: 3,
    post_id: 18
  },
  {
    comment_text: 'Interesting life.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'The Lobster Mac & Cheese is to Die for.',
    user_id: 1,
    post_id: 20
  },
  {
    comment_text: 'Great with ice cream.',
    user_id: 7,
    post_id: 4
  },
  {
    comment_text: 'Best Steak Around.',
    user_id: 6,
    post_id: 20
  },
  {
    comment_text: 'All Parent should read.',
    user_id: 3,
    post_id: 14
  },
  {
    comment_text: 'very moist.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Very descriptive.',
    user_id: 4,
    post_id: 9
  },
  {
    comment_text:
      'Very Informative article.',
    user_id: 5,
    post_id: 14
  },
  {
    comment_text:
      'The stuff lobster is awesome as well.',
    user_id: 2,
    post_id: 20
  },
  {
    comment_text: 'Go to bed early.',
    user_id: 4,
    post_id: 11
  },
  {
    comment_text:
      'Canvas Paintings with matching vases.',
    user_id: 5,
    post_id: 13
  },
  {
    comment_text:
      'Apple was good buy like 15 years ago.',
    user_id: 9,
    post_id: 16
  },
  {
    comment_text: 'This weather is seriously dangerous.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'Excellent for rookies.',
    user_id: 3,
    post_id: 8
  },
  {
    comment_text:'Board up your windows',
    user_id: 8,
    post_id: 10
  },
  {
    comment_text:
      'invest in mutal bonds.',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'mattle start building American.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Buy some savings bond',
    user_id: 1,
    post_id: 15
  },
  {
    comment_text: 'Microsoft was a good by like 20years ago.',
    user_id: 4,
    post_id: 16
  },
  {
    comment_text: 'Brave is excellent.',
    user_id: 4,
    post_id: 18
  },
  {
    comment_text: 'Fall is Here.',
    user_id: 4,
    post_id: 10
  },
  {
    comment_text: 'I see why my mom likes.',
    user_id: 7,
    post_id: 5
  },
  {
    comment_text: 'Excellent Ingredients',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Its all about ASUS',
    user_id: 3,
    post_id: 19
  },
  {
    comment_text: 'Better start shopping early.',
    user_id: 5,
    post_id: 3
  },
  {
    comment_text: 'Great read for all females.',
    user_id: 10,
    post_id: 14
  },
  {
    comment_text: 'Very clear Explanation of PHP.',
    user_id: 10,
    post_id: 8
  },
  {
    comment_text: 'Good morning World',
    user_id: 10,
    post_id: 11
  },
  {
    comment_text: 'Good morning World.',
    user_id: 8,
    post_id: 5
  },
  {
    comment_text: 'Apple is master.',
    user_id: 8,
    post_id: 19
  },
  {
    comment_text: 'Lenovo all the way.',
    user_id: 9,
    post_id: 19
  },
  {
    comment_text:
      'very simple recipe.',
    user_id: 5,
    post_id: 4
  },
  {
    comment_text:
      'Workout in the morning.',
    user_id: 2,
    post_id: 11
  },
  {
    comment_text: 'the css section was Great very precise.',
    user_id: 4,
    post_id: 6
  },
  {
    comment_text: 'The HTMl section was awesome.',
    user_id: 9,
    post_id: 6
  },
  {
    comment_text:
      'Excellent for beginers.',
    user_id: 7,
    post_id: 9
  },
  {
    comment_text: 'Fresh Pasta.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Caprese.',
    user_id: 10,
    post_id: 1
  },
  {
    comment_text: 'Very Interesting Article. I have always been intested in learning more since the movie the Sixth Sense.',
    user_id: 10,
    post_id: 12
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
