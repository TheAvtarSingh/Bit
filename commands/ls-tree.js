const printLsTree = require("../app/ls-tree");

const getPrintTreeInputs = () => {
    // Get the Contents of the command
    const flag = process.argv[3];
    let hash = process.argv[4];

    if(!hash && !flag){
        console.log(`Error: Missing both hash value and flag.`);
        return;
    }

    if (!hash) {
        console.log(`Warning: Missing hash value or for flag "${flag}".`);
        console.log(`Treating ${flag} as Hash Value...`);
        hash = flag;
        printLsTree(hash);
        return;
    }
    
    switch(flag) {
        case '-tree':
            printLsTree(hash);
        break;
        default:
            console.log("\nUsage:");
            console.log("  bit print-tree -tree <hash>  # Print object content");
            console.log("  bit print-tree <hash>  # Print object content");
            console.log("\nExample:");
            console.log("  bit print-tree a1b2c3d4e5f6g7h8i9j0k");
            break;
    }
}
module.exports = getPrintTreeInputs;