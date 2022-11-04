

let patta = 80;
let sam = 45;
let aziz = 98;
let mari = 60;

let total = (patta + sam + aziz + mari);
let avg = (total / 4);
console.log("average:", avg);
if (avg >= 91 && avg <= 100) {
    console.log("grade is A");
}
else if (avg >= 81 && avg <= 90) {
    console.log("gradr is B");
}
else if (avg >= 61 && avg <= 80) {
    console.log("grade is C ")
}
else {
    console.log("grade is fail");
}
