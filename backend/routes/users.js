var express = require('express')
var router = express.Router()
var sequelize = require('../models/index')

/* GET users listing. */
router.get('/', function(req, res, next) {
  try {
    res.send(msg)
  } catch (err) {
    console.log('Connection err: ', err)
  }
})

module.exports = router
