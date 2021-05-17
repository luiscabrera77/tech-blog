const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
  {
// define an id column
id: {
  type: DataTypes.INTEGER,
  allowNull: false,
  primaryKey: true,
  autoIncrement: true
},
// define a comments column
comment_text: {
  type: DataTypes.STRING,
  allowNull: false,
  validate: {
    // must be at least one character long
    len: [1]
  }
},
// define an post column
post_id: {
  type: DataTypes.INTEGER,
  allowNull: false,
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
);

module.exports = Comment;