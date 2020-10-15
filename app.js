 /*
 class Hater {
     constructor(firstName, lastName) {
         this.firstName = firstName;
         this.lastName = lastName;
     }
     sayName(){
         console.log(`Наш хейтер: ${this.firstName} ${this.lastName}`);
     }
 }

 
let hater1 =  new Hater('norman', 'ozborn');
hater1.sayName();
*/

class Bloger{
    constructor(chanelName, firstName, lastName) {
        this.chanelName = chanelName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    sayName(){
        console.log(`Канал: ${this.chanelName} [автор канала: ${this.firstName} ${this.lastName} ]` )
    }

}
 let Bloger1 = new Bloger('gamelife', 'Andrey', 'Bahrah');
 Bloger1.sayName();
