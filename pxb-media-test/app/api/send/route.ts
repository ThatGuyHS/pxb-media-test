import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    // Destructure the form data
    const { name, email, phone, location, service, description } = formData;

    // Generate HTML content as a string
    const emailHtmlContent = `
      <div>
        <h1>Welcome, ${name}!</h1>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Location: ${location}</p>
        <p>Service: ${service}</p>
        <p>Description: ${description}</p>
      </div>
    `;

    // Create a plain text version of the email content
    const emailTextContent = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Location: ${location}
      Service: ${service}
      Description: ${description}
    `;

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['adampeleback@gmail.com'],
      subject: 'New Quote Request',
      text: emailTextContent, // Plain text version of the email
      html: emailHtmlContent, // HTML version of the email
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    } else {
      return NextResponse.json({ error: 'An unknown error occurred' }, { status: 500 });
    }
  }
}
