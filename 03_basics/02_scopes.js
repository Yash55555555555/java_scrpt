//var c = 300
let a = 300
if (true) {
    let a = 30
    const b = 20
    //console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


let num2 = 56
if(true){
    //console.log(num2);
    
}


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)   // in this way --> this will raise error
const addTwo = function(num){
    return num + 2
}

