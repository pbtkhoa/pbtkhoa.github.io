# 03 — Kỹ thuật, deploy và skills

## 1. Stack

- **Nuxt 4.6** (Vue 3.5), chạy SSR lúc build và xuất tĩnh bằng `nuxt generate`. Không có server lúc chạy.
- **Tailwind CSS v4** qua `@tailwindcss/vite`, nạp ở `app/assets/css/main.css`. Token màu và chữ khai báo bằng `@theme` khi đã chốt hướng thiết kế.
- **@nuxt/fonts**: tự tải phông về lúc build và tự host. Trang chạy không gọi Google Fonts.
- **@nuxt/image**: ảnh chân dung, ảnh dự án, tự ra WebP/AVIF và `srcset`.
- **@nuxt/eslint**: `npm run lint`.
- Dự kiến thêm khi dựng thật: `@nuxtjs/seo` (sitemap, robots, schema.org, ảnh OG bằng satori, không cần API key). `@nuxt/content` chỉ thêm khi bắt đầu viết case study hoặc bài viết.

## 2. Deploy lên GitHub Pages

- `nuxt.config.ts` đặt `nitro.preset = 'github_pages'`, nên lúc build tự sinh `.nojekyll` và `404.html`.
- Workflow ở `.github/workflows/deploy.yml`: push lên `main` → `npm ci` → `npm run lint` → `nuxt generate` → `upload-pages-artifact` → `deploy-pages`. Trong Settings → Pages của repo phải chọn **Source: GitHub Actions**.
- **Tên repo quyết định đường dẫn:**
  - Repo `pbtkhoa/pbtkhoa.github.io` → trang ở `https://pbtkhoa.github.io/`, `baseURL` là `/`. **Khuyên dùng.**
  - Repo `pbtkhoa/pbtkhoa-github` → trang ở `https://pbtkhoa.github.io/pbtkhoa-github/`. Khi đó đặt biến `NUXT_APP_BASE_URL=/pbtkhoa-github/` trong bước `nuxt generate` của workflow.
  - Domain riêng: thêm file `public/CNAME` và để `baseURL` là `/`.
- **Đã deploy 08/10/2026:** repo `pbtkhoa/pbtkhoa.github.io` (remote `origin`), Pages nguồn GitHub Actions, trang ở https://pbtkhoa.github.io/. Workflow lấy `base_path` từ `configure-pages` nên không cần đặt `NUXT_APP_BASE_URL` bằng tay. Theo quy tắc của thư mục, mọi lần push vẫn phải hỏi trước.

## 3. Lệnh

| Lệnh | Việc |
|---|---|
| `npm run dev` | Chạy dev ở `http://localhost:3000` |
| `npm run generate` | Xuất tĩnh ra `.output/public` |
| `npx serve .output/public` | Xem bản tĩnh như trên GitHub Pages |
| `npm run lint` | ESLint |
| `npm run typecheck` | Kiểm tra kiểu (cần `vue-tsc`, cài khi cần) |

## 4. Skills đã cài (08/10/2026)

Cài bằng `npx skills add <repo> --skill <tên> -a claude-code -y`, phạm vi project, vào `.claude/skills/`, khóa phiên bản trong `skills-lock.json`. Đã kiểm tra script đi kèm: không có lệnh gọi mạng, không cần API key.

| Skill | Nguồn | Lượt cài | Dùng khi |
|---|---|---|---|
| nuxt | antfu/skills | 23,5K | Mọi việc với Nuxt. **Lưu ý:** viết theo Nuxt 5 (Nitro v3), project đang Nuxt 4, bỏ qua phần chỉ có ở Nuxt 5. |
| vue-best-practices | vuejs-ai/skills | 40,3K | Viết component Vue, `<script setup>`, TypeScript |
| nuxt-content | onmax/nuxt-skills | 2,6K | Khi thêm case study/bài viết bằng Markdown |
| nuxt-seo | onmax/nuxt-skills | 2,9K | Sitemap, robots, schema.org, ảnh OG |
| tailwind-design-system | wshobson/agents | 67,5K | Token Tailwind v4, `@theme` |
| frontend-design | anthropics/skills | 962K | Hướng thiết kế, chữ, tránh giao diện rập khuôn |
| minimalist-ui | leonxlnx/taste-skill | 386K | Giữ phong cách tối giản |
| ui-ux-pro-max | nextlevelbuilder/ui-ux-pro-max-skill | 386K | Tra bảng màu, cặp phông, quy tắc UX |
| brand | nextlevelbuilder/ui-ux-pro-max-skill | 32,6K | Giọng văn và nhận diện cá nhân |
| web-design-guidelines | vercel-labs/agent-skills | 709K | Rà UI theo Web Interface Guidelines |
| accessibility | addyosmani/web-quality-skills | 59,4K | Kiểm tra WCAG 2.2 |
| performance | addyosmani/web-quality-skills | 38,6K | Tốc độ tải, phông, ảnh |
| seo | addyosmani/web-quality-skills | 49,2K | Meta, dữ liệu có cấu trúc |
| svg-logo-designer | rknall/claude-skills | ~7,5K | Vẽ logo/monogram bằng SVG |
| favicon-gen | jezweb/claude-skills | 2,2K | Bộ favicon, apple-touch, manifest (cần ImageMagick, máy đã có `magick`) |

**Không cài, và lý do:**

- `nuxt-ui`: trang tối giản không cần thư viện component.
- `design`, `image`, `seo-image-gen`: cần API key (Gemini, Flux…).
- `tailwindcss-development` (laravel/boost): viết cho Blade.
- `canvas-design`, `banner-design`, `design-system`: không cần hoặc trùng với skill đã có.
- GitHub Pages và `@nuxt/image` chưa có skill nào đáng tin. Workflow viết tay ở trên.
