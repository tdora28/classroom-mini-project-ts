// `getNumberOfGrades` should return the number of grades
export function getNumberOfGrades(grades: number[]): number {
  return grades.length;
}

// `getSumGrades` should return the sum of all the grades
export function getSumGrades(grades: number[]): number {
  return grades.reduce((acc, curr) => acc + curr, 0);
}

// `getAverageValue` should return the average value of all grades (the sum of all grades divided by the total number of grades)
export function getAverageValue(grades: number[]) {
  return getSumGrades(grades) / grades.length;
}

export function getPassingGrades(grades) {}

export function getFailingGrades(grades) {}

export function getRaisedGrades(grades) {}
