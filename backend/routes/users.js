var express = require('express')
var router = express.Router()
var db = require('../models/index')

/* GET users listing. */
router.get('/', async function(req, res, next) {
  try {
    // Limit the number of records returned
    const limit = req.body.limit || 20

    // Offset for paginated results
    const offset = req.body.offset || 0

    const users = await db.User.findAndCountAll({
      attributes: {
        exclude: ['password']
      },
      limit,
      offset
    })

    res.send({
      success: true,
      message: "User List Fetched Successfully!",
      data: {
        users,
        offset,
        limit
      }
    })
  } catch (err) {
    res.status(500).send({
      success: false,
      message: err.message,
      data: null
    })
  }
})

module.exports = router
