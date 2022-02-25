
const student = {
    id: 101,
    name: 'hkashdfl',
    money: 4800,
    major : 'science',
    isRich: false,
    subjects : ['bangla', 'english', 'mathematics'],
    bestFriend : {
        name: 'shakil',
        major: 'science',
    },
    takeExam: function() {
        console.log(this.name, 'take exam');
    },
    treatDaw: function(expense, bonus){
        this.money = this.money - expense - bonus ;
        return this.money;
    }
}
student.takeExam();

const remaining1 = student.treatDaw(800, 50);
const remaining2 = student.treatDaw(800, 50);
const remaining3 = student.treatDaw(800, 100);
console.log(remaining3);
