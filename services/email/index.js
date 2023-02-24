const sgMail = require("@sendgrid/mail");
const { createHttpException } = require("../../helpers");

const { SENDGRID_API_KEY, MAIL_SENDER_EMAIL } = process.env;
sgMail.setApiKey(SENDGRID_API_KEY);

const sendVerificationLetter = async (email, verificationToken) => {
  try {
    await sgMail.send({
      from: MAIL_SENDER_EMAIL,
      to: email,
      subject: "Verify your email",
      html: `<a href="http://localhost:3000/api/auth/users/verify/${verificationToken}">Click to verify your email</a>`,
    });
  } catch (error) {
    throw createHttpException(
      502,
      `Sendgrid error: ${JSON.stringify(error, null, 2)}`
    );
  }
};

module.exports = {
  sendVerificationLetter,
};
