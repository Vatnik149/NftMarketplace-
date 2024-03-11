const db = require('../db');
const nodemailer = require('nodemailer');


class MailController {
    async sendmail(req, res) {

        const {email} = req.body;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'hugoboss13133@gmail.com',
              pass: 'gojs mkxp ojbf unqs'
            }
          });
          
          // Set up the email options
          const mailOptions = {
            from: 'hugoboss13133@gmail.com',
            to: 'hugoboss13133@gmail.com',
            subject: 'Test Email',
            text: 'You subscribe to our letters'
          };
          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.error('Error:', error);
            } else {
              console.log('Email sent:', info.response);
            }
          });
        
    } 
}
module.exports = new MailController();
