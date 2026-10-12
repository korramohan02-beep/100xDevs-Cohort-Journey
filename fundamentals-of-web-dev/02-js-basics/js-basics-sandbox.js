console.log("Hello! Node.js is running successfully in class2!");
// Basics of js

// function isLegal(name, age) {
//     if(age >= 18) {
//         console.log(name + " is allowed to vote");
//     } else {
//         console.log(name + " is not allowed to vote");
//     }
// }

// objects in js
// var user1 = { //here user1 is an object so pass arguments as user1.name,user1.age
//     name: "mohan",
//     age: 17,
//     password: "2ty345"
// }

// var user2 = { //it is also object so pass arguments as user2.name,user2.age
//     name: "waheed",
//     age: 25,
//     password: "gfh456gh"
// }

//while creating objects pass arguments like this to function

// isLegal(user1.name, user1.age);
// isLegal(user2.name, user2.age);

//different way to write the same thing above
// function isLegal(user) {
//     if(user.age >= 18) {
//         console.log(user.name + " is allowed to vote");
//     } else {
//         console.log(user.name + " is not allowed to vote");
//     }
// }

// objects in js
// var user1 = { //here user1 is an object so pass arguments as user1.name,user1.age
//     name: "mohan",
//     age: 17,
//     password: "2ty345",
//     address: { //we can create objects of objects
//         city: "hyd"
//     },
//     metadata: {
//         likes: "girls"
//     }
// }
// console.log(user1.address.city, user1.metadata.likes); // this how we can access the data in objects

// var user2 = { //it is also object so pass arguments as user2.name,user2.age
//     name: "waheed",
//     age: 25,
//     password: "gfh456gh"
// }

//while creating objects pass arguments like this to function
// isLegal(user1);
// isLegal(user2);

//.....Arrays = let you group data together......

//var user1 = "mohan";//we write this same data as below in array
// var user2 = "ganesh";
// var user3 = "waheed";

// var users = ["mohan", "ganesh", "waheed"];//creation of array

// console.log(users[0]); // instead of writing like this using loops is better
// console.log(users[1]);
// console.log(users[2]);

//iterating of an array
// for(let i = 0; i < 3; i++) { // wirting like this is better way to access
//     console.log(users[i]);
// }



// function isLegal(user) {
//     if(user.age >= 18) {
//         console.log(user.name + " is allowed to vote");
//     } else {
//         console.log(user.name + " is not allowed to vote");
//     }
// }
// defined an array of objects
// var users = [{ //we can also create an array of objects as below
//     name: "mohan",
//     age: 17,
//     password: "23random",
//     addresses: [
//         {
//             city: "hyd",
//             building: 50,
//             pincode: 509358
//         },
//         {
//             city: "mahaboobnagar",
//             building: 69,
//             pincode: 12345
//         }
//     ]
// },  {
//     name: "waheed",
//     age: 25,
//     password: "wa234",
//     addresses: []
// },  {
//     name: "ganesh",
//     age: 24,
//     password: "ganesh123",
//     addresses: []
// }];

// for(let i = 0; i < 3; i++) {
//     isLegal(users[i]);
// }

// console.log(users[0].addresses[0].city);


/*Assignment
  Create a function that takes an array of objects as input,
  and return the users whose age>18 and are male
*/
// function isLegal(users) {
//     let legalUsers = [];

//     for(let i = 0; i < users.length; i++) {
//         if(users[i].age >= 18 && users[i].gender == "m") {
//             legalUsers.push(users[i]);
//         }
//     }

//     return legalUsers;
// }

// var users = [{
//     name: "mohan",
//     age: 20,
//     gender: "m",
// },  {
//     name: "waheed",
//     age: 25,
//     gender: "m",
// },  {
//     name: "vaishnavi",
//     age: 26,
//     gender: "f",
// }];

// let legalAllowedUsers = isLegal(users);
// console.log(legalAllowedUsers);