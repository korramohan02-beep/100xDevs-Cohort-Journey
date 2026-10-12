console.log("CLASS 7 = Writing promises and async await");

// const fs = require("fs");

// fs.readFile("a.txt", "utf-8", function(err, data) {
//     if(err) {
//         console.log("error while reading file");
//     } else {
//         console.log(data);
//     }
// });

//create a promisified version of fs.readFile
//create a promisified version of setTimeout
//create a promisified version of fs.writeFile

// function fsReadFilePromise(fileName, encoding) {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(fileName, encoding, function(err, data) {
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// } 

// fsReadFilePromise("a.txt", "utf-8")
//     .then(function(data) {
//         console.log(data);
//     })
//     .catch(function(e) {
//         console.log("Error while reading file");
//     })


// function setTimeoutPromisified(delay) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve()
//         }, delay);
//     });
// }

// setTimeoutPromisified(1000)
//     .then(function() {
//         console.log("1 second has passed ");
//     })
//     .catch(function() {
//         console.log("an error came");
//     })
//     .finally(function() {
//         console.log("final after either than or catch ran");
//     })
//



// let p = new Promise((resolve) => {
//     resolve()
//     resolve()
//     resolve()
// });

// p.then((data) => {
//     console.log("promise resolved " + data);
// });


// const fs = require("fs");
// function fsReadFilePromisified(filePath, encoding) {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(filePath, encoding, function(err, data) {
//             if(err) {
//                 reject("File was not found");
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

// async function main() {

//     let file1Contents = await fsReadFilePromisified("a.txt", "utf-8");
//     let file2Contents = await fsReadFilePromisified("b.txt", "utf-8");  
//     let file3Contents = await fsReadFilePromisified("c.txt", "utf-8");

//     console.log(file1Contents);
//     console.log(file2Contents);
//     console.log(file3Contents);
// }

// main();
// console.log("hi");
// console.log("hello");

//Assignment
//approch 1(callback based sync fn calls)
// const fs = require("fs");//syncronous way of readWriteFile

// let contents = fs.readFileSync("a.txt", "utf-8") 
// const trimmedContents = contents.trim();
// fs.writeFileSync("a.txt", trimmedContents);


//approch 2(callback based, async fn calls)
// const fs = require("fs");//asyncronous way 

// function cleanFile(filePath, afterDone) {
//     fs.readFile("a.txt", "utf-8", function(err, contents) {
//         const trimmedContents = contents.trim();
//         fs.writeFile("a.txt", trimmedContents, function() {
//             afterDone();
//         });
//     });
// }

// cleanFile("a.txt", function() {
//     console.log("done cleaning a.txt");
// })


//approch 3(promise based, on async await)
// const fs = require("fs");//asyncronous way 

// function cleanFile(filePath) {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(filePath, "utf-8", function(err, contents) {
//             if(err) {
//                 reject();
//             } else {
//                 const trimmedContents = contents.trim();
//                 fs.writeFile(filePath, trimmedContents, function(err) {
//                     if(err) {
//                         reject();
//                     } else {
//                         resolve();
//                     }
//                 });
//             }
           
//         });
//     });
// }

// cleanFile("aasdfffssfg.txt")
//     .then(function() {
//         console.log("file has been cleaned");
//     })
//     .catch(function() {
//         console.log("error while cleaning file");
//     })
//


//approch 4(promise based, does use async await)
// const fs = require("fs");//asyncronous way 

// function cleanFile(filePath) {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(filePath, "utf-8", function(err, contents) {
//             if(err) {
//                 reject();
//             } else {
//                 const trimmedContents = contents.trim();
//                 fs.writeFile("a.txt", trimmedContents, function(err) {
//                     if(err) {
//                         reject();
//                     } else {
//                         resolve();
//                     }
//                 });
//             }
           
//         });
//     });
// }

// async function main() {
//     try {
//         await cleanFile("a.txt");
//         console.log("done cleaning the file");
//     } catch(e) {
//         console.log("error while cleaning the file");
//     }
// }

// main();



// write a promisified function thst takes prefix as an input (a)
// and cleans ({prefix}1.txt), {prifix}2.txt, {prefix}3.txt

const fs = require("fs");//asyncronous way 

function cleanFile(filePath) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, "utf-8", function(err, contents) {
            if(err) {
                reject();
            } else {
                const trimmedContents = contents.trim();
                fs.writeFile(filePath, trimmedContents, function(err) {
                    if(err) {
                        reject();
                    } else {
                        resolve();
                    }
                });
            }
           
        });
    });
}

//this is how we have to create async function to call promisified fn
async function cleanManyFiles(prefix) { 
    await cleanFile(prefix + "1.txt");
    await cleanFile(prefix + "2.txt");
    await cleanFile(prefix + "3.txt");
}

cleanFile("1.txt")
    .then(function() {
        console.log("1.txt has been cleaned")
    })
cleanFile("2.txt")
    .then(function() {
        console.log("2.txt has been cleaned")
    })
cleanFile("3.txt")
   .then(function() {
        console.log("3.txt has been cleaned")
    })



//better way of writting this function is shown above
// function cleanManyFiles(prefix) {
//     return new Promise( async function(resolve, reject) {
//         try{
//             await cleanFile(prefix + "1.txt");
//             await cleanFile(prefix + "2.txt");
//             await cleanFile(prefix + "3.txt");
//             resolve();
//         } catch(e) {
//             reject();
//         }
//     })
// }