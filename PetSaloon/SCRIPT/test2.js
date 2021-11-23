console.log("Test 2");

let dog = {
    name: "Rocky",
    age: 1,
    run: function(){
        console.log(this.name + " is running.");
    }
}
console.log(dog);
let cat = {
    name: "Garfield",
    age: 10,
    run: function(){
        console.log(this.name + " is running.");
    }
}
console.log(cat);

// object constructor

function Animal(name, age, owner) {
    this.name = name;
    this.age = age;
    this.owner = owner;
}

let dogOne = new Animal("Scooby", 50, "Shaggy");
console.log(dogOne);
let dogTwo = new Animal("Yoshi", 2, "David");
console.log(dogTwo);