const { ContactModel } = require("../../models/contacts.model");
const { createHttpException } = require("../../helpers");

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const { _id } = req.user;
  const result = await ContactModel.findByIdAndUpdate(
    {
      _id: contactId,
      owner: _id,
    },
    { favorite },
    {
      new: true,
    }
  );
  if (!result) {
    throw createHttpException(400, "Missing field favorite");
  }
  res.json(result);
};

module.exports = {
  updateStatusContact,
};
