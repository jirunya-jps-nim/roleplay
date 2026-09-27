# FLUX. — System Incident Management & Roleplay Studio

A bold, modern SaaS web application engineered with a high-contrast editorial aesthetic (Brutalist-lite) for enterprise incident orchestration and interactive bilingual meeting roleplay rehearsals.

---

## 🌟 Features

### 1. High-Contrast Editorial SaaS Design
- **Typography**: Heavy display typography (**Anton**) for high-impact headlines paired with **Satoshi / Plus Jakarta Sans** for body readability.
- **Color Palette**:
  - Primary Accent: `#ffe17c` (Golden Yellow with 15° rotated highlight overlays)
  - Dark Slate/Charcoal: `#171e19`
  - Dark Gray: `#272727`
  - Sage: `#b7c6c2`
  - Crisp White: `#ffffff`
- **40px Grid Pattern**: Engineering blueprint grid background.
- **Micro-Interactions**: Smooth 300ms cubic-bezier transitions for cards, buttons, and telemetry metrics.

### 2. Live System Diagnostics Mockup (Console)
- **Traffic Light Controls**: Browser mockup frame with red/yellow/green indicators.
- **Interactive Simulation**:
  - **Plug LAN Cable**: Switches Emily's laptop from unstable Wi-Fi to direct Cat6 wired Ethernet (drops ping to 9ms).
  - **Switch vLAN**: Simulates SysAdmin Jane's 2-minute IT VLAN #402 priority isolation.
- **Properties Panel**: Live font displays, alignment icons, and `#FFE17C` hex color swatch.
- **Interactive Cursor**: Dynamic floating cursor tagged with SysAdmin Jane's live actions.

### 3. Complete Bilingual Roleplay Script Studio (Pages 1–6)
Includes the full, verbatim transcript from all 6 pages of the emergency meeting document:
- **5 Character Roles**:
  - **Alex** — IT Manager (ประธานการประชุม / Chairperson)
  - **Emily** — Marketing Employee (พนักงานการตลาด / Presenter)
  - **Ben** — IT Support (เจ้าหน้าที่ไอที / Hardware & LAN)
  - **Jane** — System Administrator (ผู้ดูแลระบบ / Server logs & vLAN)
  - **Mike** — Project Manager (ผู้จัดการโครงการ / Device Redundancy)
- **Role Spotlight Filter**: Click any character to spotlight their lines while dimming others.
- **AI Text-To-Speech (Web Speech API)**: Native English voice synthesis with customized pitch and rate per character.
- **Sequential Auto-Play**: Play through the entire meeting dialogue sequentially.
- **Thai Translation Toggle**: Switch Thai translation on/off for listening & reading practice.
- **Key Business English Idioms**: Highlighted vocabulary chips (*"dual-track solution"*, *"on the same page"*, *"building on what you said"*, *"as far as I'm concerned"*).
- **Fullscreen Teleprompter HUD**: Auto-scrolling teleprompter with speed controls (1x, 1.5x, 2x) for real-time rehearsal.

---

## 🚀 How to Run Locally

1. Open `index.html` directly in any modern web browser (Google Chrome, Microsoft Edge, Firefox, Safari).
2. Or run via local server:
   ```bash
   npx serve . -l 3000
   ```
   Then open `http://localhost:3000` in your browser.

---

## 📁 Project Structure

- `index.html` - Main high-contrast landing page, diagnostic console, and roleplay UI.
- `style.css` - Brutalist-lite styling, CSS grid, dark/light contrast rules, and animations.
- `script_data.js` - Complete structured database of all dialogues from PDF pages 1–6 with Thai translations & idioms.
- `app.js` - Interactive roleplay engine, speech synthesis, live status simulation, and teleprompter.
