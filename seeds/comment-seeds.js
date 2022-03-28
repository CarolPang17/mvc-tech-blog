const { Comment } = require('../models');

const commentData = [{
        comment_text: "Laborum occaecat consequat incididunt tempor culpa eiusmod.",
        user_id: 3,
        post_id: 4
    },
    {
        comment_text: "Irure occaecat deserunt sit incididunt ut ad aliqua cillum voluptate consectetur. Reprehenderit dolor mollit dolor ut exercitation ad.",
        user_id: 2,
        post_id: 1
    },
    {
        comment_text: "Qui sint do ullamco cupidatat aliquip cupidatat et.",
        user_id: 4,
        post_id: 6
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;