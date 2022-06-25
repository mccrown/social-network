//check

const router = require('express').Router()

const apiRoutes = require('./api')

//check
router.use('/api', apiRoutes)



module.exports = router