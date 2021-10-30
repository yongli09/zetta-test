/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  const sortedNumbers =  numbers.sort()
  let x = 0;
  sortedNumbers.forEach((number) => {
    if(number != x) {
      return;
    }
    x++
  })
  return x
}

// Driver Code


console.log(result(numbers));
