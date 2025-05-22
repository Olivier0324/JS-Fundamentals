// Get the command-line arguments array
const args = process.argv;

// The first user-provided argument is at index 2
const sizeArg = args[2];

// Attempt to parse the argument as an integer
const size = parseInt(sizeArg, 10);

// Check for invalid size: not a number, or less than or equal to 0
if (isNaN(size) || size <= 0) {
    console.log("Missing size");
} else {
    // If the size is valid, proceed to draw the square
    let i = 0; // Outer loop counter for rows
    while (i < size) {
        let row = ''; // Initialize an empty string for the current row
        let j = 0; // Inner loop counter for columns
        while (j < size) {
            row += 'X'; // Add an 'X' to the row string
            j++;
        }
        console.log(row); // Print the completed row
        i++;
    }
}