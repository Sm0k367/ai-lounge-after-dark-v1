# 🎤 AI Lounge After Dark - MVP

**Create stunning visuals with AI. Collaborate in real-time. Stream to millions.**

---

## 🚀 Quick Start (30 seconds)

```bash
# 1. Clone or download this repo
git clone https://github.com/yourusername/ai-lounge-after-dark.git
cd ai-lounge-after-dark

# 2. Install dependencies
npm install

# 3. Run locally
npm run dev

# 4. Open browser
# Visit http://localhost:3000
```

---

## 📋 What's Included

✅ **Live p5.js Canvas** - Real-time visual rendering
✅ **AI Chat Interface** - Command-based scene control
✅ **Parameter Controls** - Sliders for speed, scale, intensity, color
✅ **Multiple Styles** - Smooth, geometric, organic animations
✅ **Stream Mode** - Fullscreen for OBS integration
✅ **Export & Share** - Ready for implementation
✅ **Zero Dependencies** - Works out of the box

---

## 🎨 Features

### Canvas
- Real-time p5.js rendering
- Animated gradient backgrounds
- Multiple shape styles (smooth, geometric, organic)
- Responsive to parameter changes

### Chat Interface
- Natural language commands
- Quick suggestion buttons
- Real-time parameter updates
- Simulated AI responses

### Controls
- Speed slider (0.1x - 3x)
- Scale slider (0.5x - 2x)
- Intensity slider (10% - 100%)
- Color picker + presets
- Style selector (smooth/geometric/organic)

### Stream Mode
- Fullscreen visualization
- Perfect for OBS integration
- Exit button for easy control

---

## 💬 Example Commands

Try these in the chat:

- "Make it faster"
- "Change color to cyan"
- "Make it bigger"
- "Switch to geometric"
- "Increase intensity"
- "Make it slower"
- "Change to organic style"
- "Reset to default"

---

## 🚀 Deploy to Vercel (1 minute)

```bash
# 1. Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# 2. Go to vercel.com
# 3. Click "New Project"
# 4. Import your GitHub repo
# 5. Click "Deploy"

# ✅ Live at https://ai-lounge.vercel.app
```

---

## 📁 Project Structure

```
ai-lounge-mvp/
├── src/
│   ├── app/
│   │   ├── page.tsx          # Main page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   └── components/
│       ├── Canvas.tsx        # p5.js canvas
│       ├── ChatPanel.tsx     # Chat interface
│       ├── ControlPanel.tsx  # Parameter controls
│       └── Header.tsx        # Header with actions
├── package.json
├── next.config.js
├── tailwind.config.js
└── README.md
```

---

## 🔧 Customization

### Change Default Colors

Edit `src/tailwind.config.js`:

```javascript
colors: {
  'lounge-pink': '#FF006E',    // Change this
  'lounge-cyan': '#00D9FF',    // Or this
  'lounge-gold': '#FFD60A',    // Or this
}
```

### Add More Styles

Edit `src/components/Canvas.tsx` and add a new style function:

```typescript
function drawYourStyle(p: p5, r: number, g: number, b: number) {
  // Your p5.js code here
}
```

### Add More Commands

Edit `src/components/ChatPanel.tsx` and add to `parseCommand()`:

```typescript
if (lowerText.includes('your-command')) {
  params.yourParam = value;
}
```

---

## 🎯 Next Steps

### Phase 1: MVP (Done ✅)
- Live canvas
- Chat interface
- Parameter controls
- Stream mode

### Phase 2: Social (Next)
- Real-time collaboration
- User accounts
- Gallery showcase
- Multiplayer rooms

### Phase 3: Monetization
- Freemium tiers
- Marketplace
- Sponsorships
- Donations

### Phase 4: Scale
- Advanced features
- API access
- White-label
- Global expansion

---

## 📊 Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Graphics**: p5.js
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Database**: Firebase (ready to integrate)
- **Payments**: Stripe (ready to integrate)

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📝 License

MIT - Feel free to use for personal and commercial projects

---

## 🎉 You're Ready!

Your AI Lounge After Dark MVP is ready to:
- ✅ Run locally
- ✅ Deploy to Vercel
- ✅ Share with friends
- ✅ Gather feedback
- ✅ Iterate and improve

**Let's build something legendary.** 🚀✨

---

**Questions?** Open an issue or check the docs.

**Happy creating!** 🎤🎨
