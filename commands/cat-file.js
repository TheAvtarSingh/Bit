const {showCatFile,showCatFileType,showCatFileSize} = require("../app/cat-file");

const getCatFileInputs = () => {
    // Get the Contents of the command
    const flag = process.argv[3];
    let hash = process.argv[4];

    if (!hash) {
        console.log(`Error: Missing hash value for flag "${flag}".`);
        return;
    }
    
    switch(flag) {
        case '-read':
            showCatFile(hash);
        break;
        case '-type':
            showCatFileType(hash);
        break;
        case '-size':
            showCatFileSize(hash);
        break;
        default:
            if (!flag) {
                console.log("Error: No flag provided.");
            } else if (!hash) {
                console.log(`Error: Missing hash value for flag "${flag}".`);
            } else {
                console.log(`Invalid flag "${flag}".`);
            }
    
            console.log("\nUsage:");
            console.log("  bit read-file -read <hash>  # Print object content");
            console.log("  bit read-file -type <hash>  # Show object type");
            console.log("  bit read-file -size <hash>  # Show object size");
            console.log("\nExample:");
            console.log("  bit read-file -type a1b2c3d4e5f6g7h8i9j0k");
            break;
    }
    }

module.exports = getCatFileInputs;