function calculateGrades(marks) {
    
while (marks > 79 ) {
    return 'A';
}
while(marks >= 60 && marks <=79) {
    return 'B'
}
while(marks <= 59 && marks >=49) {
    return 'C'
}
while(marks >= 40 && marks <=49) {
    return 'D'
}
while(marks < 40) {
    return 'E'
}


}
console.log(calculateGrades(20));


const studentmarks = prompt('Enter student marks(between 0 and 100):')
if (!isNaN('studentMarks') &&  studentMarks  <=100 && studentMarks>= 0){
    const grade = calculateGrade('studentMarks')
    console.log(grade)
} else {
    console.log(' enter -valid input')
}

