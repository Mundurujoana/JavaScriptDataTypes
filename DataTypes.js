//Strings
const $name = "mary"

//intergers
const mInteger = 23
const number1 = 3;

const number3 = 3e5 // 3 * 10^5

//float
const myDecimal = 124.6
const number2 = 3.433;

//Boolean
const dataChecked = true;
const valueCounted = false;

//null
const myNull = null

//undefined
const myUndefined = undefined
let v
let name;
console.log(name)

//infinity
const num4 = 3/0
console.log(num4)

// -Infinity
const num5 = -6/0
console.log(num5)

// strings can't be divided by numbers
const num6 = "abc"/0
console.log(num6)

// JavaScript BigInt

//Symbol is an immutable primitive value that is unique.
const val1 = Symbol('hello')
const val2 = Symbol('hello')
console.log(val1)
console.log(val2)
// Though value1 and value2 both contain 'hello',
// they are different as they are of the Symbol type.


// objects
const students = {
    name:'joana',
    age:23,
    courses:{
        firstcourse:'english',
        secondcourse:'math'
    }
}

// JavaScript Type
// data is of undefined type
let data;

// data is of integer type
data = 5;

// data is of string type
data = "JavaScript Programming";

// BigInt value
const value1 = 900719925124740998n;

// Adding two big integers
const result1 = value1 + 1n;
console.log(result1); // "900719925124740999n"

const value2 = 900719925124740998n;

// Error! BitInt and number cannot be added
const result2 = value2 + 1; 
console.log(result2); 