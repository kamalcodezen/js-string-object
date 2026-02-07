let fullName = "kamaludiin";

let nameCase = fullName.toLowerCase();
console.log(nameCase);

console.log(fullName.toUpperCase());

let juice = "water";
let juice2 = "Water";
if (juice.toLowerCase() === juice2.toLowerCase()) {
    console.log("This is pure Juice");
} else {
    console.log("This is not pure Juice");
}

let juice3 = "water ";
let juice4 = " water ";
if (juice3.trim() === juice4.trim()) {
    console.log("This is pure water");
}else{;
    console.log("This is not water");
}