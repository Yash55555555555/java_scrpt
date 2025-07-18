const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);  // not work with functions
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);  // still not work 
// }

// using => (arrow function you dont have to mention keyword function)
const chai =  () => {
    let username = "hitesh"
    console.log(this);    // will return empty context
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2  // is called explicit return using arrow function
// }

// const addTwo = (num1, num2) =>  num1 + num2  // called as implicit return - not mentioning return keyword

// const addTwo = (num1, num2) => ( num1 + num2 )  // better way to use implicit return

const addTwo = (num1, num2) => ({username: "hitesh"})  // for returning objects use {} inside ()


console.log(addTwo(3, 4))


// const myArray = [3, 7,2, 5,  8]

// myArray.forEach() ----> will look in the future for bettter understanding