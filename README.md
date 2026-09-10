# Secure Fit LLC - Landing Page

A professional Next.js landing page for Secure Fit LLC, a respiratory fit testing service company.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (**exact version `24.19.0`**) - [Download Node.js](https://nodejs.org/)
- **npm** (version 10+ recommended, comes with Node.js) or **yarn** package manager
- **Git** (for version control)

### Recommended: Use nvm for Node version management

This project is pinned to Node `24.19.0` via `.nvmrc` and `package.json` (`engines`), so using `nvm` helps avoid version mismatch issues.

```bash
nvm install 24.19.0
nvm use 24.19.0
node --version
npm --version
```

To check if you have Node.js installed, run:
```bash
node --version
npm --version
```

## Installation

1. **Clone the repository** (if using Git):
   ```bash
   git clone <repository-url>
   cd Next_LeapFit-main
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   
   This will install all required packages including:
   - Next.js 14.2.5
   - React 18.3.1
   - Sass for styling

3. **Verify installation**:
   ```bash
   npm list
   ```

## Running the Project

### Development Mode

To run the project in development mode with hot-reloading:

```bash
npm run dev
```

The application will start on `http://localhost:3000`

- **Hot Reload**: Changes to your code will automatically refresh in the browser
- **Error Overlay**: Errors will be displayed in the browser
- **Fast Refresh**: React components will update without losing state

### Accessing the Application

Once the server is running, open your browser and navigate to:
```
http://localhost:3000
```

### Stopping the Development Server

Press `Ctrl + C` in the terminal to stop the development server.

### Linting

```bash
npm run lint
```

## Building for Production

### Step 1: Build the Application

Create an optimized production build:

```bash
npm run build
```

This command will:
- Compile and optimize all pages
- Generate static HTML files where possible
- Minify JavaScript and CSS
- Create the `.next` directory with production-ready files

**Expected Output:**
```
✓ Compiled successfully
✓ Linting and checking validity of types
✓ Collecting page data
✓ Generating static pages
```

### Step 2: Test the Production Build Locally

Before deploying, test the production build locally:

```bash
npm start
```

This runs the production server on `http://localhost:3000`

**Note**: You must run `npm run build` before `npm start` will work.

### Build Output

The build process creates:
- `.next/` - Production build directory
- `.next/static/` - Static assets (JS, CSS, images)
- Optimized bundles for better performance

## Deployment

### Option 1: Vercel (Recommended for Next.js)

Vercel is the recommended platform for Next.js applications:

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Deploy via CLI**:
   ```bash
   vercel
   ```
   Follow the prompts to deploy.

**Vercel automatically:**
- Runs `npm run build`
- Optimizes your application
- Provides HTTPS
- Sets up CDN
- Handles environment variables

### Option 2: Netlify

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**:
   ```bash
   netlify deploy --prod
   ```

### Option 3: Traditional Server (Node.js)

For deployment on a traditional server (AWS, DigitalOcean, etc.):

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm start
   ```

3. **Use a process manager** (PM2 recommended):
   ```bash
   npm install -g pm2
   pm2 start npm --name "secure-fit" -- start
   pm2 save
   pm2 startup
   ```

4. **Set up reverse proxy** (Nginx example):
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

### Option 4: Docker Deployment

1. **Create Dockerfile**:
   ```dockerfile
   FROM node:24.19.0-alpine
   
   WORKDIR /app
   
   COPY package*.json ./
   RUN npm ci --only=production
   
   COPY . .
   RUN npm run build
   
   EXPOSE 3000
   
   CMD ["npm", "start"]
   ```

2. **Build and run**:
   ```bash
   docker build -t secure-fit .
   docker run -p 3000:3000 secure-fit
   ```

## Project Structure

```
Next_LeapFit-main/
├── assets/                  # Images and the Lottie animation, imported by components
├── components/
│   ├── ChatWidget.jsx       # Landing page chat assistant
│   ├── ExternalLink.jsx     # Anchor with target/rel defaults
│   ├── LegalPolicyPage.jsx  # Shared renderer for every legal policy
│   ├── PageShell.jsx        # Head, header, footer, and chat wrapper
│   ├── SiteHeader.jsx / SiteFooter.jsx
│   └── SampleEcard.jsx
├── lib/
│   ├── chat.js              # Chat limits and link allowlist
│   ├── nav.js               # Section anchor helper
│   ├── site.js              # Contact details, URLs, and prices
│   └── legal/
│       ├── policies.js      # Policy metadata (slug, title, summary)
│       ├── sections.js      # Full policy prose, keyed by slug
│       └── index.js         # Lookup helpers used by getStaticProps
├── pages/
│   ├── _app.jsx             # App wrapper
│   ├── index.jsx            # Landing page
│   ├── contact.jsx
│   ├── api/chat.js          # OpenAI chat API route
│   └── legal/
│       ├── index.jsx        # Policy directory
│       └── [slug].jsx       # One static page per policy
├── styles/                  # SCSS modules plus _tokens.scss and globals.scss
├── .nvmrc                   # Pinned Node.js version (24.19.0)
├── package.json             # Project dependencies, scripts, and engines
├── DEPLOYMENT.md            # Production deployment guide
└── README.md                # This file
```

Adding a legal policy means adding one entry to `lib/legal/policies.js` and its prose
to `lib/legal/sections.js`. The route, the directory page, and the footer link list
are all generated from that data.

## Technologies Used

- **Node.js 24.19.0** - Runtime (pinned via `.nvmrc` and `engines`)
- **Next.js 14.2.5** - React framework with SSR/SSG
- **React 18.3.1** - UI library
- **Sass** - CSS preprocessor

## Environment Variables

Create a `.env.local` file in the project root (not a folder named `.env`):

```
OPENAI_API_KEY=sk-your-key-here
```

Never commit this file or put the key in frontend code. On Vercel, add the same `OPENAI_API_KEY` variable to Production (and Preview if needed).

## Troubleshooting

### Issue: "Could not find a production build"

**Solution**: Run `npm run build` before `npm start`

### Issue: Port 3000 already in use

**Solution**: 
- Kill the process using port 3000:
  ```bash
  # macOS/Linux
  lsof -ti:3000 | xargs kill -9
  
  # Or use a different port
  PORT=3001 npm run dev
  ```

### Issue: Module not found errors

**Solution**: 
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Node version mismatch or unsupported engine

**Symptoms**:
- Install/build errors mentioning unsupported Node version
- `npm` warnings related to `engines`

**Solution**:
```bash
nvm use 24.19.0
node --version
npm --version
```
If Node `24.19.0` is not installed yet:
```bash
nvm install 24.19.0
nvm use 24.19.0
```

### Issue: Build fails

**Solution**:
1. Clear Next.js cache: `rm -rf .next`
2. Reinstall dependencies: `rm -rf node_modules && npm install`
3. Try building again: `npm run build`

### Issue: Styles not loading

**Solution**: 
- Ensure Sass is installed: `npm install sass`
- Check that SCSS files are properly imported
- Clear `.next` directory and rebuild

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev/)
- [Sass Documentation](https://sass-lang.com/documentation)

## Support

For issues or questions:
1. Check the troubleshooting section above
2. Review Next.js and React documentation
3. Check browser console for errors
4. Verify all dependencies are installed correctly

## License

ISC

---

**Last Updated**: 2026

