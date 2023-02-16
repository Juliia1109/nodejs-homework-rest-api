const { ContactModel } = require("../../models/contacts.model");

const getAll = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20, favorite } = req.query;
  const skip = (page - 1) * limit;
  const result = await ContactModel.find(
    favorite ? { owner, favorite } : { owner },
    "-createdAt -updatedAt",
    { skip, limit }
  ).populate("owner", "email subscription");
  res.json(result);
};

module.exports = {
  getAll,
};
