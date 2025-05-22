// Get the command-line arguments array
const args = process.argv;

// Extract the first and second user-provided arguments
// If an argument is not provided, its value will be undefined.
const arg1 = args[2];
const arg2 = args[3];

// Determine the value to print for the first part of the sentence
const firstPart = (arg1 === undefined) ? "undefined" : arg1;

// Determine the value to print for the second part of the sentence
const secondPart = (arg2 === undefined) ? "undefined" : arg2;

// Print the sentence in the required format
console.log(`${firstPart} is ${secondPart}`);