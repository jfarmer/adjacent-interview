
/**
 * Given an array, return its length.
 * Yes, we could just return array.length, but for the sake of
 * making all the code follow a similar structure, imagine
 * we could only iterate using for(let ... of)
 */
function length(array) {
  let runningLength = 0;

  for(let element of array) {
    runningLength = runningLength + 1;
  }

  return runningLength;
}

/**
 * Given an array of numbers, return the sum of its elements.
 */

function sum(array) {
  let runningSum = 0;

  for(let element of array) {
    runningSum = runningSum + element;
  }

  return runningSum;
}

/**
 * Given an array of numbers, return the product of its elements.
 */

function product(array) {
  let runningProduct = 1;

  for(let element of array) {
    runningProduct = runningProduct * element;
  }

  return runningProduct;
}

/**
 * Given an array of numbers, return its largest element.
 */
function largest(array) {
  let runningLargest = Number.NEGATIVE_INFINITY;

  for(let element of array) {
    if (element >= runningLargest) {
      runningLargest = element;
    }
  }

  return runningLargest;
}

/**
 * Given an array of numbers, return its smallest element.
 */
function smallest(array) {
  let runningSmallest = Number.POSITIVE_INFINITY;

  for(let element of array) {
    if (runningSmallest <= element) {
      runningSmallest = element;
    }
  }

  return runningSmallest;
}
