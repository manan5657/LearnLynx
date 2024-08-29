const nodemailer = require("nodemailer");

module.exports.greetMail = (req, res) => {
  const { username, email } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "learnlynx9@gmail.com", // Your Gmail address
      pass: "iklv jzwv gfrs tbgl", // Your Gmail password or App Password
    },
  });

  // Setup email data
  const mailOptions = {
    from: "learnlynx9@gmail.com", // Sender's address
    to: `${email}`, // List of receivers
    subject: "Welcome To LearnLynx", // Subject line
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to LearnLynx</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            color: #333;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        .container {
            width: 100%;
            max-width: 600px;
            margin: 20px auto;
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #007bff;
            color: #fff;
            padding: 10px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
        }
        .content {
            padding: 20px;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 10px 0;
            font-size: 16px;
            color: #fff;
            background-color: #007bff;
            text-decoration: none;
            border-radius: 5px;
            text-align: center;
        }
        .footer {
            margin-top: 20px;
            font-size: 14px;
            text-align: center;
        }
        .footer a {
            color: #007bff;
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Welcome to LearnLynx, ${username}!</h1>
        </div>
        <div class="content">
            <p>Dear ${username},</p>
            <p>Welcome to <strong>LearnLynx</strong>!</p>
            <p>We are thrilled to have you join our community of learners and innovators. At LearnLynx, our mission is to provide you with top-notch resources and tools to enhance your skills and achieve your goals.</p>
            <p>Here’s a quick overview of what you can expect:</p>
            <ul>
                <li><strong>Personalized Learning:</strong> Tailor your learning journey with our diverse range of courses and resources.</li>
                <li><strong>Interactive Platform:</strong> Engage with our interactive tools and features to make your learning experience effective and enjoyable.</li>
                <li><strong>Supportive Community:</strong> Connect with fellow learners and experts to exchange ideas and get support whenever needed.</li>
            </ul>
            <p>To get started, you can log in to your account using the following link:</p>
            <a href="[Login URL]" class="button">Log In</a>
            <p>If you have any questions or need assistance, our support team is here to help. Just reply to this email or visit our <a href="[Support Page URL]">Support Page</a>.</p>
            <p>Thank you for choosing LearnLynx. We look forward to supporting you on your learning journey!</p>
        </div>
        <div class="footer">
            <p>Best Regards,</p>
            <p>The LearnLynx Team<br>
            <a href="[Your Website URL]">Your Website</a> | <a href="[Social Media Links]">Follow Us</a></p>
        </div>
    </div>
</body>
</html>`,
  };

  // Send the email
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      return console.log(error);
    }
    res.json("User Created Successfully");
  });
};
