const contactsRepository = require("../../models/contacts/contacts");

const add = async (req, res, next) => {
  const { name, email, phone } = req.body;
  const result = await contactsRepository.addContact({
    name,
    email,
    phone,
  });
  res.json(result);
};

module.exports = {
  add,
};
