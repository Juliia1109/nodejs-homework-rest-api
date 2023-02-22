const { UserModel } = require("../../../models/user.model");
const { createHttpException } = require("../../../helpers");
const path = require("path");
const Jimp = require("jimp");
const fsp = require("fs/promises");
const multer = require("multer");

const tmpDirPath = path.join(__dirname, "../../../", "tmp");
const avatarDirPath = path.join(__dirname, "../../../", "public", "avatars");

const multerConfig = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, tmpDirPath);
  },
  filename: function (req, file, cb) {
    const filename = file.originalname;
    cb(null, filename);
  },
});

const upload = multer({ storage: multerConfig });

const updateAvatarUser = async (req, res, next) => {
  try {
    const { _id } = req.user;

    Jimp.read(req.file.path)
      .then((image) => {
        return image.resize(250, 250).write(req.file.path);
      })
      .then(() => {
        next();
      })
      .catch((error) => {
        next(error);
      });
    const avatarPath = `${avatarDirPath}/${req.file.filename}`;
    fsp.rename(req.file.path, avatarPath);
    const filePath = path.join("avatars", req.file.filename);

    await UserModel.findByIdAndUpdate(_id, { avatarURL: filePath });
    res.json({ avatarURL: filePath });
  } catch (error) {
    throw createHttpException(401, "Not authorized");
  }
};

module.exports = {
  updateAvatarUser,
  upload,
};
