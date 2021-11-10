const { getPrize } = require("../../../app/services/powerball-lottery.service");

test("return Grand Prize", () => {
  const request = {
    date: "17/05/2021",
  };

  expect(validateRequest(request)).toStrictEqual({
    flag: false,
    message: "Invalid Date",
  });
});
