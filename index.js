#!/usr/bin/env node
const createBitDirectory = require('./app/init');
const getCatFileInputs = require('./commands/cat-file');
const getHashObjectInputs = require('./commands/hash-object');

const command = process.argv[2];

switch (command) {
    case 'init':
        createBitDirectory();
        break;

    case 'add':
        addFile();
        break;
    case 'read-file':
        getCatFileInputs();
        break;
    case 'hash-my-file':
        getHashObjectInputs();
        break;
    default:
        console.log(`Unknown command: ${command}`);
        console.log('Available commands:');
        console.log('  init - Initialize a new Bit repository');
        console.log('  add  - Add a file to the Bit repository');
        break;
}