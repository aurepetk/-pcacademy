let os = require('os');

function printPercentageRAMS(){
    let totalRAMS = os.totalmem();
    let freeRAMS = Math.round(100 * os.freemem() / totalRAMS);
    let usedRAMS = Math.round(100 - freeRAMS);
    console.log(`Total RAMS : ${totalRAMS}`);
    console.log(`Free RAMS : ${freeRAMS} %`);
    console.log(`Used RAMS: ${usedRAMS} %`);
}

module.exports = printPercentageRAMS;