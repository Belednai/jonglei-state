// Contact API endpoint simulation
// In a real application, this would be implemented as a backend API

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  category: string;
  message: string;
  honeypot?: string;
}

export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // Anti-spam check
  if (data.honeypot) {
    throw new Error('Spam detected');
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  // In a real implementation, this would:
  // 1. Validate the data
  // 2. Send email via SMTP service
  // 3. Store the submission in a database
  // 4. Return success/error response

  // For demo purposes, we'll just log the data and return success
  console.log('Contact form submission:', {
    ...data,
    submittedAt: new Date().toISOString(),
    id: Math.random().toString(36).substr(2, 9)
  });

  // Store in localStorage for demo
  const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
  existingSubmissions.push({
    ...data,
    submittedAt: new Date().toISOString(),
    id: Math.random().toString(36).substr(2, 9),
    status: 'received'
  });
  localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));

  return {
    success: true,
    message: 'Your message has been received. We will respond within 24 hours.'
  };
};

// Email configuration for production use
export const emailConfig = {
  smtpHost: process.env.SMTP_HOST || 'localhost',
  smtpPort: process.env.SMTP_PORT || '587',
  smtpUser: process.env.SMTP_USER || '',
  smtpPassword: process.env.SMTP_PASSWORD || '',
  fromEmail: process.env.FROM_EMAIL || 'noreply@jonglei.gov.ss',
  toEmail: process.env.TO_EMAIL || 'info@jonglei.gov.ss'
};
