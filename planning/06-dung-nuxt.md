# 06 — Dựng Nuxt từ mockup Lantern Hour

**Ngày 08/10/2026.** Dựng site Nuxt theo [05-concept.md](05-concept.md) và `design/mockup/`. Báo cáo kèm ảnh chụp ở [artifact/lantern-hour-work-update.html](../artifact/lantern-hour-work-update.html) (vòng 2; báo cáo vòng đầu ở commit 281cc94).

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
- **Form liên hệ:** đọc `NUXT_PUBLIC_FORM_ENDPOINT` lúc build.
  - Có giá trị: gửi POST JSON kèm `Accept: application/json` (hợp với Formspree). Thành công thì hiện "Message sent…" và xóa form. Lỗi thì báo và chỉ sang email.
  - Để trống: mở ứng dụng email bằng `mailto:` với nội dung đã điền sẵn, và hiện ghi chú. Đây là bản đang chạy.
  - Workflow deploy lấy biến này từ Actions variable `FORM_ENDPOINT` của repo.
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
- [ ] Chọn dịch vụ nhận form, đặt `FORM_ENDPOINT` trong Settings → Variables của repo, và ghi tên dịch vụ vào `/privacy`.
- [ ] Ảnh gốc to hơn (≥ 1200×1200, nền trơn). Ảnh hiện tại 460px nên hero hơi mờ trên màn hình retina.
- [ ] Tên repo hoặc domain riêng. Sau đó: `NUXT_APP_BASE_URL` (nếu cần), canonical, `og:image`, sitemap (`@nuxtjs/seo`).
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
- **Node.js:** Khoa đang chuyển dần sang full-stack PHP + Node. Đã sửa câu giới thiệu ở hero, thẻ vai trò ("PHP · Node.js · Vue"), dịch vụ thứ hai thành "PHP and Node.js back ends", mô tả trang Services, đoạn About, meta description.
- **Tương phản mới đo:** nhãn loại dự án 5.92 (đêm) / 4.84 (ngày) sau khi giảm nền từ 16% xuống 10%. Lần đo đầu ở 16% chỉ đạt 4.44.

Còn mở thêm: nếu có ảnh chụp thật của các store công khai (van Laack, Egret…), có thể thay hình vẽ cho các dự án đó.
