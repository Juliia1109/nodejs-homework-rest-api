const { getAll } = require("./get-all");
const { getById } = require("./get-by-id");
const { add } = require("./add");
const { updateById } = require("./update-by-id");
const { deleteById } = require("./delete-by-id");
const { updateStatusContact } = require("./update-status-contact");

module.exports = {
  getAll,
  getById,
  add,
  updateById,
  deleteById,
  updateStatusContact,
};
