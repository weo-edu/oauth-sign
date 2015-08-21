# oauth-sign

Simple, jank-free OAuth v1.0a signature generation.

## Installation

`npm install weo-edu/oauth-sign`

## Usage

`signature = sign(method, url, params, consumerSecret, tokenSecret)`


Parameters:

  * `method` - the http verb used for the request (get/post/put/del)
  * `url` - the endpoint the request is being sent to (no querystring, domain & protocol must match)
  * `params` - all the parameters being sent with the request, minus the signature itself
  * `consumerSecret` - consumer secret (provided by the oauth provider)
  * `tokenSecret` - (optional) token secret (provided by the oauth provider)

## Example
```javascript
var sign = require('oauth-sign')
var params = {
  oauth_consumer_secret:
  oauth_version: '1.0',
  oauth_signature_method: 'HMAC-SHA1'
  // ...etc
}

params.oauth_signature = sign('post', authorizeUrl, params, consumerSecret, tokenSecret)
```