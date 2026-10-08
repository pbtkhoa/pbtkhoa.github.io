# pbtkhoa-github

Personal portfolio of Phạm Bá Tuấn Khoa (full-stack engineer, Vietnam), published as a static site on GitHub Pages. English only. Multi-page (home, services, work, about, contact; blog later), eye-catching rather than minimal. Confirmed concept: "Lantern Hour" (dusk sky, real photo of Khoa in a glowing circle, fireflies), see `planning/05-concept.md`. Audience is global: no timezone widgets, no Europe-only copy. Not a Binventor project: never use Binventor brand colours or copy.

## Stack

- Nuxt 4 + Vue 3, static output via `nuxt generate`, Nitro preset `github_pages`.
- Tailwind CSS v4 through `@tailwindcss/vite`; entry `app/assets/css/main.css`.
- **Styling is Tailwind utilities only** (Khoa, 08/10/2026). No `<style>` blocks in components, no inline `style` attributes or `:style` bindings, no `element.style` in scripts, no custom CSS classes. `main.css` holds only Tailwind setup: `@import`, `@custom-variant`, `@theme` tokens (colours, fonts, radii, animations) and the day-theme token overrides. Repeated class lists live as constants in `app/utils/ui.ts` or in small components.
- `@nuxt/fonts` self-hosts fonts at build time, `@nuxt/image` for images, `@nuxt/eslint` for lint.
- Deploy: `.github/workflows/deploy.yml` (GitHub Actions → Pages). Set `NUXT_APP_BASE_URL` when the repo is not `pbtkhoa.github.io`.

## Where the thinking lives

- `planning/01-muc-tieu.md`: goal, audience, content taken from the CV, open questions.
- `planning/02-thiet-ke.md`: portfolio research, the three directions, chosen direction.
- `planning/03-ky-thuat.md`: stack, deploy, installed skills and why.
- `planning/04-avatar.md`: anime avatar experiment (not used).
- `planning/05-concept.md`: **the confirmed concept**: pages, sections, components, tokens, open items.
- `planning/06-dung-nuxt.md`: how the Nuxt build maps the mockup, deviations and why, traps hit, open items.
- `design/mockup/`: **the confirmed mockup** (`index.html` + `content.js` + `khoa.webp`). Build the Nuxt site from this.
- `design/tokens.css`: colour and type tokens for the confirmed concept.
- `design/mockups-v2/`, `design/mockups/`, `design/avatar/`: rejected explorations, reference only.
- `artifact/`: the single latest HTML report (replace, don't pile up).

## Commands

- `npm run dev`, `npm run generate`, `npm run lint`.
- Preview the static build with `npx serve .output/public`.

## Content rules

- Facts come from the CV (`~/Documents/PHAM_BA_TUAN_KHOA_CV_2026.pdf`). Do not invent metrics, clients or testimonials.
- No phone number on the site's pages. The downloadable CV PDF (`public/pham-ba-tuan-khoa-cv.pdf`) keeps it; Khoa confirmed this on 08/10/2026.
- Availability status appears in the first screen. No local-time or timezone widgets.

## Quality floor

- Light and dark themes, both designed. Contrast ≥ 4.5:1 for text.
- No horizontal scroll at 390px. Visible focus. Respect `prefers-reduced-motion`.
- After any visible change: test with the agent-browser CLI and deliver screenshots in `artifact/`.

## No comments, no console output

No code comments and no `console.*` left behind. Explanations go in `planning/`.

## Skills

Project skills in `.claude/skills/` (locked in `skills-lock.json`): nuxt, vue-best-practices, nuxt-content, nuxt-seo, tailwind-design-system, frontend-design, minimalist-ui, ui-ux-pro-max, brand, web-design-guidelines, accessibility, performance, seo, svg-logo-designer, favicon-gen. The `nuxt` skill targets Nuxt 5; this project is Nuxt 4.

## Git

Never push without asking each time. Ask before committing unless the user just asked for it.
