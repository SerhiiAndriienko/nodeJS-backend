const nodemailer = require("nodemailer");

const { META_PASSWORD, META_USER } = process.env;

const nodemailerConfig = {
	host: "smtp.meta.ua",
	port: 465,
	secure: true,
	auth: {
		user: META_USER,
		pass: META_PASSWORD,
	},
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
	const email = { ...data, from: META_USER };
	await transport.sendMail(email);
};

module.exports = sendEmail;
