import nodeMailer from "nodemailer";

export const sendEmail = async (options) => {
    var transporter = nodeMailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "560c374a0f9d77",
          pass: "51e838bcef7756"
        }
      });
  const mailoptions = {
    from:process.env.SMPT_MAIL,
    to:options.email,
    subject:options.subject,
    text:options.message
  }

  await transporter.sendMail(mailoptions)
};
