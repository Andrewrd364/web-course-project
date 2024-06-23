import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true, 
    auth: {
        user: 'andrey.liskov03@yandex.ru',
        pass: 'kqesfxsgmulxlrrg'
  }
});

export const sendEmail = async (to, subject, text) => {
    const mailOptions = {
        from: 'andrey.liskov03@yandex.ru',
        to: to,
        subject: subject,
        text: text };

    try {
        const info = await transporter.sendMail(mailOptions);
        return info;}
        catch (error) {
        throw new Error(error);
    }
};
