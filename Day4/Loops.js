// ### Activity 1: For Loop

// #### Task 1: Print numbers from 1 to 10 using a for loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// #### Task 2: Print the multiplication table of 5 using a for loop

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} = ${5 * i}`);
}


// ### Activity 2: While Loop

// #### Task 3: Calculate the sum of numbers from 1 to 10 using a while loop


let sum = 0;
let i = 1;

while (i <= 10) {
    sum += i;
    i++;
}

console.log('Sum:', sum);


// #### Task 4: Print numbers from 10 to 1 using a while loop


let j = 10;

while (j >= 1) {
    console.log(j);
    j--;
}


// ### Activity 3: Do... While Loop

// #### Task 5: Print numbers from 1 to 5 using a do...while loop

let k = 1;

do {
    console.log(k);
    k++;
} while (k <= 5);


// #### Task 6: Calculate the factorial of a number using a do...while loop


let number = 5; // You can change this number to any other number
let factorial = 1;
let l = number;

do {
    factorial *= l;
    l--;
} while (l > 0);

console.log(`Factorial of ${number} is:`, factorial);

// ### Activity 4: Nested Loops

// #### Task 7: Print a pattern using nested for loops

for (let m = 1; m <= 3; m++) {
    let pattern = '';
    for (let n = 1; n <= m; n++) {
        pattern += '*';
    }
    console.log(pattern);
}


// ### Activity 5: Loop Control Statements

// #### Task 8: Print numbers from 1 to 10, but skip the number 5 using the `continue` statement


for (let o = 1; o <= 10; o++) {
    if (o === 5) {
        continue;
    }
    console.log(o);
}


// #### Task 9: Print numbers from 1 to 10, but stop the loop when the number is 7 using the `break` statement


for (let p = 1; p <= 10; p++) {
    if (p === 7) {
        break;
    }
    console.log(p);
}


