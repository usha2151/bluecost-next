import nodemailer from "nodemailer";

// Create a function to send the email
export const sendEmail = async (email, subject, html, headerContent) => {
  try {
    // Nodemailer transporter setup
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      requireTLS: true,
      auth: {
        user: "usha@difm.tech", // Store this in your .env file
        pass: "mogz jpmf wubz ubon", // Store this in your .env file
      },
    });

    // Styled HTML email template with dark blue color
   const emailStyles = `
  <style>
    body {
        margin: 0;
        padding: 0;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background-color: #ffffff;
        color: #003566;
    }
    .email-wrapper {
        max-width: 600px;
        margin: 40px auto;
        background-color: #ffffff;
        border: 1px solid #003566;
        border-radius: 8px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .email-header {
        background-color: #003566;
        color: #ffffff;
        padding: 10px;
        font-size: 15px;
        text-align: center;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }
    .email-body {
        padding: 20px;
        text-align: left;
        line-height: 1.5;
    }
        .comm{
         padding: 20px 20px;
        text-align: left;
        line-height: 1.5;
        }
    .offer-details {
        background-color: #f0f0f0; /* Light grey background for differentiation */
        padding: 15px;
        margin: 20px 0; /* Add some spacing around the offer details section */
        border-radius: 5px; /* Slight rounding of corners */
        border: 1px dashed #003566; /* Dashed border for visual distinction */
    }
    .email-footer {
        background-color: #f0f0f0;
        color: #000;
        text-align: center;
        padding: 20px;
        font-size: 0.8em;
        border-bottom-left-radius: 8px;
        border-bottom-right-radius: 8px;
    }
    .otp-code {
        font-weight: bold;
        font-size: 24px;
        margin: 20px 0;
        color: black; 
        background-color: #ebebeb;
        padding: 10px;
        border-radius: 5px;
        display: inline-block;
    }
    .warning {
        color: #b00;
        font-weight: bold;
    }
    .action-button {
        display: inline-block;
        background-color: #003566 ;
        color: #fff !important;
        padding: 10px 20px;
        text-decoration: none;
        border-radius: 3px;
        font-weight: bold;
      }
      .action-button:hover {
        cursor: pointer;
        color: #003566 !important;
        background-color: #fff;
      }
      .bold-text{
        font-weight: bold;
      }
      .dashed-box {
        background-color: #f0f0f0; 
        padding: 15px;
        margin: 20px 0; 
        border-radius: 5px;
        border: 1px dashed #003566;
      }
</style>
    `;

    const emailFooter = `
<div class="email-footer">
    <p style="font-size: .7rem;">Copyright ©️ 2025 Blue Coast Wellness Group. All rights reserved.
</p>
</div>
`;

const styledHtml = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Notification</title>
    ${emailStyles}
</head>
<body>
    <div class="email-wrapper">
        <div class="email-header"><h2>${headerContent}<h2></div>
        ${html}
        ${emailFooter}
    </div>
</body>
</html>
    `;

    // Email content options
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender email
      to: email, // Recipient email (user's email)
      subject: subject,
      html: styledHtml, // Include styled HTML
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: " + info.response);
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Error sending email");
  }
};
