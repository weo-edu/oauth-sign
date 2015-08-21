/**
 * Imports
 */

var crypto = require('crypto')

/**
 * OAuth Signature
 */

function sign (method, url, params, consumerSecret, tokenSecret) {
  var baseStr = baseString(method, url, paramString(params))
  var token = encodeURIComponent(consumerSecret) + '&' + encodeURIComponent(tokenSecret || '')

  return hmac(baseStr, token)
}

function hmac (str, secret, format) {
  return crypto
    .createHmac('sha1', secret)
    .update(str)
    .digest(format || 'base64')
}

function baseString (method, url, paramStr) {
  method = (method || 'GET').toUpperCase()
  return [method, url, paramStr]
    .map(encodeURIComponent)
    .join('&')
}

function paramString (params) {
  return Object
    .keys(params)
    .sort()
    .map(function (key) {
      return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
    })
    .join('&')
}

/**
 * Exports
 */

module.exports = sign