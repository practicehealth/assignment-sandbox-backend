export function notFoundMiddleware(req, res, next) {
  const message = `${req.method}: ${req.originalUrl} is not a valid route`;
  console.log(message, "\n---------------");
  res.status(404).json({ message: message });
}
