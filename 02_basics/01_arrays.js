// ARRAYS-->they are objects not primitive data types, can contain elements of different data types in single element

const myArr = [1,2,3,4,5]  // collection of multiple items in a single variable, they are resizable

const arr1 = new Array("yash", "dharmesh")

// console.log(myArr);



// array methods--->


// myArr.push(6)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);


// myArr.unshift(9)   // to add element at the first position but not a good way since it will make all the elements to displaced by one position
// myArr.shift()  // to delete the first element of the array


// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join()  // Adds all the elements of an array into a string, separated by the specified separator string
// console.log(myArr);
// console.log( newArr);



// slice, splice
console.log("a" , myArr);

const arr = myArr.slice(1,3)  // will not manipulate the original array
console.log(arr);
console.log("b", myArr);

const arr2 = myArr.splice(1,3)   // will manupulate original array, also it will include the last range which is 3 in this case
console.log(arr2);
console.log(myArr);














