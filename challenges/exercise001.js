// Note: Be sure to check out all the exercises corresponding .md files (in docs)! 📘 👍

export function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  //capitalize the first letter of the word
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return `${firstName.charAt(0)}.${lastName.charAt(0)}`;
}

export function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");

  return Math.round(originalPrice * (1 + vatRate / 100) * 100) / 100;
}

export function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  return Math.round(originalPrice * (1 - reduction / 100) * 100) / 100;
}

export function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");

  if (str.length % 2 == 0) {
    return str.charAt(str.length / 2 - 1) + str.charAt(str.length / 2);
  } else {
    return str.charAt(Math.floor(str.length / 2));
  }
}

export function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");

  return word.split("").reverse().join("");
}

export function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");

  let reversedWords = [];
  for (let i = 0; i < words.length; i++) {
    reversedWords.push(reverseWord(words[i]));
  }
  return reversedWords;
}

export function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");

  let count = users.filter((user) => user.type === "Linux").length;
  return count;
}

export function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  let sum = 0;
  for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
  }
  return Math.round((sum / scores.length) * 100) / 100;
}

export function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  if (n % 3 == 0 && n % 5 == 0) {
    return "fizzbuzz";
  }
  if (n % 3 == 0) {
    return "fizz";
  }
  if (n % 5 == 0) {
    return "buzz";
  }
  return n;
}
