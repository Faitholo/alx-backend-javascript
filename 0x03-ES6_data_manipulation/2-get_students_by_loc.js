export default function getStudentsByLocation(getListStudents, city) {
  const myArr = [
    { id: 1, firstName: 'Guillaume', location: 'San Francisco' },
    { id: 2, firstName: 'James', location: 'Columbia' },
    { id: 5, firstName: 'Serena', location: 'San Francisco' },
  ];
  return myArr.filter((myArr) => myArr.location === city);
}
