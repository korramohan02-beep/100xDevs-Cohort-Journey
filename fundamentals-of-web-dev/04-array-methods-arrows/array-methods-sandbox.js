console.log("CLASS 4 = map, filter, arrow functions");

//untill now we have written functions as fns() shown below

// function sum(a, b) {
//     return a + b;
// }

//arrow functions written as below examples
const sum = (a, b) => {
    return a + b;
}

// app.get("/", (req, res) => {

// })

// app.get("/", function(req, res) {

// })

const ans = sum(1,2);
console.log(ans);



/*given an array, give me back a new array in which 
  every value is multiplied by 2
  [1, 2, 3, 4, 5] input
  [2, 4, 6, 8, 10] output
*/

// const input = [1, 2, 3, 4, 5];

// // solution
// const newArray = [];

// for(let i = 0; i < input.length; i++) {
//     newArray.push(input[i] * 2);
// }

// console.log(newArray);

//........Map method.........
// other solution
// const input = [1, 2, 3, 4, 5];

// function transform(i) {
//     return i * 2;
// }
// const ans1 = input.map(transform);
// console.log(ans1);


//better way of writting the above solution is below
const input = [1, 2, 3, 4, 5];

const ans1 = input.map(function (i) {
    return i * 2;
});
console.log(ans1);

//Assignment question
//create a map function that takes 2 inputs
//an array, and a transformation callback/fn
//and transform the array into a new one using 
// the transformation fn

//filtering 
//what if i tell u, given an array, give me
//back all the even values from it

// const arr = [1, 2, 3, 4, 5];

//ans
// const newArr = [];
// for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0) {
//         newArr.push(arr[i]);
//     }
// }

// console.log(newArr);

//other solution
// const arr = [1, 2, 3, 4, 5];

// //ans
// function filterLogic(n) {
//     if(n % 2 == 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// const ans3 = arr.filter(filterLogic);
// console.log(ans);


//better way of writing the above code is below
const arr = [1, 2, 3, 4, 5];

// ans
const ans4 = arr.filter(function (n) {
    if (n % 2 == 0) {
        return true;
    } else {
        return false;
    }
});
console.log(ans4);

//Assignment 
/*create a map fn that takes an array and a 
  transform fn as input and returns the transformed 
  array as output
*/
