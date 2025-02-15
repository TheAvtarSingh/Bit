const {showCatFile,showCatFileType,showCatFileSize} = require("../app/cat-file");

const getCatFileInputs = () => {
    // Get the Contents of the command
    const flag = process.argv[3];
    const hash = process.argv[4];
    
    switch(flag) {
        case '-p':
            showCatFile(hash);
        break;
        case '-t':
            showCatFileType(hash);
        break;
        case '-s':
            showCatFileSize(hash);
        break;
        default:
            console.log(`fatal: Not a valid object name ${hash}`);
        break;
    }
    }

module.exports = getCatFileInputs;