let name = "kamal udiin is bad boy";

let nameSlice = name.slice(2, 5);
console.log(nameSlice);

console.log(name.replace("n", "oo"));

let strArray = name.split(" ").reverse().join("");
console.log(strArray);

let arrayStr = ['kamal', 'udiin', 'is', 'bad', 'boy'];
let newArray = arrayStr.join("");
console.log(newArray);

let revStr = "";
for (let i = 0; i < name.length; i++) {
    console.log(i, name[i])
    revStr = name[i]+ revStr;
}
console.log(revStr);