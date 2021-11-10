const {
  MAX_RED_VALUE_BALL,
  MAX_WHITE_VALUE_BALL,
  MIN_VALUE_BALL,
} = require("../constants/constants");

function validateRequest(request) {
  const returnObject = {
    flag: false,
    message: "",
  };

  if (!request) {
    returnObject.message = "null request";
    return returnObject;
  }

  if (!validateDate(request, returnObject)) return returnObject;

  if (!validateBalls(request, returnObject)) return returnObject;

  return returnObject;
}

function validateDate(request, returnObject) {
  returnObject.message = "Invalid Date";
  if (!request.date) {
    return false;
  }

  if (/^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/.test(request.date)) {
    returnObject.message = "";
    return true;
  }

  return false;
}

function validateBalls(request, returnObject) {
  returnObject.message = "Invalid Balls";

  if (!request.balls) return false;

  if (!Array.isArray(request.balls)) return false;

  if (request.balls.length != 6) return false;

  if (
    !request.balls.every(function (element) {
      return typeof element === "number";
    })
  )
    return false;

  if (!validateBallsValue(request.balls)) {
    returnObject.message =
      "Invalid White Value Ball: Have to be between 1 - 69";
    return false;
  }

  if (!validateLastBall(request.balls[5])) {
    returnObject.message = "Invalid Red Ball";
    return false;
  }

  if (validateRepeatValues(request.balls)) {
    returnObject.message = "Duplicate values";
    return false;
  }

  returnObject.message = "";
  returnObject.flag = true;
  return true;
}

function validateLastBall(lastBall) {
  if (lastBall > MAX_RED_VALUE_BALL || lastBall < MIN_VALUE_BALL) return false;
  return true;
}

function validateBallsValue(balls) {
  let index = 0;
  let flag = true;
  let flagError = true;
  while (flag) {
    if (balls[index] > MAX_WHITE_VALUE_BALL || balls[index] < MIN_VALUE_BALL) {
      flagError = false;
      flag = false;
    }

    if (index == 4) {
      flag = false;
    }
    index++;
  }

  return flagError;
}

function validateRepeatValues(balls) {
  let copyBalls = Array.from(balls);

  copyBalls.pop();
  return copyBalls.some(function (v, i) {
    return copyBalls.indexOf(v, i + 1) > -1;
  });
}

module.exports = { validateRequest };
