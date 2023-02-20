const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      index: true,
    },
    subscription: {
      type: String,
      enum: ["starter", "pro", "business"],
      default: "starter",
    },
    token: String,
    avatarURL: String,
  },
  {
    versionKey: false,
    timestamps: {
      updatedAt: false,
      createdAt: false,
    },
  }
);

userSchema.index({ email: 1 });

const UserModel = mongoose.model("users", userSchema);

module.exports = {
  UserModel,
};
