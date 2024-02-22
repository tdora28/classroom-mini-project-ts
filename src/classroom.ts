// `getNumberOfGrades` should return the number of grades
export function getNumberOfGrades(grades: number[]): number {
  return grades.length;
}

// `getSumGrades` should return the sum of all the grades
export function getSumGrades(grades: number[]): number {
  return grades.reduce((acc, curr) => acc + curr, 0);
}

export function getAverageValue(grades) {}

export function getPassingGrades(grades) {}

export function getFailingGrades(grades) {}

export function getRaisedGrades(grades) {}
