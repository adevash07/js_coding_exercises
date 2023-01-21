import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} from "../challenges/exercise007";

describe("sumDigits", () => {
  test("returns the sum of all its digits", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(99999)).toBe(45);
    expect(sumDigits(1111)).toBe(4);
  });

  test("returns 0 if the number is 0", () => {
    expect(sumDigits(0)).toBe(0);
  });
});

describe("createRange", () => {
  test("returns an array of numbers from start to end", () => {
    expect(createRange(2, 5)).toEqual([2, 3, 4, 5]);
    expect(createRange(4, 2)).toEqual([4, 3, 2]);
  });

  test("return a one item array if start and end are the same", () => {
    expect(createRange(4, 4)).toEqual([4]);
  });
});

describe("getScreentimeAlertList", () => {
  test("returns an array of usernames of users who have used more than 100 minutes of screentime for a given date", () => {
    const date = "2019-05-02";
    const data = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: {
              twitter: 34,
              instagram: 22,
              facebook: 40,
            },
          },
          {
            date: "2019-05-02",
            usage: {
              twitter: 56,
              instagram: 40,
              facebook: 31,
            },
          },
          {
            date: "2019-05-03",
            usage: {
              twitter: 12,
              instagram: 15,
              facebook: 19,
            },
          },
          {
            date: "2019-05-04",
            usage: {
              twitter: 10,
              instagram: 56,
              facebook: 61,
            },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-05-01",
            usage: {
              mapMyRun: 0,
              whatsApp: 0,
              facebook: 0,
              safari: 10,
              other: 0,
            },
          },
          {
            date: "2019-05-02",
            usage: {
              mapMyRun: 0,
              whatsApp: 0,
              facebook: 0,
              safari: 16,
              other: 23,
            },
          },
          {
            date: "2019-05-03",
            usage: {
              mapMyRun: 0,
              whatsApp: 0,
              facebook: 0,
              safari: 33,
              other: 4,
            },
          },
          {
            date: "2019-05-04",
            usage: {
              mapMyRun: 0,
              whatsApp: 0,
              facebook: 0,
              safari: 46,
              other: 46,
            },
          },
        ],
      },
    ];

    expect(getScreentimeAlertList(data, date)).toEqual(["beth_1234"]);
  });
});

describe("hexToRGB", () => {
  test("converts a hex code to an RGB colour", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255, 17, 51)");
    expect(hexToRGB("#00ff00")).toBe("rgb(0, 255, 0)");
  });
});

describe("findWinner", () => {
  test("returns the name of the winner", () => {
    const board = [
      ["X", null, "O"],
      ["X", null, "O"],
      ["X", null, null],
    ];

    expect(findWinner(board)).toBe("X");
  });

  test("returns null if there is no winner", () => {
    const board = [
      ["X", null, "O"],
      ["X", "O", "O"],
      [null, null, null],
    ];

    expect(findWinner(board)).toBe(null);
  });
});
