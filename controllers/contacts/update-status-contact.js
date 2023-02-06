const { ContactModel } = require("../../models/contacts.model");
const { createHttpException } = require("../../helpers");

const updateStatusContact = async (req, res, next) => {
  const { contactId } = req.params;
  const { favorite } = req.body;
  const result = await ContactModel.findByIdAndUpdate(
    contactId,
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
