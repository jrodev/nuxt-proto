//
const libs = require('../../customs/libraries/utils')

console.log("Middleware->libs", libs)

export default function validateSession (req, res, next) {

    const isLogin = req.originalUrl.includes('public/login')

    if (isLogin) {
        console.log("Server->validateSession->isLogin", isLogin)
    }

    return next()
}