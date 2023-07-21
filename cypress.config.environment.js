const CryptoJS = require('crypto-js');

var baseUrl = (host) => {
    return CryptoJS.enc.Base64url.parse(host).toString(CryptoJS.enc.Utf8);
}
export { baseUrl }