console.log("CLASS 6 : Promises");

class Shape {

    constructor(color) {
        this.color = color;
    }

    paint() {
        console.log("painting with color " + this.color);
    }

}

class Rectangle extends Shape {//inheriting the shape class properties

    constructor(width, height, color) {
        super(color);
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }

}

class Circle extends Shape {//inheriting the shape class properties with the help of extends keyword

    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }

    area() {
        return 3.14 * this.radius * this.radius;
    }

    perimeter() {
        return 2 * 3.14 * (this.radius);
    }

}

class Square extends Shape {//inheriting shape class

    constructor(side, color) {
        super(color);
        this.side = side;
    }

    area() {
        return this.side * this.side;
    }

    perimeter() {
        return 4 * this.side;
    }
   
}

// const r1 = new Rectangle(10, 20, "red");
// const c1 = new Circle(20, "yellow");
// const s1 = new Square(300, "red");
// console.log(s1.paint());
// console.log(c1.paint());
// console.log(r1.paint());


// function callback() {
//     console.log("hi there");
// }

// setTimeout(callback, 5 * 1000);

// let ctr = 0;
// for(let i = 0; i < 1000; i++) {
//     ctr = ctr + i;
// }
// console.log(ctr);


// function setTimeoutPromisified(ms) {
//     let p = new Promise(resolve => setTimeout(resolve, ms));
//     return p;
// }

// function callback() {
//     console.log("hi there");
// }

// setTimeoutPromisified(3000).then(callback);


// const fs = require("fs");

// function fsReadFilePromisified(filePath, encoding) {
//     let p = new Promise((resolve, reject) => {
//         fs.readFile(filePath, encoding, (err, data) => {
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         })
//     })
//     return p;
// }

// function callback(data) {
//     console.log(data);
// }

// function callbackErr() {
//     console.log("error while reading the file");
// }

// // fs.readFile("a.txt2", "utf-8", callback);

// fsReadFilePromisified("a.txt", "utf-8")
//     .then(callback)
//     .then(callbackErr)


//callBack hell
// setTimeout(function() {
//     console.log("hi there");
//     setTimeout(function() {
//         console.log("hello");
//         setTimeout(function() {
//             console.log("hello there");
//         }, 5000);
//     }, 3000);
// }, 1000);

function setTimeoutPromisified(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

setTimeoutPromisified(1000)
    .then(function() {
        console.log("hi");
        return setTimeoutPromisified(3000)
    }).then(function() {
        console.log("hello");
        return setTimeoutPromisified(5000)
    }).then(function() {
        console.log("hello");
    })