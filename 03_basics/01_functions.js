function sayMyName() {
    console.log("yash");
    
}
sayMyName // ---> this is the referance
//sayMyName()  //--- this is the execution

function addTwoNumbers(num1,num2){   // when you define your function you pass parameters
    console.log(num1 + num2);  
    
}
addTwoNumbers(3,4)  // when you call a function thenyou pass arguments




function userLoggedIn(username = "sam"){
    return `${username} just logged in `

}
console.log(userLoggedIn())



// when you dont know how much arguments user will pass so you have to manage your parameters , use rest operator--> ... in functions parameters

function calculateCartPrice(...num){ 
    return num
}
items = calculateCartPrice(66,55,789,900)
// console.log(items);




// passing objects in functions

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// second way to call function
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// second way to call fuction
console.log(returnSecondValue([200, 400, 500, 1000]));

