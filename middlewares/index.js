const { validateBody } = require("./validate-body.middleware");
const { globalErrorHandler } = require("./global-error-handler.middleware");

module.exports = {
  validateBody,
  globalErrorHandler,
};
