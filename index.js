// Allows you to precompile ES6 syntax
require('@babel/register')({
	plugins: ['dynamic-import-node']
});

// Setup global variables for server-side
global.__CLIENT__ = false;
global.__SERVER__ = true;
global.__DEV__ = process.env.NODE_ENV === 'development';

// TODO: implement custom global constant
// try {
// 	console.log('object');
// 	global.GLOBALKEYS = Object.freeze(require('./privateConstants'));
// }
// catch (e) {
// 	console.log('Cannot find Private Constants');
// 	process.exit(0);
// }

// Run assets require hooks
require('./tools/webpack/hooks')();
// Run server
require('./src/server');
