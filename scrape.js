const axios = require("axios");
const cheerio = require("cheerio");

const urlDefillama = "https://defillama.com/protocol/anchor";
// const urlKujiraBLuna = "https://orca.kujira.app/";
// const urlKujiraBEth = "https://coinmarketcap.com/currencies/kujira/";


const scrapeData = async () => {
    const resDefillama = await axios.get(urlDefillama);
    let $ = cheerio.load(resDefillama.data);
    const tvlSelector = "#center > div > div.sc-6796a414-9.iEcvgD > div.sc-dd187d5a-0.eJgian.css-39anmg > div.sc-dd187d5a-3.iNXBO.css-vurnku > div:nth-child(2) > div.sc-c029f680-2.cIvqEd > div.sc-17683d41-0.fkbuhZ.css-9on69b"
    const borrowedSelector = "#center > div > div.sc-6796a414-9.iEcvgD > div.sc-dd187d5a-0.eJgian.css-39anmg > div.sc-dd187d5a-3.iNXBO.css-vurnku > div:nth-child(2) > div.sc-17683d41-0.fkbuhZ.css-12ghyv9 > table > tbody > tr:nth-child(3) > td";
    const tvlText = $(tvlSelector).text();
    const tvl = parseFloat(tvlText.substring(1, tvlText.length-1));
    const borrowedText = $(borrowedSelector).text();
    const borrowed = parseFloat(borrowedText.substring(1, borrowedText.length-1));

    // can't scrape from app (root id)
    /*
    const resKujiraBLuna = await axios.get(urlKujiraBLuna);
    $ = cheerio.load(resKujiraBLuna.data);
    const blunaSelector = "#root > div > div.graphs.row.px-4 > div.col-12.col-lg-9.px-0.pl-lg-2.pr-lg-4.order-2.order-lg-1 > div.row.ai-c.mt-4.mt-lg-2.mb-4 > div.col-12.col-md-8.col-xl-9 > div > div.col-4.order-4.col-md-20.order-md-6 > h4";
    const blunaText = $(blunaSelector).text();
    const bluna = parseFloat(blunaText.substring(0, blunaText.length-1));
    */

    // const resKujiraBEth = await axios.get(urlKujiraBEth);
    // $ = cheerio.load(resKujiraBEth.data);
    // const bethSelector = "#__next > div.bywovg-1.fUzJes > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div.sc-16r8icm-0.eMxKgr.container > div.n78udj-0.jskEGI > div > div.sc-16r8icm-0.kjciSH.priceSection > div.sc-16r8icm-0.kjciSH.priceTitle > div";
    // const bethText = $(bethSelector).text();
    // console.log("bethtext", bethText);
    // const beth = parseFloat(bethText.substring(0, bethText.length-1));

    return [(tvl + borrowed).toFixed(2), borrowed];
}

// request(url, (error, response, html) => {
//     if (!error && response.statusCode == 200) {
//         const $ = cheerio.load(html);
//         const x = $('.title');
//         console.log(x);
//     }
// })
module.exports = scrapeData;
