// Define the add function as required by the prototype
function add(a, b) {
    // Convert inputs to numbers. If they are not numbers, Number() will return NaN.
    // If they are undefined or non-numeric strings, this will result in NaN.
    const num1 = Number(a);
    const num2 = Number(b);

    // Perform the addition. If either num1 or num2 is NaN, the result will be NaN.
    return num1 + num2;
}

// Get the command-line arguments array
const args = process.argv;

// Extract the first and second user-provided arguments
// These will be strings from the command line, or undefined if not provided.
const arg1 = args[2];
const arg2 = args[3];

// Call the add function with the command-line arguments
const result = add(arg1, arg2);

// Print the result
console.log(result);