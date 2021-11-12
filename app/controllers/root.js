const { getPrize } = require("../services/powerball-lottery.service");
const { validateRequest } = require("../services/validate-request.service");
const { serviceUnavailable, badRequest } = require("./errors");

async function checkPrize(req, res) {
  let response = validateRequest(req.body);

  if (!response.flag) {
    let errorResponse = badRequest(response.message);

    return res
      .status(errorResponse.status)
      .json({ message: errorResponse.message });
  } else {
    response = await getPrize(req.body);
  }

  res.json({ response });
}

module.exports = {
  checkPrize,
};
