# 🪵 Terra & Hearth

### *Seasonal Kitchen & Hearth Bar*

> **Honoring the rhythm of local soil, live embers, and low-intervention wines.**
>
> Located in the Historic Arts Quarter of Mill Valley, CA, **Terra & Hearth** is an editorial-grade, fully responsive web application presenting an immersive digital experience for an upscale, farm-to-table culinary destination.

---

## 🎨 Visual Identity & Brand Philosophy

The digital identity of Terra & Hearth mirrors its physical dining room: tactile, warm, intentional, and rustic yet refined. It utilizes a carefully curated aesthetic to provide visitors with a sense of the restaurant's live-fire cooking and connection to the Earth:

*   **Color Palette:**
    *   `#FAF7F2` (Warm Off-White / Cream): Soft, light background mimicking organic linen and rough-milled paper.
    *   `#2A2521` (Deep Dark Charcoal): An earthy black/brown for grounding typography, avoiding the starkness of pure black.
    *   `#B85433` (Burnt Sienna / Terracotta): Represents the heat of the hearth, live embers, and clay pottery.
    *   `#556B4E` (Sage Green): Evokes freshly harvested herbs, olive oil, and the coastal ranges of Northern California.
    *   `#E2B39C` (Terracotta Blush): A soft terracotta tint used for delicate borders and selection overlays.
*   **Typography:**
    *   **Serif:** `Cormorant Garamond` — Elegantly tall, sharp, and traditional, perfect for editorial headlines and menu item names.
    *   **Script:** `Caveat` — Whimsical, cozy hand-written accents representing the chef's handwriting or daily foraging chalkboards.
    *   **Sans-Serif:** `Plus Jakarta Sans` — Clean, geometric, and highly readable, used for smooth body copy and interactive UI buttons.

---

## ✨ Features

Terra & Hearth is more than a simple restaurant landing page; it is a full Single-Page Application (SPA) designed to cover every touchpoint of a modern restaurant experience:

1.  **Custom Animated Navigation (SPA Router):**
    *   A seamless, lightweight client-side routing solution built directly into React state.
    *   Includes smooth scroll restoration to keep transitions polished and intuitive.
2.  **Interactive, Curated Menu:**
    *   Filterable by course category: Starters, Pastas, Mains, Desserts, and Natural Drinks.
    *   Highlights crucial dietary and sourcing labels (`GF`, `Vegan`, `Vegetarian`, `Hearth`, `Farm-Direct`).
    *   Features local farm sources and recommended low-intervention wine pairings for individual dishes.
3.  **Comprehensive Table Reservation System:**
    *   Accessible via a dedicated page or a responsive, floating trigger modal.
    *   Provides inputs for booking details: Party size, Date, Time, Seating Area (`Dining Room`, `Chef's Counter`, `Garden Terrace`, or `Wine Nook`), and Special Occasions or Dietary Notes.
    *   Features robust validation and displays a beautiful, persistent confirmation toast notification upon successful booking.
4.  **Local Sourcing & Storytelling (About):**
    *   Details the core philosophy of live-fire wood cooking (white oak embers) and low-intervention natural wines.
    *   Features an interactive partner directory showcasing direct relationships with regional farms, dairies, and orchards (e.g., *Green Gulch Organic Farm*, *Riverbend Orchards*, *Sea Harvest Dock*).
5.  **Exclusive Culinary Events:**
    *   Displays unique dining experiences, including winemaker dinners, foraging workshops, and weekly rotating family-style harvest suppers.
    *   Includes an active "spots remaining" tracker to instill high engagement.
6.  **Interactive Lightbox Gallery:**
    *   An elegant grid of high-resolution professional imagery segmented by category (dishes, drinks, interiors, farms).
    *   Features a custom overlay Lightbox Modal allowing users to open and inspect large-scale images with captions.
7.  **Complete Accessibility & Responsiveness:**
    *   Fully optimized from ultra-wide desktops down to mobile screens.
    *   Features a convenient mobile-only floating action button for quick bookings.

---

## 🛠️ Tech Stack

*   **Frontend Library:** React 19 (leveraging modern component structures and state hooks).
*   **Language:** TypeScript (fully typed interfaces for menu items, reservation formats, events, and gallery items).
*   **Build Tool & Dev Server:** Vite 8 (extremely fast Hot Module Replacement and production optimization).
*   **Styling Engine:** Tailwind CSS v4 (using the high-performance native `@tailwindcss/vite` compiler plugin for compiling styles directly without standard PostCSS bottlenecks).
*   **Iconography:** Lucide React (for uniform, modern, and light-weight semantic icons).
*   **Server Utilities (Optional/Configured):** Express (dependencies configured for lightweight deployment or preview environments).

---

## 📂 Project Structure

```bash
terra-and-hearth/
├── src/
│   ├── components/
│   │   ├── pages/                   # Section-specific page views
│   │   │   ├── AboutPage.tsx        # Story, philosophy, and interactive farm partners
│   │   │   ├── ContactPage.tsx      # Hours, location info, and contact forms
│   │   │   ├── EventsPage.tsx       # Winemaker dinners, workshops, and weekly suppers
│   │   │   ├── GalleryPage.tsx      # Filterable photo grid
│   │   │   ├── HomePage.tsx         # Hero section, seasonal spotlights, and guest quotes
│   │   │   ├── MenuPage.tsx         # Filterable digital menu with pairings and sourcing
│   │   │   └── ReservationsPage.tsx # Standard booking form with real-time feedback
│   │   ├── Footer.tsx               # Footer with address, hours, maps, and social links
│   │   ├── LightboxModal.tsx        # High-resolution image popup overlay
│   │   ├── Navbar.tsx               # Editorial header with responsive mobile drawer
│   │   └── ReservationModal.tsx     # Global overlay modal for swift table booking
│   ├── data/
│   │   └── restaurantData.ts        # Comprehensive database representing menu, hours, and team
│   ├── App.tsx                      # Central controller (SPA state, toasts, layout)
│   ├── index.css                    # Global imports (Tailwind v4 `@import "tailwindcss"`) and theme overrides
│   ├── main.tsx                     # React application entry point
│   └── types.ts                     # Strict TypeScript interfaces representing data contracts
├── index.html                       # HTML shell loading Google Web Fonts (Cormorant Garamond, Caveat, Plus Jakarta Sans)
├── package.json                     # Dependency manifests and run scripts
├── tsconfig.json                    # Compiler directives for static analysis
└── vite.config.ts                   # Bundler settings incorporating React and Tailwind plugins
```

---

## 🚀 Getting Started

### 1. Prerequisites
Ensure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your machine.

### 2. Installation
Clone the repository and install the development dependencies:
```bash
# Navigate to the project folder
cd terra-and-hearth

# Install packages
npm install
```

### 3. Development
Start the local development server with Vite:
```bash
npm run dev
```
The application will launch on your local network:
*   Local: [http://localhost:3000](http://localhost:3000)

### 4. Build for Production
To build optimized, static production files inside the `dist/` directory:
```bash
npm run build
```

### 5. Type Checking / Linting
Verify static type safety throughout the TypeScript codebase:
```bash
npm run lint
```

### 6. Clean Artifacts
Purge local build folders and leftover assets:
```bash
npm run clean
```

---

## 🌾 Sourcing Acknowledgement

All ingredients served in spirit at Terra & Hearth are sourced from independent growers, sustainable ranches, and wild foragers of Marin County and the greater Northern California region. This digital project is dedicated to the craftsmen, winemakers, and soil stewards who keep live-fire traditions alive.

---

## 📄 License
This project is private and proprietary. All rights reserved.
