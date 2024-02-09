/* *******************************************************************************************
 *                                                                                           *
 * Please read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Looping_code    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration         *
 * https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/conditionals    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else    *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch       *
 *                                                                                           *
 ******************************************************************************************* */

/**
 * Determines whether a given number is positive. Zero is considered positive.
 * This function does not use Number or Math class methods.
 *
 * @param {number} number - The number to check.
 * @return {boolean} True if the number is positive or zero, false otherwise.
 *
 * @example:
 *  10 => true
 *  0  => true
 *  -5 => false
 */
function isPositive(number) {
  return number >= 0;
}

/**
 * Returns the maximum of three numbers without using Array and Math classes methods.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @param {number} c - The third number.
 * @return {number} The maximum of the three numbers.
 *
 * @example:
 *  1, 2, 3       => 3
 *  -5, 0, 5      => 5
 *  -0.1, 0, 0.2  => 0.2
 */
function getMaxNumber(a, b, c) {
  let max = a;
  max = b > max ? b : max;
  max = c > max ? c : max;
  return max;
}

/**
 * Checks if a queen can capture a king in the next move on an 8x8 chessboard.
 * See more details at https://en.wikipedia.org/wiki/Queen_(chess)
 *
 * @typedef {{
 *  x: number,
 *  y: number
 * }} Position
 * @param {Object} queen - The position of the queen.
 * @param {Object} king - The position of the king.
 * @return {boolean} True if the queen can capture the king, false otherwise.
 *
 * @example
 * {x: 1, y: 1}, {x: 5, y: 5} => true
 * {x: 2, y: 1}, {x: 2, y: 8} => true
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 * {x: 1, y: 1}, {x: 2, y: 8} => false
 */
function canQueenCaptureKing(queen, king) {
  if (
    queen.x === king.x ||
    queen.y === king.y ||
    Math.abs(queen.x - king.x) === Math.abs(queen.y - king.y)
  ) {
    return true;
  }
  return false;
}

/**
 * Determines whether a triangle is isosceles based on its side lengths.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} a - The length of the first side.
 * @param {number} b - The length of the second side.
 * @param {number} c - The length of the third side.
 * @return {boolean} True if the triangle is isosceles, false otherwise.
 *
 * @example:
 *  1, 2, 3   => false
 *  3, 1, 2   => false
 *  2, 3, 2   => true
 *  3, 2, 2   => true
 *  2, 2, 3   => true
 *  2, 2, 5   => false
 *  3, 0, 3   => false
 */

function isIsoscelesTriangle(a, b, c) {
  if (a <= 0 || b <= 0 || c <= 0) return false;
  if (a + b <= c || a + c <= b || b + c <= a) return false;
  if (a === b || a === c || b === c) return true;
  return false;
}

/**
 * Converts a number to Roman numerals. The number will be between 1 and 39.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to convert.
 * @return {string} The Roman numeral representation of the number.
 *
 * @example:
 *  1   => I
 *  2   => II
 *  5   => V
 *  10  => X
 *  26  => XXVI
 */
function convertToRomanNumerals(num) {
  let numCopy = num;
  const romanDefinition = { X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  const romanAlpha = ['X', 'IX', 'V', 'IV', 'I'];
  let roman = '';
  for (let i = 0; i < romanAlpha.length; i += 1) {
    const romanNumb = romanAlpha[i];
    while (numCopy >= romanDefinition[romanNumb]) {
      roman += romanNumb;
      numCopy -= romanDefinition[romanNumb];
    }
  }
  return roman;
}

/**
 * Converts a number to a string, replacing digits with words.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} numberStr - The number as a string.
 * @return {string} The number with digits replaced by words.
 *
 * @example:
 *  '1'       => 'one'
 *  '10'      => 'one zero'
 *  '-10'     => 'minus one zero'
 *  '10.5'    => 'one zero point five'
 *  '10,5'    => 'one zero point five'
 *  '1950.2'  => 'one nine five zero point two'
 */
function convertNumberToString(numberStr) {
  let result = '';
  const numbInLetters = {
    '-': 'minus',
    '.': 'point',
    ',': 'point',
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  for (let i = 0; i < numberStr.length; i += 1) {
    switch (i) {
      case numberStr.length - 1:
        result += `${numbInLetters[numberStr[i]]}`;
        break;
      default:
        result += `${numbInLetters[numberStr[i]]} `;
        break;
    }
  }
  return result;
}

/**
 * Determines whether a string is a palindrome.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to check.
 * @return {boolean} True if the string is a palindrome, false otherwise.
 *
 * @example:
 *  'abcba'     => true
 *  '0123210'   => true
 *  'qweqwe'    => false
 */
function isPalindrome(str) {
  let reverseStr = '';
  for (let i = str.length - 1; i >= 0; i -= 1) {
    reverseStr += str[i];
  }
  return reverseStr === str;
}

/**
 * Finds the first occurrence of a letter in a string.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {string} str - The string to search.
 * @param {string} letter - The letter to find.
 * @return {number} The index of the first occurrence of the letter, or -1 if not found.
 *
 * @example:
 *  'qwerty', 'q'     => 0
 *  'qwerty', 'е'     => 2
 *  'qwerty', 'Q'     => -1
 *  'qwerty', 'p'     => -1
 */
function getIndexOf(str, letter) {
  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === letter) {
      return i;
    }
  }
  return -1;
}

/**
 * Checks if a number contains a specific digit.
 * In this task, the use of methods of the String and Array classes is not allowed.
 *
 * @param {number} num - The number to check.
 * @param {number} digit - The digit to search for.
 * @return {boolean} True if the number contains the digit, false otherwise.
 *
 * @example:
 *  123450, 5   => true
 *  123450, 1   => true
 *  123450, 0   => true
 *  12345, 0    => false
 *  12345, 6    => false
 */
function isContainNumber(num, digit) {
  let numCopy = num;
  const len = Math.ceil(Math.log10(num + 1));
  for (let i = 0; i < len; i += 1) {
    if (digit === numCopy % 10) return true;
    numCopy = Math.floor(numCopy / 10);
  }
  return false;
}

/**
 * Finds the index of an element in an array where the sum of elements to the left equals the sum of elements to the right.
 * If such an index does not return -1.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to check.
 * @return {number} The index of the balance point, or -1 if none exists.
 *
 * @example:
 *  [1, 2, 5, 3, 0] => 2    => 1 + 2 === 3 + 0 then balance element is 5 and its index = 2
 *  [2, 3, 9, 5] => 2       => 2 + 3 === 5 then balance element is 9 and its index = 2
 *  [1, 2, 3, 4, 5] => -1   => no balance element
 */
function getBalanceIndex(arr) {
  if (arr.length === 0) return -1;
  let balanceIndex = 1;
  let leftSum = 0;
  let rightSum = 0;
  for (let i = 0; i < balanceIndex; i += 1) {
    leftSum += arr[i];
    rightSum = 0;
    for (let j = balanceIndex + 1; j < arr.length; j += 1) {
      rightSum += arr[j];
    }
    if (leftSum === rightSum) return balanceIndex;
    if (balanceIndex <= arr.length - 2) {
      balanceIndex += 1;
    }
  }
  return -1;
}

/**
 * Generates a spiral matrix of a given size, filled with numbers in ascending order starting from one.
 * The direction of filling with numbers is clockwise.
 * Usage of String and Array classes methods is not allowed in this task.
 *
 * @param {number} size - The size of the matrix.
 * @return {number[][]} The spiral matrix.
 *
 * @example:
 *        [
 *          [1, 2, 3],
 *  3  =>   [8, 9, 4],
 *          [7, 6, 5]
 *        ]
 *        [
 *          [1,  2,  3,  4],
 *  4  =>   [12, 13, 14, 5],
 *          [11, 16, 15, 6],
 *          [10, 9,  8,  7]
 *        ]
 */
function getSpiralMatrix(size) {
  let counter = 1;
  let startCol = 0;
  let startRow = 0;
  let endCol = size - 1;
  let endRow = size - 1;
  const matrix = [];
  for (let x = 0; x < size; x += 1) {
    matrix[x] = [];
    for (let y = 0; y < size; y += 1) {
      matrix[x][y] = null;
    }
  }

  while (counter <= size ** 2 || (startRow <= endRow && startCol <= endCol)) {
    for (let i = startCol; i <= endCol; i += 1) {
      matrix[startRow][i] = counter;
      counter += 1;
    }

    startRow += 1;
    for (let j = startRow; j <= endRow; j += 1) {
      matrix[j][endCol] = counter;
      counter += 1;
    }

    endCol -= 1;
    for (let n = endCol; n >= startCol; n -= 1) {
      matrix[endRow][n] = counter;
      counter += 1;
    }

    endRow -= 1;
    for (let m = endRow; m >= startRow; m -= 1) {
      matrix[m][startCol] = counter;
      counter += 1;
    }

    startCol += 1;
  }
  return matrix;
}

/**
 * Rotates a matrix by 90 degrees clockwise in place.
 * Take into account that the matrix size can be very large. Consider how you can optimize your solution.
 * Usage of String and Array class methods is not allowed in this task.
 *
 * @param {number[][]} matrix - The matrix to rotate.
 * @return {number[][]} The rotated matrix.
 *
 * @example:
 *  [                 [
 *    [1, 2, 3],        [7, 4, 1],
 *    [4, 5, 6],  =>    [8, 5, 2],
 *    [7, 8, 9]         [9, 6, 3]
 *  ]                 ]
 */
function rotateMatrix(matrix) {
  const resMatrix = matrix;
  const tempMatrix = [];
  const heightMatrix = matrix.length;
  const widthMatrix = matrix[0].length;
  for (let x = 0; x < heightMatrix; x += 1) {
    tempMatrix[x] = [];
    for (let y = 0; y < widthMatrix; y += 1) {
      tempMatrix[x][y] = matrix[x][y];
    }
  }

  for (let i = 0; i < heightMatrix; i += 1) {
    for (let j = 0; j < widthMatrix; j += 1) {
      resMatrix[j][widthMatrix - i - 1] = tempMatrix[i][j];
    }
  }
  return resMatrix;
}

function swap(arr, left, right) {
  const copyArr = arr;
  const temp = arr[left];
  copyArr[left] = arr[right];
  copyArr[right] = temp;
}

function partition(arr, start, stop) {
  let ind = start;
  const pivot = arr[start];

  for (let j = start; j <= stop; j += 1) {
    if (pivot >= arr[j]) {
      swap(arr, ind, j);
      ind += 1;
    }
  }

  swap(arr, ind - 1, start);
  return ind - 1;
}

function partitionRand(arr, start, stop) {
  const randPivot = Math.floor(Math.random() * (stop - start + 1) + start);
  swap(arr, randPivot, start);
  return partition(arr, start, stop);
}

function quicksort(arr, start, stop) {
  if (start >= stop) return;

  const pivot = partitionRand(arr, start, stop);
  quicksort(arr, start, pivot - 1);
  quicksort(arr, pivot + 1, stop);
}

/**
 * Sorts an array of numbers in ascending order in place.
 * Employ any sorting algorithm of your choice.
 * Take into account that the array can be very large. Consider how you can optimize your solution.
 * In this task, the use of methods of the Array and String classes is not allowed.
 *
 * @param {number[]} arr - The array to sort.
 * @return {number[]} The sorted array.
 *
 * @example:
 *  [2, 9, 5]       => [2, 5, 9]
 *  [2, 9, 5, 9]    => [2, 5, 9, 9]
 *  [-2, 9, 5, -3]  => [-3, -2, 5, 9]
 */
function sortByAsc(arr) {
  quicksort(arr, 0, arr.length - 1);
  return arr;
}

/**
 * Shuffles characters in a string so that the characters with an odd index are moved to the end of the string at each iteration.
 * Take into account that the string can be very long and the number of iterations is large. Consider how you can optimize your solution.
 * Usage of Array class methods is not allowed in this task.
 *
 * @param {string} str - The string to shuffle.
 * @param {number} iterations - The number of iterations to perform the shuffle.
 * @return {string} The shuffled string.
 *
 * @example:
 *  '012345', 1 => '024135'
 *  'qwerty', 1 => 'qetwry'
 *  '012345', 2 => '024135' => '043215'
 *  'qwerty', 2 => 'qetwry' => 'qtrewy'
 *  '012345', 3 => '024135' => '043215' => '031425'
 *  'qwerty', 3 => 'qetwry' => 'qtrewy' => 'qrwtey'
 */
function shuffleChar(str, iterations) {
  const len = str.length;
  let countIterations = 0;
  let shuffleStr = str;
  let oddPart;
  let evenPart;
  const shuffles = {};
  shuffles[0] = str;
  do {
    oddPart = '';
    evenPart = '';
    for (let i = 0; i < len; i += 1) {
      if (i % 2 === 0) evenPart += shuffleStr[i];
      else oddPart += shuffleStr[i];
    }
    countIterations += 1;
    shuffleStr = evenPart + oddPart;
    shuffles[countIterations] = shuffleStr;
  } while (shuffleStr !== str);

  return shuffles[iterations % countIterations];
}

function smallestGreaterInd(arr, ind, digit, len) {
  const rightPartNumb = arr.slice(ind);
  let minInd = 0;
  for (let i = 0; i < rightPartNumb.length; i += 1) {
    const value = rightPartNumb[i];
    if (value < rightPartNumb[minInd] && value > digit) {
      minInd = i;
    }
  }
  return len - rightPartNumb.length + minInd;
}

function concatDigitsPart(arr, i) {
  const leftPart = arr.slice(0, i);
  const rightPart = sortByAsc(arr.slice(i));
  return [...leftPart, ...rightPart];
}

/**
 * Returns the nearest largest integer consisting of the digits of the given positive integer.
 * If there is no such number, it returns the original number.
 * Usage of String class methods is not allowed in this task.
 *
 * @example:
 * 12345    => 12354
 * 123450   => 123504
 * 12344    => 12434
 * 123440   => 124034
 * 1203450  => 1203504
 * 90822    => 92028
 * 321321   => 322113
 *
 * @param {number} number The source number
 * @returns {number} The nearest larger number, or original number if none exists.
 */
function getNearestBigger(number) {
  let digits = Array.from(String(number));
  const lengthNumb = digits.length;
  for (let i = lengthNumb - 1; i > 0; i -= 1) {
    if (digits[i - 1] < digits[i]) {
      const minRightPartInd = smallestGreaterInd(
        digits,
        i,
        digits[i - 1],
        lengthNumb
      );

      const temp = digits[minRightPartInd];
      digits[minRightPartInd] = digits[i - 1];
      digits[i - 1] = temp;
      digits = concatDigitsPart(digits, i);
      break;
    }
    if (i === 1) return number;
  }
  return parseInt(digits.join(''), 10);
}

module.exports = {
  isPositive,
  getMaxNumber,
  canQueenCaptureKing,
  isIsoscelesTriangle,
  convertToRomanNumerals,
  convertNumberToString,
  isPalindrome,
  getIndexOf,
  isContainNumber,
  getBalanceIndex,
  getSpiralMatrix,
  rotateMatrix,
  sortByAsc,
  shuffleChar,
  getNearestBigger,
};
