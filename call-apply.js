// no : 1
const student = {
    id: 101,
    name: 'mofazzal',
    money: 5000,
    treatDaw: function(expense, bonus, tax){
        this.money = this.money - expense - bonus -tax; 
        console.log('I am here',this);
        return this.money;
    }
}

// no : 2
const student2 = {
    id: 102,
    name: 'mofazzal',
    money: 6000,
}
// no : 3
const student3 = {
    id: 103,
    name: 'mofu',
    money: 10000,
}
// using call
/* 
student.treatDaw.call(student2, 500, 100, 40);
student.treatDaw.call(student2, 500, 50, 30);
 */

// using apply
student.treatDaw.apply(student2, [500, 100,50]);
student.treatDaw.apply(student2, [500, 100,50]);
// ---
student.treatDaw.apply(student3, [300, 50, 50]);
student.treatDaw.apply(student3, [300, 50, 50]);
