# ZDA Incorporation Limited — Landing Page

A modern, responsive landing page for **ZDA Incorporation Limited**, a UK-registered company that builds digital products and services.

## Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Custom properties, Grid, Flexbox, animations
- **Vanilla JavaScript** — Intersection Observer, smooth scroll, form handling
- **Google Fonts** — Inter, JetBrains Mono
- **Font Awesome 6** — Icons (loaded via CDN)

No build tools, no frameworks, no dependencies to install. Just static files ready for deployment.

## Project Structure

```
ZDA Incorporation/
├── index.html          # Main landing page
├── css/
│   └── styles.css      # All styles
├── js/
│   └── main.js         # Interactivity & animations
└── README.md           # This file
```

## Deploy to GitHub Pages

### Option 1: Deploy from `main` branch

1. Create a new repository on GitHub (e.g., `zda-incorporation`)
2. Push the code:

```bash
cd "ZDA Incorporation"
git init
git add .
git commit -m "Initial commit: ZDA Incorporation landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/zda-incorporation.git
git push -u origin main
```

3. Go to **Settings → Pages** in your GitHub repository
4. Under **Source**, select **Deploy from a branch**
5. Choose **main** branch and **/ (root)** folder
6. Click **Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/zda-incorporation/`

### Option 2: Use a custom domain

1. After deploying, go to **Settings → Pages**
2. Under **Custom domain**, enter your domain (e.g., `www.zdaincorporation.com`)
3. Add these DNS records with your domain provider:
   - **A records** pointing to GitHub Pages IPs:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - **CNAME record**: `www` → `YOUR_USERNAME.github.io`

## Local Development

Simply open `index.html` in your browser. No server required.

For live reload during development, you can use any simple HTTP server:

```bash
# Python
python3 -m http.server 8000

# Node.js (npx)
npx serve .
```

## Contact Form

The contact form currently shows a success notification on submission (static site). To make it functional, you can:

1. **Formspree**: Replace the form action with `https://formspree.io/f/YOUR_FORM_ID`
2. **Netlify Forms**: Add `netlify` attribute to the form tag
3. **EmailJS**: Integrate EmailJS for client-side email sending

## License

© 2025 ZDA Incorporation Limited. All rights reserved.
