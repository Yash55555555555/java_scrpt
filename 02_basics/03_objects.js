// objects--> they are key value pairs seprated by comma , they are powerful data structures

// two ways to create objects

// 1) one is singleton --> object.create
// 2) one is using object literals

const mySym = Symbol("key1")

const jsUsers = {
    name : "yash",
    "fullname": "khandelwal",
    [mySym]: "mykey1",  // this is only way to define symbol in obj
    email : "yash@123",
    city : "jaipur",
    age : 23,
    isLoggedIn : false,
    lastLoginDays : ["monday", "saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])




jsUsers.email = "yash@chatgpt.com" // to update the object elements
// Object.freeze(JsUser) // when you dont want anu updation in obj
jsUsers.email = "yash@microsoft.com"
// console.log(JsUser);



jsUsers.greeting = function(){
    console.log("Hello JS user");
}
jsUsers.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUsers.greeting());
console.log(jsUsers.greetingTwo());