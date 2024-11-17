module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
      return res.status(403).json({ message: 'No authorization token provided' });
    }
    // Here, you can add further checks like verifying JWT if needed.
    next();
  };
  