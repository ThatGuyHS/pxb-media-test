import React from 'react';

interface EmailTemplateProps {
  firstName: string;
  email: string;
  phone: string;
  location: string;
  service: string;
  description: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ firstName, email, phone, location, service, description }) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <p>Location: {location}</p>
    <p>Service: {service}</p>
    <p>Description: {description}</p>
  </div>
);
