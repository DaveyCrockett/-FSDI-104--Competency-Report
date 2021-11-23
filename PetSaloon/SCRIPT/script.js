// Class Notes

let students = [
    {
        name: "Eric",
        email: "eric@gmail.com",
        gpa: 3.9
    },
    {
        name: "David",
        email: "david@gmail.com",
        gpa: 4.0
    },
    {
        name: "Davion",
        email: "davion@gmail.com",
        gpa: 3.8
    },
    {
        name: "Will",
        email: "will@gmail.com",
        gpa: 3.6
    }
] 
students[3].name = "Miguel";
console.log(students);

for(let i=0; i < students.length; i++){
    document.write(`<li> ${students[i].name}</li>`);
}

let total = 0;
for(let i=0; i < students.length; i++){
    document.write(`<li> ${students[i].gpa}</li>`);
    total = total+students[i].gpa;
    console.log(total);
}

console.log(total);