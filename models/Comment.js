// sequelize comment model
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// extends the sequelize model to the Comment model
class Comment extends Model {}

// build up data structure for comment data
Comment.init(
    {
      // set id rule
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        // set comment_text rule
        comment_text: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        //set user_id rule
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        //set post_id rule
        post_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
)

// Export this page
module.exports = Comment;