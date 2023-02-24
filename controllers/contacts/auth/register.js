const { createHttpException } = require("../../../helpers");
const { UserModel } = require("../../../models");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { sendVerificationLetter } = require("../../../services/email");

const register = async (req, res, next) => {
  const { email, password, subscription } = req.body;
  const avatarURL = gravatar.url(email);

  const passwordHash = await bcrypt.hash(password, 10);
  const verificationToken = nanoid(30);
  const userInstance = await UserModel.create({
    email,
    password: passwordHash,
    subscription,
    avatarURL,
    verificationToken,
  }).catch(() => {
    throw createHttpException(409, "Email in use");
  });
  await sendVerificationLetter(email, verificationToken);
  res.status(201).json({
    email: userInstance.email,
    subscription: userInstance.subscription,
  });
};

module.exports = {
  register,
};
