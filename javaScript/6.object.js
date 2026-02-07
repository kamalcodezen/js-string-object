
const student = {
    fullName: "kamaluddin",
    age: 31,
    isPassed: true,
    school: "Bagnan boys",
}

const subject = {
    name: "english",
    teacher: "rifiya mam",
    examDate: "30 feb",
    chapter: ["first", "second", "third"],
    exams: {
        name: "final exam",
        marks: 100
    }
}

console.log(subject.exams);
console.log(subject["examDate"]);
let keyName = "teacher";
console.log(subject[keyName]);



subject.name = "bengali";
console.log(subject.name);

subject["name"] = "math";
console.log(subject.name);

const propName = "teacher";
subject[propName]= "suraya";
console.log(subject)