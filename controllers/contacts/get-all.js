const contactsRepository = require("../../models/contacts/contacts");
const getAll = async (req, res, next) => {
  const result = await contactsRepository.listContacts();
  res.json(result);
};

module.exports = {
  getAll,
};
