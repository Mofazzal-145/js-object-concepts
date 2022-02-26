// console.log(this);

// no : 1
const student = {
    id: 101,
    name: 'mofazzal',
    money: 5000,
    treatDaw: function(expense,){
        this.money = this.money - expense ; 
        console.log('I am here',this);
        return this.money;
    }
}


// no : 2
const student2 = {
    id: 102,
    name: 'mofu',
    money: 6000
}


