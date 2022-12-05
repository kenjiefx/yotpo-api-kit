/**
 * Authentication example
 * Generating authentication token is done automatically as needed,
 * but if you need to manually generate a token, the following code 
 * can be used
 */

const {appInit} = require('../src/app/yotpo.js')
const credentialsJSON = require('../yotpo.keys.json')
const {credentials} = require('../src/app/yotpo')

credentials = JSON.parse(credentialsJSON)
appInit(credentials:credentials)
