let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};
//Write JavaScript code to fetch the student's name.
console.log(student.name);
//Adding Value 
student.phone = "987654321"
console.log(student.phone)
//Removing Value
delete student.grade;
console.log(student);
//Modifying Value 
student.age = "21"
console.log(student);