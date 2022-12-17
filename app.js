// To declare a variable
let hello = null;

// Declare a string
let greet = "Hello";

// Declare a number
let num = 10;

// Declare a boolean
let bool = true;

// Arithmetic Operations

num += 2;
num *= 2;
num /= 3;
num -= 4;

// Comparison Operations

// console.log(1 <= 2);

// Logical Operators

// console.log(true || false);
// console.log(true && false);
// console.log(true && true);

// console.log(typeof 1);

// Conditional Logic

if (false) {
  console.log("Statement is true!");
} else {
  console.log("Statement is false");
}

// Ternary Conditional

let condition = false;

let x = condition ? "True" : "False";

// Else If

let y = true;

if (y && false) {
  console.log("If statement");
} else if (y) {
  console.log("Else If statement");
} else {
  console.log("Else Statement");
}

// Arrays

let fruits = ["Oranges", "Bananas", "Apple"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

console.log(fruits[1]);

// Objects

let person = {
  name: "John",
  lastName: "Doe",
  age: 32,
};

console.log(person.lastName);

// Functions

function sayHello() {
  console.log("Hello!");
}

sayHello();

function add(num1, num2) {
  console.log(num1 + num2);
}

add(1, 2);

// Classes

class Person {
  constructor(name, lastName, age) {
    this.name = name;
    this.lastName = lastName;
    this.age = age;
  }

  bio() {
    console.log(this.name, this.lastName, this.age);
  }
}

let person1 = new Person("John", "Doe", 32);

person1.bio();
