/* eslint-disable no-unused-vars */
export default function getStudentIdsSum(getListStudents) {
  const myArr = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return myArr.reduce(((reducer, myArr) => reducer + myArr.id), 0);
}
