
class Cache  {
    constructor(cache = {}) {
        this.cache = cache
    }
    // 获取值
    get(key) {
        if (this.cache[key]) {
            return this.cache[key].value
        } else {
            return ""
        }
    }
    // 设置值
    set({ key, value, maxAge = 600 }) {
        this.cache[key] = {}
        this.cache[key]["value"] = value
        this.cache[key].maxAge = maxAge
        this.start(key, maxAge)
    }
    remove(key) {
       delete this.cache[key]
    }
    clear() {
        this.cache = {}
    }
    // 开始缓存倒计时
    start(key, maxAge) {
        this.cache[key].timer = setInterval(() => {
            maxAge --
            this.cache[key].maxAge = maxAge
            // 到期清除定时器和删除该key
            if (maxAge == 0) {
                let timer = this.cache[key].timer
                clearInterval(timer)
                this.remove(key)
                console.log(`已清除缓存${key}`)
            }
        }, 1000)
    }
}
module.exports = Cache
// var cache = new Cache()
// cache.set({key: "name", value: "123", maxAge: 10 })



