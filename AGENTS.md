# AGENTS.md — Taufiq Andrian Portfolio

## Stack

- **React 19** + **Vite 8** (plain JSX, no TypeScript)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin
- **No test framework** — none installed, no test scripts

## Commands

```bash
npm run dev      # Vite dev server (HMR)
npm run build    # Production build
npm run lint     # oxlint (only linter, no typecheck)
npm run preview  # Preview production build
```

Run `npm run lint` before committing. No typecheck step exists.

## Architecture

Single-page portfolio (no routes). All sections rendered in `App.jsx` with smooth scroll navigation.

```
src/
├── main.jsx                    # Entrypoint: BrowserRouter + HelmetProvider
├── App.jsx                     # Wraps everything in ThemeProvider; init Lenis
├── styles/index.css            # Tailwind import + CSS custom properties + custom classes
├── context/ThemeContext.jsx     # Dark mode (class-based toggle on <html>)
├── components/
│   ├── layouts/                # Navbar.jsx, Footer.jsx
│   ├── sections/               # Hero, About, Skills, Projects, Experience, Services, Gallery, Contact
│   └── ui/                     # ThemeToggle, NeoButton, SectionHeading, LoadingScreen, etc.
├── data/                       # Plain JS modules: skills, projects, experience, services, gallery
├── hooks/                      # useInView (IntersectionObserver)
└── utils/helpers.js            # scrollToSection(), socialLinks
```

## Dark Mode System (IMPORTANT)

**Do NOT add color tokens to `@theme` for themed colors.** Tailwind v4 compiles `@theme` values at build time — CSS variables in `@theme` do not resolve dynamically at runtime.

Instead:

- All themeable colors are CSS custom properties prefixed `--cr-*` defined in `:root` and overridden in `.dark` (see `src/styles/index.css`).
- Components reference them via inline `style={{ backgroundColor: 'var(--cr-bg)' }}` or custom CSS utility classes (`.bg-primary`, `.bg-accent`, etc.).
- The `ThemeContext` toggles class `dark` on `<html>`. This propagates to all `var(--cr-*)` references instantly.
- Brand accent colors also shift in dark mode (slightly dimmer versions).

Available CSS variables: `--cr-bg`, `--cr-bg-card`, `--cr-text`, `--cr-text-muted`, `--cr-text-subtle`, `--cr-border`, `--cr-primary`, `--cr-secondary`, `--cr-accent`, `--cr-green`.

Custom CSS classes for brand colors: `.bg-primary`, `.bg-secondary`, `.bg-accent`, `.bg-green`, `.text-primary`, `.text-secondary`, `.text-accent`, `.text-green`.

Hover utilities: `.hover-bg-primary-60`, `.neobrutalist-hover`, `.neobrutalist-hover-light`.

## Key Dependencies

| Package | Purpose |
|---------|---------|
| framer-motion | Animations (layout, page transitions, scroll reveals) |
| lenis | Smooth scroll — initialized once in `AppContent` |
| gsap | Additional animations |
| react-icons | Icon components (Fa*, Si*, Hi*) |
| react-helmet-async | `<Helmet>` for meta/SEO |
| react-router-dom | `BrowserRouter` wrapper (routes not used yet) |
| formsubmit.co | Contact form — POST ke FormSubmit.co (no env vars needed) |

## Contact Form

The Contact section uses **FormSubmit.co** (not EmailJS). Email tujuan sudah di-set ke `taufiqandrian99@gmail.com` langsung di `Contact.jsx`. Tidak perlu `.env` atau konfigurasi tambahan.

Form fields: `name`, `email`, `subject`, `message`.

## Neobrutalist Design Conventions

- Cards: `border: 3px solid var(--cr-border)` + `box-shadow: 6px 6px 0px var(--cr-border)`
- Buttons: `border: 3px solid var(--cr-border)` + `box-shadow: 4px 4px 0px var(--cr-border)` + uppercase + bold
- Section backgrounds alternate: cream (default), primary-yellow, secondary-blue, green, accent-orange
- All sections padded `py-20 sm:py-28`, content inside `max-w-7xl mx-auto px-6 sm:px-8 lg:px-10`
- Use `SectionHeading` component for section titles (props: `title`, `subtitle`, `color`)
- Use `NeoButton` component for CTA buttons
