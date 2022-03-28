const { Post } = require('../models');

const postData = [
  {
    title: 'Laborum esse non aliqua ',
    post_text: 'Labore non tempor pariatur ullamco laborum nisi enim reprehenderit eiusmod irure laborum. Ut Lorem duis ex tempor consequat. Nulla sunt cillum magna non anim sit mollit consectetur tempor. Sunt adipisicing deserunt ea non commodo amet Lorem magna culpa est aliquip ex. Eiusmod dolor enim commodo ut reprehenderit commodo aliqua excepteur amet irure.',
    user_id: 3,
  },
  {
    title: 'Proident incididunt ipsum ullamco et exercitation laboris est aliqua commodo.',
    post_text: 'Mollit exercitation est eu nisi quis commodo eiusmod. Esse labore in adipisicing ad exercitation minim id mollit aliquip proident. Anim commodo occaecat Lorem consequat mollit.',
    user_id: 2,
  },
  {
    title: 'Reprehenderit eiusmod qui ea ullamco ipsum reprehenderit incididunt.',
    post_text: 'Cupidatat fugiat ipsum do veniam qui aliqua laborum quis elit. Sit culpa eu sint occaecat sint ut consequat dolore et in voluptate est incididunt aute. Nisi eu velit nisi culpa cillum. Minim aliquip labore velit irure laborum irure voluptate magna. In commodo eiusmod sunt quis cillum reprehenderit elit labore sint reprehenderit ex. Ut elit excepteur ullamco tempor consectetur. Minim reprehenderit anim et dolore deserunt eu.',
    user_id: 5,
  },
  {
    title: 'Proident nostrud reprehenderit.',
    post_text: 'Ad mollit labore labore exercitation ipsum nulla Lorem. Laborum mollit amet reprehenderit exercitation enim cupidatat. Fugiat do minim laboris duis do enim tempor qui ad quis sit velit. Esse aliqua sit amet adipisicing nostrud in enim.',
    user_id: 1,
  },
  {
    title: 'Ipsum et id quis.',
    post_text: 'Ex ex ipsum minim nostrud ullamco. Labore deserunt excepteur elit duis mollit cupidatat ea id nostrud in laborum anim. Voluptate excepteur amet nisi magna ea nulla eiusmod sint ad dolor sunt sint culpa culpa. Ipsum ad aliqua exercitation duis. Sint esse ad non laboris exercitation. Sunt consectetur est quis incididunt officia deserunt ad id officia qui anim. Deserunt duis exercitation laboris enim ea ex.',
    user_id: 4,
  },
  {
    title: 'Minim adipisicing culpa consectetur ut commodo excepteur.',
    post_text: 'Do nisi elit laboris do est amet ipsum. Irure anim consequat proident et velit ut aute quis reprehenderit proident ipsum ea. Anim enim labore irure officia labore ipsum magna. Est ad non ullamco laboris sunt tempor consectetur consectetur id eu quis labore consectetur. Elit veniam officia ut velit consectetur cillum excepteur ipsum culpa laborum duis mollit ex incididunt.',
    user_id: 5,
  },
  {
    title: 'Adipisicing culpa non consectetur duis velit aliqua.',
    post_text: 'Ullamco non veniam aute nostrud. Officia dolore pariatur ut pariatur Lorem duis laboris labore aute pariatur voluptate. Laborum aute occaecat consequat amet ex laboris exercitation. Lorem aliquip mollit proident laborum sint magna aliqua elit proident. Nulla do sunt et occaecat magna quis sunt ad et occaecat consequat magna ad.',
    user_id: 6,
  },
  {
    title: 'Nostrud labore dolor eu ipsum non.',
    post_text: 'Est occaecat consectetur deserunt labore minim irure eiusmod reprehenderit laboris. Ex consequat voluptate deserunt deserunt est enim pariatur. Excepteur in magna ex velit in aliqua fugiat amet officia. Quis tempor mollit culpa quis esse ad exercitation. Excepteur adipisicing nulla labore consectetur Lorem sint fugiat labore. In ad reprehenderit amet et sunt. Deserunt minim commodo irure in excepteur amet.',
    user_id: 7,
  },

]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;