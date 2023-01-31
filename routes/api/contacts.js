const express = require("express");
const contactsController = require("../../controllers/contacts");
const { controllerExceptionWrapper } = require("../../helpers");
const { validateBody } = require("../../middlewares");
const { addContactSchema } = require("../../helpers/schemas");

const router = express.Router();

router.get("/", controllerExceptionWrapper(contactsController.getAll));
router.get(
  "/:contactId",
  controllerExceptionWrapper(contactsController.getById)
);
router.post(
  "/",
  validateBody(addContactSchema),
  controllerExceptionWrapper(contactsController.add)
);
router.delete(
  "/:contactId",
  controllerExceptionWrapper(contactsController.deleteById)
);
router.put(
  "/:contactId",
  validateBody(addContactSchema),
  controllerExceptionWrapper(contactsController.updateById)
);

module.exports = router;
