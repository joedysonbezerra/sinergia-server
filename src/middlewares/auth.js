const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ error: 'NOT_AUTHENTICATED' });
  }

  const parts = authHeader.split(' ');

  if (!parts.lenght === 2) {
    return res.status(401).json({ error: 'INVALID_TOKEN_FORMAT' });
  }

  const [scheme, token] = parts;

  if (scheme !== 'Bearer') {
    return res.status(401).json({ error: 'INVALID_TOKEN_FORMAT' });
  }

  try {
    const decoded = await promisify(jwt.verify)(
      token,
      '760b0a4a76c013510d37f4f4a0d837de'
    );

    req.userId = decoded.id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: 'INVALID_TOKEN' });
  }
};
