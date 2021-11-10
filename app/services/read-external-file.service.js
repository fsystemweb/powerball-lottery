const request = require("request");
const { API_POWERBALL_LOTTERY } = require("../constants/constants");
const options = { json: true };

function getWinNumbers() {
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

module.exports = { getWinNumbers };
