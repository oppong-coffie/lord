# EmailJS Setup Guide for Contact Form

## Overview

Your contact form is now configured to send emails to **lordoffeidarko@gmail.com** using EmailJS. You need to complete the EmailJS setup to make it work.

## Step-by-Step Setup

### 1. Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **"Sign Up"** (it's free - 200 emails/month on free tier)
3. Sign up with your Google account (lordoffeidarko@gmail.com) or email

### 2. Add Email Service

1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Select **"Gmail"** as your email service
4. Click **"Connect Account"** and authorize with lordoffeidarko@gmail.com
5. Give it a name like "Portfolio Contact Form"
6. Click **"Create Service"**
7. **Copy the Service ID** (looks like `service_xxxxxxx`)

### 3. Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Configure the template:

**Template Settings:**

- **Template Name**: Contact Form Submission
- **Subject**: `New message from {{from_name}} - {{subject}}`
- **To Email**: lordoffeidarko@gmail.com

**Template Content (HTML):**

```html
<h2>New Contact Form Submission</h2>

<p><strong>From:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Subject:</strong> {{subject}}</p>

<h3>Message:</h3>
<p>{{message}}</p>

<hr />
<p><small>This email was sent from your portfolio contact form.</small></p>
```

4. Click **"Save"**
5. **Copy the Template ID** (looks like `template_xxxxxxx`)

### 4. Get Public Key

1. Go to **"Account"** → **"General"** in the dashboard
2. Find your **Public Key** (looks like a long string)
3. **Copy the Public Key**

### 5. Update Contact.jsx

Open `src/components/Contact.jsx` and replace these three values around line 58-60:

```javascript
const serviceId = "YOUR_SERVICE_ID"; // Replace with your Service ID from step 2
const templateId = "YOUR_TEMPLATE_ID"; // Replace with your Template ID from step 3
const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your Public Key from step 4
```

**Example:**

```javascript
const serviceId = "service_abc1234";
const templateId = "template_xyz5678";
const publicKey = "xYz123AbC456DeF789";
```

### 6. Test the Form

1. Save the file
2. Go to your website's contact section
3. Fill out the form and click "Send Message"
4. Check lordoffeidarko@gmail.com for the email!

## Features Included

✅ **Form Validation** - Checks for required fields and valid email
✅ **Loading State** - Shows spinner while sending
✅ **Success Message** - Confirms when email is sent
✅ **Error Handling** - Shows helpful error messages
✅ **Form Reset** - Clears form after successful submission
✅ **Direct Email Link** - Fallback mailto link at bottom
✅ **Dark/Light Mode** - Works with your theme

## Troubleshooting

### Email not sending?

1. Check browser console for errors
2. Verify all three IDs are correct in Contact.jsx
3. Make sure you're connected to the internet
4. Check EmailJS dashboard for error logs

### Emails going to spam?

1. Check your Gmail spam folder
2. Mark the email as "Not Spam"
3. Add your own email to contacts

### Free tier limit reached?

- Free tier: 200 emails/month
- Upgrade to paid plan if needed ($7/month for 1000 emails)

## Alternative: Simple Mailto Link

If you prefer not to use EmailJS, you can use a simple mailto link instead. The form already has this as a fallback at the bottom of the contact section.

## Need Help?

If you have any issues setting this up, let me know and I can help troubleshoot!
