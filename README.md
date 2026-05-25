# Keagan Herman | Full-Stack Software Engineer

A data-driven portfolio built with a focus on editorial design, high-performance interactions, and clean architecture.

## ✒️ Design Philosophy
This project embraces an **Editorial/Print aesthetic**, drawing inspiration from high-end typography and minimalist layouts.
- **Typography:** Utilizes Playfair Display for hollow headlines, Cormorant Garamond for elegant body text, and DM Mono for technical details.
- **Color Palette:** A warm "Ink on Paper" experience featuring:
  - **Paper:** `#f4efe4` (Warm Cream)
  - **Ink:** `#111009` (Deep Charcoal)
  - **Accent:** `#c8381a` (Terracotta)
- **Tensions:** Intentional design choices like high stroke contrast and non-standard letter-spacing create a unique visual rhythm.

## 🛠️ Tech Stack
- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (configured via CSS `@theme`)
- **Animations:** Framer Motion
- **Data:** Managed via `src/data/content.json` for easy updates.

## ✨ Key Features
- **Custom Cursor:** A dual-element cursor (solid dot + lagging spring-ring) with a multiply blend mode.
- **Editorial Layout:** Fixed horizontal ruled lines and large ghost numerals for section anchors.
- **Data-Driven:** All professional experience, skills, and projects are centralized in a single JSON schema.
- **Responsive & Performant:** Optimized for all devices while maintaining the core design integrity.

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- npm

### Installation
```bash
npm install
```

### Development
Run the development server:
```bash
npm run dev
```

### Build
Generate a production-ready build:
```bash
npm run build
```

## 📂 Project Structure
- `src/app/`: Next.js App Router and global styles.
- `src/components/`: Reusable UI components and section-specific layouts.
- `src/data/`: Centralized content (`content.json`).
- `src/types/`: TypeScript definitions for the content schema.

---
Built by [Keagan Herman](https://github.com/Keagan-Herman)
