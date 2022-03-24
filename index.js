const scrapeData = require("./scrape.js");
const rwClient = require("./client.js");
var CronJob = require('cron').CronJob;

const tweet = async () => {
    try {
        const [tvl, borrowed] = await scrapeData();
        await rwClient.v1.tweet("Total Value Locked: " + tvl + 
            "b UST \nTotal Value Borrowed: " + borrowed + "b UST");
    } catch (err) {
        console.log(err)
    }
}

var job = new CronJob("0 20 * * *", () => {
    tweet();
});

tweet();
job.start();


