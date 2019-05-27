const mongoose = require("mongoose");
const User = mongoose.model("User");

module.exports = {
  async signin(req, res, next) {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ error: "Usuário não existe" });
      }

      if (!(await user.compareHash(password))) {
        return res.status(400).json({ error: "Senha inválida" });
      }

      return res.json({
        user,
        token: user.generateToken()
      });
    } catch (err) {
      return next(err);
    }
  },
  async signup(req, res, next) {
    try {
      const { username } = req.body;
      if (await User.findOne({ username })) {
        return res
          .status(400)
          .json({ error: "Username já existe, Escolha outro" });
      }

      const user = await User.create(req.body);

      return res.json({
        user,
        token: user.generateToken()
      });
    } catch (err) {
      return next(err);
    }
  }
};
