const { getPrize } = require("../../../app/services/powerball-lottery.service");
const {
  getWinNumbers,
} = require("../../../app/services/read-external-file.service");

const MOCK_WIN_NUMBERS = [
  {
    draw_date: "2021-10-04T00:00:00.000",
    winning_numbers: "12 22 54 66 69 15",
    multiplier: "2",
  },
  {
    draw_date: "2021-10-02T00:00:00.000",
    winning_numbers: "28 38 42 47 52 01",
    multiplier: "2",
  },
];

test("return Grand Prize", () => {
  const request = {
    date: "2021-10-04",
    balls: [12, 22, 54, 66, 69, 15],
  };
  const addMock = jest.spyOn(getWinNumbers, "getWinNumbers");

  addMock.mockImplementation(() => MOCK_WIN_NUMBERS);

  expect(getPrize(request)).toStrictEqual("Grand Prize");
});
