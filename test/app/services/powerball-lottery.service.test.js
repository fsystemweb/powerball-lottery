const { getPrize } = require("../../../app/services/powerball-lottery.service");

test("test Grand prize", async () => {
  const request = {
    date: "2021-10-04",
    balls: [12, 22, 54, 66, 69, 15],
  };
  const result = await getPrize(request);
  expect(result).toStrictEqual("Grand Prize");
});

test("test prize 1000000", async () => {
  const request = {
    date: "2021-10-04",
    balls: [12, 22, 54, 66, 69, 16],
  };
  const result = await getPrize(request);
  expect(result).toStrictEqual("50000");
});

test("test prize 50000", async () => {
  const request = {
    date: "2021-10-04",
    balls: [12, 23, 54, 66, 69, 15],
  };
  const result = await getPrize(request);
  expect(result).toStrictEqual("50000");
});

test("test prize 4", async () => {
  const request = {
    date: "2021-10-04",
    balls: [11, 23, 55, 61, 67, 15],
  };
  const result = await getPrize(request);
  expect(result).toStrictEqual("4");
});

test("test prize 0", async () => {
  const request = {
    date: "2021-10-03",
    balls: [12, 23, 54, 66, 69, 15],
  };
  const result = await getPrize(request);
  expect(result).toStrictEqual(0);
});
