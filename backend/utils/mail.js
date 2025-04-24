import Mailgen from "mailgen";
import nodemailer from "nodemailer";


export const sendmail = async (options) => {

    const mailGenerator = new Mailgen({
        theme : "default",
        product : {
            name : "Project Manager",
            link : process.env.FRONTEND_URL
        }
    });

    const emailText = mailGenerator.generatePlaintext(options.mailGenContent);
    const emailHTML = mailGenerator.generate(options.mailGenContent);

    const transporter = nodemailer.createTransport({
        host : process.env.MAILTRAP_SMTP_HOST,
        port : process.env.MAILTRAP_SMTP_PORT,
        secure : false,
        auth : {
            user : process.env.MAILTRAP_SMTP_USER,
            pass : process.env.MAILTRAP_SMTP_PASSWORD
        }
    });

    const mail = {
        from : "mail.taskmanager@example.com",
        to : options.mail,
        subject : options.subject,
        text : emailText,
        html : emailHTML
    };

    try {
        await transporter.sendMail(mail);
    } 
    catch (error) {
        console.error(`Error while sending mail : ${error}`);
    }

}



export const emailVerificationMailGenContent = (username, verificationURL) => {
    return {
        body : {
            name : username,
            intro : "Welcome to Project Manager. We are very excited to have you on board.",
            action : {
                instructions : "To get started with Project Manager, please click here : ",
                button : {
                    color : "#22BC66",
                    text : "Verify your email",
                    link : verificationURL
                } 
            },
            outro : "Need help, or have questions? Just reply to this email, we would love to help."
        }
    }
}



export const forgotPasswordMailGenContent = (username, passwordResetURL) => {
    return {
        body : {
            name : username,
            intro : "We got a request to reset your password.",
            action : {
                instructions : "To reset your password, please click here : ",
                button : {
                    color : "#22BC66",
                    text : "Reset your password",
                    link : passwordResetURL
                } 
            },
            outro : "Need help, or have questions? Just reply to this email, we would love to help."
        }
    }
}




// sendmail({
//     email : user.email,
//     subject : "XYZ",
//     mailGenContent : emailVerificationMailGenContent(username, verificationURL)
// });