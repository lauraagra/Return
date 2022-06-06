import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "934d5e8fa145b1",
    pass: "f3738bc8174226",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Laura Agra <laurinhaagra22@gmail.com>",
      subject: subject,
      html: body,
    });
  }
}
