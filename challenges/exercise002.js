export function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  // Your code here!
  return sandwich.fillings;
}

export function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  //return true if the person is from Manchester
  return person.city === "Manchester";
}

export function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  //return the number of buses required to transport the people
  return Math.ceil(people / 40);
}

export function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  //return the number of sheep in the array
  let count = 0;
  arr.forEach((item) => {
    if (item === "sheep") {
      count++;
    }
  });
  return count;
}

export function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  //return true if the person lives in Manchester and has a postcode beginning with M
  if (person.address === undefined) return false;
  return (
    person.address.city === "Manchester" && person.address.postCode[0] === "M"
  );
}
