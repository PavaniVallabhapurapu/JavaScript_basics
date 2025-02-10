let name = 'Tony'
let age = 50
var num = 123
const pi = 22/7
console.log(pi)
console.log(num)
console.log(name)
// block scope variable : constant 
{
    const pi = 3.14
    console.log(10 * pi)
}

// block scope variable : let
{
    let a = "hello"
    console.log(a)
}
// since it is a block scope we can re-declare it
let a = 10
console.log(a)