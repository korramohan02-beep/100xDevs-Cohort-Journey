console.log("CLASS 3 = Promises, Callbacks, CPU vs IO Tasks!");

// const fs = require("fs");//IO bound tasks

// const contents = fs.readFileSync("a.txt", "utf-8", fileReadCallback);
// console.log(contents);


// function sum(a, b) {
//     return a + b;
// }
// function sub(a, b) {
//     return a - b;
// }

// function doArithmetic(a, b, whatToDo) {
//     if(whatToDo == "sum") {
//         let s = sum(a, b);
//         return s;
//     }
//     if(whatToDo == "sub") {
//         let s = sub(a, b);
//         return s;
//     }
// }

// const ans1 = doArithmetic(1, 2, "sum");
// const ans2 = doArithmetic(1, 2, "sub");


//....Asyncronous js code
// const fs = require("fs");

// function fileReadCallback(err, contents) {
//     console.log(contents);
// }

// fs.readFile("a.txt", "utf-8", fileReadCallback);

// let s = 0;
// for(let i = 0; i < 100; i++) {
//     s += i;
// }
// console.log(s);


// const a = 1;
// const b = 2;

// //wait for 1 second
// let beforeTime = Date.now();
// for(let i = 0; i < 100000000000; i++) {
//     let currentTime = Date.now();
//     if(currentTime - beforeTime >= 1000) {
//         break;
//     }
// }

// console.log(a + b);



// const a = 1;
// const b = 2;

// console.log(a);
// console.log(b);

// function callback() {
//     console.log(a + b);
// }

// setTimeout(callback, 1000);



let ctr = 0;
function callback() {
    console.log(ctr);
    ctr = ctr + 1;
}

setInterval(callback, 1000);

let x = 0;
for(let i = 0; i < 40000; i++) {
    x += i;
}
console.log(x);
