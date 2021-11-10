const {
  validateRequest,
} = require("../../../app/services/validate-request.service");

test("Invalid date", () => {
  const request = {
    date: "17/05/2021",
  };

  expect(validateRequest(request)).toStrictEqual({
    flag: false,
    message: "Invalid Date",
  });
});

test("Valid date", () => {
  const request = {
    date: "2021-05-11",
    balls: [11, 21, 32, 14, 54, 23],
  };

  expect(validateRequest(request)).toStrictEqual({ flag: true, message: "" });
});

test("Invalid balls quantities", () => {
  let request = {
    date: "2021-05-11",
    balls: [12, 32, 43],
  };

  expect(validateRequest(request)).toStrictEqual({
    flag: false,
    message: "Invalid Balls",
  });

  request = {
    date: "2021-05-11",
    balls: [12, 32, 43, 23, 13, 42, 24, 21],
  };

  expect(validateRequest(request)).toStrictEqual({
    flag: false,
    message: "Invalid Balls",
  });
});

test("Invalid white ball", () => {
  const request = {
    date: "2021-05-11",
    balls: [12, 32, 70, 23, 13, 21],
  };

  expect(validateRequest(request)).toStrictEqual({
    flag: false,
    message: "Invalid White Value Ball: Have to be between 1 - 69",
  });
});

test("Invalid red ball", () => {
  const request = {
    date: "2021-05-11",
    balls: [12, 32, 65, 23, 13, 30],
  };

  expect(validateRequest(request)).toStrictEqual({
    flag: false,
    message: "Invalid Red Ball",
  });
});
