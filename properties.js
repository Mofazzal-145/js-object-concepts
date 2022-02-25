
// no : 1
const bottle = { color: 'green', hold: 'water', price: 120, isCleaned: true};
 // getting all properties names
const keys = Object.keys(bottle);
// console.log(keys);

// getting all properties values
const values = Object.values(bottle);
// console.log(values);

// getting all pairs
const pairs = Object.entries(bottle);
// console.log(pairs);

// delete
Object.freeze(bottle);
Object.seal(bottle); // when use this you can't delete any property
bottle.price = 500; // it working
bottle.height = 43; // it doesn't working
delete bottle.isCleaned;
console.log(bottle);
// no : 2

