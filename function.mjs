export function DogFuntion(name) {
    this.name = name;
}

DogFuntion.prototype.bark = function() {
    console.log(this.name + " 멍멍");
    console.log(this.age + " 멍멍");
}

DogFuntion.prototype.age = 0;
