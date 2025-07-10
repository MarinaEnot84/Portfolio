import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"Portfolio" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER, 
    replyTo: email, 
    subject: `Новое сообщение от ${name}`,
    text: `
      Имя: ${name}
      Email: ${email}
      Сообщение: 
      ${message}
    `,
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="color: #2563eb;">Новое сообщение с сайта Portfolio</h2>
        <p><strong>Имя:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p><strong>Сообщение:</strong></p>
        <p style="white-space: pre-line; background: #f3f4f6; padding: 1rem; border-radius: 0.5rem;">${message}</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Ошибка отправки:', error);
    return NextResponse.json(
      { error: 'Ошибка при отправке сообщения' },
      { status: 500 }
    );
  }
}