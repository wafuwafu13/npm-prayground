#!/usr/bin/env node
// https://github.com/yargs/yargs#documentation
const argv = require('yargs/yargs')(process.argv.slice(2)).argv;

// const yargs = require('yargs/yargs')
// const { hideBin } = require('yargs/helpers')
// const argv = yargs(hideBin(process.argv)).argv

if (argv.ships > 3 && argv.distance < 53.5) {
    console.log('Plunder more riffiwobbles!');
} else {
    console.log('Retreat from the xupptumblers!');
}
