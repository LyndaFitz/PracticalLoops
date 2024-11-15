for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function findNextPrime(n) {
    let nextNumber = n + 1;
    while (!isPrime(nextNumber)) {
        nextNumber++;
    }
    console.log(nextNumber);
}

findNextPrime(4);  //
// Part 1: Fizz Buzz
console.log("Part 1: Fizz Buzz");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

console.log("\n-----------------------------------\n");

// Part 2: Prime Time

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

// Function to find the next prime number starting from n
function findNextPrime(n) {
    let nextNumber = n + 1;
    while (!isPrime(nextNumber)) {
        nextNumber++;
    }
    console.log("Next prime after", n, "is", nextNumber);
}

// Test cases for finding the next prime number
findNextPrime(4);  // Output should be 5
findNextPrime(5);  // Output should be 7
findNextPrime(9);  // Output should be 11

console.log("\n-----------------------------------\n");


function parseCSV(csvString) {
    let rows = csvString.split("\n");

    for (let row of rows) {
        let cells = row.split(",");
        console.log(...cells);  
    }
}


let csvData = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;

console.log("Part 3: CSV Data Parsing");
parseCSV(csvData);

console.log("\n-----------------------------------\n");

let additionalCSVData = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;

// Test with additional data
parseCSV(additionalCSVData);
