module.exports = (err, _req, _next, res) => {
  const { name, message } = err;

  switch (name) {
    case 'UnauthorizedError':
      res.status(401).json({ message });
      break;
    default:
      res.status(500).json({ message });
      break;
  }
};
