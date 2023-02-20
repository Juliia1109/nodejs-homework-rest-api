const { register } = require("./register");
const { login } = require("./login");
const { logout } = require("./logout");
const { current } = require("./current");
const { updateSubscriptionUser } = require("./update-subscription.user ");
const { updateAvatarUser } = require("./update-avatar.user");

module.exports = {
  register,
  login,
  logout,
  current,
  updateSubscriptionUser,
  updateAvatarUser,
};
