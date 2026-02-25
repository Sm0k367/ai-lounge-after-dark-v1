# 🚀 Deployment Guide

Deploy AI Lounge After Dark to production in **5 minutes**.

---

## Option 1: Vercel (Recommended - Easiest)

### Step 1: Push to GitHub

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit: AI Lounge After Dark MVP"

# Create repo on GitHub and push
git remote add origin https://github.com/yourusername/ai-lounge-after-dark.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel

```bash
# Option A: Via CLI
npm install -g vercel
vercel --prod

# Option B: Via Web
# 1. Go to vercel.com
# 2. Click "New Project"
# 3. Import your GitHub repo
# 4. Click "Deploy"
```

### Step 3: Done!

Your app is live at `https://ai-lounge.vercel.app` (or your custom domain)

---

## Option 2: Netlify

### Step 1: Push to GitHub (same as above)

### Step 2: Deploy to Netlify

```bash
# Option A: Via CLI
npm install -g netlify-cli
netlify deploy --prod --dir=.next

# Option B: Via Web
# 1. Go to netlify.com
# 2. Click "New site from Git"
# 3. Connect GitHub
# 4. Select your repo
# 5. Click "Deploy"
```

### Step 3: Done!

Your app is live at `https://your-site.netlify.app`

---

## Option 3: Self-Hosted (Advanced)

### Step 1: Build

```bash
npm run build
```

### Step 2: Deploy

```bash
# Copy .next folder to your server
# Install dependencies on server
npm install --production

# Start server
npm start
```

---

## Environment Variables

For MVP, no environment variables needed. When you add backend:

```bash
# .env.local
NEXT_PUBLIC_API_URL=https://your-api.com
NEXT_PUBLIC_STRIPE_KEY=pk_live_xxx
```

---

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records (Vercel will show instructions)

### Netlify
1. Go to Site Settings → Domain Management
2. Add your domain
3. Update DNS records

---

## Monitoring

### Vercel Analytics
- Automatic performance monitoring
- Real-time error tracking
- Usage analytics

### Sentry (Optional)
```bash
npm install @sentry/nextjs
```

---

## Troubleshooting

### Build fails
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Deployment stuck
```bash
# Force redeploy
vercel --prod --force
```

### Performance issues
- Check Vercel Analytics
- Optimize images
- Enable caching

---

## Next Steps

1. ✅ Deploy MVP
2. Add backend (Firebase)
3. Add payments (Stripe)
4. Add real-time collab (Socket.io)
5. Launch publicly

---

**Your MVP is live!** 🚀
