function foo(a, b) {
  if (a === null || b === null) {
    // return 0; //Option 1: Return a default value
    throw new Error('Parameters cannot be null'); // Option 2: Throw an error
  }
  return a + b;
}

// Example usage
console.log(foo(null, 1)); // Throws an error
console.log(foo(1, null)); // Throws an error
console.log(foo(1, 2)); // 3