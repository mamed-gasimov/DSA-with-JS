function countStudents(students, sandwiches) {
  let result = students.length;
  const studentTypes = {};

  for (const student of students) {
    if (!studentTypes.hasOwnProperty(student)) {
      studentTypes[student] = 1;
    } else {
      studentTypes[student]++;
    }
  }

  for (const sandwiche of sandwiches) {
    if (studentTypes[sandwiche] > 0) {
      studentTypes[sandwiche]--;
      result--;
    } else {
      return result;
    }
  }

  return result;
}

const students = [1, 1, 1, 0, 0, 1];
const sandwiches = [1, 0, 0, 0, 1, 1];
console.log(countStudents(students, sandwiches)); // 3

const students2 = [1, 1, 0, 0];
const sandwiches2 = [0, 1, 0, 1];
console.log(countStudents(students2, sandwiches2)); // 0
