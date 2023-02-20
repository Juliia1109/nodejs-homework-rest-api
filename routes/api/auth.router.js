const express = require("express");
const authController = require("../../controllers/contacts/auth");
const { controllerExceptionWrapper } = require("../../helpers");
const { validateBody, authUser } = require("../../middlewares");
const {
  userRegisterSchema,
  userLoginSchema,
  userSubscriptionSchema,
} = require("../../helpers/schemas");
const {
  upload,
} = require("../../controllers/contacts/auth/update-avatar.user");
const router = express.Router();

router
  .post(
    "/register",
    validateBody(userRegisterSchema),
    controllerExceptionWrapper(authController.register)
  )
  .post(
    "/login",
    validateBody(userLoginSchema),
    controllerExceptionWrapper(authController.login)
  )
  .post("/logout", authUser, controllerExceptionWrapper(authController.logout))
  .get("/current", authUser, controllerExceptionWrapper(authController.current))
  .patch(
    "/",
    authUser,
    validateBody(userSubscriptionSchema),
    controllerExceptionWrapper(authController.updateSubscriptionUser)
  )
  .patch(
    "/users/avatars",
    authUser,
    upload.single("avatar"),
    controllerExceptionWrapper(authController.updateAvatarUser)
  );

module.exports = router;
