import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export const mailer = (email,msg,callback) => {
    try{
        console.log(email,msg)
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.EMAIL_USER || 'vishnitin51@gmail.com',
                pass: process.env.EMAIL_PASS || 'ycrs zzlq dtah xtyw'
            }
        });
        const mailOptions = {
            from: process.env.EMAIL_USER || 'vishnitin51@gmail.com',
            to: email,
            subject: 'Verification Mail by Team-MyJobs-Platform ..!',
            html: msg
        }

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log('Error : ',error);
            }
            else {
                console.log('otp sent from mailer');
                callback(info);
            }
        });
        
        return true;

    }catch(error){
        console.error('Error while sending Mail to specified Mail ..!');
        return error;
    }
}



