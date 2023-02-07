const mongoose = require("mongoose");

const contactsSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Set email for contact"],
      trim: true,
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Set phone number for contact"],
      trim: true,
      unique: true,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
    timestamps: {
      updatedAt: false,
      createdAt: false,
    },
  }
);

const ContactModel = mongoose.model("contacts", contactsSchema);

module.exports = {
  ContactModel,
};
