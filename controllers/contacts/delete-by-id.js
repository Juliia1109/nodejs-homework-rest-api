const { ContactModel } = require("../../models/contacts.model");

const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  await ContactModel.findByIdAndDelete(contactId);
  res.status(204).send();
};

module.exports = {
  deleteById,
};
