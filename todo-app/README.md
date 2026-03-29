# Digital Ledger — Todo App

A personal task management app built with a luxury "Midnight Executive" aesthetic. Treats every task as a high-value entry in a digital ledger.

**Live:** [firstclaudecode.netlify.app](https://firstclaudecode.netlify.app)

---

## Features

- **Categories** — Work, Home, Personal, Other with color-coded chips
- **Category stats** — Bento grid showing completion progress per category
- **Search** — Real-time filtering across all tasks
- **Status filters** — All / Active / Done
- **Progress bar** — Gold gradient bar showing overall completion %
- **Persistent storage** — Tasks saved in localStorage, survive page reloads

---

## Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| UI Framework | [React](https://react.dev) (Vite) | Component-based UI |
| Styling | [Tailwind CSS v3](https://tailwindcss.com) | Utility-first CSS |
| Fonts | [Manrope + Inter](https://fonts.google.com) (Google Fonts) | Editorial typography |
| Icons | [Material Symbols](https://fonts.google.com/icons) (Google) | Outlined icon set |
| Storage | Browser localStorage | Client-side persistence |
| Deploy | [Netlify](https://netlify.com) | Auto-deploy from GitHub |

---

## Design

The UI was designed using **[Google Stitch](https://stitch.withgoogle.com)** — Google's AI-powered design tool that generates production-ready design systems and component specs.

The design system is called **"The Midnight Executive"** — surfaces use deep blacks and midnight blues (`#131313`, `#1b1b1b`) with a signature High-Chroma Gold (`#fca311`) for actions and achievement.

Key design rules:
- No 1px divider lines — depth defined through background shifts
- Gradient gold CTAs (`#ffc887` → `#fca311`) for a metallic feel
- Ghost border inputs (outline at 15% opacity)
- Color accent pills on task cards, revealed on hover

---

## Built With Claude

This entire app — from scaffolding to deployment — was built using **[Claude Code](https://claude.ai/code)** by Anthropic:

- Scaffolded the React + Vite project and all components
- Debugged circular dependency and Tailwind config issues
- Created the GitHub repo and configured Netlify via API
- Translated the Stitch design system into working React + Tailwind code

---

## Project Structure

```
src/
  App.jsx                ← Root component, holds all state
  constants.js           ← Category definitions
  components/
    AddTaskBar.jsx       ← Floating bottom input bar
    CategoryStats.jsx    ← Bento grid with per-category stats
    CategoryTabs.jsx     ← Horizontal filter tabs
    SearchBar.jsx        ← Real-time search input
    TodoItem.jsx         ← Single task row
    TodoList.jsx         ← List renderer + empty state
```

---

## Getting Started

```bash
cd todo-app
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

---

## Deploy

Every push to `master` triggers an automatic Netlify build:

```bash
git add .
git commit -m "your message"
git push
```

Build command: `npm run build` · Publish directory: `dist`
