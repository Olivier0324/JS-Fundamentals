// Get the command-line arguments array
const args = process.argv;

// The first user-provided argument is at index 2
const firstArgument = args[2];

// Attempt to parse the argument as an integer
const numOccurrences = parseInt(firstArgument, 10);

// Check if the parsed value is not a number OR if it's a negative number
if (isNaN(numOccurrences) || numOccurrences <= 0) {
    // First console.log call: for error condition
    console.log("Missing number of occurrences");
} else {
    // If it's a valid positive integer, proceed with the loop
    let i = 0; // Use 'let' for loop counter, 'const' is not suitable here
    while (i < numOccurrences) {
        // Second console.log call: inside the loop
        console.log("C is fun");
        i++;
    }
}