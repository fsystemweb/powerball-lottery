// Hello World on '/'
function root(req, res) {
  res.json({ message: "Hello World" });
}

function checkPrize(req, res) {
  console.log(req);
  res.json({ message: "Hello World2" });
}

module.exports = {
  root,
  checkPrize
};
