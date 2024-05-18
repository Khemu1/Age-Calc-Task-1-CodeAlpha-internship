/**
 * Validates the provided date  (year, month, day).
 * @param {Number} year - The year .
 * @param {Number} month - The month .
 * @param {Number} day - The day .
 * @throws {Error} If any of the date components are invalid.
 * @returns {Boolean}}
 */
export function validateDate(year, month, day) {
  try {
    year = eval(year);
    month = eval(month);
    day = eval(day);
  } catch (error) {
    return false;
  }
  if (
    isNaN(year) ||
    isNaN(month) ||
    isNaN(day) ||
    !Number.isInteger(year) ||
    !Number.isInteger(month) ||
    !Number.isInteger(day) ||
    year >= 2024 ||
    year < 1924 ||
    month < 1 ||
    month > 12 ||
    day < 1
  ) {
    return false;
  }
  /**
   * this returns the last day of the month insuring valid day even with leap years
   */
  const maxDay = new Date(year, month, 0).getDate();

  if (day > maxDay) {
    return false;
  }
  return true;
}

/**
 * Calculates the age based on the provided date of birth.
 * @param {Number} year - The year of birth.
 * @param {Number} month - The month of birth.
 * @param {Number} day - The day of birth.
 * @returns {Number} The calculated age.
 */
export function calculateAge(year, month, day) {
  const birthDate = new Date(year, month - 1, day); // Month parameter is zero-indexed
  const currentDate = new Date();
  const diffMs = currentDate - birthDate;
  const age = Math.floor(diffMs / (1000 * 60 * 60 * 24 * 365.25));
  return age;
}
