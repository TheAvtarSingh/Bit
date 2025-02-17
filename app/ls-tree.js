const path = require('path');
const fs = require('fs');
const zlib = require('zlib');

const printLsTree = (hash) => {
const filePath = path.join(process.cwd(),'.bit','objects',hash.slice(0,2),hash.slice(2));

if(!fs.existsSync(filePath)){
    console.log(`Error: Missing file for hash "${hash}".`);
    return;
}

const fileContents = fs.readFileSync(filePath);
const outputBuffer = zlib.inflateSync(fileContents);
const stringOutput = outputBuffer.toString().split('\0')
// removing tree keyword
const treeOutpot = stringOutput.slice(1).filter((e)=> e.includes(" "));
const treeMap = treeOutpot.map((e) => e.split(" ")[1]);
treeMap.forEach((e)=>console.log(e));

}

module.exports = printLsTree;