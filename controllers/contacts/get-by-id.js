const { ContactModel } = require("../../models/contacts.model");
const { createHttpException } = require("../../helpers");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await ContactModel.findById(contactId);
  if (!contact) {
    throw createHttpException(404, "The contact is not found");
  }
  res.json(contact);
};

module.exports = {
  getById,
};
