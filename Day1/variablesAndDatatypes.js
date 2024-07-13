// Activity 1- Vairable Dicleration

//Task 1 - 

var greet = 'hi var';
console.log(greet);

//Task 2 - 

let wish = 'hi let';
console.log(wish);

// Activity 1- Constant Dicleration

//Task 1 - 

const isUser = true;
console.log(isUser);

// Activity 3- Datatypes

//Task 4 - 

const numberVar = 42;
const stringVar = "Hello, world!";
const booleanVar = false;
const objectVar = { name: "John", age: 30 };
const arrayVar = [1, 2, 3, 4, 5];

console.log(`Value: ${numberVar}, Type: ${typeof numberVar}`);
console.log(`Value: ${stringVar}, Type: ${typeof stringVar}`);
console.log(`Value: ${booleanVar}, Type: ${typeof booleanVar}`);
console.log(`Value: ${objectVar}, Type: ${typeof objectVar}`);
console.log(`Value: ${arrayVar}, Type: ${typeof arrayVar}`);

// Activity 4- Reassigning

//Task 5:- Declare a variable using let, assign an initial value, reassign a new value, and log both values to the console.

let variable = "initial value";
console.log(`Initial Value: ${variable}`);
variable = "new value";
console.log(`New Value: ${variable}`);


//Activity 5: Understanding

//Task 6: Try reassigning a variable declared with const and observe the error.

const constantVar = "constant value";
console.log(`Constant Value: ${constantVar}`);
constantVar = "new value"; // This will cause an error: "Assignment to constant variable."
