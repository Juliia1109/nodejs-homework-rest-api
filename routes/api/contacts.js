const express = require("express");
const contactsController = require("../../controllers/contacts");
const { controllerExceptionWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const { addContactSchema } = require("../../helpers/schemas");
const { updateFavoriteContactSchema } = require("../../helpers/schemas");
const { authUser } = require("../../middlewares/auth-user.middleware");

const router = express.Router();

router
  .get("/", authUser, controllerExceptionWrapper(contactsController.getAll))
  .get(
    "/:contactId",
    authUser,
    controllerExceptionWrapper(contactsController.getById)
  )
  .post(
    "/",
    authUser,
    validateBody(addContactSchema),
    controllerExceptionWrapper(contactsController.add)
  )
  .delete(
    "/:contactId",
    authUser,
    controllerExceptionWrapper(contactsController.deleteById)
  )
  .put(
    "/:contactId",
    authUser,
    validateBody(addContactSchema),
    controllerExceptionWrapper(contactsController.updateById)
  )
  .patch(
    "/:contactId/favorite",
    authUser,
    validateBody(updateFavoriteContactSchema),
    controllerExceptionWrapper(contactsController.updateStatusContact)
  );

module.exports = router;
