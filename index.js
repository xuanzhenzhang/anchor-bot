const scrapeData = require("./scrape.js");
const rwClient = require("./clients/client.js");
var CronJob = require('cron').CronJob;

const tweet = async () => {
    try {
        const [tvl, borrowed] = await scrapeData();
        await rwClient.v2.tweet("Total Value Locked: " + tvl + 
            "b UST \nTotal Value Borrowed: " + borrowed + "b UST");
    } catch (err) {
        console.log(err)
    }
}

// var job = new CronJob("0 20 * * *", () => {
//     tweet();
// });

const tweet2 = async () => {
    try {
        const url = 'https://api.twitter.com/2/users/2837666919/tweets?since_id=1528066226962026496';
        const tweets = await rwClient.get(url);
        console.log("tweets", tweets);
        const firstTweetId = tweets.data[0].id;
        const req = {'body':{'tweet_id': firstTweetId}};
        // console.log(req.body);
        // const postUrl = 'https://api.twitter.com/2/users/1504363325886328835/retweets';
        // const posttweet = await rwClient.post(postUrl,{'tweet_id': firstTweetId});
        // console.log('posttweet', posttweet);
    } catch (err) {
        console.log(err)
    }
}


tweet2();



// Instanciate with desired auth type (here's Bearer v2 auth)
// const {TwitterApi} = require("twitter-api-v2");
// const bearerToken = 'AAAAAAAAAAAAAAAAAAAAAOFMaQEAAAAAm7YCmXOPjNIUuvVr4xVPp%2BXvSJ8%3DnKj1R9H6yk617XKpFfpZLtm2Ag1Cxi9lZ3XWYUsRX6epUehvpN';
// const twitterClient = new TwitterApi(bearerToken);
// const rwClient = twitterClient.readWrite;

// const tweet = async () => {
//     try {
//         await rwClient.v2.tweet("happy");
//     } catch (err) {
//         console.log(err)
//     }
// }

// tweet();
