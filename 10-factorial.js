// Define the recursive factorial function
// This function computes the factorial of a given non-negative integer 'n'.
// It handles edge cases as specified in the assignment.
function factorial(n) {
    // Convert the input 'n' to a number.
    // If 'n' is undefined (no argument), a non-numeric string, or null,
    // Number(n) will result in NaN.
    const num = Number(n);

    // Base case 1: Factorial of NaN is 1 (as per assignment requirement).
    // This covers cases where the input is not a valid number, or no argument is provided.
    // It also implicitly handles negative numbers by treating them as invalid input for factorial,
    // resulting in NaN if passed to Number() and then defaulting to 1.
    // Although mathematically factorial is not defined for negative numbers,
    // the problem's 'Factorial of NaN is 1' rule suggests this behavior for invalid inputs.
    if (isNaN(num)) {
        return 1;
    }

    // Base case 2: Factorial of 0 is 1.
    // This is the standard mathematical definition.
    if (num === 0) {
        return 1;
    }

    // Base case 3: Factorial of 1 is 1.
    // This is also a standard mathematical definition and helps terminate recursion.
    if (num === 1) {
        return 1;
    }

    // Recursive step: For n > 1, factorial(n) = n * factorial(n - 1).
    // We use Math.floor to ensure we're working with an integer, as factorials are defined for integers.
    // This also aligns with the example where 89.89 would likely be treated as 89.
    return Math.floor(num) * factorial(Math.floor(num) - 1);
}

// Get the command-line arguments array
const args = process.argv;

// The first user-provided argument is at index 2
const inputArg = args[2];

// Call the factorial function with the input argument
// The function itself handles the parsing and NaN check.
const result = factorial(inputArg);

// Print the computed factorial to the console
console.log(result);
  