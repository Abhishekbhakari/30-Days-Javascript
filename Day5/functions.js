//  Activity 1: Function Declaration

// Task 1: Check if a number is even or odd


function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        console.log(number + ' is even.');
    } else {
        console.log(number + ' is odd.');
    }
}

isEvenOrOdd(4); // Example usage


// Task 2: Calculate the square of a number and return the result


function square(number) {
    return number * number;
}

console.log(square(5)); // Example usage


// Activity 2: Function Expression

//  Task 3: Find the maximum of two numbers


const findMax = function(num1, num2) {
    let max = (num1 > num2) ? num1 : num2;
    console.log('The maximum number is:', max);
};

findMax(10, 20); // Example usage


//  Task 4: Concatenate two strings


const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

console.log(concatenateStrings('Hello, ', 'World!')); // Example usage

// Activity 3: Arrow Functions

//  Task 5: Calculate the sum of two numbers


const sum = (a, b) => a + b;

console.log(sum(5, 10)); // Example usage


//  Task 6: Check if a string contains a specific character


const containsCharacter = (str, char) => str.includes(char);

console.log(containsCharacter('Hello', 'e')); // Example usage


// Activity 4: Function Parameters and Default Values

//  Task 7: Return the product of two parameters with a default value


function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(5)); // Example usage


//  Task 8: Return a greeting message with a default age


function greet(name, age = 18) {
    return `Hello, ${name}! You are ${age} years old.`;
}

console.log(greet('John')); // Example usage


// Activity 5: Higher-Order Functions

//  Task 9: Call a function a specific number of times


function repeatFunction(func, times) {
    for (let i = 0; i < times; i++) {
        func();
    }
}

const sayHello = () => console.log('Hello!');

repeatFunction(sayHello, 3); // Example usage


// Task 10: Apply two functions sequentially to a value

function applyFunctions(func1, func2, value) {
    return func2(func1(value));
}

const addOne = x => x + 1;
const square = x => x * x;

console.log(applyFunctions(addOne, square, 2)); // Example usage
