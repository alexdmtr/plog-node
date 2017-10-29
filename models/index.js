var Sequelize = require('sequelize')
var Promise = require('bluebird')

var sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',

    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },

    logging: false
})

var User = require('./user')(sequelize)
// var Group = require('./group')(sequelize)
var Post = require('./post')(sequelize)
var Photo = require('./photo')(sequelize)
// Group.belongsTo(User, {as: 'owner'})

// Group.belongsToMany(User, {through: 'user_group'})
// User.belongsToMany(Group, {through: 'user_group'})

Post.belongsTo(User)
Photo.belongsTo(Post)


User.hasMany(Post)
Post.hasMany(Photo)
// Post.belongsTo(Group, {as: 'group'})

sequelize.seed = require('./seed')({User, Post, Photo})

module.exports = sequelize
