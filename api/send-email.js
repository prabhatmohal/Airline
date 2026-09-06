import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { origin, destination, startDate, endDate, name, email, phone } = req.body;

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

  try {
    await transporter.sendMail({
      from: `"MyTicket Exprt" <${process.env.EMAIL_USER}>`,
      to: email, // 👈 only sends to whatever email the customer typed in the form
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