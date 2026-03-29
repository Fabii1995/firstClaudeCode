# Todo App — Product Spec

## Overview
A personal todo list web app built with React. Supports categorized tasks, clean modern UI, and persists data locally in the browser.

---

## Stack
| Layer | Technology | Why |
|-------|-----------|-----|
| UI | React (Vite) | Component-based UI, industry standard |
| Styling | CSS Modules | Scoped styles, no class conflicts |
| Storage | localStorage | No backend needed for personal use |
| Deploy | Netlify (via GitHub) | Auto-deploy on push |

---

## Features

### Phase 1 — Complete
- [x] Add a todo item with a title
- [x] Assign a category to each todo (Work, Home, Personal, Other)
- [x] Mark a todo as complete
- [x] Delete a todo
- [x] Filter todos by category
- [x] Filter todos by status (All, Active, Done)
- [x] Persist todos across page reloads (localStorage)
- [x] Progress bar showing completion % per category
- [x] Two-panel desktop layout (sidebar + main)
- [x] Search bar to filter todos by text

### Phase 2 — Planned
- [ ] Edit an existing todo
- [ ] Due dates
- [ ] Priority levels (Low, Medium, High)
- [ ] Custom categories (add/rename/delete)

---

## Layout

### Desktop (≥ 768px) — Two-panel
```
┌─────────────┬──────────────────────────────┐
│   SIDEBAR   │           MAIN               │
│  260px      │          flex: 1             │
│             │                              │
│  App title  │  Search bar                  │
│  Date       │  Add todo input              │
│  Progress   │  Status filters              │
│  Category   │  Todo list                   │
│  nav +      │                              │
│  counts     │                              │
└─────────────┴──────────────────────────────┘
```

### Mobile (< 768px) — Single column
Sidebar collapses, category nav moves to horizontal tabs above input.

---

## Components
```
src/
  App.jsx               ← Root, holds all state
  constants.js          ← CATEGORIES data
  components/
    Sidebar.jsx         ← Left panel: title, date, progress, category nav
    CategoryNav.jsx     ← Vertical category list with counts (used in sidebar)
    SearchBar.jsx       ← Text search input
    TodoInput.jsx       ← Add-todo input + category selector
    TodoList.jsx        ← Renders list or empty state
    TodoItem.jsx        ← Single todo row
```

---

## Data Model

```js
{
  id: 1234567890,       // timestamp used as unique ID
  title: "Buy groceries",
  category: "home",     // "work" | "home" | "personal" | "other"
  done: false,
  createdAt: "2026-03-29T14:00:00Z"
}
```

---

## Categories
| Name     | Color  |
|----------|--------|
| Work     | Blue   |
| Home     | Green  |
| Personal | Purple |
| Other    | Orange |

---

## Color Scheme — Black & Gold Elegance
| Token       | Value     |
|-------------|-----------|
| Background  | `#000000` |
| Surface     | `#14213D` |
| Border      | `#1f2f50` |
| Gold        | `#FCA311` |
| Text        | `#ffffff` |
| Muted text  | `#6b7280` |

---

## Deployment
- GitHub repo: `Fabii1995/firstClaudeCode`
- Netlify site: `https://firstclaudecode.netlify.app`
- Branch: `master` — every push triggers an automatic deploy
