module.exports = (err, _req, res, next) => {
  const { name, message } = err;

  switch (name) {
    case 'ValidationError':
      res.status(400).json({ message });
      break;
    
    case 'BadRequests':
      res.status(400).json({ message });
      break;

    case 'NotFound':
      res.status(404).json({ message });
      break;
      
    default:
      res.status(500).json({ message });
      break;
  }
};
