# 🚁 KWARTZ FPV - Cinematic Portfolio

> **"Sky is our limit."**
> An immersive, full-screen web experience showcasing the world of Mountain Surfing and Cinematic FPV.

## 🏔️ Project Overview

This repository hosts the source code for the **Kwartz FPV Portfolio**. Completely redesigned in 2025, this site moves away from traditional scrolling to offer a **Cinematic Experience**. It features full-page snapping sections, video backgrounds, and a modern "Bento Grid" layout to showcase high-performance drone builds.

## ✨ Key Features

* **🎥 Immersive Hero Section:** Full-screen HTML5 video background (WebM) with a seamless fallback poster for mobile performance.
* **⚡ CSS Scroll Snap:** A "magnetic" scrolling experience that locks each section to the viewport for a presentation-like feel.
* **🍱 Bento Grid Layout:** A modern, asymmetrical grid in the "Hangar" section to showcase the 7" Long Range and 5" Freestyle builds.
* **📱 Fully Responsive:** Adaptive design that switches from complex grids to stacked layouts on mobile devices.
* **📺 YouTube Integration:** Custom-styled video grid allowing playback of cinematic footage directly within the portfolio.
* **🎨 Dark Glassmorphism UI:** A sleek, dark aesthetic with blurred overlays and neon blue accents (`#00a8ff`).

## 🛠️ Tech Stack

* **HTML5:** Semantic structure.
* **CSS3:** Advanced usage of Grid, Flexbox, Scroll Snap, and Media Queries.
* **JavaScript:** Vanilla JS for mobile navigation and DOM manipulation.
* **Assets:** Boxicons (Icons), Google Fonts (Montserrat).

## 🚀 How to Run Locally

Since this project uses modern browser features and YouTube embeds, it is recommended to run it via a local server to avoid CORS issues.

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/ton-pseudo/KwartzFPV-portfolio.git](https://github.com/ton-pseudo/KwartzFPV-portfolio.git)
    ```

2.  **Open with VS Code.**

3.  **Launch with Live Server:**
    * Install the "Live Server" extension in VS Code.
    * Click **"Go Live"** at the bottom right of the window.

## 📂 Project Structure

├── index.html # Main structure 
├── style.css # Styling (Scroll snap, Grid, Responsive) 
├── script.js # Mobile menu logic 
├── assets/ │ 
├── header-video.webm # Background video │ 
├── background2.webp # Hero fallback image │ 
├── drone-7.webp # 7" Drone photo │ 
├── drone-5.webp # 5" Drone photo │ 
└── gear.webp # Equipment photo 
└── README.md # Documentation


## 🔧 Customization

To update the content:
* **Images:** Replace the `.webp` files in the root folder with your own (ensure they keep the same names or update the HTML).
* **Video:** Replace `header-video.webm` with a short, muted, loopable clip (< 5MB recommended).
* **Links:** Update the `href` attributes in `index.html` to point to your new Rotorbuilds or YouTube videos.

## 📬 Contact

* **Instagram:** [@kwartz_fpv](https://www.instagram.com/kwartz_fpv)
* **YouTube:** [Kwartz_fpv](https://www.youtube.com/@Kwartz_fpv)
* **Email:** thomfpv@gmail.com

---
