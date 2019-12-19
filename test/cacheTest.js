const request = require('request')
let time = 300
function getDate() {
    let id = Math.floor(Math.random()*9+1)
    let url = `http://localhost:3001/api/data/${id}`
    request.get(url)
}

let timer = setInterval(() => {
    time --
    getDate()
    if (time == 0) {
        clearInterval(timer)
    }
}, 300)