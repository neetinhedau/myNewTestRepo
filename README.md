# 🚀 Personal Portfolio Website

A modern, responsive portfolio website to showcase your resume, profile, and contact information. Built with HTML, CSS, and JavaScript.

## 📋 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Sections Included**:
  - Hero/Home section with call-to-action buttons
  - About section with skills showcase
  - Resume/Experience section
  - Contact section with contact form
  - Social media links
- **Smooth Navigation**: Sticky navbar with smooth scroll to sections
- **Interactive Elements**: Form validation, hover effects, and animations
- **Easy to Customize**: All content is easily editable

## 📁 File Structure

```
/workspaces/myNewTestRepo/
├── index.html          # Main HTML file
├── styles.css          # Styling
├── script.js           # JavaScript functionality
├── resume.pdf          # Your resume (optional)
└── README.md           # This file
```

## 🛠️ How to Use

### 1. **Edit Your Information**

Open `index.html` and update:
- Your name (appears in navbar and hero section)
- Your professional title/subtitle
- About section with your bio
- Skills list
- Professional experience
- Education details
- Contact information (email, phone, location)
- Social media links (LinkedIn, GitHub, Twitter)

### 2. **Add Your Resume**

- Place your resume PDF file in the root directory as `resume.pdf`
- The download link in the "Resume" section will work automatically

### 3. **Customize Colors**

Edit the color variables in `styles.css`:

```css
:root {
    --primary-color: #2563eb;        /* Main blue */
    --secondary-color: #1e40af;      /* Darker blue */
    --accent-color: #f59e0b;         /* Orange accent */
    --text-color: #1f2937;           /* Dark text */
    --light-text: #6b7280;           /* Light gray text */
}
```

### 4. **Add Your Profile Image**

Replace the SVG placeholder in the About section:
- Update `.profile-placeholder` in `styles.css`
- Or add an `<img>` tag and style it accordingly

### 5. **Update Contact Form**

The contact form currently displays a success message in the browser console. To enable email notifications:
- Use a service like [Formspree](https://formspree.io/)
- Or integrate with [EmailJS](https://www.emailjs.com/)
- Update the form submission handler in `script.js`

## 🚀 Deployment Options

### **GitHub Pages** (Free & Easy)
1. Push your code to GitHub
2. Go to repository settings
3. Enable GitHub Pages from the `main` branch
4. Your site will be live at `https://username.github.io/myNewTestRepo`

### **Netlify** (Free & Powerful)
1. Connect your GitHub repository
2. Netlify will auto-deploy on every push
3. Get a free domain or use your custom domain

### **Vercel** (Free & Fast)
1. Import your GitHub repository
2. Deploy with one click
3. Automatic deployments on push

### **Traditional Hosting**
- Upload `index.html`, `styles.css`, `script.js`, and any additional assets to your web host
- Access via your domain

## 📱 Responsive Breakpoints

- **Desktop**: Full layout
- **Tablet** (≤ 768px): Adjusted grid layouts
- **Mobile** (≤ 600px): Stacked layouts, optimized navigation

## ✨ Features Explained

### **Navigation Bar**
- Sticky navbar that stays at the top while scrolling
- Active link highlighting shows current section
- Smooth scroll to sections

### **Hero Section**
- Eye-catching gradient background
- Call-to-action buttons for quick access
- Animations on page load

### **About Section**
- Professional bio section
- Skills displayed as tags
- Profile image placeholder

### **Resume Section**
- Professional experience timeline
- Education details
- Certifications
- Resume PDF download button

### **Contact Section**
- Direct contact information
- Social media links
- Contact form with validation
- Success message on submission

## 🎨 Customization Tips

1. **Font**: Change font-family in `styles.css`
2. **Spacing**: Adjust padding/margin in sections
3. **Animations**: Modify timing in CSS animations
4. **Content**: All text is in `index.html` for easy editing

## 🔧 JavaScript Functionality

- **Active Navigation**: Highlights current section based on scroll position
- **Form Validation**: Checks email format and required fields
- **Smooth Scrolling**: Enhanced scroll behavior for anchor links
- **Intersection Observer**: Animations trigger when elements come into view
- **Year Display**: Footer automatically shows current year

## 📝 SEO Tips

Update these for better search engine visibility:

- `<title>` tag in `index.html`
- Add meta description: `<meta name="description" content="...">`
- Add keywords: `<meta name="keywords" content="...">`
- Consider adding schema markup for better indexing

## 🐛 Troubleshooting

**Form not sending?**
- Check browser console for errors
- Ensure form input IDs match the JavaScript
- Implement backend service for actual email sending

**Styles not loading?**
- Check file paths are relative (./styles.css)
- Clear browser cache (Ctrl+Shift+Delete)

**Navigation not working?**
- Ensure section IDs match navigation href values
- Check that JavaScript is enabled

## 📚 Additional Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [JavaScript Info](https://javascript.info/)

## 📄 License

Feel free to use this template for your personal or commercial portfolio.

## 🤝 Contributing

To improve this template, feel free to customize and enhance it!

---

**Ready to deploy?** Choose a hosting option from the Deployment Options section and get your portfolio live! 🎉