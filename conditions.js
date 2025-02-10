// IF statement

let age1= 25
if (age1 > 18){
    console.log("applicable to vote")
}

// IF-ELSE statement
let mode = "light"
let color
if(mode === "dark"){
    color = "black"
}
else{
    color = "white"
}
console.log(color)

// IF-ELSEIF-ELSE statement
let age = 50
if(age < 18){
    console.log("junior")
}
else if (age > 60){
    console.log("senior")
}
else{
    console.log("middle")
}

let age2 = 16
age2 >= 18 ? console.log("adult") : console.log("not adult")