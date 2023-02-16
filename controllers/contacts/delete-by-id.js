const { ContactModel } = require("../../models/contacts.model");

const deleteById = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  await ContactModel.findByIdAndDelete({ _id: contactId, owner: _id });
  res.status(204).send();
};

module.exports = {
  deleteById,
};
