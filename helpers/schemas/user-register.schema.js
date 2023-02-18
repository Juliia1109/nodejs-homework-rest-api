const Joi = require("joi");

const userRegisterSchema = Joi.object({
  email: Joi.string().email().required(),

  password: Joi.string().min(8).max(30).required(),

  subscription: Joi.string(),
});

module.exports = {
  userRegisterSchema,
};
