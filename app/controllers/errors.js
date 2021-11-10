// 404 Handler
function notFound() {
  const err = new Error("Route Not Found");
  err.status = 404;
  throw err;
}

// 400 Handler
function badRequest(message) {
  const messageLog = "Bad Request: " + message;
  console.error(messageLog);
  const err = new Error(messageLog);
  err.status = 400;
  err.message = messageLog;
  return err;
}

// 503 Handler
function serviceUnavailable() {
  console.error("Service Unavailable");
  const err = new Error("Service Unavailable");
  err.status = 503;
  throw err;
}

module.exports = {
  notFound,
  serviceUnavailable,
  badRequest,
};
