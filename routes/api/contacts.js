const express = require("express");
const contactsController = require("../../controllers/contacts");
const { controllerExceptionWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const { addContactSchema } = require("../../helpers/schemas");
const { updateFavoriteContactSchema } = require("../../helpers/schemas");

const router = express.Router();

router
  .get("/", controllerExceptionWrapper(contactsController.getAll))
  .get("/:contactId", controllerExceptionWrapper(contactsController.getById))
  .post(
    "/",
    validateBody(addContactSchema),
    controllerExceptionWrapper(contactsController.add)
  )
  .delete(
    "/:contactId",
    controllerExceptionWrapper(contactsController.deleteById)
  )
  .put(
    "/:contactId",
    validateBody(addContactSchema),
    controllerExceptionWrapper(contactsController.updateById)
  )
  .patch(
    "/:contactId/favorite",
    validateBody(updateFavoriteContactSchema),
    controllerExceptionWrapper(contactsController.updateStatusContact)
  );

module.exports = router;
