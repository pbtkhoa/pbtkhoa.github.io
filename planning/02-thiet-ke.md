# 02 — Thiết kế

Kết quả nghiên cứu các portfolio developer đẹp nhất 2024–2026, ba hướng mockup, và các quy tắc chung. Chốt hướng nào sẽ ghi vào mục 5.

**Không dùng màu thương hiệu Binventor** (xanh lục bảo). Đây là trang cá nhân, có bộ màu riêng. Chốt 08/10/2026.

## 1. Trang tham khảo

| Trang | Bố cục | Điểm đáng học |
|---|---|---|
| [brittanychiang.com](https://brittanychiang.com) | Cột trái cố định (tên, vai trò, nav), cột phải cuộn | Mẫu được recruiter quen nhất. Hover một dòng thì các dòng khác mờ đi. Vệt sáng theo con trỏ. Nhược điểm: bị copy quá nhiều. |
| [leerob.com](https://leerob.com) | Một cột hẹp | Gần như không trang trí, giọng văn mạnh. |
| [emilkowal.ski](https://emilkowal.ski) | Một cột: giới thiệu, dự án một dòng, bài viết | Dòng nào cũng là bằng chứng, không có gì để trang trí. |
| [rauno.me](https://rauno.me) | Ngắn, đơn sắc | Click để copy email. Chi tiết tương tác chính là portfolio. |
| [paco.me](https://paco.me) | Danh sách tối giản | Gu thể hiện qua những gì bị bỏ đi. Có ⌘K. |
| [antfu.me](https://antfu.me) | Một cột, chữ là chính | Nút đổi theme hiện ra theo hình tròn bằng View Transition. |
| [delba.dev](https://delba.dev) | Một cột, nền tối | Tối mà vẫn sang, không rối. |
| [brianlovin.com](https://brianlovin.com) | Giống một app có sidebar | Cho thấy năng lực làm sản phẩm. |

Nguồn bài viết: [Scrimba — minimal portfolio](https://scrimba.com/articles/minimal-web-developer-portfolio-examples/), [Slategit — tín hiệu múi giờ cho người xin việc remote](https://slategit.com/blog/timezone-and-availability-signals-for-remote-portfolio-applicants), [danh sách emmabostian/developer-portfolios](https://github.com/emmabostian/developer-portfolios) (~2.000 trang).

## 2. Các kiểu bố cục và mức độ hợp với recruiter

- **Chia đôi, cột trái cố định:** tên và nút liên hệ luôn thấy, quét nhanh, trông senior. Nhưng ai cũng nhận ra là mẫu Brittany Chiang.
- **Một cột kiểu tạp chí:** đọc nhanh nhất, tốt cho mobile, bền theo thời gian. Muốn nổi bật thì phụ thuộc vào câu chữ.
- **Bento (lưới ô):** bắt mắt, chứa được nhiều thứ trong màn đầu. Đang thành xu hướng đại trà, thứ tự đọc dễ lộn xộn.
- **Terminal / monospace:** dễ nhớ với dân kỹ thuật. Dễ thành trò mẹo và khó đọc với khách không rành kỹ thuật. **Loại.**
- **Lấy dòng thời gian làm chính:** hợp với 10 năm và giai đoạn làm lead. Để làm phần phụ thì tốt hơn.

## 3. Ba hướng mockup

File nằm ở `design/mockups/`, ảnh chụp ở `design/mockups/shots/`, so sánh kèm ảnh ở [artifact/portfolio-mockups.html](../artifact/portfolio-mockups.html).

### A. Overlap — chia đôi, ưu tiên recruiter

- Cột trái cố định: tên, vai trò, câu giá trị, trạng thái nhận việc, **thanh giờ làm trùng giữa Việt Nam và Berlin** (tính trực tiếp, có kim chỉ giờ hiện tại), menu, nút Email + CV.
- Cột phải: About → Selected work → Experience → Stack → Contact. Hover một dòng thì các dòng khác mờ đi.
- Chữ: Instrument Sans. Màu: nền giấy lạnh `#f6f7f9`, mực `#12151c`, nhấn **xanh cobalt `#2443d6`** (tối: `#8ea2ff` trên `#0f121a`). Màu xanh nối với màu xanh trong CV PDF.
- Điểm nhớ: thanh giờ trùng. Giải quyết đúng nỗi lo lớn nhất của người thuê remote từ châu Âu.

### B. Editorial — một cột, chữ có chân

- Cột 700px. Câu mở lớn bằng chữ serif: "I build the online stores and back offices that European companies run on."
- Ba ô thông tin ngay dưới: làm từ đâu, giờ trùng với CET, trạng thái.
- Dự án viết như bài báo ngắn. **Thước năm 2016–2026** cho thấy các công ty nối nhau và freelance chạy song song suốt từ 2017.
- Chữ: Newsreader (tiêu đề) + Public Sans (nội dung). Màu nhấn **tím Huế `#5b2a86`** (tối: `#c6a6ea` trên `#16131b`). Tím Huế gắn với nơi Khoa học đại học, là chi tiết chỉ người này mới có.
- Điểm nhớ: câu mở serif lớn và thước năm.

### C. Workbench — bento, tối trước

- Màn đầu là lưới ô: tên + nút, trạng thái, giờ Việt Nam/Berlin, ba con số (10 năm, 6 team, freelance từ 2017), stack.
- Dự án: ô Shopware rộng kèm tên các shop, hai ô còn lại chia đôi. Kinh nghiệm dạng log.
- **Bảng lệnh ⌘K**: nhảy tới phần, copy email, tải CV, mở GitHub/LinkedIn, đổi sáng/tối. Trên điện thoại mở bằng nút ở góc.
- Chữ: Geist + Geist Mono. Màu: graphite `#17181b`, nhấn **hổ phách `#f0a63a`** (sáng: `#a35c00` trên `#f3f2ef`).
- Điểm nhớ: ⌘K và vệt sáng theo con trỏ trong từng ô.

## 4. Quy tắc chung cho mọi hướng

- Sáng và tối đều làm kỹ, theo máy người xem, có nút đổi.
- Tương phản chữ ≥ 4.5:1, viền nút ≥ 3:1. Focus nhìn thấy được. Tôn trọng `prefers-reduced-motion`.
- Mobile 390px không cuộn ngang (đã đo: `scrollWidth = 390` cả ba bản).
- Không có chữ gõ từng ký tự, preloader, thanh phần trăm kỹ năng.
- Một chuyển động chính duy nhất mỗi trang. Còn lại chỉ là phản hồi khi người dùng thao tác.
- Phông tải qua `@nuxt/fonts` (tự host khi build), không gọi Google Fonts lúc chạy.

## 5. Quyết định

- [x] Cả ba hướng bản 1 bị loại vì quá tối giản. Xem bản 2 bên dưới.

---

# Bản 2 (08/10/2026): bắt mắt hơn, có avatar anime, nhiều trang

**Bản 1 ở trên bị loại** vì quá tối giản. Phản hồi của Khoa: muốn có avatar kiểu anime, nhiều trang, và hướng nổi bật hơn. Mockup mới ở `design/mockups-v2/`, so sánh kèm ảnh ở [artifact/portfolio-v2.html](../artifact/portfolio-v2.html). Avatar xem [04-avatar.md](04-avatar.md).

## 6. Nghiên cứu thêm: portfolio đang thịnh hành

- **Nơi tìm:** Awwwards (Portfolio Honors 2026: Pacôme Pertant, Artem Shcherban, Ravi Klaassens), godly.website, Framer Marketplace (Sawad, DeskTales, Chalkfolio có nhân vật vẽ tay vẫy chào), siteinspire, land-book, onepagelove, GitHub `bchiang7/v4`, `dillionverma/portfolio`.
- **Dùng nhân vật minh họa của chủ trang:**
  - [kentcdodds.com](https://kentcdodds.com): một mascot, nhiều tư thế trên khắp site.
  - [mattfarley.ca](https://mattfarley.ca): avatar SVG, dịch vụ chia ba, logo khách, testimonial. Cấu trúc gần nhất với thứ Khoa cần.
  - [joshwcomeau.com](https://joshwcomeau.com/about-josh): đồ chơi nhỏ trên trang About.
  - [adhamdannaway.com](https://adhamdannaway.com): khuôn mặt chia đôi designer và coder.
  - [jesse-zhou.com](https://jesse-zhou.com): quán ramen 3D mang cảm giác anime.
- **Cách dùng avatar cho đúng:** một nhân vật, mỗi trang một tư thế. Vòng tròn làm nhận diện (favicon, nav, ảnh OG). Tối đa 1–2 sticker mỗi màn hình. Recruiter Đức và Áo muốn thấy người thật, nên trang About nên có thêm ảnh thật.
- **Phong cách 2025–26:**
  - Bento là mặc định.
  - Neo-brutal chỉ nên dùng cho nút.
  - Sticker/scrapbook ấm áp nhưng cần lưới chặt.
  - Chữ Swiss đậm hợp gu Đức nhưng lạnh nếu thiếu avatar.
  - Retro/Y2K sai tín hiệu với việc làm e-commerce.
- **Trang Services** theo thứ tự: dịch vụ → lợi ích → quy trình → gói/giá → khách hàng → FAQ. Ghi khoảng giá giúp lọc khách không phù hợp.

## 7. Ba hướng bản 2

### A. Lantern Hour: buổi tối ấm áp kiểu Ghibli
- Hero là bầu trời chạng vạng, avatar trong vòng tròn như mặt trăng, thẻ giờ Việt Nam và Berlin. Đom đóm bay theo con trỏ. Chế độ sáng là trời ban ngày.
- Chữ Fraunces + Plus Jakarta Sans. Màu chàm đêm `#161a33`, tím `#4a3f8c`, hổ phách `#f4a93a` (sáng `#9a5800`), hồng anh đào `#f2b5c4`.

### B. Sticker Desk: bento + sticker
- Bento ở Home: ô avatar nền cobalt có sticker, ô giờ, ô "đang làm ở Solio", dải stack chạy ngang. Nút đổ bóng cứng. Trang Work có bộ lọc. Contact là một tấm bưu thiếp có tem in avatar.
- Chữ Bricolage Grotesque + DM Sans. Màu cobalt `#2b4bff`, vàng `#ffd23f`, hồng `#ff6b8b`, tím nhạt `#e4e1ff`.

### C. Panel & Grid: chữ Swiss + khung manga
- Tiêu đề Archivo rộng và đậm. Avatar trong đĩa đỏ có chấm halftone, rê chuột thì hiện màu. Bong bóng thoại hiện giờ. Dự án là các "chapter", About là 4 khung kể chuyện. Viền 3px, nút có speed lines.
- Chữ Archivo + IBM Plex Sans/Mono. Màu giấy `#fafaf7`, mực `#111318`, đỏ son `#d33a21`, xanh `#3557e6`.

## 8. Lỗi sửa trong lúc kiểm tra
- A sáng: chữ hero trắng trên trời sáng. Đã chuyển sang token `--hero-fg`.
- C mobile: số thống kê tràn ra 425px. Đã thu nhỏ dưới 960px.
- B: tem bưu thiếp che chip chọn loại việc.
- Nút A sáng (4.1:1) và nút C (3.95:1) chưa đạt AA. Đã làm đậm màu, giờ là 5.6 và 4.8.

## 9. Quyết định
- [x] **Chọn A · Lantern Hour** (08/10/2026), dùng ảnh thật thay cho avatar anime, bỏ đồng hồ múi giờ, viết câu chữ cho khách toàn cầu. Chi tiết ở [05-concept.md](05-concept.md).
