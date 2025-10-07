# GitHub Pages Deployment Guide

This guide will help you deploy your React + Vite application to GitHub Pages.

## 🚀 Quick Start

Your project is now configured for GitHub Pages deployment! Here's what has been set up:

### ✅ Configuration Complete

1. **Vite Configuration**: Updated to use the correct base path (`/studio-east-spark/`) for production builds
2. **GitHub Actions Workflow**: Automatic deployment on push to main branch
3. **Package Scripts**: Added deployment and preview scripts
4. **Dependencies**: Added `gh-pages` for manual deployment

## 📋 Deployment Options

### Option 1: Automatic Deployment (Recommended)

1. **Enable GitHub Pages in your repository:**
   - Go to your GitHub repository: `https://github.com/muradalhassen/studio-east-spark`
   - Click on **Settings** tab
   - Scroll down to **Pages** section
   - Under **Source**, select **GitHub Actions**
   - Save the settings

2. **Push your changes:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Monitor deployment:**
   - Go to the **Actions** tab in your repository
   - Watch the "Deploy to GitHub Pages" workflow run
   - Once complete, your site will be available at: `https://muradalhassen.github.io/studio-east-spark/`

### Option 2: Manual Deployment

If you prefer manual control:

```bash
# Install dependencies (if not already done)
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:preview` - Build and preview production build locally
- `npm run deploy` - Build and deploy to GitHub Pages manually
- `npm run preview` - Preview the built application

## 🌐 Your Live URL

Once deployed, your website will be available at:
**https://muradalhassen.github.io/studio-east-spark/**

## 🔄 Updating Your Site

Every time you push changes to the `main` branch, GitHub Actions will automatically:
1. Build your project
2. Deploy the updated version to GitHub Pages
3. Make it live within a few minutes

## 🛠️ Troubleshooting

### Common Issues:

1. **404 Error on GitHub Pages:**
   - Ensure the base path in `vite.config.ts` matches your repository name
   - Check that GitHub Pages is set to use GitHub Actions as the source

2. **Assets Not Loading:**
   - Verify the build process completed successfully
   - Check that the base path is correctly configured

3. **Deployment Not Triggering:**
   - Ensure the workflow file is in `.github/workflows/`
   - Check that you're pushing to the `main` branch
   - Verify GitHub Actions are enabled in repository settings

### Checking Deployment Status:

1. Go to your repository on GitHub
2. Click the **Actions** tab
3. Look for the "Deploy to GitHub Pages" workflow
4. Check the logs if there are any errors

## 📝 Next Steps

1. **Custom Domain (Optional):**
   - If you want to use a custom domain, add a `CNAME` file to the `public` folder
   - Configure your domain's DNS settings to point to GitHub Pages

2. **Environment Variables:**
   - If you need environment variables, create a `.env` file
   - Use `VITE_` prefix for client-side variables

3. **SEO Optimization:**
   - Update meta tags in `index.html`
   - Add structured data if needed

## 🎉 You're All Set!

Your website is now ready for deployment. The automatic deployment will keep your site updated every time you push changes to the main branch.
