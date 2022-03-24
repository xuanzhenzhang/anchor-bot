const {TwitterApi} = require("twitter-api-v2");

const client = new TwitterApi({
    appKey: '1ta09BkgRhjf1OcqqxG2qrMvR',
    appSecret: '1Wx4aCBEhpYpNaKlCmZhXrTsvXwgogYOEWvTSyXkqWI1zFlrul',
    accessToken: '1504363325886328835-wzpCoPLhobctXOB9PXikDn9S6HVdK5',
    accessSecret: 'vSVRt9EsgCsHkK1ZGI6yLub1RP5WdwUWuNdnZI0p8CgtZ'
})

const rwClient = client.readWrite

module.exports = rwClient
