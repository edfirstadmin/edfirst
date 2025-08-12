# AWS Amplify Deployment Guide

This guide will help you deploy your Vite React TypeScript application to AWS Amplify.

## Prerequisites

1. **AWS Account**: You need an active AWS account
2. **Git Repository**: Your code should be in a Git repository (GitHub, GitLab, Bitbucket, or AWS CodeCommit)
3. **AWS CLI** (optional): For advanced configurations

## Configuration Files

The following files have been configured for Amplify deployment:

### 1. `amplify.yml`
This file tells Amplify how to build your application:
- Uses `npm ci` for faster, reliable dependency installation
- Runs `npm run build` to create the production build
- Outputs artifacts to the `dist` directory
- Caches `node_modules` for faster subsequent builds

### 2. `vite.config.ts`
Updated with:
- Build output directory set to `dist`
- Runtime configuration alias for Amplify compatibility

### 3. `index.html`
Added compatibility script for AWS Amplify environment

## Deployment Methods

### Method 1: Git-based Deployment (Recommended)

1. **Push your code to a Git repository**:
   ```bash
   git add .
   git commit -m "Configure for Amplify deployment"
   git push origin main
   ```

2. **Connect to AWS Amplify**:
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Host web app"
   - Choose your Git provider (GitHub, GitLab, Bitbucket, or CodeCommit)
   - Authorize AWS Amplify to access your repository
   - Select your repository and branch (usually `main`)

3. **Configure build settings**:
   - Amplify should automatically detect the `amplify.yml` file
   - Review the build settings (they should match your `amplify.yml`)
   - Click "Next"

4. **Deploy**:
   - Review your settings
   - Click "Save and deploy"
   - Wait for the build to complete (usually 2-5 minutes)

### Method 2: Manual Deployment

1. **Build your application locally**:
   ```bash
   npm run build
   ```

2. **Deploy to Amplify**:
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "New app" → "Deploy without Git provider"
   - Upload your `dist` folder as a ZIP file
   - Click "Save and deploy"

## Environment Variables

If your application uses environment variables:

1. In the Amplify Console, go to your app
2. Click "Environment variables" in the left sidebar
3. Add your variables in the format:
   - Variable name: `VITE_API_URL`
   - Value: `https://your-api-url.com`

## Custom Domain (Optional)

1. In the Amplify Console, go to your app
2. Click "Domain management" in the left sidebar
3. Click "Add domain"
4. Follow the instructions to configure your custom domain

## Continuous Deployment

With Git-based deployment, Amplify automatically:
- Builds and deploys when you push to the connected branch
- Provides build logs and error reporting
- Supports branch-based deployments for different environments

## Troubleshooting

### Build Failures
- Check the build logs in the Amplify Console
- Ensure all dependencies are listed in `package.json`
- Verify that `npm run build` works locally

### Runtime Errors
- Check the browser console for JavaScript errors
- Verify that all environment variables are properly set
- Ensure that API endpoints are accessible from the Amplify domain

### Performance Optimization
- Amplify automatically provides CDN distribution
- Enable compression in your build settings if needed
- Consider implementing code splitting for large applications

## Next Steps

After successful deployment:
1. Test your application thoroughly
2. Set up monitoring and analytics
3. Configure custom error pages if needed
4. Set up branch-based deployments for staging environments

## Useful Commands

```bash
# Install Amplify CLI (optional)
npm install -g @aws-amplify/cli

# Configure Amplify CLI
amplify configure

# Initialize Amplify in your project (for backend features)
amplify init

# Add hosting
amplify add hosting

# Publish your app
amplify publish
```

Your application is now ready for deployment to AWS Amplify!