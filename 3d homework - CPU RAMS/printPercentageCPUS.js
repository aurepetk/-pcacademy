let os = require('os');

function printPercentageCPUS(){
    let cpus = os.cpus();

    console.log("CPU:");

    for(let i = 0; i < cpus.length; i++) {
        let cpu = cpus[i];
        let totalCPU = 0;
        let cpuTypes = cpu.times;

        for(let type in cpuTypes) {
            totalCPU += cpuTypes[type];
        }

        for(let type in cpuTypes) {
            console.log(`${type}: ${Math.round(100 * cpuTypes[type] / totalCPU)} %`);
        }
    }
}

module.exports = printPercentageCPUS;