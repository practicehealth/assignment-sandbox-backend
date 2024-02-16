export function loggerMiddleware(req, res, next) {
  console.log(`Method: ${req.method}`);
  console.log(`Route: ${req.originalUrl}`);
  if (req.body && Object.keys(req.body).length > 0) {
    console.log(`Body: ${JSON.stringify(req.body)}`);
  }
  next();
}
