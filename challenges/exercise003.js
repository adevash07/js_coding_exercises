export function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");

  let squares = [];
  nums.forEach((num) => {
    squares.push(num * num);
  });
  return squares;
}

export function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  let camelCase = "";
  words.forEach((word, index) => {
    if (index === 0) {
      camelCase += word;
    } else {
      camelCase += word[0].toUpperCase() + word.slice(1);
    }
  });
  return camelCase;
}

export function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");

  let total = 0;
  people.forEach((person) => {
    total += person.subjects.length;
  });
  return total;
}

export function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let found = false;
  menu.forEach((item) => {
    if (item.ingredients.includes(ingredient)) {
      found = true;
    }
  });
  return found;
}

export function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  let duplicates = [];
  arr1.forEach((num) => {
    if (arr2.includes(num) && !duplicates.includes(num)) {
      duplicates.push(num);
    }
  });
  return duplicates.sort();
}
