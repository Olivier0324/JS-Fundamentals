// Get the command-line arguments array
const args = process.argv;

// The first user-provided argument will be at index 2 of the process.argv array.
// If no arguments are passed by the user, process.argv[2] will be undefined.
const firstArgument = args[2];

// Check if the firstArgument exists (is not undefined)
if (firstArgument === undefined) {
    console.log("No argument");
} else {
    console.log(firstArgument);
}