const { ContactModel } = require("../../models/contacts.model");

const updateById = async (req, res, next) => {
  const { contactId } = req.params;
  const { _id } = req.user;
  const { name, email, phone } = req.body;
  const result = await ContactModel.findByIdAndUpdate(
    {
      _id: contactId,
      owner: _id,
    },
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
