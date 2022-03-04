// Q1: Function This
// Testing variables, control flow, function composition
function max(iterable, key) {
    // Implement a function which finds the maximum in a list after applying    // function `key` to each element
    // ex. max([3, 1, 2], (x) => x) = 3
    // ex. max([-1, -4, 4, 6], (x) => 1 / x) = 4   
    var maximum = 0;
    for(var i in iterable) {
        var num = key(iterable[i]);
        
        if (num >= key(iterable[maximum])) {
            maximum = i;
        }
    }
    return iterable[maximum];  
}

// Q2: Flip It and Reverse It
// Testing anonymous (arrow) function and function composition
const reverser = (x) => -x;// Given a list of real numbers, write an anonymous function that we can pass as the key to `max` to return the smallest element
// ex. max([1, -2, 3], reverser) = -2

// Q3: What is This?
// Testing knowledge of this, operators, and builtins
// const thiser = {
//     a: (Math.random() * 100),
//     b: (Math.random() * 100),
//     x: (Math.random() * 100),
//     y: (Math.random() * 100),
//     distance: Math.sqrt(
//         // return the Euclidean distance between the point (a, b) and (x, y)
//         // hint: Euclidean distance is given by sqrt((a - x)^2 + (b - y)^2) 
//     )    
// }

// Q4: Objects Gworl
// Testing Objects (JSON), Arrays, and Object Properties
function changer(object, key, value) {
    var jsObj = JSON.parse(object);
    let prev = jsObj[key];
    if (Array.isArray(prev)) {
        
        // what to do if value associated with key is an array
        prev.push(value);
        return JSON.stringify(jsObj);
    } else if ((typeof(prev) == 'object') && (prev != null)) {
        // what to do if value is a JSON object
        // JS doesn't allow dupplicate keys so I think this is what the spec meant
        jsObj.key = value;
        return JSON.stringify(jsObj);
    } else {
        // what to do if neither
        
        jsObj[key] = value;
        return JSON.stringify(jsObj);
    }
    return null
}

// Q5: Promises Promises
// Testing asynchronous, promises, 
async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        // use this line to print the first value
        console.log(1);
        // use this line to resolve the value that we will need later
        resolve(count = 5);
    })
    console.log(2)
    console.log(3)
    console.log(4)
    const five = count;// how do we get the value that we saved earlier?
    console.log(five)
    return five
}
// var test = max([3, 1, 2], (x) => x);
// console.log(test);
promise_me()
// var myJSON = '{"name": {"test": 42}, "age":31, "city":"New York"}';





