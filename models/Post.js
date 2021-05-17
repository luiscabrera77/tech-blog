const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create fields/columns for Post model
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // define a body column for the text
    post_body: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        // must be at least one character long
        len: [1]
      }
    },
    // post_url: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     isURL: true
    //   }
    // },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post'
  }
);

module.exports = Post;