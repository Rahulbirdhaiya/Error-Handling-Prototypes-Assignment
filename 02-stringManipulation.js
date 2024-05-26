function manipulateString(str) {
    // Convert the string to uppercase
    const manipulatedStr = str.toUpperCase();
  
    // Return a callback function that logs the manipulated string
    return function logString() {
      console.log(`The manipulated string is: ${manipulatedStr}`);
    }
  }
  
  // Call the function with the provided string
  const logManipulatedString = manipulateString("hello, world!");
  logManipulatedString();