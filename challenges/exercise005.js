export const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");

  let index = nums.indexOf(n);
  if (index === -1) return null;
  if (index === nums.length - 1) return null;
  return nums[index + 1];
};

export const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");

  let obj = { 1: 0, 0: 0 };
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 1) {
      obj[1]++;
    } else if (str[i] == 0) {
      obj[0]++;
    }
  }
  return obj;
};

export const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");

  let str = n.toString();
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return parseInt(rev);
};

export const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");

  return arrs.flat().reduce((a, b) => a + b, 0);
};

export const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");

  if (arr.length < 2) return arr;
  let first = arr[0];
  let last = arr[arr.length - 1];
  arr[0] = last;
  arr[arr.length - 1] = first;
  return arr;
};

export const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  let found = false;
  for (let key in haystack) {
    if (
      haystack[key].toString().toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      found = true;
    }
  }
  return found;
};

export const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");

  let obj = {};
  let words = str
    .replace(/[^\w\s]/gi, "")
    .toLowerCase()
    .split(" ");
  words.forEach((word) => {
    if (obj[word] === undefined) {
      obj[word] = 1;
    } else {
      obj[word]++;
    }
  });
  return obj;
};
