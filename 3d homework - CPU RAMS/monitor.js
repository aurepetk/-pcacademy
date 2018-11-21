let cpu = require("./printPercentageCPUS");
let ram = require("./printUsedRAMS");

const repaetingInterval = 30000;

function monitor(){
    cpu();
    ram();
}

monitor();
setInterval(function(){
    monitor()}, repaetingInterval);