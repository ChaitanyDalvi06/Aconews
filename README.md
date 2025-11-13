# 📰 Aconews — Lightweight Real-Time News App

> A fast, responsive news aggregator built with **React + Vite**, focused on speed, simplicity, and clean UI.

---

## ✨ Highlights
- ⚡ Real-time headlines using News API  
- 🔎 Instant keyword-based search  
- 📱 Fully responsive and lightweight  
- 🚀 Powered by **React + Vite**  
- 🌐 Easy deployment on Firebase, Vercel, or Netlify  

---

## 🧰 Tech Stack
- **Framework:** React  
- **Bundler:** Vite  
- **Design:** Figma  
- **Deployment:** Firebase Hosting  
- **Language:** JavaScript (ES6+)  

---

## 🚀 Quick Start

```bash
# 1️⃣ Clone the Repository
git clone https://github.com/ChaitanyDalvi06/Aconews.git
cd Aconews

# 2️⃣ Install Dependencies
npm install
# OR
yarn

# 3️⃣ Add Environment Variables
# Create .env.local in the root directory:

echo "VITE_NEWS_API_KEY=your_news_api_key_here" > .env.local
echo "VITE_API_BASE_URL=https://newsapi.org/v2" >> .env.local

# 4️⃣ Run Development Server
npm run dev
# ➜ Visit the local URL printed by Vite

# 5️⃣ Build for Production
npm run build

# 6️⃣ Preview Production Build
npm run preview
```

📁 Project Structure
```
Aconews/
│── src/
│   ├── components/     # UI Components
│   ├── pages/          # Views & Screens
│   ├── assets/         # Images, icons, banners
│   └── main.jsx        # App Entry
│
├── public/             # Static assets
├── vite.config.js
├── package.json
├── firebase.json
└── README.md
```

⚙️ Environment Variables
```
VITE_NEWS_API_KEY=your_api_key_here
VITE_API_BASE_URL=https://newsapi.org/v2
```


