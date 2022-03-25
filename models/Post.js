// sequelize Post model
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

// extends the sequelize model to the Post model
class Post extends Model {}

// build up data structure for post data
Post.init(
  {
    // set id rule
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
          // set title rule
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    post_text: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

// Export this page
module.exports = Post;
