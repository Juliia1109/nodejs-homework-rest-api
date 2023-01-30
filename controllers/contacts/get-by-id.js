const contactsRepository = require("../../models/contacts/contacts");

const getById = async (req, res, next) => {
  const { contactId } = req.params;
  const contact = await contactsRepository.getContactById(contactId);
  res.json(contact);
};

module.exports = {
  getById,
};
