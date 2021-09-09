// var yargs = require('yargs/yargs')(process.argv.slice(2));

// var argv = yargs.usage('This is my awesome program', {
//   'input': {
//     description: 'Input file name',
//     requiresArg: true,
//     short: 'i',
//   },
//   'output': {
//     description: 'Output file name',
//     requiresArg: true,
//     short: 'o'
//   }
// }).argv;

// yargs.showHelp();

// console.log('\n\nInspecting options');
// console.dir(argv);

// var yargs = require('yargs/yargs')(process.argv.slice(2));

// var argv = yargs.usage('This is my awesome program').options({
//   'input': {
//     type: "string",
//     description: 'Input file name',
//     requiresArg: true,
//     alias: 'i',
//   },
//   'output': {
//     type: "string",
//     description: 'Output file name',
//     requiresArg: true,
//     alias: 'o'
//   }
// }).argv;

// yargs.showHelp();

// console.log('\n\nInspecting options');
// console.dir(argv);

var yargs = require('yargs/yargs')(process.argv.slice(2));

var argv = yargs.usage('$0 [port]', "Load up a server").options({
	input: {
		description: 'Input file name',
		requiresArg: true,
		alias: 'i',
	},
	output: {
		description: 'Output file name',
		requiresArg: true,
		alias: 'o',
	},
}).argv;

yargs.showHelp();

console.log('\n\nInspecting options');
console.dir(argv);