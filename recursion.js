/** product: calculate the product of an array of numbers. */

function product(nums, i = 0, total = 1) {
  if (i === nums.length) return total;
  total = total * nums[i];
  return product(nums, i + 1, total);

}

/** longest: return the length of the longest word in an array of words. */

function longest(words, total = 0) {
  for (let word of words) {
    if (word.length > total) total = word.length;
  }
  return total;
}

/** everyOther: return a string with every other letter. */

function everyOther(str, i = 0, newString = '') {
  if (i === str.length) return newString;
  if (i % 2 === 0) newString += str[i];
  return everyOther(str, i + 1, newString);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, newString = '', i = str.length - 1) {
  if (i < 0) return str == newString;
  newString += str[i];
  return isPalindrome(str, newString, i - 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, i = 0) {
  if (i === arr.length) return -1;
  if (arr[i] === val) {
    return i;
  } else {
    return findIndex(arr, val, i + 1);
  }


}

/** revString: return a copy of a string, but in reverse. */

function revString(str, i = str.length - 1, newString = '') {
  if (i < 0) return newString;
  newString += str[i];
  return revString(str, i - 1, newString);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let stringArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") stringArr.push(obj[key]);
    if (typeof obj[key] === "object") stringArr.push(...gatherStrings(obj[key]));
  }
  return stringArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  if (left > right) return -1;
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === val) return middle;
  if (arr[middle] > val) return binarySearch(arr, val, left, middle - 1);
  return binarySearch(arr, val, middle + 1, right);
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
