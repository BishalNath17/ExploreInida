# Explore India Smartly - Project Documentation

Welcome to the **Explore India Smartly** documentation! This guide is designed to help you understand the codebase, manage assets, and modify the application with ease.

## 📌 Project Overview

**Explore India Smartly** is a premium, high-performance React application designed to help travelers explore India's 28 states and 8 Union Territories. It features interactive maps, a smart budget planner, safety information, and high-quality, authentic imagery of destinations.

### Key Features
- **Interactive Map**: Visualize destinations on a zoomable map.
- **Global Search**: Find states or specific landmarks instantly.
- **Smart Budget Planner**: Estimate travel costs based on real-time data.
- **Safety Dashboard**: Essential emergency contacts and scam alerts.
- **Authentic Imagery**: 100% unique, place-specific photos from Wikimedia Commons.

---

## 📂 Folder & File Structure

```text
Explore India/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── common/       # Global components (Map, SectionHeadings)
│   │   ├── home/         # Homepage sections (Hero, HiddenGems)
│   │   └── layout/       # Core layout (Navbar, Footer, Layout)
│   ├── data/             # The "Brain" of the app (JSON-like JS files)
│   │   ├── statesData.js    # Data for all 36 States/UTs (Primary source)
│   │   ├── heroImages.js    # High-quality Wikimedia hero images
│   │   ├── coordinates.js   # Lat/Lng for map markers
│   │   └── safetyTips.js    # Emergency numbers and safety advice
│   ├── pages/            # Individual route pages (Home, About, StateDetail)
│   ├── App.jsx           # Routing and core application logic
│   ├── index.css         # Styling (Tailwind CSS and custom glassmorphism)
│   └── main.jsx          # Entry point
├── package.json          # Project dependencies (React, Vite, Tailwind, Leaflet)
└── vite.config.js        # Build configuration
```

---

## 🖼️ Image & Asset Management

All images used in this project are fetched dynamically from **Wikimedia Commons**. This ensures:
1. **Authenticity**: Every photo shows the *exact* place named.
2. **Uniqueness**: No image is repeated across the entire application.
3. **Quality**: Large, high-resolution original photographs.

### How to Update or Replace Images Manually

If you want to change an image for a specific state or destination:

1. **For State Hero Banners**:
   - Open `src/data/heroImages.js`.
   - Find the state code (e.g., `IN-RJ` for Rajasthan).
   - Replace the URL with a new Wikimedia Commons "Special:FilePath" link.
   - Example: `https://commons.wikimedia.org/wiki/Special:FilePath/Your_New_Image.jpg?width=1600`

2. **For Specific Destinations**:
   - Open `src/data/statesData.js`.
   - Find the destination inside the `destinations` array.
   - Add or modify the `image` property for that destination object.

---

## ✍️ How to Edit Content & Styles

### Changing Content (Text/Data)
Most text content is stored in the `src/data/` folder.
- **Add a Search Keyword**: Update the `tagline` or `name` in `statesData.js`.
- **Edit Safety Advice**: Modify `src/data/safetyTips.js`.
- **Update Testimonials**: Edit `src/data/testimonials.js`.

### Modifying Styles
This project uses **Tailwind CSS v4** and custom **Glassmorphism** utilities.
- **Global Colors**: Update the `@theme` block in `src/index.css`.
- **Component Styles**: Use Tailwind classes (e.g., `bg-white/10`, `backdrop-blur-md`) directly in the JSX files.

---

## 🛠️ Technical Dependencies

- **Vite**: Ultra-fast build tool for React.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Framer Motion**: Used for smooth, high-end animations.
- **Lucide React**: Premium icon library.
- **React-Leaflet**: Open-source interactive map engine.
- **Fuse.js**: Fuzzy search engine for the global search bar.

---

## 🚀 Running Locally

1. **Install dependencies**: `npm install`
2. **Start development server**: `npm run dev`
3. **Build for production**: `npm run build`

---

## 💡 Pro Tips for Beginners

- **Case Sensitivity**: State codes (like `IN-AP`) MUST be uppercase in `heroImages.js` and `statesData.js`.
- **Imports**: If you add a new data file, remember to import it at the top of the file where you want to use it (e.g., `import { newData } from '../data/newData'`).
- **Map Markers**: If a destination doesn't show up on the map, ensure its name matches exactly in `src/data/coordinates.js`.
