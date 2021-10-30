/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */
const words = ['flower', 'flow', 'flight'];

function result(words) {
  // Your Code Here
  let prefix = ""
  if(words === null || words.length === 0) return prefix

  for (let i=0; i < words[0].length; i++){ 
      const char = words[0][i] 

      for (let j = 1; j < words.length; j++){ 
          if(words[j][i] !== char) return prefix
      }
      prefix = prefix + char
  }

  return prefix
}

console.log(result(words));
