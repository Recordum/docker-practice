export class Dog {
    name;
    constructor(name){
        this.name = name;
    }

    bark() {
        console.log(this.name + ' 왈왈');
        console.log(this.__proto__);
    }

}