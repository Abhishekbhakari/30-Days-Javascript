// Activity 1: If-Else Statements
// Task 1: Check if a number is positive, negative, or zero

let number = 0;

if (number > 0) {
    console.log('The number is positive.');
} else if (number < 0) {
    console.log('The number is negative.');
} else {
    console.log('The number is zero.');
}

// Task 2: Check if a person is eligible to vote (age >= 18)

let Age = 16;

if (Age >= 18) {
    console.log("Eligible to vote")
} else {
    console.log("Not eligible to vote")
}

// Activity 2: Nested If-Else Statements
// Task 3: Find the largest of three numbers

let num1 = 10;
let num2 = 20;
let num3 = 15;

if (num1 >= num2) {
    if (num1 >= num3) {
        console.log('The largest number is:', num1);
    } else {
        console.log('The largest number is:', num3);
    }
} else {
    if (num2 >= num3) {
        console.log('The largest number is:', num2);
    } else {
        console.log('The largest number is:', num3);
    }
}

//Activity 3: Switch Case
//Task 4: Determine the day of the week based on a number (1-7)

var day = 1;

switch (day) {
    
    case 1:
        console.log("Monday")
        break;
    case 2:
        console.log("Tuesday")
        break;
    case 3:
        console.log("Wedday")
        break;
    case 4:
        console.log("Thrusday")
        break;
    case 5:
        console.log("Friday")
        break;
    case 6:
        console.log("Saturday")
        break;
    case 7:
        console.log("Sunday")
        break;
    default:
        console.log("These Day doesn't exist")
        break;
}

// Task 5: Assign a grade based on a score

var score = 95;
let grade;

switch (true) {
    case (score >= 90):
        grade = 'A';
        break;
    case (score >= 80):
        grade = 'B';
        break;
    case (score >= 70):
        grade = 'C';
        break;
    case (score >= 60):
        grade = 'D';
        break;
    case (score >= 50):
        grade = 'E';
        break;

    default:
        grade ='F'
        break;
}
console.log('Grade is :', grade);

// Activity 4: Conditional (Ternary) Operator
// Task 6: Check if a number is even or odd

let num = 2;
let result = (num % 2 === 0)? "even" :" odd" ;
console.log('Number is :',result)

// Activity 5: Combining Conditions
// Task 7: Check if a year is a leap year

let year = 2024;

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    console.log(year +' is a leap year.')
} else {
    console.log(year + ' is not a leap year.')
}
