const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
  async signIn(req, res, next) {
    try {
      const { username, password } = req.body;

      const user = await User.findOne({ username });

      if (!user) {
        return res.status(400).json({ error: 'USER_NOT_FOUND' });
      }

      if (!(await user.compareHash(password))) {
        return res.status(400).json({ error: 'INVALID_PASSWORD' });
      }

      const token = user.generateToken();

      return res.json({ user, token });
    } catch (err) {
      return next(err);
    }
  },

  async signUp(req, res, next) {
    try {
      const { username } = req.body;

      if (await User.findOne({ username })) {
        return res.status(400).json({ error: 'USERNAME_ALREADY_EXISTS' });
      }

      const user = await User.create(req.body);
      const token = user.generateToken();

      return res.json({ user, token });
    } catch (err) {
      return next(err);
    }
  },
};
