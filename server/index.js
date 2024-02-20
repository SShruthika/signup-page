// const express = require('express')
// const dovenv =require('dotenv').config()
// const cors = require('cors')
// const {mongoose} =require('mongoose')
// const app = express();

// mongoose.connect(process.env.MONGO_URL)
// .then(()=>console.log('database connected'))
// .catch((err)=>console.log('database not connected',err))

// app.use(express.json())


// app.use('/',require('./routes/authRoutes'))

// const port = 8000;
// app.listen(port, () => console.log(`server is running on ${port}`))



// server.js
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require('cors')

const app = express();
const port = 5000;
app.use(cors());

app.use(bodyParser.json());

const emailConfig = {
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false,
    auth: {
        user: "your-mailtrap-username",
        pass: "your-mailtrap-password",
    },
};

const transporter = nodemailer.createTransport(emailConfig);

app.post("/send-email", async (req, res) => {
    const { fullname, password, companyName, email } = req.body;

    const mailOptions = {
        from: "your-email@gmail.com",
        to: email,
        subject: "Welcome to Your App",
        html: `<p>Thank you for signing up, ${fullname}!</p>`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send email" });
    }
});



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
