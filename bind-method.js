// no : 1
const student = {
    id: 101,
    name: 'mofazzal',
    money: 5000,
    treatDaw: function(expense){
        this.money = this.money - expense;
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
const student3 = {
    id: 103,
    name: 'mofu',
    money: 10000,
}
// no : 1
 student.treatDaw(200)
 // no : 2
const treat2 = student.treatDaw.bind(student2);
treat2(500);
treat2(300);
treat2(200);
student.treatDaw(200);
student.treatDaw(200);

const treat3 = student.treatDaw.bind(student3);
treat3(2000);

