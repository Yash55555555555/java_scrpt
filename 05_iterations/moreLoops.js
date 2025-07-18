// understanding for of loops

// most of the times we deal with the arrays and objects --> lets see some loops for that

const arr = [1,2,3,4,5]

// for (const element of object) {
    // element is the iterator --> can be any variable 
    // objects can be any --> could be array, objects or string obn which you want to iterate
// }

for(const i of arr){
    // console.log(i);
    
}


// lets apply this on strings

let name = "hello world"

for(const i of name) {
    // console.log(i);
    
}


// Maps ---> like objects only but it takes or it has unique values

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for(const i of map){
    // console.log(i);   // will print the key and values of map in array form
    
}


for(const [key,value] of map){
    // console.log(key, "--->", value);   // will print the key and values of map in array form
    
}


// lets apply this (for of) on objects 

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }     // not iterable on objects , to iterate on this we have other methods




// LETS UNDERSTAND FOR IN LOOP 

// above we saw that (for of) is not working on objects


const myObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for(const key in myObject1){
    console.log(key);   // will give the keys of this object
    
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}





