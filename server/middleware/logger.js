
module.exports = (req, res, next) => {
  console.log(`${new Date().toLocaleString()} | ${req.method} ${req.url} | Status: ${res.statusCode}`);
  next();
}
