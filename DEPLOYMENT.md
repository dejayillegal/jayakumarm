
# Deployment Instructions

## GitHub Pages Deployment

This project is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Setup Steps:

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit with GitHub Pages deployment"
   git push origin main
   ```

2. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Navigate to Settings > Pages
   - Under "Build and deployment", select "GitHub Actions" as the source
   - The workflow will automatically run and deploy your site

3. **Access your site:**
   - Your site will be available at: `https://[your-username].github.io/[repository-name]/`
   - You can find the exact URL in the Actions tab after deployment completes

### Manual Deployment:

You can also trigger a deployment manually:
- Go to the Actions tab in your GitHub repository
- Select the "Deploy to GitHub Pages" workflow
- Click "Run workflow"

### Custom Domain (Optional):

To use a custom domain:
1. Add a `CNAME` file to the `client/public/` directory with your domain name
2. Configure your domain's DNS settings to point to GitHub Pages
3. Update the repository settings to use your custom domain

### Build Process:

The GitHub Actions workflow:
1. Checks out your code
2. Sets up Node.js 20
3. Installs dependencies with `npm ci`
4. Runs `npm run build` to create production assets
5. Uploads the built files from `dist/public` to GitHub Pages
6. Deploys to your GitHub Pages site

The build is completely standalone and does not require any Replit-specific configuration.
