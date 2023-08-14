let student1 = {
    name: 'Іван',
    grades:{
        математика:95,
        англійська:85,
        історія:90
    }
};

let student2 = {
    name: 'Марія',
    grades:{
        математика: 80,
        англійська: 90,
        історія: 75
    }
};

let student3 = {
    name: 'Петро',
    grades : {
        математика: 70,
        англійська:  85,
        історія: 80
    },
};

let students = [student1, student2, student3];
for (let student of students) {
    console.log ('student: ${student.name}');
    console.log ('grades:');
    for (let subject in student.grades) {
        console. log ('${subject}: ${student.grades[subject]}');
    }
};
console. log ('...student1', '...student2',' ...student3');
