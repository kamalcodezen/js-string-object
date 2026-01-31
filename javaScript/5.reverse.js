let details = "I am  learning web dev.";

console.log(details);

let rev = "";
for (let i of details) {
    rev = i + rev;
}
console.log(rev);


let add = "";
for (let i = 0; i < details.length; i++) {
    let revers = details[i];
    add = revers + add;
}
console.log(add);



//  

let reversed = details.split("").reverse().join("");  // different way reverse 

console.log(reversed);
