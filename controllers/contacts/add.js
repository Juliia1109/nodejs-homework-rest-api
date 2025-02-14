const { ContactModel } = require("../../models/contacts.model");

const add = async (req, res, next) => {
  const { _id } = req.user;
  const { name, email, phone } = req.body;

  const result = await ContactModel.create({
    name,
    email,
    phone,
    owner: _id,
  });
  res.status(201).json(result);
};

module.exports = {
  add,
};
