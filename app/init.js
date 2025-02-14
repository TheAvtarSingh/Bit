const fs = require('fs');
const path = require('path');

const createBitDirectory = () => {
   // Create the objects, refs, and hooks directories
   fs.mkdirSync(path.join(process.cwd(), '.bit'), { recursive: true });
   fs.mkdirSync(path.join(process.cwd(), ".bit", "objects"), { recursive: true });
   fs.mkdirSync(path.join(process.cwd(), ".bit", "refs"), { recursive: true });
   fs.mkdirSync(path.join(process.cwd(), ".bit", "hooks"), { recursive: true });
    // Create the HEAD file
   fs.writeFileSync(path.join(process.cwd(), ".bit", "HEAD"), "ref: refs/heads/master\n");
   fs.writeFileSync(path.join(process.cwd(), ".bit", "Welcome"), "Welcome to Bit");
   console.log('Bit directory created');
}

module.exports = createBitDirectory;