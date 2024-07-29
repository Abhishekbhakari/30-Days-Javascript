//  Activity 1: Template Literals

//  Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console


let name = 'Abhishek';
let age = 25;

let introduction = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(introduction);


// #### Task 2: Create a multi-line string using template literals and log it to the console


let multiLineString = `This is a multi-line string.
You can write text across multiple lines
without using concatenation or escape characters.`;
console.log(multiLineString);


//  Activity 2: Destructuring

//  Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console


let numbers = [10, 20, 30, 40, 50];
let [first, second] = numbers;

console.log('First element:', first);
console.log('Second element:', second);


//  Task 4: Use object destructuring to extract the title and author from a book object and log them to the console


let book = {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    year: 1960
};

let { title, author } = book;
console.log('Title:', title);
console.log('Author:', author);


// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console


let originalArray = [1, 2, 3];
let newArray = [...originalArray, 4, 5, 6];

console.log('New array:', newArray);


//  Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result


function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log('Sum:', sum(1, 2, 3, 4, 5));


//  Activity 4: Default Parameters

//  Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter

function multiply(a, b = 1) {
    return a * b;
}

console.log('Product (5 * 2):', multiply(5, 2));
console.log('Product (5 * 1):', multiply(5));


// Activity 5: Enhanced Object Literals

//  Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console


let person = {
    name: 'Abhishek',
    age: 25,
    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
};

console.log(person);
console.log(person.greet());


//  Task 9: Create an object with computed property names based on variables and log the object to the console


let propName = 'name';
let propValue = 'Abhishek';

let dynamicObject = {
    [propName]: propValue,
    age: 25
};

console.log(dynamicObject);
