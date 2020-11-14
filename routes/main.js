const express = require('express')
router_main = express.Router()


main = require('../controllers/main')
router_main.get('/', main.hello)


module.exports = router_main