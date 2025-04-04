# Preeminent Car Detailing

A professional car detailing website built with Next.js.

## Features

- Modern responsive design
- Service showcase
- Online appointment booking
- Built with Next.js 15 and TypeScript

## Local Development

1. Clone the repository:
```bash
git clone <your-repo-url>
cd cd-web
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Netlify

### Option 1: Automatic Deployment (Recommended)

1. Push your code to a GitHub repository
2. Log in to Netlify
3. Click "New site from Git"
4. Select GitHub and the repository
5. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy site"

### Option 2: Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI:
```bash
npm install -g netlify-cli
```

3. Login to Netlify:
```bash
netlify login
```

4. Deploy to Netlify:
```bash
netlify deploy
```

5. Follow the prompts to complete the deployment

## Built With

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
