'use strict'

const Router = require('koa-router')
const controllers = require('../controllers')
const config = require('../config')
// const wxdecode = require('../middlewares/wxdecode')



const router = new Router()
router.prefix('/api')

router.post('/login', controllers.login.login)
router.get('/data/:id', controllers.cache.cache)
router.post('/authorize', controllers.chang.authorize)


module.exports = router
