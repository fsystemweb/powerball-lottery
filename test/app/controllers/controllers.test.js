const { root } = require("../../../app/controllers/root");
const { notFound } = require("../../../app/controllers/errors");

test("Not Found Route", () => {
  expect(notFound).toThrow("Route Not Found");
});
