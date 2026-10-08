# 06 — Dựng Nuxt từ mockup Lantern Hour

**Ngày 08/10/2026.** Dựng site Nuxt theo [05-concept.md](05-concept.md) và `design/mockup/`. Báo cáo kèm ảnh chụp ở [artifact/lantern-hour-demostore.html](../artifact/lantern-hour-demostore.html) (vòng 6; báo cáo các vòng trước ở commit 281cc94, e0f78a9, bde577c, 93fd4b1 và 2026f8f).

## 1. Cấu trúc

| Phần | Nơi |
|---|---|
| Nội dung (số liệu, dịch vụ, dự án, kinh nghiệm, FAQ, lựa chọn form) | `app/data/site.ts` |
| Token màu, chữ, bo góc, breakpoint `lg` = 900px | `app/assets/css/main.css` (`@theme static`, ghi đè cho `[data-theme="light"]`) |
| Khung trang (skip link, header, footer, đom đóm) | `app/layouts/default.vue` |
| Component | `app/components/` chia theo `home/`, `services/`, `work/`, `about/`, `contact/`, `ui/`. Tên không có tiền tố thư mục (`pathPrefix: false`), nên `HeroSky`, `CaseCard`… đúng như bảng trong concept. |
| Logic | `useTheme` (ngày/đêm), `useContactForm` (kiểm tra và gửi form), `usePublicUrl` (đường dẫn file trong `public/` có tính `baseURL`) |
| Trang | `/`, `/services`, `/work`, `/about`, `/contact`, `/privacy`, `error.vue` (404) |

## 2. Quyết định khi dựng

- **Ngày/đêm:** một đoạn script nhỏ trong `<head>` đặt `data-theme` trước khi trang hiện ra (lấy từ `localStorage`, nếu chưa chọn thì theo máy). Nút đổi lưu lựa chọn. Chưa chọn thì đổi theo máy khi máy đổi. Không tắt JS thì mặc định là đêm.
- **Phông:** `@nuxt/fonts` tự host. Fraunces phải lấy cả trục `opsz` (9..144) như mockup. Thiếu trục này H1 ở hero rớt xuống 4 dòng thay vì 3.
- **Ảnh:** gốc là `public/images/khoa.jpg` (xuất từ `design/avatar/source/cv-000.png`, chất lượng 92). `NuxtImg` sinh WebP lúc build: 36, 72, 96, 112, 192, 224, 460px.
- **Favicon:** ảnh tròn 48/32/16 trong `favicon.ico`, `apple-touch-icon.png` 180px vuông.
- **Form liên hệ không có backend** (chốt 08/10/2026, Khoa chọn không dùng Formspree hay Web3Forms). Form kiểm tra ô rồi mở ứng dụng email của khách bằng `mailto:` với nội dung điền sẵn. Nút ghi "Open in email app", có một dòng giải thích bên cạnh. Sau khi bấm, form hiện địa chỉ email để ai không có ứng dụng email vẫn viết được. Đã xóa biến `NUXT_PUBLIC_FORM_ENDPOINT` và nhánh gửi qua dịch vụ.
- **Đường dẫn gốc khi deploy:** workflow lấy `base_path` từ `actions/configure-pages` và đặt `NUXT_APP_BASE_URL`, nên repo tên gì hay dùng domain riêng đều không phải sửa.
- **CV:** `public/pham-ba-tuan-khoa-cv.pdf` chép từ `~/Documents/PHAM_BA_TUAN_KHOA_CV_2026.pdf`. Nút "Download CV" ở About và Contact trỏ vào đây.
- **Trang `/privacy`:** viết theo đúng những gì site làm: GitHub Pages, phông tự host, không cookie, không analytics, theme lưu trong trình duyệt. Chưa nêu tên dịch vụ nhận form vì chưa chọn.
- **Không làm `/impressum`:** cần địa chỉ bưu điện. Footer chỉ có GitHub, LinkedIn, Privacy.

## 3. Khác với mockup, và lý do

| Chỗ | Mockup | Bản dựng | Lý do |
|---|---|---|---|
| Dải kêu gọi (CTA) | chuyển màu `#4a3f8c → #c97a8e` | `#4a3f8c → #9a5874` | Dòng chữ nhỏ chỉ đạt 3.39:1 ở điểm xấu nhất. Giờ đạt 5.13:1, tiêu đề 5.95:1. |
| Đom đóm | hiện ngay giữa màn hình khi tải trang | ẩn tới lần đầu rê chuột, rồi xuất hiện tại con trỏ | Không để 5 chấm sáng đè lên chữ H1 khi mới vào. |
| Services, Work | hết trang là FAQ hoặc danh sách | thêm dải "Have a project…" ở cuối | Người đọc hết trang có sẵn bước tiếp theo. |
| Menu mobile | chỉ có link | thêm nút "Hire me" ở cuối | Trên mobile nút "Hire me" ở header bị ẩn. |
| Tiêu đề trang con | H2 | H1 | Mỗi trang cần đúng một H1. |
| Footer | có Impressum | bỏ | Xem mục 2. |
| Component đom đóm | `Fireflies` | `SiteFireflies` | ESLint yêu cầu tên component có từ hai chữ trở lên. |

## 4. Bẫy đã gặp

- **`:global()` trong CSS scoped của Vue nuốt cả selector.** `:global([data-theme="light"]) .stars` biên dịch thành `[data-theme="light"]`, nên cả thẻ `<html>` bị `opacity: 0` ở chế độ ngày và trang trắng trơn. Viết thẳng `[data-theme="light"] .stars`: Vue chỉ gắn thuộc tính scoped vào phần cuối selector.
- **`.wrap` nằm trong khung `display: grid`** sẽ co lại theo nội dung vì `margin-inline: auto`. Thêm `width: 100%` (gặp ở trang 404).
- **Không đặt `data-theme` trong `app.head.htmlAttrs`.** Unhead sẽ ghi đè giá trị mà script trong `<head>` vừa đặt, gây nháy màu khi hydrate.
- **`@nuxt/fonts` cần `global: true`** cho cả hai phông, vì Tailwind v4 giữ tên phông trong biến CSS nên module không tự phát hiện.

## 5. Kết quả kiểm tra (agent-browser, bản tĩnh `nuxt generate`)

- 6 trang + 404, nền đêm và ngày, 1440px và 390px. Không có lỗi console.
- 390px: `scrollWidth = 390` ở cả 6 trang.
- Tương phản đo trong trình duyệt: thấp nhất 4.54:1 (nhãn hổ phách trên nền dải phụ, chế độ ngày). Tất cả chữ thường ≥ 4.5:1, chữ lớn ≥ 3:1.
- Form: lỗi hiện dưới ô và focus nhảy về ô sai đầu tiên. Sửa ô nào thì lỗi ô đó tự tắt. Đã thử cả ba nhánh: mở email, gửi thành công, gửi lỗi (giả lập bằng `network route`).
- Giảm chuyển động: không có đom đóm, dải tên khách đứng yên, không có transition.
- Dung lượng: HTML trang chủ 7.1 KB, JS 90.7 KB gzip, CSS 8.4 KB gzip, ảnh hero 16 KB. LCP là ảnh hero, CLS 0.

## 6. Còn mở

- [x] **CV công khai có số điện thoại:** Khoa chọn giữ nguyên (08/10/2026). Số điện thoại không xuất hiện trên các trang, chỉ nằm trong file CV tải về.
- [x] Dịch vụ nhận form: không dùng, giữ `mailto:` (08/10/2026).
- [~] Ảnh gốc to hơn: tạm thời dùng bản AI làm nét 1200px, nền xóa phông (mục 9). Ảnh chụp thật từ 1200px trở lên vẫn tốt hơn.
- [ ] Tên repo hoặc domain riêng (đường dẫn gốc đã tự xử lý trong workflow). Sau đó: canonical, `og:image`, sitemap (`@nuxtjs/seo`).
- [ ] `/impressum` nếu làm với khách Đức (cần địa chỉ).
- [ ] Xác nhận "20+ online stores and apps delivered". Có ghi giá ở Services không.
- [ ] Giai đoạn 2: `/work/<slug>` cho từng case study. Blog để sau.

## 7. Vòng 2 (08/10/2026): form gọn, trang Work mới, thêm Node.js

Theo phản hồi của Khoa sau khi xem bản đầu.

- **Form liên hệ** chỉ còn tên, email, tin nhắn. Bỏ "What do you need?" và "Budget". Tiêu đề email ở nhánh `mailto:` là "Project enquiry from <tên>".
- **Thẻ dự án** bỏ khung trình duyệt rỗng (Khoa: "đâu có gì hiện ra đâu"). Mỗi dự án có một màn hình vẽ bằng SVG đúng loại sản phẩm: cửa hàng (`store`), bảng kế toán (`ledger`), đăng nhập ngân hàng có xác minh danh tính (`signin`), trang quản lý lead dạng bảng, không kéo thả (`leads`), lịch ghi giờ (`timesheet`), danh sách lệnh mua bán kèm chat thời gian thực (`trading`). Màu lấy từ token nên tự đổi theo ngày/đêm. Code ở `app/components/work/ProjectArt.vue` và `app/components/work/art/`. Hình Thermomix và crypto vẽ lại theo mô tả của Khoa; mô tả crypto thêm "listings and real-time chat between traders" (Khoa cung cấp, CV chỉ ghi "trading system").
- **Danh sách dự án đầy đủ theo CV:** 6 dự án nổi bật (`featuredProjects`) và 11 dự án khác (`moreProjects`), tổng 17. Bản CV gộp manomama và Brichbag vào thẻ Shopware.
- **Trang `/work`:** 6 thẻ so le → danh sách "Team projects and freelance builds" (công ty, năm, loại, mô tả, stack) → khối "And much more": tên các store, plugin Shopware, ghi chú phần lớn việc cho khách là NDA, nút "Ask about work like yours".
- **Trang chủ:** 3 thẻ dự án xếp dọc (Shopware, kế toán, GLS Bank), bấm vào nhảy tới đúng thẻ ở `/work#<slug>`. Dưới là dòng "Plus 14 more projects… See all projects". Số 14 tính từ dữ liệu.
- **Node.js:** Khoa đang chuyển dần sang full-stack PHP + Node. Đã sửa câu giới thiệu ở hero, thẻ vai trò (lúc đầu "PHP · Node.js · Vue", sau đổi thành chữ to "Full-stack engineer"), dịch vụ thứ hai thành "PHP and Node.js back ends", mô tả trang Services, đoạn About, meta description.
- **Tương phản mới đo:** nhãn loại dự án 5.92 (đêm) / 4.84 (ngày) sau khi giảm nền từ 16% xuống 10%. Lần đo đầu ở 16% chỉ đạt 4.44.

Còn mở thêm: nếu có ảnh chụp thật của các store công khai (van Laack, Egret…), có thể thay hình vẽ cho các dự án đó.

## 8. Vòng 3 (08/10/2026): kiểm tra kỹ và chuyển hết style sang Tailwind

### Đã kiểm tra

| Hạng mục | Cách làm | Kết quả |
|---|---|---|
| Hydration | `nuxt dev`, mở 7 trang × 2 theme, đọc cảnh báo Vue | Không có cảnh báo (sau khi sửa lỗi announcer, xem dưới) |
| Truy cập | axe-core 4.10 (WCAG 2.2 AA + best practice), 7 trang × 2 theme, 1440 và 390px | 0 vi phạm |
| Lighthouse | 12.6, Home/Work/Contact, mobile và desktop | A11y 100, Best practices 100, SEO 100. Hiệu năng desktop 100, mobile 93 (4G chậm giả lập, LCP 2.6 s). CLS mobile 0 |
| Bề rộng | 320, 375, 768, 899, 900, 1024, 1920px × 6 trang | Không cuộn ngang, header 68px, menu một hàng từ 900px |
| Link | Quét mọi `href`/`src` trong HTML đã build, kiểm tra anchor | 50 link nội bộ 200, anchor đủ. GitHub, LinkedIn, GitHub Privacy đều 200 |
| Đường dẫn con | Build với `NUXT_APP_BASE_URL=/pbtkhoa-github/`, chạy dưới thư mục con | 0 request lỗi, ảnh, phông, CV, favicon và chuyển trang đều đúng |
| Tương phản phần trên gradient | Lấy màu pixel thật sau nút | Nút "See my work": 4.87 (đêm) / 13.18 (ngày) |
| Giao diện sau khi đổi sang Tailwind | So pixel 24 ảnh trước/sau (6 trang × 2 theme × 2 bề rộng) | 16 ảnh giống hệt. 8 ảnh còn lại lệch dưới 600 pixel: dấu ✦ của dải tên khách và ba chấm cửa sổ, lệch 1–2px |

### Lỗi tìm ra và đã sửa

- **Ảnh tròn ở 900px** rộng hơn cột và lấn sang lề phải: đổi `min(420px, 80vw)` thành `min(420px, 100%)`.
- **Thứ tự tiêu đề** ở Services và Work nhảy từ H1 xuống H3 (axe báo): thẻ có `headingLevel`, thẻ ngay dưới H1 dùng H2.
- **Phông dự phòng không có số đo thật** (`local("serif")`, `size-adjust: 100%`): khi đặt `provider: 'google'`, `@nuxt/fonts` lấy fallback của Google và bỏ qua cấu hình. Bỏ `provider`, đặt `fallbacks: ['Georgia']` / `['Arial']`, bỏ `global: true` để module tự chèn tên fallback vào biến `--font-*` của Tailwind. CLS mobile từ 0.017 xuống 0.
- **Nút form ghi "Send message"** trong khi chỉ mở ứng dụng email: đổi thành "Open in email app" và thêm một dòng giải thích.
- **`NuxtRouteAnnouncer` có inline style**: thay bằng `useRouteAnnouncer()` và một thẻ `sr-only`. Chữ chỉ điền sau khi mount, vì điền lúc render sẽ lệch với HTML từ server (Lighthouse báo "Hydration completed but contains mismatches").

### Bẫy khi chỉ dùng Tailwind

- Tailwind v4 không tự quét `nuxt.config.ts`. Các class của `<html>`, `<body>` và page transition khai báo ở đó, nên cần `@source "../../../nuxt.config.ts";` trong `main.css`.
- Gradient của Tailwind v4 pha màu trong OKLab, còn CSS cũ pha trong sRGB. Tím → hổ phách khác hẳn nhau, và số đo tương phản trước đây đều tính theo sRGB. Dùng `bg-linear-*/srgb`. Riêng `bg-radial-[…]` không nhận `/srgb`, để mặc định (chỉ chuyển sang trong suốt nên không khác).
- `[&_p]:` chạm tới cả `<p>` bên trong component con. CSS scoped trước đây thì không. Dùng `[&>p]:` cho chữ của chính trang.
- Không truyền class đổi `display` hay đổi cùng thuộc tính (`hidden`, `gap-*`, `py-*`…) vào component đã có class đó (`AppButton`, `cardClass`). Thứ tự trong CSS quyết định bên thắng. Bọc bằng một thẻ ngoài, hoặc viết class riêng.
- Tailwind không có class cho `stroke-linecap`: đặt thành thuộc tính SVG ở thẻ `<svg>` gốc.
- Đom đóm vẽ bằng `<canvas>` thay vì đổi `element.style`. Màu đọc từ `--color-amber`, đổi theo `data-theme` qua `MutationObserver`.

### Lưu ý khi test bằng agent-browser

Sau khi chạy Lighthouse (mở thêm Chrome), tab của agent-browser có thể bị đánh dấu `visibilityState = hidden`. Khi đó `requestAnimationFrame` ngừng chạy, page transition kẹt ở `page-leave-active`, nhìn như chuyển trang hỏng. Đóng và mở lại trình duyệt là hết. Site không lỗi.

### Đã thử và bỏ

`features.inlineStyles: true` (nhét CSS vào HTML): Lighthouse không khá hơn, mà mỗi trang nặng thêm khoảng 23 KB. Một file CSS dùng chung được cache tốt hơn cho site nhiều trang.

## 9. Vòng 4 (08/10/2026): giới thiệu chung hơn

- Câu giới thiệu ở hero và meta description: "Vue front ends" đổi thành "JavaScript front ends", vì Khoa làm cả Vue lẫn React.
- Thẻ cạnh ảnh chỉ còn "Full-stack engineer", chữ Fraunces to hơn (`clamp(1.25rem, 2.2vw, 1.5rem)`), bỏ dòng stack "PHP · Node.js · Vue".
- **Ảnh chân dung (chọn phương án B, 08/10/2026):** làm từ `design/avatar/source/cv-000.png` (460px).
  1. Real-ESRGAN (`realesrgan-x4plus`, bản ncnn chạy trên máy) phóng 4× lên 1840px.
  2. Trộn 65% bản AI với 35% bản Lanczos, thêm chút hạt, để da không bị "vẽ".
  3. Tách người bằng Apple Vision (`VNGenerateForegroundInstanceMaskRequest`, script Swift nhỏ).
  4. Làm mờ nền bằng normalized blur (chỉ làm mờ phần nền rồi chia cho mặt nạ đã làm mờ, nên tóc không loang ra nền). Chữ "&Shift" không còn đọc được.
  5. Xuất 1200×1200: bản gốc lưu ở `design/avatar/source/khoa-1200-bokeh.jpg`, bản dùng trên site là `public/images/khoa.jpg`.

  Hero và About giờ có thêm bản 2× cho màn hình retina. Favicon và `apple-touch-icon` làm lại từ ảnh mới. Các phương án khác (A chỉ làm nét, C nền hoàng hôn, D nền sáng ấm) xem trong báo cáo.
- Vẫn nên có ảnh chụp mới từ 1200px trở lên: AI chỉ làm nét được đến mức này.
- **Tối ưu ảnh chân dung** (theo skill `performance`: đo trước, sửa, đo lại cùng điều kiện):
  - `KhoaPhoto` tự dựng `<picture>`: nguồn AVIF q50 trước, `<img>` WebP q75 dự phòng. Không dùng `<NuxtPicture>` vì nó chỉ cho một mức chất lượng chung cho mọi định dạng. URL nào tạo qua `useImage().getSizes()` cũng đi qua `$img`, nên vẫn được sinh sẵn lúc `nuxt generate`.
  - Ảnh hero dùng `sizes="300px 900:420px"`, ảnh About dùng `sizes="320:92vw 640:600px 900:470px"`.
    - Bẫy: trong cú pháp `sizes` của `@nuxt/image`, key là điểm bắt đầu (mobile-first). `900:300px 2560:420px` sẽ ra `(max-width: 2559px) 300px`, tức sai.
    - Giá trị `vw` không có key bị tính theo màn hình rộng 1px.
  - Chỉ ảnh `priority` mới được preload, kèm `type="image/avif"` và `fetchpriority="high"`. Logo ở header chỉ để `eager`, không preload nữa để khỏi tranh băng thông với ảnh hero. `@nuxt/image` chỉ thêm `fetchpriority` vào preload khi truyền `{ fetchPriority: 'high' }`, còn `true` thì không.
  - Kết quả đo, mỗi lần mở trình duyệt mới:
    | Thiết bị | Trước | Sau |
    |---|---|---|
    | Điện thoại @3× | 920px WebP, 23.6 KB | 840px AVIF, 12.5 KB |
    | Điện thoại @2× | 920px WebP, 23.6 KB | 600px AVIF, 8.8 KB |
    | Desktop @1× | 460px WebP, 10.0 KB | 420px AVIF, 5.9 KB |
  - Lighthouse Home mobile: ảnh tải về từ 25.3 KB xuống 10.1 KB, hiệu năng 93 lên 94. Mọi mục về ảnh (image delivery, responsive images, LCP discovery) đều đạt.
  - Một lần đo About desktop ra 80 vì TBT nhảy lên 470 ms khi máy đang bận. Ba lần đo lại đều 100.

## 10. Deploy (08/10/2026)

- Repo `pbtkhoa/pbtkhoa.github.io` có sẵn (rỗng, tạo cùng ngày). Bật Pages với nguồn GitHub Actions qua `gh api`, thêm remote `origin`, rồi push `main`. Build 35 s, deploy 17 s.
- Trước khi push, chạy thử đúng các bước của workflow trong container Linux x64 (`node:24`, OrbStack) trên bản `git archive`: `npm ci`, lint, `nuxt generate` đều qua. Lockfile tạo trên Mac vẫn có đủ gói native cho Linux (rollup, tailwind oxide, lightningcss, sharp, esbuild).
- Kiểm tra site thật:
  - Chrome (agent-browser): 7 trang có tiêu đề đúng, không ảnh hỏng, không `style=`, chuyển trang và link CV đều đúng.
  - WebKit và Firefox (Playwright): ảnh AVIF giải mã được, chọn đúng cỡ, phông tải đủ, không lỗi console.
  - Ảnh `/_ipx/...` nằm dưới đường dẫn có `&`. GitHub trả `image/jpeg` cho chúng vì đuôi file là `.jpg`, nhưng không gửi `nosniff`, nên cả ba trình duyệt vẫn nhận đúng định dạng.
- Trang 404 ghi `[NUXT_E1005]` ra console. Đây là lỗi 404 bắt được lúc app khởi động, khi router không tìm thấy trang, rồi trang "wandered off" hiện ra. Hành vi đúng, các trang thật không có.
- Workflow nâng lên `checkout@v7`, `setup-node@v7`, `configure-pages@v6`, `upload-pages-artifact@v5`, `deploy-pages@v5` (chạy Node 24), vì GitHub báo Node 20 đã cũ. Đã kiểm tra input và output: `base_path` và `path` vẫn còn.

## 11. Tên dự án (08/10/2026)

- Giữ nguyên tiêu đề và mô tả. Tên dự án thêm thành một dòng `highlight` dưới mô tả, cùng kiểu với dòng "Stores: …" của thẻ Shopware:
  - Kế toán SaaS ở Shape & Shift: "Project: cybooks" (viết thường theo cách Khoa ghi).
  - Nền tảng crypto ở Rikkeisoft: "Project: CHIP".
- Dòng `highlight` chỉ hiện ở `/work` (thẻ ngang). Thẻ dọc ở trang chủ không hiện, để ba thẻ cao bằng nhau.

## 12. Không ghi số năm cố định (08/10/2026)

Khoa không muốn câu chữ cứ mỗi năm lại sai, kiểu "ten years" hay "five years". Thay bằng năm bắt đầu:

- Thẻ số liệu: "10 · years shipping production code" thành "2016 · shipping production code", cùng kiểu với "2017 · freelancing alongside every job".
- Services: "Ten years of PHP and JavaScript" thành "PHP and JavaScript since 2016".
- Work: tiêu đề "Projects from the last ten years" thành "Projects I've shipped". Meta description "from ten years of client work" thành "from my client work".
- About: "spent the last five years on Shopware 6 and Laravel" thành "started with WordPress, Symfony and Laravel in 2016 … in 2021 took on Shopware 6, building stores and Laravel apps". Laravel có từ 2016 (Khoa xác nhận), chỉ Shopware 6 là từ 2021; bản đầu ghi "Shopware 6 and Laravel since 2021" là sai. Meta description cũng đổi tương tự.

Quy tắc từ nay: nói "since <năm>", không ghi số năm kinh nghiệm.

## 13. Dòng thời gian ở About (08/10/2026)

- Solio: "Drupal, Symfony and Vue for European clients." (trước đây ghi Shopware và "Austrian and German clients").
- Rikkeisoft: "Core member on client projects, including real-time features. Promising Employee 2017, Outstanding Employee 2018." Vai trò "Team Lead" đã ghi ở tiêu đề dòng nên không nhắc lại. Bỏ câu về Git workflow cho gọn. Danh hiệu 2017 lấy từ CV.
- Đoạn văn ở About và meta description: "companies in Germany and Austria" đổi thành "companies across Europe" (Khoa chọn, 08/10/2026). "Vorwerk Austria" là tên khách nên giữ.

## 14. Lỗi lệch dải CTA, ảnh "Xin chào" và logo (08/10/2026)

- **Nguyên nhân:** `KhoaPhoto` xuất `<picture class="contents">`. `display: contents` làm `<source>` và `<img>` thành phần tử con trực tiếp của lưới hoặc flex cha. `<source>` không bị trình duyệt ẩn mặc định, nên nó chiếm một ô:
  - Dải CTA: ảnh bị đẩy sang cột giữa, nút rơi xuống dòng mới (Khoa phát hiện).
  - Thẻ "Xin chào": ảnh bị đẩy xuống dòng.
  - Logo ở header: lệch thêm 10px.
- **Sửa:** thêm `class="hidden"` cho `<source>`. Trình duyệt vẫn đọc nó để chọn AVIF.
- **Kiểm lại:**
  - Dải CTA cùng một hàng, đúng thứ tự.
  - Thẻ "Xin chào" cao 160px, chữ trái ảnh phải.
  - Logo cách tên 10px.
  - Ảnh About bằng khung, vẫn là AVIF.
- **Bài học:** lần đổi ảnh trước chỉ đo dung lượng và chụp hero, About; chưa so bố cục ở mọi chỗ dùng `KhoaPhoto`. Từ nay, đổi component dùng chung thì phải kiểm tra mọi nơi dùng nó.
- Lỗi đã lên site thật ở commit `f837c24`, chỉ hết khi push bản sửa.

## 15. Thêm PosBill vào dự án nổi bật (08/10/2026)

- Lúc trước chưa có dự án nào ở NFQ trong phần nổi bật. Thêm "PosBill Mobile ordering app" · NFQ · 2019 – 2021, đặt trước thẻ crypto cho đúng thứ tự thời gian. Bỏ dòng Posbill khỏi danh sách dự án khác. Giờ có 7 dự án nổi bật và 10 dự án khác, tổng vẫn 17.
- Thông tin lấy từ trang Google Play (Khoa gửi link):
  - Tên "PosBill Mobile", nhà phát triển PosBill GmbH, "the perfect extension to your PosBill cash register".
  - Lợi ích ghi trên trang: "more time for your guests", "less walking for your employees".
  - Chỉ có Android (Khoa xác nhận), viết bằng React Native.
- Card có link "PosBill Mobile on Google Play ↗" (trường `link` mới của `Project`). Link chỉ hiện khi thẻ không phải là link, tức chỉ ở `/work`, để không lồng `<a>` trong `<a>`.
- Hình mới `ArtPos`: điện thoại Android dựng đứng, vẽ lại màn "Vorgang Tisch" của app thật theo ảnh chụp trên Google Play. Màu đo từ ảnh chụp:
  - Thanh tiêu đề, hàng thao tác, thanh nút dưới: xanh chuối `#aef656` / `#b1ee5a`.
  - Status bar và dòng đơn: `#265119`.
  - Danh sách: nền trắng, tab xám.
  - Cột "Gang": ô đang chọn `#12a55e`, ô báo động `#ff0d0d`.
  - Nút nổi: `#9bce35`.

  Đây là màu thương hiệu nên giữ cố định, không đổi theo theme. Nền thẻ là tone `meadow` (xanh lá đậm sang xanh chuối), giống ảnh quảng cáo của PosBill. `ProjectArt` hiện khung điện thoại khi `kind === 'pos'`.
- **Bài học:** bản đầu mình tự vẽ bằng màu của site (hổ phách, tím) và nền xanh mòng két, không giống app thật. Khoa nhắc: "đừng có làm kiểu khác khi chưa hiểu". Vẽ minh họa cho sản phẩm có thật thì xem ảnh chụp thật trước, lấy đúng màu và bố cục.
- Kiểm tra:
  - Thẻ cao 356px trên desktop, ngang các thẻ khác.
  - Không cuộn ngang ở 390px.
  - axe trên `/work`: 0 vi phạm.
  - Trang chủ vẫn ghi "Plus 14 more projects".

## 16. Link cybooks (08/10/2026)

- Chữ "cybooks" trong dòng "Project: cybooks" giờ là link tới https://app.cybooks.com.cy/ (Khoa gửi). Dữ liệu có thêm trường `highlightLink: { text, href }`; `CaseCard` tìm đúng đoạn chữ đó trong `highlight` để biến thành link. Chỉ hiện ở `/work`, nơi thẻ không phải là link.
- Kiểm tra link: `curl` không có user agent nhận 403. Có user agent của trình duyệt thật thì nhận 200. Chrome headless của agent-browser cũng bị 403. Tức là server chặn bot và trình duyệt tự động, còn người dùng thật vào được.


## 17. Vẽ lại ba hình theo sản phẩm thật (08/10/2026)

Khoa gửi ảnh chụp ba sản phẩm và muốn hình trên thẻ giống chúng. Cả ba hình dùng màu cố định của sản phẩm, không đổi theo theme, giống `ArtPos`.

- **cybooks (`ArtLedger`)**, vẽ theo ảnh dashboard. Màu lấy từ CSS của app.cybooks.com.cy, cần user agent trình duyệt mới tải được:
  - Sidebar `#101828`, mục đang chọn `#1d2939`, chữ "cybooks" màu trắng.
  - Tím chủ đạo `#7f56d9`, tím nhạt `#f4ebff` / `#d6bbfb`.
  - Xanh thành công `#17b26a`, đỏ `#d92d20`, viền `#d0d5dd`.
  - Bố cục: thanh trên có thanh tiến độ và ô tìm kiếm, ô KPI bốn cột, thẻ to-do có vòng tiến độ, thẻ review, biểu đồ dòng tiền.
  - Nền thẻ là tone `violet` (`#101828` sang `#7f56d9`).
- **Lead management cho Thermomix (`ArtLeads`)**, vẽ theo ảnh Kobold LAM. Màu lấy từ CSS theme thermomix của trang:
  - Xanh Vorwerk `#009a3d`, xanh đậm `#113c2b`.
  - Nút cam dùng gradient `#ed8707` sang `#de3d10`; đây là chỗ duy nhất dùng `<linearGradient>`.
  - Khung bên trái `#f2f2f2`, tiêu đề `#1a1a1a`, nút Apply `#828282`.
  - Bố cục: khung tài khoản và danh sách LEADS bên trái, ô chào mừng có nút cam; bên phải là ba ô lọc và bảng lead.
  - Nền thẻ là tone `vorwerk` (`#113c2b` sang `#009a3d`).
- **Ticketing và chấm công (`ArtTimesheet`)**, vẽ theo ảnh bảng kanban "Effort Report":
  - Ảnh không được lưu thành file, nên màu được ước lượng bằng mắt từ ảnh, theo bảng màu Bootstrap mà giao diện đang dùng:
    - Nền sidebar `#f8f9fa`, nền chính `#f3f6fb`, chữ `#212529`, chữ phụ `#6c757d`.
    - Logo đồng hồ xanh lá, chuông `#28a745`, nút lọc `#343a40`.
  - Ba cột: tiêu đề Todo màu đen, In Progress màu `#1a56db`, Done màu `#28a745`.
  - Mỗi ticket có mã, tên, ô tích xanh `#2563eb`, mũi tên ưu tiên (đỏ, cam, xanh), ngôi sao và dấu ba chấm.
  - Ảnh gốc chỉ có ticket ở cột Todo. Theo yêu cầu, thêm ticket mẫu: In Progress 3 cái, Done 4 cái (đều đã tích).
  - Nền thẻ giữ tone `night`.
- Bỏ tone `ocean` và `forest` vì không còn dùng.
- Kiểm tra:
  - Chiều cao thẻ trên desktop: 366, 341, 336, 336, 336, 356, 336px.
  - Không cuộn ngang ở 390px.
  - axe trên `/work` và trang chủ: 0 vi phạm. Console không có lỗi.

## 18. Đoạn giới thiệu ở About (08/10/2026)

- Câu cũ "On the back end I work in PHP and, more and more, Node.js" đọc lạ. Khoa muốn liệt kê đủ công nghệ và mảng đã làm. Câu mới: "I work with **PHP, Node.js, Laravel, Symfony, Vue, React, Python and AWS**, building infrastructure, mobile apps, e-commerce stores and more."
- Bỏ câu "I studied Electronics and Telecommunications at Hue University." theo ý Khoa. Thông tin học vấn vẫn còn trong CV.

## 19. Hình Shopware theo Demostore (08/10/2026)

- Khoa gửi ảnh trang danh mục "Clothing" của Demostore, giao diện storefront mặc định của Shopware 6. `ArtStore` vẽ lại theo ảnh đó:
  - Thanh trên có cờ Anh, "English", "$ US-Dollar".
  - Logo "Demostore" ("Demo" đậm, "store" mảnh), ô tìm kiếm, icon tài khoản, giỏ hàng, giá màu teal.
  - Menu Home / Clothing / Free time & electronics; mục Clothing có gạch chân teal. Breadcrumb "Clothing" màu teal.
  - Hàng bộ lọc: Manufacturer, Colour, Material, Size, Target group, Price, Free shipping. Ô sắp xếp "Name A-Z".
  - Ba thẻ sản phẩm có nhãn "New": áo khoác, găng tay, áo len. Mỗi thẻ có tên, thuộc tính và ba dòng mô tả; thẻ bị cắt ở mép dưới giống ảnh.
- Ảnh này có trên máy, nên màu đo trực tiếp bằng ImageMagick:
  - Teal `#297376` (gạch chân menu, breadcrumb, giá). Bản mặc định của Shopware ghi `#008490`, nhưng ảnh của Khoa ra `#297376`, nên lấy theo ảnh.
  - Nhãn "New" `#3cc261`, trùng màu success mặc định của Shopware.
  - Chữ `#4a545b`, logo `#545454`, icon sản phẩm `#333333`.
  - Viền thẻ `#bfbfbf`, viền bộ lọc `#bdbdbd`, viền ô tìm kiếm `#d7d7d7`.
- Chỉ "Demostore" và "New" là chữ thật. Các chữ khác vẽ thành thanh ngang như những hình còn lại.
- Hai chiếc găng: bản đầu bị chồng lên nhau. Đã thu ngón cái lại và kéo hai chiếc ra xa, giống ảnh gốc: chiếc trái nghiêng sang trái, chiếc phải nghiêng sang phải, ngón cái quay vào trong.
- Tone nền thẻ đổi từ `dusk` sang `storefront` (`#0f2b2e` sang `#3b8c90`) để hợp với màu teal. Tone `dusk` không còn dùng nên bỏ.
- Kiểm tra:
  - Thẻ ở `/work` cao 366px, như trước.
  - Không cuộn ngang ở 390px.
  - axe trên `/work` và trang chủ: 0 vi phạm. Console không có lỗi.
