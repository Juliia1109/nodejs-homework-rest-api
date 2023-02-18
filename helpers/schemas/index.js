const { addContactSchema } = require("./add-contact.schema");
const { updateFavoriteContactSchema } = require("./add-contact.schema");
const { userRegisterSchema } = require("./user-register.schema");
const { userLoginSchema } = require("./user-login.schema");
const { userSubscriptionSchema } = require("./user-subscription.schema");

module.exports = {
  addContactSchema,
  updateFavoriteContactSchema,
  userRegisterSchema,
  userLoginSchema,
  userSubscriptionSchema,
};
