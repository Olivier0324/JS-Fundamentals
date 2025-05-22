// Get the command-line arguments
const args = process.argv;

// Calculate the number of user-provided arguments
// We subtract 2 because process.argv[0] is 'node' and process.argv[1] is the script path
const numberOfArguments = args.length - 2;

// Check the number of arguments and print the corresponding message
if (numberOfArguments === 0) {
    console.log("No argument");
} else if (numberOfArguments === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}