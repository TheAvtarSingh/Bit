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
    console.log(`fatal: File Not Exists with name : ${hash}`);
    return ;
}

// read file
const fileContent = fs.readFileSync(completePath);
const outputBuffer = zlib.inflateSync(fileContent);
const fileOutput = outputBuffer.toString();

 // Extract actual file content (removing "blob <size>")
 const fileLines = fileOutput.split('\0');
 if (fileLines.length > 1) {
     fileLines.shift(); // Remove the first line containing "blob <size>"
 }
 console.log(fileLines.join('\0'));

}

const showCatFileType = (hash) => {
       // go to cat file size
const folder = hash.slice(0,2);
const file = hash.slice(2);
const completePath = path.join(process.cwd(),".bit","objects",folder,file);

// check file exists
if(!fs.existsSync(completePath)){
    console.log(`fatal: File Not Exists with name : ${hash}`);
    return ;
}
    
// Read the file content
const fileBuffer = fs.readFileSync(completePath);
        
// Decompress the content (Bit uses zlib compression)
const zlib = require('zlib');
const decompressedBuffer = zlib.inflateSync(fileBuffer);
const content = decompressedBuffer.toString();

// Extract the object type from the content
const firstSpaceIndex = content.indexOf(' ');
if (firstSpaceIndex === -1) {
    console.log("Invalid object format");
    return;
}

const objectType = content.substring(0, firstSpaceIndex);
console.log(objectType);

}

const showCatFileSize = (hash) => {
    // go to cat file size
const folder = hash.slice(0,2);
const file = hash.slice(2);
const completePath = path.join(process.cwd(),".bit","objects",folder,file);

// check file exists
if(!fs.existsSync(completePath)){
    console.log(`fatal: File Not Exists with name : ${hash}`);
    return ;
}

const stats = fs.statSync(completePath);
var fileSizeInBytes = stats.size;
console.log(fileSizeInBytes);

    
}
// 0adca8861d19516dea8573db7fcc85c7204a2ad0
module.exports = {showCatFile,showCatFileType,showCatFileSize};