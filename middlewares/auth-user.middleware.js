const { createHttpException } = require("../helpers");
const jsonwebtoken = require("jsonwebtoken");

const { UserModel } = require("../models/user.model");

const { JWT_SECRET: jwtSecret } = process.env;

const authUser = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    console.log(authorization);

    if (!authorization) {
      throw createHttpException(401, "Not authorized");
    }

    const [bearer, token] = authorization.split(" ");
    if (bearer !== "Bearer" || !token) {
      throw createHttpException(401, "Not authorized");
    }

    try {
      const { userId } = jsonwebtoken.verify(token, jwtSecret);
      const userInstance = await UserModel.findById(userId);

      if (!userInstance) {
        throw createHttpException(401, "Not authorized");
      }

      req.user = userInstance;

      next();
    } catch (error) {
      throw createHttpException(401, "Not authorized");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  authUser,
};
