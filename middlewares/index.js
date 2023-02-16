const { validateBody } = require("./validate-body.middleware");
const { globalErrorHandler } = require("./global-error-handler.middleware");
const { authUser } = require("./auth-user.middleware");

module.exports = {
  validateBody,
  globalErrorHandler,
  authUser,
};
