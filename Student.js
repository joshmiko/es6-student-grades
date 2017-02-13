// define your student class, here
class Student {
  constructor(name, gradeArray) {
    this.name = name;
    this.gradeArray = gradeArray;
    this.average = 0
  }

  averageGrade() {
    let grades = this.gradeArray
    let sum = 0
    for (let grade of grades) {
      sum += grade;
    }
    this.average = sum / grades.length;
    return this.average
  }

  toString() {
    return `${this.name} has an average grade of ${this.average}.`
  }
}
// create a new student object
let james = new Student("James", [80, 75.3, 90, 88, 70]);

// print the average grade to the console
console.log(james.averageGrade());

// print the string representation of the student object
console.log(james.toString());
