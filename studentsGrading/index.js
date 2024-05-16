function calculateGrades(marks) {
    //use while loops for each condition
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
//consolelog to calculate the grades of students
console.log(calculateGrades(20));

//funtion to promt the student to put marks that ranges from 0 to 100
const studentmarks = prompt('Enter student marks(between 0 and 100):')
//set the condition on the numbers that a student should input
if (!isNaN('studentMarks') &&  studentMarks  <=100 && studentMarks>= 0){
    const grade = calculateGrade('studentMarks')
    console.log(grade)
} else {
    console.log(' enter -valid input')
}
