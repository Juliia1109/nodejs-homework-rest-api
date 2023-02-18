const { ContactModel } = require("../../models/contacts.model");
const { createHttpException } = require("../../helpers");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  const contact = await ContactModel.findById({
    _id: contactId,
    owner: _id,
  });
  if (!contact) {
    throw createHttpException(404, "The contact is not found");
  }
  res.json(contact);
};

module.exports = {
  getById,
};
