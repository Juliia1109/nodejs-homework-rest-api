const { createHttpException } = require("../../../helpers");
const { UserModel } = require("../../../models");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

const register = async (req, res, next) => {
  const { email, password, subscription } = req.body;
  const avatarURL = gravatar.url(email);
  console.log(avatarURL);
  const passwordHash = await bcrypt.hash(password, 10);
  const userInstance = await UserModel.create({
    email,
    password: passwordHash,
    subscription,
    avatarURL,
  }).catch(() => {
    throw createHttpException(409, "Email in use");
  });

  res.status(201).json({
    email: userInstance.email,
    subscription: userInstance.subscription,
  });
};

module.exports = {
  register,
};
