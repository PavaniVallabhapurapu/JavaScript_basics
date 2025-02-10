// premitive data types :

// numbers
let age = 25
let price = 100.5
console.log(typeof(age))
console.log(typeof(price))

// String
let fullName = "Pavani Vallabhapurapu"
console.log(typeof(fullName))

// boolean
let isFollow = true
console.log(typeof(isFollow))

// Undefines
let x
console.log(typeof(x))

//null
let a = null
console.log(typeof(a))

//BigInt
let b = BigInt(123)
console.log(typeof(b))

// symbol
let z = Symbol("Hello!")
console.log(typeof(z))

// non-premitive data type : object
const student = {
    fname : "Pavani",
    fage : 21,
    cgpa : 9.01,
    isPass : true

}
console.log(student)
console.log(student.cgpa)
console.log(student["fage"])
console.log(typeof(student))
// to change a value
student["fage"] = student["fage"] + 1
console.log(student.fage)

