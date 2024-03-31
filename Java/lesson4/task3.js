var students = {
    student1: {name: "Fazil",exam: true},
    student2: {name: "Rasim",exam: false},
    student3: {name: "Yusif",exam: true},
    student4: {name: "Ferid",exam: true},
    student5: {name: "Tural",exam: true}
}
function removeFailedStudents(students) {
    return Object.keys(students).filter((key) => students[key].exam)
}
document.write("fixed students array: " + removeFailedStudents(students))