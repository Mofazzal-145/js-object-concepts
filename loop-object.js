const bottle = { 
    color: 'green', 
    hold: 'water', 
    price: 120, 
    isCleaned: true
};
/* 
for(let i = 0; i< 10; i++){}
for(const num of numbers){} // for array
for (const prop in bottle){} // object
*/

for(const prop in bottle){
    // console.log(prop);
    // console.log(prop, bottle[prop]);
}

// using keys

const keys = Object.keys(bottle);
// console.log(keys);
for(const prop of keys) {
    // console.log(prop, bottle[prop]);
}

// using entries

const entries = Object.entries(bottle);
// console.log(entries);
// const [key, value] = ['color', 'yellow'];

for(const [key,value] of Object.entries(bottle)){
    console.log(key, value);
}


