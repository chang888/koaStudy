'use strict'

const Cache = require('../middlewares/cache')
let cacheMap = new Cache()
const cache = {}
cache.cache = async (ctx, next) => {
    let name = ctx.request.url
    if (!cacheMap.get(name)) {
        cacheMap.set({key: name, value: "someValue",  maxAge: 100})
        ctx.body = '第一次'
    } else {
        ctx.body = '走缓存'
    }
    next()
}


module.exports = cache
