export function loggerMiddleware(req, res, next) {
  console.log(`${req.method}: ${req.originalUrl}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log(`Body: ${JSON.stringify(req.body)}`);
  }
  console.log("---------------");
  next();
}
