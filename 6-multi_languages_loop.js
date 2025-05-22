// Define an array containing the strings to be printed
const lines = [
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
  ];
  
  // Loop through the array and print each element
  // Using a for...of loop is concise for iterating over array elements.
  for (const line of lines) {
    console.log(line); // This is the single console.log call allowed
  }
  
  // Alternatively, using a traditional for loop:
  /*
  for (let i = 0; i < lines.length; i++) {
    console.log(lines[i]);
  }
  */
  
  // Or using forEach (another common way to iterate arrays):
  /*
  lines.forEach(line => {
    console.log(line);
  });
  */