const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_content: 'laboris nisi ut aliquip ex ea commodo.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content: 'Mattis enim ut tellus elementum sagittis vitae et leo duis.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Dui id ornare arcu odio ut sem nulla pharetra diam. Varius morbi enim nunc faucibus a pellentesque sit amet.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Facilisis mauris sit amet massa vitae tortor condimentum lacinia. ',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_content: 'Dui id ornare arcu odio ut sem nulla pharetra diam. Varius morbi enim nunc faucibus a pellentesque sit amet.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_content: 'Vel facilisis volutpat est velit egestas dui. Vitae sapien pellentesque habitant morbi tristique senectus. Eleifend mi in nulla posuere sollicitudin aliquam ultrices.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Dictumst quisque sagittis purus sit. ',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_content: 't risus viverra adipiscing at in. Facilisis mauris sit amet massa. ',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_content: 'Tincidunt tortor aliquam nulla facilisi cras fermentum odio. ',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_content: 'Amet justo donec enim diam vulputate ut pharetra sit. ',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_content: 'Mattis enim ut tellus elementum sagittis vitae et leo duis. ',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_content: 'Libero id faucibus nisl tincidunt eget nullam. In est ante in nibh mauris.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'quis ipsum suspendisse ultrices gravida dictum. At risus viverra adipiscing at in. ',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_content: 'Varius morbi enim nunc faucibus a pellentesque sit amet. ',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_content: 'Phasellus vestibulum lorem sed risus. Amet venenatis urna cursus eget nunc scelerisque viverra mauris in. ',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_content: 'Nibh venenatis cras sed felis eget velit aliquet sagittis id. ',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
