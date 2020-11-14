const express = require('express')
router = express.Router()


main = require('../controllers/main')
router.get('/', main.hello)


module.exports = router