import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { origin, destination, startDate, endDate, name, email, phone, message } = req.body;

  if (!email || !name) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const isContactForm = message !== undefined;

  try {
    if (isContactForm) {
      // Contact Us form submission
      await transporter.sendMail({
        from: `"MyTicket Expert" <${process.env.EMAIL_USER}>`,
        to: email, // sends to whatever email the visitor typed in the form
        subject: `We received your enquiry, ${name}!`,
        html: `
          <h2>Thanks for reaching out, ${name}!</h2>
          <p>We've received your enquiry and will get back to you shortly.</p>
          <p><strong>Your message:</strong></p>
          <p>${message}</p>
          <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
          <hr />
          <p>This is a confirmation from the MyTicket Expert website.</p>
        `,
      });

      return res.status(200).json({ success: true });
    }

    // Flight search submission
    if (!origin || !destination) {
      return res.status(400).json({ error: 'Origin and destination are required for a flight search' });
    }

    await transporter.sendMail({
      from: `"MyTicket Expert" <${process.env.EMAIL_USER}>`,
      to: email, // sends to whatever email the visitor typed in the form
      subject: `Your Flight Search: ${origin} → ${destination}`,
      html: `
        <h2>Thanks for your search, ${name}!</h2>
        <p>Here's what you searched for:</p>
        <ul>
          <li><strong>From:</strong> ${origin}</li>
          <li><strong>To:</strong> ${destination}</li>
          <li><strong>Dates:</strong> ${startDate} to ${endDate}</li>
          <li><strong>Phone:</strong> ${phone}</li>
        </ul>
        <p>Our team will get back to you shortly with the best deals!</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: err.message });
  }
}