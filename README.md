# WebUplift — Lovable Deployment Guide

## Before you deploy — fill in your details

Search for `✏️` in the codebase to find every placeholder you need to update:

| File | What to fill in |
|------|----------------|
| `src/components/Footer.jsx` | Your email, WhatsApp number, LinkedIn/Instagram URLs |
| `src/components/FloatingButtons.jsx` | Your WhatsApp number (digits only, with country code e.g. `919876543210`) |
| `src/components/CTASection.jsx` | Same WhatsApp number |
| `src/pages/Contact.jsx` | Your email, WhatsApp display number, and Formspree ID |
| `src/pages/About.jsx` | Your team member names and initials |

### Getting a Formspree ID (free)
1. Go to https://formspree.io and sign up free
2. Create a new form → point it to your email
3. Copy the form ID (looks like `xabcdefg`) and paste into `Contact.jsx`

---

## Deploying on Lovable

1. Go to https://lovable.dev and sign in
2. Click **"Import from GitHub"** or **"Upload project"**
3. Upload this zip / connect your repo
4. Lovable will auto-detect Vite + React and install dependencies
5. Hit **Deploy** — your site will be live in minutes!

## Running locally (optional)

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser.
