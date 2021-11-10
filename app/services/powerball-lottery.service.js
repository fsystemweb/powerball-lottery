const request = require("request");
const { API_POWERBALL_LOTTERY } = require("../constants/constants");

const options = { json: true };

function getLotteryNumbers() {
  return new Promise((resolve, reject) => {
    let req_get = request(
      API_POWERBALL_LOTTERY,
      options,
      (error, res, body) => {
        if (error) {
          reject(error);
        }

        if (!error && res.statusCode == 200) {
          resolve(body);
        }
      }
    );

    req_get.end();
  });
}

function getDateNumber(date) {
  //date.find(winNumber => if(draw_date.match(date+"T00:00:00.000")))
}

module.exports = getLotteryNumbers;
