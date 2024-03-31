var students = [
    { name: "John", surname: "Doe", entranceScore: 18, exitScore: 55 },
    { name: "Jane", surname: "Smith", entranceScore: 18, exitScore: 33 },
    { name: "Alice", surname: "Johnson", entranceScore: 15, exitScore: 36 },
    { name: "Bob", surname: "Brown", entranceScore: 16, exitScore: 35 }
];
students = students.filter(student => {
    return !(student.entranceScore < 17 && student.entranceScore + student.exitScore === 51);
});
students.forEach(student => {
    document.write("Name: " + student.name + "<br>");
    document.write("Surname: " + student.surname + "<br>");
    document.write("Entrance Score: " + student.entranceScore + "<br>");
    document.write("Exit Score: " + student.exitScore + "<br><br>");
});