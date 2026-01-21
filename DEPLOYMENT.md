# Automatic Deployment to Hostinger

This project is configured for automatic deployment to Hostinger via GitHub Actions.

## Setup Instructions

### 1. Configure Next.js for Static Export
✅ Already configured in `next.config.ts` with `output: 'export'`

### 2. Get Your Hostinger FTP Credentials

1. Log in to your Hostinger control panel (hPanel)
2. Go to **Files** → **FTP Accounts** (or **File Manager**)
3. Note down or create an FTP account with:
   - **FTP Server/Host** (e.g., `ftp.yourdomain.com` or IP address)
   - **FTP Username**
   - **FTP Password**
   - **FTP Port** (usually 21 for FTP, 22 for SFTP)

### 3. Add GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add these three secrets:

   - **`HOSTINGER_FTP_SERVER`**: Your FTP server address
     - Example: `ftp.yourdomain.com` or `123.456.789.0`
   
   - **`HOSTINGER_FTP_USERNAME`**: Your FTP username
     - Example: `u123456789`
   
   - **`HOSTINGER_FTP_PASSWORD`**: Your FTP password
     - Example: `your-ftp-password`

### 4. Configure Deployment Directory (if needed)

If your Hostinger setup requires a different directory than `/public_html/`, you can edit `.github/workflows/deploy.yml` and change the `server-dir` value:

```yaml
server-dir: /public_html/  # Change this to your directory
```

Common alternatives:
- `/public_html/` (default)
- `/domains/yourdomain.com/public_html/`
- `/htdocs/`

### 5. Push to Main Branch

Once everything is set up:

1. Commit and push your code to the `main` or `master` branch
2. GitHub Actions will automatically:
   - Build your Next.js app
   - Generate the static files in the `out/` folder
   - Deploy them to Hostinger via FTP

### 6. Monitor Deployments

- Go to your GitHub repository
- Click on the **Actions** tab
- You'll see the deployment workflow running
- Green checkmark = successful deployment
- Red X = deployment failed (check logs for errors)

## Manual Deployment

If you need to deploy manually:

1. Run `npm run build` locally
2. Upload the contents of the `out/` folder to your Hostinger server via FTP

## Troubleshooting

### FTP Connection Issues
- Verify your FTP credentials are correct
- Check if Hostinger requires SFTP instead of FTP (port 22)
- Ensure your IP isn't blocked by Hostinger's firewall

### Build Errors
- Check the GitHub Actions logs
- Ensure all dependencies are in `package.json`
- Verify `next.config.ts` has `output: 'export'`

### Files Not Updating
- Clear your browser cache
- Check if files were uploaded to the correct directory
- Verify the `out/` folder contains the built files

## Alternative: SFTP Deployment

If Hostinger requires SFTP instead of FTP, you can modify the workflow to use SFTP. Let me know if you need help with that!
