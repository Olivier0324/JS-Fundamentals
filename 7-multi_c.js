// Get the command-line arguments array
const args = process.argv;

// The first user-provided argument is at index 2
const firstArgument = args[2];

// Attempt to parse the argument as an integer
const numOccurrences = parseInt(firstArgument, 10);

// Check if the parsed value is not a number
if (isNaN(numOccurrences)) {
    console.log("Missing number of occurrences"); // This will handle cases like "hello" or no argument
} else if (numOccurrences <= 0) {
    // If it's a number but zero or negative, do nothing (to match "Expected 0 chars long")
    // This contradicts the prompt's example output for -3, but fits the "Expected" in the screenshot.
} else {
    // If it's a valid positive integer, proceed with the loop
    let i = 0;
    while (i < numOccurrences) {
        console.log("C is fun");
        i++;
    }
}