const { createHttpException } = require("../../../helpers");
const { UserModel } = require("../../../models/user.model");
const { sendVerificationLetter } = require("../../../services/email");

const verifyUsers = async (req, res, next) => {
  try {
    const { email } = req.body;

    const userInstance = await UserModel.findOne({ email });
    if (!userInstance) {
      throw createHttpException(400, "Missing required field email");
    }
    if (userInstance.verify === true) {
      throw createHttpException(400, "Verification has already been passed");
    }

    await sendVerificationLetter(email, userInstance.verificationToken);

    res.json({ message: "Verification email sent" });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  verifyUsers,
};
