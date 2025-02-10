// for loop

for(let count = 1; count <= 5; count++){
    console.log("dhan ai")
}

// print 1 to 5
for(let i = 1; i <=5; i++){
    console.log("i = ",i)
}

// sum of 1 to n
let n = 100
let sum = 0
for(let i = 1; i <= n; i++){
    sum = sum + i
}
console.log("sum = ", sum)
console.log("loop ended")

// while loop
let i = 1;
while(i <= 5){
    console.log("i = ", i)
    i++
}

// do-while loop
let x = 1
do{
    console.log("x = ",x)
    x++
}while(x <= 5)

// for-of loop (it is used for strings and arrays)
let str = "JavaScript"
let size = 0
for (let val of str){
    console.log("val = ", val)
    size++
}
console.log("string size=",size)

// for-in loop (it is used for objects and arrays)
let student = {
    name : "Rahul",
    age : 20,
    cgpa : 8.0,
    isPass : true
}
for(let a in student){
    console.log(a)
}