const { ContactModel } = require("../../models/contacts.model");

const updateById = async (req, res, next) => {
  const { contactId } = req.params;
  const { name, email, phone } = req.body;
  const result = await ContactModel.findByIdAndUpdate(
    contactId,
    {
      name,
      email,
      phone,
    },
    { new: true }
  );
  res.json(result);
};

module.exports = {
  updateById,
};
