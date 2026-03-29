# Todo App — Product Spec

## Overview
A personal todo list web app built with React. Supports categorized tasks, clean modern UI, and persists data locally in the browser.

---

## Stack
| Layer | Technology | Why |
|-------|-----------|-----|
| UI | React (Vite) | Component-based UI, industry standard |
| Styling | CSS (custom) | Full control, good for learning fundamentals |
| Storage | localStorage | No backend needed for personal use |
| Deploy | Netlify (via GitHub) | Auto-deploy on push |

---

## Features

### MVP (Phase 1)
- [ ] Add a todo item with a title
- [ ] Assign a category to each todo (Work, Home, Personal, Other)
- [ ] Mark a todo as complete
- [ ] Delete a todo
- [ ] Filter todos by category
- [ ] Filter todos by status (All, Active, Done)
- [ ] Persist todos across page reloads (localStorage)

### Nice to Have (Phase 2)
- [ ] Edit an existing todo
- [ ] Due dates
- [ ] Priority levels (Low, Medium, High)
- [ ] Custom categories (add/rename/delete)
- [ ] Dark mode

---

## UI Screens

### Main Screen
- Header with app title
- Category tabs across the top (All, Work, Home, Personal, Other)
- Add todo input bar (title + category selector + Add button)
- Todo list filtered by selected category
- Status filter (All / Active / Done)
- Footer showing count of remaining items

### Todo Item
- Checkbox to mark complete
- Title (strikethrough when done)
- Category badge (color-coded)
- Delete button

---

## Data Model

```js
// Single todo item
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
| Name | Color |
|------|-------|
| Work | Blue |
| Home | Green |
| Personal | Purple |
| Other | Orange |

---

## Deployment
- GitHub repo: `Fabii1995/firstClaudeCode`
- Netlify site: `https://firstclaudecode.netlify.app`
- Branch: `master` — every push triggers an automatic deploy
