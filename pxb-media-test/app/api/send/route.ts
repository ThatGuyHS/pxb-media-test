import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    let emailHtmlContent: string;
    let emailTextContent: string;
    let subject: string;

    if (formData.type === 'equipment_order') {
      // Equipment order email
      const { name, email, phone, company, eventDate, message, cart, totalPrice } = formData;

      const cartItemsHtml = cart.map((item: any) => `
        <tr style="border-bottom: 1px solid #ddd;">
          <td style="padding: 8px;">${item.name}</td>
          <td style="padding: 8px;">${item.category}</td>
          <td style="padding: 8px; text-align: center;">${item.quantity}</td>
          <td style="padding: 8px; text-align: center;">${item.rentalDays}</td>
          <td style="padding: 8px; text-align: right;">$${item.dailyRate}/day</td>
          <td style="padding: 8px; text-align: right;">$${(item.dailyRate * item.quantity * item.rentalDays).toFixed(2)}</td>
        </tr>
      `).join('');

      const cartItemsText = cart.map((item: any) => 
        `- ${item.name} (${item.category}) x${item.quantity} for ${item.rentalDays} days - $${(item.dailyRate * item.quantity * item.rentalDays).toFixed(2)}`
      ).join('\n');

      emailHtmlContent = `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #3ABCF9;">New Equipment Rental Order</h1>
          
          <h2>Customer Information</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Event Date:</strong> ${eventDate}</p>
          
          <h2>Equipment Order</h2>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr style="background-color: #f5f5f5;">
                <th style="padding: 10px; border-bottom: 2px solid #ddd; text-align: left;">Equipment</th>
                <th style="padding: 10px; border-bottom: 2px solid #ddd; text-align: left;">Category</th>
                <th style="padding: 10px; border-bottom: 2px solid #ddd; text-align: center;">Qty</th>
                <th style="padding: 10px; border-bottom: 2px solid #ddd; text-align: center;">Days</th>
                <th style="padding: 10px; border-bottom: 2px solid #ddd; text-align: right;">Rate</th>
                <th style="padding: 10px; border-bottom: 2px solid #ddd; text-align: right;">Total</th>
              </tr>
            </thead>
            <tbody>
              ${cartItemsHtml}
              <tr style="background-color: #f9f9f9; font-weight: bold;">
                <td colspan="5" style="padding: 12px; text-align: right;">Grand Total:</td>
                <td style="padding: 12px; text-align: right; color: #3ABCF9; font-size: 18px;">$${totalPrice}</td>
              </tr>
            </tbody>
          </table>
          
          ${message ? `
            <h2>Additional Information</h2>
            <p style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #3ABCF9;">${message}</p>
          ` : ''}
          
          <hr style="margin: 30px 0;">
          <p style="color: #666; font-size: 14px;">
            This equipment rental request needs to be reviewed and confirmed. Please contact the customer within 24 hours.
          </p>
        </div>
      `;

      emailTextContent = `
NEW EQUIPMENT RENTAL ORDER

Customer Information:
Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}
Event Date: ${eventDate}

Equipment Order:
${cartItemsText}

Total: $${totalPrice}

${message ? `Additional Information:\n${message}` : ''}

---
This equipment rental request needs to be reviewed and confirmed.
      `;

      subject = 'New Equipment Rental Order';
    } else {
      // Regular quote request email
      const { name, email, phone, location, service, description } = formData;

      emailHtmlContent = `
        <div>
          <h1>Welcome, ${name}!</h1>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
          <p>Location: ${location}</p>
          <p>Service: ${service}</p>
          <p>Description: ${description}</p>
        </div>
      `;

      emailTextContent = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Location: ${location}
        Service: ${service}
        Description: ${description}
      `;

      subject = 'New Quote Request';
    }

    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['adampeleback@gmail.com'],
      subject: subject,
      text: emailTextContent,
      html: emailHtmlContent,
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
