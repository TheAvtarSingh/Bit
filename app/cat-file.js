const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const showCatFile = (hash)=>{
// go to cat file
const folder = hash.slice(0,2);
const file = hash.slice(2);
const completePath = path.join(process.cwd(),".bit","objects",folder,file);

// check file exists
if(!fs.existsSync(completePath)){
    console.log(`fatal: Not a valid object name ${hash}`);
    return ;
}

// read file
const fileContent = fs.readFileSync(completePath);
const outputBuffer = zlib.inflateSync(fileContent);
const fileOutput = outputBuffer.toString();

console.log(fileOutput);

}

const showCatFileType = (hash) => {
    console.log(`Under Constuction ${hash} !!`);
    
}

const showCatFileSize = (hash) => {
    console.log(`Under Constuction ${hash} !!`);
    
}
// 0adca8861d19516dea8573db7fcc85c7204a2ad0
module.exports = {showCatFile,showCatFileType,showCatFileSize};