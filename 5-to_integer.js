// Get the command-line arguments array
const args = process.argv;

// The first user-provided argument will be at index 2
const firstArgument = args[2];

// Attempt to convert the argument to an integer
// Number() will try to convert to a number, and if it fails (e.g., "School"),
// it will result in NaN (Not a Number).
// If it's a float (e.g., 89.89), Number() will keep the decimal.
// If you want to strictly parse as an integer (like parseInt), you could use parseInt(firstArgument, 10).
// However, based on the examples (89.89 -> 89), Number() then Math.floor/trunc or parseInt is implied.
// Let's use Number() and then check if it's an integer for consistency with examples.

const numberValue = Number(firstArgument); // Convert to a number (could be NaN or a float)

// Check if the conversion resulted in a valid number and if it's an integer
// isNaN(numberValue) checks if it's "Not a Number".
// Number.isInteger(numberValue) checks if it's an integer (e.g., 89 but not 89.89 unless we floor it)

// However, the example shows 89.89 becomes 89, meaning it expects integer parsing or flooring.
// Let's use parseInt for explicit integer parsing as it handles "89.89" -> 89 and "School" -> NaN
const parsedInteger = parseInt(firstArgument, 10); // Base 10 for decimal numbers

// Check if the parsed value is a valid number (not NaN)
if (isNaN(parsedInteger)) {
    console.log("Not a number");
} else {
    // If it's a valid number, print it
    console.log(`My number: ${parsedInteger}`);
}