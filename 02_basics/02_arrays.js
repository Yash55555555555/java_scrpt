const doc1 = ["jaipur", "bhopal", "himachal"]
const doc2 = ["ahmedabad", "chandigarh", "delhi"]
//doc1.push(doc2)
// console.log(doc1);  // you will notice that the output is like this

//-->
// [
//   'jaipur',
//   'bhopal',
//   'himachal',
//   [ 'ahmedabad', 'chandigarh', 'delhi' ]
// ]  there is an arar inside array , but this is not something which we wanted ofcourse you can access the second array like this

// console.log(doc1[3][[0]]);



const mergedDoc = [...doc1, ...doc2]   // first you spread it aand finally collected it in the new array
console.log(mergedDoc);  // this willl work


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // infinity is the depth we are giving
console.log(real_another_array);




console.log(Array.isArray("yash"))  // will return false since it is not an array
console.log(Array.from("yash")) // will make an array out of hitesh
console.log(Array.from({name: "yash"})) // interesting , will give empty array as output since it doesnt know which element to convert to array whether its key or value --> this yoy need to define

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // to convert you variable value into array

