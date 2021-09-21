const vm = require('vm');

const script = new vm.Script(`
function add(a, b) {
  return a + b;
}

const x = add(1, 2);
`);

const cacheWithoutX = script.createCachedData();

console.log(cacheWithoutX)

script.runInThisContext();

const cacheWithX = script.createCachedData();
console.log(cacheWithX)
