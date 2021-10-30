/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function result(data) {
  // Your Code Here
  const finalData = data.map((obj) => {
    Object.entries(obj).forEach((value) => {  
      if(value[1] === null || value[1] === 'undefined') {
        delete obj[value[0]]
      }
    })
    return obj
  })
  return JSON.stringify(finalData, null ,4)
}

console.log(result(data));
