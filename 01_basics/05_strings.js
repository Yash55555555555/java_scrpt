let name = "yash"
let val = 200

console.log(`my name is ${name} and the value of val is ${val}`)


// one more way to declare string
const gameName = new String("yash-khandelwal-2002")

var1 = gameName.split("-")
console.log(var1)

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   yashkhandelwal    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://yash.com/yash%20khandelwal"

console.log(url.replace('%20', '-'))

console.log(url.includes('obama'))

console.log(gameName.split('-'))


const var2 = "yash-khandelwal"
console.log(var2.split("-")) // this will split the string on wherever it will find the - and stored it in an array 


