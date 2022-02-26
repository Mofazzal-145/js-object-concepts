// no : 1
/* const first = { a: 1};
const second = { a: 1};
const third = first;
// if(first === second){
if(first === third){
    console.log('Both are equal');
}
else{
    console.log('Both are not equal');
}
 */


// no : 2

/* const first2 = {a: 1, b: 2};
const second2 = {a: 1, b: 2};
console.log(JSON.stringify(first2));
console.log(JSON.stringify(second2));
if(JSON.stringify(first2) === JSON.stringify(second2)){
    console.log('Objects are equal');
}
else{
    console.log('Objects are not equal');
} */

// no : 3

/* const first3 = {a: 2, b: 2};
const second3 = {b: 2, a: 2};
console.log(JSON.stringify(first3));
console.log(JSON.stringify(second3));
if(JSON.stringify(first3) === JSON.stringify(second3)){
    console.log('Objects are equal');
}
else{
    console.log('Objects are not equal');
}
 */

// no :4

const first4 = {a: 1, b: 2};
const second4 = {b: 2, a: 1};


function compareObjects(obj1, obj2){
    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for(const prop in obj1){
        if(obj1[prop] !== obj2[prop]){
            return false;
        }
    }
    return true;
}

const isEqual = compareObjects(first4, second4);
console.log(isEqual);
