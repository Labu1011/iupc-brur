import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: Request) {
  try {
    const { from, to, subject, text, html } = await request.json()

    // Ensure required fields are present
    if (!to || !subject || !text) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Nodemailer transporter configuration (Outlook example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    })

    console.log(process.env.NEXT_PUBLIC_EMAIL_USER)

    // Send the email
    const info = await transporter.sendMail({
      from, // sender address
      to, // recipient email address
      subject: subject, // email subject
      text: text, // plain text content
      html, // html content (optional)
    })

    // Return success response
    return NextResponse.json({ message: "Email sent successfully", info })
  } catch (error: any) {
    return NextResponse.json(
      { error: "Failed to send email", details: error.message },
      { status: 500 }
    )
  }
}
