'use strict'

const path = require('path')

module.exports = {
  port: '3001',
  secret: 'secret',
  component_appid: "wx63b29481682ccfd8",
  component_appsecret: "b19e51c6b40cceef1514f59b0e2c96a5",
  token: 'zjb', // 消息校验 Token
  encodingAESKey: 'ABCDEFGHIJPQRSTU01234VWXYZabcdstuvwxyz56789', // 消息加解密 key
  publicDir: path.resolve(__dirname, './public'),
  logPath: path.resolve(__dirname, './logs/koa-template.log'),
  mongoDB: {
    database: 'mall',
    username: 'root',
    password: 'root',
    host: '127.0.0.1',
    port: 27017
  },
  list: [
    {
      componentAppId: 'wx63b29481682ccfd8', // 微信第三方平台 appId
      componentAppSecret: 'b19e51c6b40cceef1514f59b0e2c96a5', // 微信第三方平台 appSecret
      token: 'zjb', // 消息校验 Token
      encodingAESKey: 'ABCDEFGHIJPQRSTU01234VWXYZabcdstuvwxyz56789' // 消息加解密 key
    }
  ]
}
