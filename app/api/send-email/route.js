import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req,res) {
  if (req.method === 'POST') {
    const { name, email, subject, message } = req.body;

    try {
      res = await resend.emails.send({
        from: 'joshi.chetan.work@gmail.com',
        to: process.env.RECIPIENT_EMAIL,
        subject: `New Contact Form Submission from ${name}`,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Description:</strong> ${subject}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      });

      return new Response(JSON.stringify({ message:await res.body }), { status: 200 });
    } catch (error) {
      console.error("Error sending email:", error);
      return new Response(JSON.stringify({ error: "Failed to send email." }), { status: 500 });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
