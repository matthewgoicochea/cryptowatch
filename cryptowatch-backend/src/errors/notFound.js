function notFound(req, res, next) {
  console.log(req);
  next({ status: 404, message: `Path Not found: ${req.originalUrl}` });
}

module.exports = notFound;
