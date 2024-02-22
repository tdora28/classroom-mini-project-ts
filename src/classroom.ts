// `getNumberOfGrades` should return the number of grades
export function getNumberOfGrades(grades: number[]): number {
  return grades.length;
}

// `getSumGrades` should return the sum of all the grades
export function getSumGrades(grades: number[]): number {
  return grades.reduce((acc, curr) => acc + curr, 0);
}

// `getAverageValue` should return the average value of all grades (the sum of all grades divided by the total number of grades)
export function getAverageValue(grades: number[]): number {
  return getSumGrades(grades) / grades.length;
}

// `getPassingGrades` should return all passing grades (10 and above)
export function getPassingGrades(grades: number[]): string {
  const passingGrades = grades.filter((grade) => grade >= 10);
  return passingGrades.join(', ');
}

// `getFailingGrades` should return all failing grades (9 and below)
export function getFailingGrades(grades: number[]): string {
  const failingGrades = grades.filter((grade) => grade <= 9);
  return failingGrades.join(', ');
}

export function getRaisedGrades(grades) {}
