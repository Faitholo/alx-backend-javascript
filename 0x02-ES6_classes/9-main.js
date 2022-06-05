/* eslint-disable brace-style */
// eslint-disable-next-line import/no-named-as-default
import listOfStudents from './9-hoisting';

console.log(listOfStudents);

const listPrinted = listOfStudents.map(
  // eslint-disable-next-line arrow-parens
  student => student.fullStudentDescription,
);

console.log(listPrinted);
