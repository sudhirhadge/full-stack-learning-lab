
## 📁 `client` — Frontend (Next.js App)

This folder contains the frontend application built using **Next.js** with modern tooling and best practices.

---

## ⚙️ Tech Stack

* **Framework:** Next.js `16.x`
* **UI Library:** React `19.x`
* **Language:** TypeScript
* **Styling:** Tailwind CSS v4
* **Linting:** ESLint

---

## 🚀 Scripts

```bash
npm run dev     # Start development server
npm run build   # Production build
npm run start   # Run production server
npm run lint    # Lint codebase
```

---

## ⚡ Build System (Important Insight)

This project **does NOT use Vite or Create React App**.

Instead, Next.js comes with its **own integrated build system**:

* **Dev Mode:** Turbopack (fast, modern bundler) or Webpack (fallback)
* **Production Build:** Webpack (stable)

---

## 🔍 Next.js vs Vite (Why this matters)

| Feature    | Vite             | Next.js                 |
| ---------- | ---------------- | ----------------------- |
| Type       | Build tool       | Full-stack framework    |
| Dev Speed  | ⚡ Extremely fast | ⚡ Fast (with Turbopack) |
| Routing    | ❌ Manual         | ✅ Built-in              |
| SSR        | ❌                | ✅                       |
| API Routes | ❌                | ✅                       |
| Use Case   | SPAs             | Full production apps    |

### 💡 Key takeaway

* **Vite** → Best for lightweight frontend apps
* **Next.js** → Best for real-world apps (SSR, APIs, routing, SEO)

---

## ⚡ Performance Notes

* When running `npm run dev`, the app may use **Turbopack**, which provides:

  * Faster startup
  * Near-instant hot reloads
* If Turbopack is not enabled, it falls back to Webpack (slower)

---

## 🧠 Why Next.js in this project?

This repo is a **full-stack learning lab**, so Next.js is chosen because it:

* Supports both frontend + backend patterns
* Enables SSR and API routes
* Reflects real production architectures

---

## 📌 Current Status

* ✅ Frontend scaffolded and functional
* ⚙️ Backend planned (see `/server.js`)
* 🧪 Used for experimentation and concept learning


