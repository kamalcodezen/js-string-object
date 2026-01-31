let school = "BAGNAN High School";
let name = "kamaluddin";

// console.log(school);
// console.log(school.toLowerCase());
// console.log(school.toUpperCase());

let change = name[0].toUpperCase() + name.slice(1); //1st sentence change
console.log(change);

let subject = "Bengali";
let books = "bengali";

if (subject === books) {  // this string  value case sensitive problem
    console.log(`daily reading this book`);
} else {
    console.log(`i'm not reading this book`);
}


// string.toUpperCase() : ABCD
// string.toUpperCase(): ABCD

if (subject.toLowerCase() === books.toLowerCase()) {   // string method apply in condition
    console.log("my best book");
} else {
    console.log("ignore this book");
}



let drink = " water";
let juice = "  water  ";

if (drink === juice) {   // problem reason length is not same different length 
    console.log("i want this");
} else {
    console.log("no need");
}

if (drink.trim() === juice.trim()) {
    console.log("i want this");
} else {
    console.log("no need this ");
}