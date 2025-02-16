const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const crypto = require('crypto');

const createObjectFile = ({blob,hash}) => {
// if flag is there create its file
const folder = hash.slice(0,2);
const file = hash.slice(2);
const completeFolderPath = path.join(process.cwd(),".bit","objects",folder);


if(!fs.existsSync(completeFolderPath)){
fs.mkdirSync(completeFolderPath);
}
const compressedData = zlib.deflateSync(blob);
const filePath = path.join(completeFolderPath,file);
if(fs.existsSync(filePath)){
    console.log(fs.readFileSync(filePath));
}
fs.writeFileSync(filePath,compressedData);

}

// create its blob then create its hash
const createObjectHash = (fileName) => {
// 1. Make sure file is there
const filePath = path.resolve(fileName);
if(!fs.existsSync(filePath)){
    console.log(`fatal: could not open ${fileName} for reading: No such file or directory`);
    return;
}
// 2. read the file
const fileContents = fs.readFileSync(fileName);
// 3. creating blob
const fileLength = fileContents.length;
const header = `blob ${fileLength}\0`;
const blob = Buffer.concat([Buffer.from(header),fileContents]);
//  4. create hash
const hash = crypto.createHash('sha1').update(blob).digest('hex');

return {
    blob,
    hash
}
}

module.exports = {createObjectHash,createObjectFile}