const { createObjectHash, createObjectFile } = require("../app/hash-object");

const getHashObjectInputs = () =>{
  // Get the command-line arguments
  let flag = process.argv[3];
  let fileName = process.argv[4];

  if (!fileName) {
      if (!flag) {
          console.log("Error: No file provided.");
      } else {
          console.log(`Warning: No flag detected. Using "${flag}" as the filename.`);
      }
      
      // If no valid file name is provided, return
      if (!flag) return;

      // If a flag was provided but no filename, assume the flag is the filename
      fileName = flag;
      flag = null;
  }

  // If filename exists, generate hash and create the object file if -w flag is used
  const objData = createObjectHash(fileName);
  
  if (flag === "-create") {
      createObjectFile(objData);
      console.log(`Object file created successfully for ${fileName}`);
  } else {
      console.log(`Generated hash for ${fileName}: ${objData.hash}`);
      console.log("\nMore:");
      console.log("  bit hash-object -create <fileName>     # Write the hash to .bit/objects");
  }
 }

module.exports = getHashObjectInputs;