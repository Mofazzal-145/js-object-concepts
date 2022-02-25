// 1. using object literal
const student = {name: 'Md Mofazzal Hossain', job: 'student'};

// 2. constructor

const person = new Object();
// console.log(person);

// 3. 

/* const human = Object.create(null);
console.log(human);
 */
const human = Object.create(student);
// console.log(human.job);


// 4. with class

class People{
    constructor(name, age){
        this.name = name;
        this.age = age;  
    }
}
const all  = new People('Champ', 13);
// console.log(all);

// 5. function

function x(name){
    this.name = name;
}

const y = new x('habibi');
console.log(y);
