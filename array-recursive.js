/**
 * We're going to write some basic array functions recursively.
 * The functions here (first, rest, is empty, max, min, and concat) are helper
 * functions meant to make the structure of the recursion more clear.
 */


/**
 * Given an array, return its first element.
 */
function first(array) {
  return array[0];
}

/**
 * Given an array, return an array consisting of all but the first element.
 * This will return an empty array if the input only has one element.
 */
function rest(array) {
  return array.slice(1);
}

/**
 * This is the only place where we'll use array.length.
 * In other languages, you could write something like "array === []"
 * to check whether an array was empty, but not so in JavaScript.
 */
function isEmpty(array) {
  return array.length === 0;
}

/**
 * Given two arrays, return a new array formed by concatenating the input.
 * For example,
 *    concat([1, 2, 3], [55, 66, 77]) returns [1, 2, 3, 55, 66, 77]
 *    concat([], [7, 8, 9])           returns [7, 8, 9]
 *    concat([4, 5, 6], [])           returns [4, 5, 6]
 */
function concat(leftArray, rightArray) {
  return leftArray.concat(rightArray);
}

/**
 * Given two numbers, returns the larger of the two.
 */
function max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

/**
 * Given two numbers, returns the smaller of the two.
 */
function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

/**
 *
 *
 * BEGIN EXERCISES
 *
 *
 */

/**
 * Given an array, return its length.
 * I realize in JavaScript you could do array.length, but
 * the point is to reframe familiar concepts recursively.
 *
 */

function length_old(array) {
  let runningLength = 0;

  for(let element of array) {
    runningLength = 1 + runningLength;
  }

  return runningLength;
}


// Remember: first is the element being prepended
//           rest is the list being prepended to
// [1,2,3] is [2,3].prepend(1)
// first([1,2,3]) is 1
// rest([1,2,3]) is [2,3]
// first([3]) is 3
// rest([3]) is []
function length(array) {
  if (isEmpty(array)) {
    return 0;
  } else {
    return 1 + length(rest(array));
  }
}

// length([4,5,6]) = 1 + length(rest([4,5,6]))
// length([4,5,6]) = 1 + length([5,6])
// length([4,5,6]) = 1 + (1 + length(rest([5,6])))
// length([4,5,6]) = 1 + (1 + length([6]))
// length([4,5,6]) = 1 + (1 + (1 + length(rest([6])))
// length([4,5,6]) = 1 + (1 + (1 + length([])))
// length([4,5,6]) = 1 + (1 + (1 + 0))
// length([4,5,6]) = 3


// How do we know what we should return when the array is empty?

/**
 * Given an array of numbers, return the sum of its elements.
 */
function sum(array) {
  if (isEmpty(array)) {
    return 0;
  } else {
    return first(array) + sum(rest(array));
  }
}

/**
 * Given an array of numbers, return the product of its elements.
 */
function product(array) {
  if (isEmpty(array)) {
    return 1;
  } else {
    // return first(array) * ____;
  }
}

/**
 * Given an array of numbers, return the largest element.
 * Hint: use the max helper function
 */

function largest(array) {
  if (isEmpty(array)) {
    // return ________;
  } else {
    // return ________;
  }
}

/**
 * Given an array of numbers, return the largest element.
 * Hint: use the min helper function
 */
function smallest(array) {
  if (isEmpty(array)) {
    // return ________;
  } else {
    // return ________;
  }
}
