
const User = require('../models/index').getModel('user')

const user = {
    /**
     * @Description: ��¼
     * @date 2019/5/30
     * @params: { Object } userData
     * @return: { Object | null }
     */
    async login (userData) {
        // let result = await User.findOne(userData)
        let result = {
            "_id": "5df338d7da243677075e0893",
            "uuid": "5d8a20dea883f735abbdbfa9",
            "userName": "123456",
            "passwoed": "123456"
        }
        console.log(result, "loginresult")
        return result
    }
}

module.exports = user
