
let fullName = "kamaluddin";

// console.log(fullName);

fullName = fullName.slice(2, 4);
// console.log(fullName);


const me = "i am a good boy and hardworking person";

console.log(me.split());
console.log(me.split(""));
console.log(me.split("a"));

const city = "delhi,pune,kolkata,mumbai,hyderabad";
console.log(city.split(",")); // this method convert string to array

const cities = ['delhi', 'pune', 'kolkata', 'mumbai', 'hyderabad'];

console.log(cities.toString()); // 1way array convert to string

console.log(cities.join()); // 2nd way convert to string 

console.log(cities.join("-"));
console.log(cities.join("|"));
