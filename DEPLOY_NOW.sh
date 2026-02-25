#!/bin/bash

# 🚀 AI Lounge After Dark - Deploy to Vercel in 30 Seconds
# Run this script to deploy instantly

echo "🎤 AI Lounge After Dark - Deployment Script"
echo "==========================================="
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing git repository..."
    git init
    git add .
    git commit -m "🎤 AI Lounge After Dark MVP - Ready to launch"
    git branch -M main
    echo "✅ Git initialized"
else
    echo "✅ Git already initialized"
fi

echo ""
echo "📝 Next steps:"
echo "1. Create a GitHub repository at https://github.com/new"
echo "2. Name it: ai-lounge-after-dark"
echo "3. Run these commands:"
echo ""
echo "   git remote add origin https://github.com/YOUR_USERNAME/ai-lounge-after-dark.git"
echo "   git push -u origin main"
echo ""
echo "4. Go to https://vercel.com"
echo "5. Click 'New Project'"
echo "6. Import your GitHub repo"
echo "7. Click 'Deploy'"
echo ""
echo "✅ Your app will be live in 2-3 minutes!"
echo ""
echo "🎉 Share your URL:"
echo "   https://ai-lounge-after-dark.vercel.app"
echo ""
