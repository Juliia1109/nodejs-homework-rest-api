const { UserModel } = require("../../../models/user.model");
const { createHttpException } = require("../../../helpers");

const updateSubscriptionUser = async (req, res, next) => {
  const { _id } = req.user;
  const { subscription } = req.body;
  const result = await UserModel.findByIdAndUpdate(
    _id,
    { subscription },
    {
      new: true,
    }
  );
  if (!result) {
    throw createHttpException(401, "Not authorized");
  }
  res.json(result);
};

module.exports = {
  updateSubscriptionUser,
};
