

const config = require('../config')
const WechatEncrypt = require('wechat-encrypt')
const xml2js = require('xml2js')
let obj =  { xml:
    { AppId: [ 'wx63b29481682ccfd8' ],
    Encrypt:
     [`0D8TNJD9mlqu+ZrWaDaYoKCXmohvnV+t4/E2ZcsuPCsGNVA9TtBGPFeeuo7CkRhsA0mnUw9AvAAwgcb/eE0xCgX2ISCEMxP92LoE85rvpJyV2bAzZjCvbsJBJXKCxJ8mIC/1WTr27lQ5Z9sOMVPpb9Q55uWo4YIT+zbpKOshjfpWW/bftmKkQ15JPJpd6obP271
         iGl0TTKP5aNIoGbixtYX+b0U2spoX8MrT93pRNFqo3kiODPMHU+ip/3yJj/ByAJHDpMmt55ElKsUVm9oryP3s6SRALI9QtJM3cIkaM/z2PN3aw0g3O6HdbGrWH1tFDmsDvcKtBBDlHTmPXYneZA4gaS98ItzT/1l5rEZGPwnvNN8XakEQpjJBqOSrRiNyohYllXMPmjNdQTC
         a63f+Y6KRdndXyKMnvzZeEiiA5qb8oTvL8nMLTUnKOQRS9Keskug5cpQ23rJ0sE9133wA1w==`]
         }
  }
let wxdecode = {}
const wechatEncrypt = new WechatEncrypt({
    appId: config.component_appid,
    encodingAESKey: config.encodingAESKey,
    token: config.token
})


const xmlParser = new xml2js.Parser({
    explicitRoot: false,
    explicitArray: false
})
// 解板XML数据
function parseXMLSync(str) {
    return new Promise(function (resolve, reject) {
        xmlParser.parseString(str, function (err, result) {
            if (err) {
                resolve(err)
            } else {
                resolve(result)
            }
        })
    })
}
// console.log(obj.xml.AppId[0]);
wxdecode.decodeXML = async (body) =>  {
        let obj = await parseXMLSync(body)
        // console.log(ctx, "99999ctx");
        // let obj = ctx.request.body
        console.log(obj, typeof(obj), "传进来的obj")
        console.log(obj.xml.Encrypt[0], "obj.xml.Encrypt[0]", typeof(obj.xml.Encrypt[0]))
        let demo = "t4u4Z6JaDK30HKvHIkZum323Oh7XATcWl7FOl4tI59ve3DXMpatkMa1xdXEwkY9rZZYHgHb8PdeZceMX3x/deBOrpWt0V1blEIEl7rnaRPXrCp9KOhHj1DYxFCIV1V/YnybepIVDktSp2hJ4q/bw7HrPRFWfFkQTcD6GGehm7OWCp0rXZG/83hVj9dzfh/S5TLB+j//5cZwtTEMKWX9VMb0aDbOR44j4Ne2K+4G5ALFC37TgJOmgvkLaH/30HqtgFOHnv1zGlc4eKzxzxUNPe7J7bMKGTrKXvNjC6Nt+uvZi3FCU5HKt9FsGuNjRriA08MfusSUCmzQCtSNyI6kWVVHixz3SzgJiIDL9jQKim7hS3uSwGnixZWMVTAJynG2xPb/AaBQjZi2T3zXemUTfh9DZheT43Xd4f3BKr8/UPP999Q5tsszYwc4OtrV6Nf0A14G31zdRtlqhdaNFn4vC3A=="
        let str = wechatEncrypt.decode(obj.xml.Encrypt[0])
        // let str = wechatEncrypt.decode(enStr)
        console.log(`解密后的消息：\n============\n${str}\n============\n\n`)
        let result = parseXMLSync(str)
        // console.log(`\n\n=========result ${JSON.stringify(result)}`);
        // return Promise.resolve(result)
        return result

        // let xml = xmlParser.parseString(str, function (err, result) {
        //     if (err) {
        //         console.log(err, "err")
        //         return err
        //     } else {
        //         console.log(result, "result解析成功")
        //         return result
        //     }
        // })
    }
// wxdecode.decodeXML(obj)



// 解析XML数据成JS对象
module.exports = wxdecode

