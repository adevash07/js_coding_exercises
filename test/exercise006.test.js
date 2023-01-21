import {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} from "../challenges/exercise006";

describe("sumMultiples", () => {
  test("returns the sum of any numbers which are a multiple of 3 or 5", () => {
    expect(sumMultiples([1, 3, 5])).toBe(8);
    expect(sumMultiples([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])).toBe(57);
    expect(
      sumMultiples([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    ).toBe(60);
  });

  test("returns 0 if there are no multiples of 3 or 5", () => {
    expect(sumMultiples([1, 2, 4, 7, 11, 13])).toBe(0);
  });

  test("returns 0 if the array is empty", () => {
    expect(sumMultiples([])).toBe(0);
  });
});

describe("isValidDNA", () => {
  test("returns true if the string contains only C, G, T or A", () => {
    expect(isValidDNA("CGTA")).toBe(true);
    expect(isValidDNA("CGTACGTACGTACGTACGTACGTACGTACGTA")).toBe(true);
  });

  test("returns false if the string contains anything other than C, G, T or A", () => {
    expect(isValidDNA("CGTX")).toBe(false);
    expect(isValidDNA("CGTACGTACGTACGTACGTACGTACGTACGTAX")).toBe(false);
  });
});

describe("getComplementaryDNA", () => {
  test("returns the complementary base pairs", () => {
    expect(getComplementaryDNA("ACTG")).toBe("TGAC");
    expect(getComplementaryDNA("CGTA")).toBe("GCAT");
  });

  test("returns an empty string if the string is empty", () => {
    expect(getComplementaryDNA("")).toBe("");
  });
});

describe("isItPrime", () => {
  test("returns true if the number is a prime number", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(11)).toBe(true);
    expect(isItPrime(13)).toBe(true);
  });

  test("returns false if the number is not a prime number", () => {
    expect(isItPrime(4)).toBe(false);
    expect(isItPrime(6)).toBe(false);
    expect(isItPrime(9)).toBe(false);
  });
});

describe("createMatrix", () => {
  test("creates a matrix n x n filled with the given value", () => {
    expect(createMatrix(3, "foo")).toEqual([
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ]);
    expect(createMatrix(2, 1)).toEqual([
      [1, 1],
      [1, 1],
    ]);
  });
});

describe("areWeCovered", () => {
  test("returns true if there are at least 3 staff scheduled for the given day", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Sue", rota: ["Monday", "Tuesday", "Friday"] },
      {
        name: "Paul",
        rota: ["Monday", "Tuesday", "Friday", "Saturday", "Sunday"],
      },
      {
        name: "Mark",
        rota: ["Monday", "Tuesday", "Friday", "Saturday", "Sunday"],
      },
    ];

    expect(areWeCovered(staff, "Monday")).toBe(true);
    expect(areWeCovered(staff, "Tuesday")).toBe(true);
    expect(areWeCovered(staff, "Friday")).toBe(true);
  });

  test("returns false if there are less than 3 staff scheduled for the given day", () => {
    const staff = [
      { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
      { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
      { name: "Sue", rota: ["Monday", "Tuesday", "Friday"] },
      {
        name: "Paul",
        rota: ["Monday", "Tuesday", "Friday", "Saturday", "Sunday"],
      },
    ];

    expect(areWeCovered(staff, "Saturday")).toBe(false);
    expect(areWeCovered(staff, "Sunday")).toBe(false);
    expect(areWeCovered(staff, "Wednesday")).toBe(false);
  });

  test("returns false if there are no staff at all", () => {
    const staff = [];

    expect(areWeCovered(staff, "Monday")).toBe(false);
    expect(areWeCovered(staff, "Tuesday")).toBe(false);
    expect(areWeCovered(staff, "Friday")).toBe(false);
  });
});
