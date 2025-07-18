// const tinderUser = new Object()  // creation using singleton

const tinder = {}
tinder.id = "123ab"
tinder.name = "yash"
tinder.isLoggedIn = false

// console.log(tinder);


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = {...obj1, ...obj2}  // for merging
// console.log(obj3);


// when you fetch values from the database then you get array of objects in return , look below you will see how it comes

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
]
// console.log(users[2].email)



// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));



// ----> lets understand destructuring of objects

const course = {
    coursename : "java script",
    price : "999",
    course_instructor :  "hitesh"
}
// console.log(course["course_instructor"]);
 

// this is how you can do this==> destructuring
const {price, coursename} = course
console.log(price);
