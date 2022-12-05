/**
 * Authentication example
 * Generating authentication token is done automatically as needed,
 * but if you need to manually generate a token, the following code 
 * can be used
 */

const {appInit} = require('./src/app')
const credentials = require('./yotpo.keys.json')
const {getToken} = require('./src/auth')
 
appInit(credentials)
