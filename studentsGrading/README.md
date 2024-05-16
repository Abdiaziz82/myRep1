Grade Calculator
===============

A simple grade calculator that takes a student's marks as input and returns their corresponding grade.

**Files**

* `index.html`: The HTML file that links to the JavaScript file.
* `index.js`: The JavaScript file that contains the grade calculation logic.

**How it works:**

1. The user is prompted to enter their marks (between 0 and 100) using the `prompt` function.
2. The input is validated to ensure it's a number between 0 and 100.
3. If the input is valid, the `calculateGrade` function is called with the input marks as an argument.
4. The `calculateGrade` function returns the corresponding grade based on the marks:
	* A: 80-100
	* B: 60-79
	* C: 50-59
	* D: 40-49
	* E: below 40
5. The calculated grade is logged to the console using console.log.

**Improvement Suggestions:**

* The `calculateGrade` function can be simplified using `if` statements instead of `while` loops.

**Improved Code:**

function calculateGrade(marks) {
  if (marks > 79) return 'A';
  if (marks >= 60 && marks <= 79) return 'B';
  if (marks >= 49 && marks <= 59) return 'C';
  if (marks >= 40 && marks <= 49) return 'D';
  if (marks < 40) return 'E';
  return 'Invalid marks';
}

const studentMarks = prompt('Enter student marks (between 0 and 100):');
if (!isNaN(studentMarks) && studentMarks <= 100 && studentMarks >= 0) {
  const grade = calculateGrade(studentMarks);
  console.log(Grade)
} else {
  console.log('Enter valid input');
}


**Author:**
[![Abdiaziz82](https://img.shields.io/badge/GitHub-Abdiaziz82-<blue>?logo=github&logoColor=blue)](https://github.com/Abdiaziz82)

  **license**
  Copyright (c) [2024] [Abdiaziz Haredh]
  This project is licensed.

