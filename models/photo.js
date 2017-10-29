const Sequelize = require('sequelize')

module.exports = function (sequelize) {
  var Photo = sequelize.define('photo', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: Sequelize.STRING(100)
    }
  }, {
    timestamps: true
  })

  return Photo
}