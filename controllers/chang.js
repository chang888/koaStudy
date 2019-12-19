'use strict'
var request = require('request')
const config = require('../config')

let chang = {}

const wxdecode = require('../middlewares/wxdecode')

chang.authorize = async (ctx, next) => {
    ctx.body = "success"
    console.log(ctx, "查看ctx")
    console.log(ctx.request.body, "chang.authorize")
    let obj = ctx.request.body
    console.log(obj, "JSONBodyObj")

    // let obj = { xml:
    //     { AppId: [ 'wx63b29481682ccfd8' ],
    //       Encrypt:
    //        [ `'QybPr17L92fF/D4+Yc0IRbHNbySmm5T5xVeybTD/H7hl5wkhltCaEaB9IhjoegV1BcWc5hWs9vHps03dstW2ku9V1to3r0DRI9Lt18BCYM2XG2Mgdzd/DsGYfS9jE9aIAng+wlnkoQHM2FK2jP4kaeGQfD229Fun7XD2GQ3nL/tdvFieZkiOUfU36i+r6bvxCeU
    //        x2mWHDehtOge/5tqrbe2SANIqARiKGkbMlMflNEF8EBxOd0JTUGRDAia4j/lY0jaar/ga3kUjqIOmFky6SAXGF9KVP2aP83lTINmBoujBX7vaguy+F48G42FzIejdzhE+R9JfPtANC9MRCI8UUMK8U01A6GM4DzPms660kduyDLlIZ1funnuO2pt3Fxsg5kURM3d/BUKMrDv
    //        cNPuF0hzG1bRzwyJx+Rn0KML3f8hhINs1GGGntITlKtoTNnAFMo3EaMVWcoORHhCzErJvGA==` ] } }
    let xml = await wxdecode.decodeXML(obj)
    console.log("解析xml成功回来：==============\n",xml);
    
    global.ComponentVerifyTicket = xml.ComponentVerifyTicket
    // let ticket = localStorage.getItem("ComponentVerifyTicket")
    console.log(global.ComponentVerifyTicket, "ticket")
    console.log(global.component_access_token, "global.component_access_token");
    // component_access_token 不存在或者小于10分钟
    if (!global.component_access_token || global.component_access_token < 600 ) {
        console.log("去获得accessToken")
        chang.getComponentAccessToken()
    }
    return next()
}
// 获取令牌
chang.getComponentAccessToken = async () => {
    let url = "https://api.weixin.qq.com/cgi-bin/component/api_component_token"
    let postData = {
        component_appid: config.component_appid,
        component_appsecret: config.component_appsecret,
        component_verify_ticket: global.ComponentVerifyTicket
    }
    console.log(postData, "postData")
    request.post(
        {
            body: postData, // 需要post的数据
            json: true, //数据的格式
            url: url, //请求的URL
        }, (res)=> {
            console.log(res, "请求令牌回调")
        }
    )

}
module.exports = chang
