const student = {
    name: "kamal",
    age: 22,
    isPassed: true,
    subject: {
        book: "bengali",
        book2: "history",
        book3: {
            note1: "biology",
            note2: "chemistry"
        }
    }
}


console.log(student);
console.log(student.age);
console.log(student["name"]);


console.log(student.subject.book3["note2"]);
console.log(student.subject.book3.note1);

console.log(Object.keys(student.subject.book3));
console.log(Object.values(student.subject.book3));


let newProperty = student["age"] = 34;
console.log(newProperty, student);


console.log(student.isPassed = false);
console.log(student);

let bookNewSubject = student.subject.book3["note1"] = "english";
console.log(bookNewSubject);

console.log(student);


student["fullName"] = "kamaludiin"; // new property add
console.log(student);



for (let i in student) {
    // console.log(i)
    console.log(i, ":", student[i]);
}