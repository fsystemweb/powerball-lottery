const { BLANK_HOUR } = require("../constants/constants");
const { getWinNumbers } = require("./read-external-file.service");

async function getPrize(requestParemeter) {
  let winNumbersArray = [];
  let prize;
  await getWinNumbers()
    .then((winNumbers) => {
      winNumbersArray = winNumbers;
    })
    .catch((err) => {
      return serviceUnavailable();
    });

  const winNumber = getWinNumber(winNumbersArray, requestParemeter.date);
  if (!winNumber) {
    prize = 0;
    return prize;
  }
  const winningNumbers = convertWinNumbersToArray(winNumber.winning_numbers);

  prize = searchPrize(winningNumbers, requestParemeter.balls);
  return prize;
}

function getWinNumber(array, date) {
  return array.find((element) => element.draw_date.match(date + BLANK_HOUR));
}

function convertWinNumbersToArray(winningNumbers) {
  return winningNumbers.split(" ");
}

function searchPrize(winNumber, balls) {
  const redBall = balls.pop();
  const redBallWin = winNumber.pop();

  let whiteCoincidences = getWhiteCoincidences(winNumber, balls);

  if (!whiteCoincidences) return 0;
  whiteCoincidences = whiteCoincidences.toString();

  if (redBall == redBallWin) whiteCoincidences += "R";

  return getPrizeValue(whiteCoincidences);
}

function getWhiteCoincidences(winNumbers, balls) {
  let equals = 0;
  for (let i = 0; i < winNumbers.length; i++) {
    for (let j = 0; j < winNumbers.length; j++) {
      if (winNumbers[i] == balls[j]) equals++;
    }
  }

  return equals;
}

function getPrizeValue(coincidences) {
  switch (coincidences) {
    case "R":
      return 4;
      break;
    case "1R":
      return 4;
      break;

    case "2R":
      return 7;
      break;

    case "3":
      return 7;
      break;

    case "3R":
      return 100;
      break;

    case "4":
      return 100;
      break;

    case "4R":
      return 50000;
      break;

    case "5":
      return 1000000;
      break;

    case "5R":
      return "Grand Prize";
      break;

    default:
      return 0;
      break;
  }
}

module.exports = { getPrize };
