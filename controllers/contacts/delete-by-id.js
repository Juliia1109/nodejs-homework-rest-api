const contactsRepository = require("../../models/contacts/contacts");

const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  await contactsRepository.removeContact(contactId);
  res.status(204).send();
};

module.exports = {
  deleteById,
};
