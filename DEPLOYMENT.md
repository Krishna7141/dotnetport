# ?? Deployment Guide

This guide will help you deploy your portfolio to various hosting platforms.

## Table of Contents
- [Vercel (Recommended)](#vercel)
- [Netlify](#netlify)
- [GitHub Pages](#github-pages)
- [Azure Static Web Apps](#azure-static-web-apps)
- [AWS Amplify](#aws-amplify)

---

## Vercel (Recommended)

Vercel offers the best integration with Vite and React applications.

### Deploy via GitHub

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Vercel auto-detects Vite settings

3. **Configure (Optional)**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Custom Domain
- Go to Project Settings ? Domains
- Add your custom domain
- Update DNS records as instructed

---

## Netlify

### Deploy via GitHub

1. **Push to GitHub**
   ```bash
   git push origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository

3. **Build Settings**
   ```
   Build command: npm run build
   Publish directory: dist
   ```

4. **Deploy**
   - Click "Deploy site"

### Netlify.toml (Optional)

Create `netlify.toml` in root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## GitHub Pages

### Using gh-pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://Krishna7141.github.io/dotnetport",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/dotnetport/'
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages**
   - Go to repository Settings ? Pages
   - Source: gh-pages branch
   - Save

---

## Azure Static Web Apps

### Deploy via Azure Portal

1. **Create Static Web App**
   - Go to [Azure Portal](https://portal.azure.com)
   - Create a new Static Web App
   - Connect to GitHub

2. **Configure Build**
   ```yaml
   app_location: "/"
   api_location: ""
   output_location: "dist"
   ```

3. **GitHub Actions**
   - Azure automatically creates a workflow
   - Push to trigger deployment

---

## AWS Amplify

### Deploy via Amplify Console

1. **Create Amplify App**
   - Go to AWS Amplify Console
   - Connect repository

2. **Build Settings**
   ```yaml
   version: 1
   frontend:
     phases:
       preBuild:
         commands:
           - npm install
       build:
         commands:
           - npm run build
     artifacts:
       baseDirectory: dist
       files:
         - '**/*'
     cache:
       paths:
         - node_modules/**/*
   ```

3. **Deploy**
   - Save and deploy

---

## Environment Variables

For all platforms, add these environment variables if needed:

```
VITE_CONTACT_EMAIL=kvchelluboina@gmail.com
VITE_LINKEDIN_URL=https://www.linkedin.com/in/krishna-chelluboina/
VITE_TWITTER_URL=https://x.com/krish127228?s=21
```

---

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form works
- [ ] Check mobile responsiveness
- [ ] Test all social media links
- [ ] Verify SEO meta tags
- [ ] Check page load performance
- [ ] Test on different browsers
- [ ] Verify images load correctly
- [ ] Check console for errors
- [ ] Test accessibility

---

## Performance Optimization

### Before Deployment

1. **Optimize Images**
   - Compress images
   - Use WebP format
   - Add lazy loading

2. **Code Splitting**
   - Already handled by Vite

3. **Minification**
   - Automatically done in production build

### After Deployment

1. **Enable CDN**
   - Vercel/Netlify provide this automatically

2. **Add Analytics**
   - Google Analytics
   - Vercel Analytics
   - Plausible

3. **Monitor Performance**
   - Lighthouse scores
   - PageSpeed Insights
   - GTmetrix

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Routes Not Working
- Add redirect rules (see platform-specific guides)
- Check base path in vite.config.js

### Images Not Loading
- Check file paths
- Verify images are in public or imported correctly
- Check build output

---

## Custom Domain Setup

### Update DNS Records

For most platforms:

1. **A Record**
   - Type: A
   - Name: @
   - Value: [Platform IP]

2. **CNAME Record**
   - Type: CNAME
   - Name: www
   - Value: [Platform URL]

3. **Wait for Propagation**
   - Usually 24-48 hours
   - Check: whatsmydns.net

---

## SSL Certificate

All recommended platforms provide **free SSL certificates** automatically:
- Vercel: Automatic
- Netlify: Automatic
- GitHub Pages: Automatic
- Azure: Automatic
- AWS Amplify: Automatic

---

## Support

If you encounter issues:
1. Check platform documentation
2. Review build logs
3. Test locally first
4. Contact platform support

---

**Happy Deploying! ??**
