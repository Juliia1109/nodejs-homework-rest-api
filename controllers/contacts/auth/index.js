const { register } = require("./register");
const { login } = require("./login");
const { logout } = require("./logout");
const { current } = require("./current");
const { updateSubscriptionUser } = require("./update-subscription.user ");
const { updateAvatarUser } = require("./update-avatar.user");
const { verifyEmail } = require("./verify-email");
const { verifyUsers } = require("./verify-users");

module.exports = {
  register,
  login,
  logout,
  current,
  updateSubscriptionUser,
  updateAvatarUser,
  verifyEmail,
  verifyUsers,
};
