# 05 — Concept đã chốt: Lantern Hour

**Chốt ngày 08/10/2026.** Hướng A trong [02-thiet-ke.md](02-thiet-ke.md), có ba thay đổi theo yêu cầu của Khoa:

1. **Dùng ảnh thật**, không dùng avatar anime.
2. **Bỏ đồng hồ giờ Việt Nam/Berlin** và mọi chi tiết nhắm riêng múi giờ châu Âu, vì site hướng tới khách toàn cầu.
3. Câu chữ viết cho **khách và nhà tuyển dụng ở mọi nơi**. Phần kinh nghiệm vẫn ghi đúng là đã làm cho công ty Đức và Áo.

Mockup đã chốt: [`design/mockup/index.html`](../design/mockup/index.html), mở thẳng bằng trình duyệt. Ảnh kiểm tra ở `design/mockup/shots/`, báo cáo dựng Nuxt có ảnh ở [artifact/lantern-hour-store-mockup.html](../artifact/lantern-hour-store-mockup.html) (vòng 7; báo cáo các vòng trước ở commit 281cc94, e0f78a9, bde577c, 93fd4b1, 2026f8f và f59a90f). Token màu ở [`design/tokens.css`](../design/tokens.css). Lúc dựng Nuxt sẽ bám theo mockup này.

## 1. Ý tưởng

Một buổi tối ấm áp: bầu trời chạng vạng, ảnh Khoa nằm trong vòng tròn sáng như mặt trăng, vài con đom đóm bay theo con trỏ. Cảm giác gần gũi, dễ nói chuyện, nhưng phần nội dung bên dưới gọn và nghiêm túc như một hồ sơ kỹ sư. Nền tối là "đêm" (mặc định), nền sáng là "ngày".

- **Người đọc:** recruiter, CTO, agency và chủ shop ở bất kỳ nước nào. Đọc tiếng Anh, lướt nhanh.
- **Việc của trang:** cho biết Khoa là ai, làm được gì, đang nhận việc, rồi dẫn tới email hoặc form.
- **Giọng văn:** ngôi "I", câu ngắn, cụ thể, không khoe chữ. Nút ghi đúng việc sẽ xảy ra ("Start a project", "Send message", "Copy email").

## 2. Nhận diện

| Thành phần | Quyết định |
|---|---|
| Ảnh | Ảnh thật từ CV, cắt tròn, viền trắng, quầng sáng hổ phách phía sau. Dùng ở hero, logo trên thanh menu, dải kêu gọi liên hệ, About và Contact. |
| Chữ tiêu đề | **Fraunces** 600, `clamp(2.4rem, 5vw, 3.9rem)` cho H1, `clamp(2rem, 4vw, 3rem)` cho H2 |
| Chữ giao diện | **Plus Jakarta Sans** 400/500/600, cỡ 16px, dòng 1.65 |
| Màu đêm (mặc định) | nền `#161a33`, thẻ `#232850`, chữ `#f3f2f8`, chữ phụ `#b3b1cc`, nhấn hổ phách `#f4a93a`, tím `#4a3f8c`, hồng `#c97a8e` |
| Màu ngày | nền `#f3f2f8`, chữ `#1c2140`, nhấn `#9a5800`, trời `#9cc3ec → #f7d9b5 → #f2b5c4`, đồi `#6b8f71` |
| Bo góc | nút và nhãn 999px, thẻ 24px, khối lớn 28px, ô nhập 14px |
| Tương phản (đã đo) | nút chính 8.9 (đêm) / 5.6 (ngày). Chữ phụ 8.2 / 6.3. Tất cả đạt AA. |

## 3. Chuyển động

- **Đom đóm:** 5 chấm sáng bay theo con trỏ. Chỉ chạy khi dùng chuột và không bật giảm chuyển động. Đây là chuyển động chính duy nhất của trang.
- **Dải tên khách hàng** chạy ngang chậm (40 giây một vòng).
- Phản hồi khi thao tác: thẻ nhấc lên 4px và viền đổi màu hổ phách khi rê chuột, nút nhấc 2px, chuyển trang mờ dần 0.35 giây.
- `prefers-reduced-motion`: tắt hết.

## 4. Các trang

Thanh menu cố định trên cùng: logo (ảnh tròn + "Khoa Phạm"), 5 link, nút đổi ngày/đêm, nút "Hire me". Trên mobile là nút ≡ mở danh sách link.

### `/` Home
1. **Hero bầu trời:** nhãn trạng thái "Open to remote roles and freelance projects", H1 "Hi, I'm Khoa. I build the shops and tools your team runs on.", một câu giới thiệu, hai nút (Start a project, See my work). Ảnh tròn bên phải kèm thẻ "Full-stack engineer · PHP · Vue · React".
2. **4 thẻ số liệu** nằm đè lên đường đồi: 10 năm, 20+ shop và app, freelance từ 2017, 5 công ty.
3. **Dải tên khách hàng:** van Laack, Vorwerk Thermomix, GLS Bank, Egret, Biomex…
4. **3 dịch vụ** và nút "All services".
5. **2 dự án** dạng thẻ ngang (hình bên trái, chữ bên phải, so le) và nút "All projects".
6. **Dải kêu gọi:** ảnh tròn, "Have a project for the next quarter?", nút Get in touch.

### `/services`
4 thẻ dịch vụ có gạch đầu dòng → quy trình 4 bước (Talk, Scope, Build, Launch and support) → 3 cách hợp tác (dự án, retainer làm nổi, full-time remote) → FAQ dạng mở/đóng.

### `/work`
6 dự án dạng thẻ ngang so le, rồi danh sách 11 dự án khác và khối "And much more" (đổi 08/10/2026, xem [06-dung-nuxt.md](06-dung-nuxt.md) mục 7). Giai đoạn 2: mỗi thẻ dẫn tới `/work/<slug>` (vấn đề, vai trò, giải pháp, kết quả, stack).

### `/about`
Ảnh vuông dính bên trái, bên phải là câu chuyện, ba nút (Download CV, GitHub, LinkedIn) và dòng thời gian 6 mốc.

### `/contact`
Form bên trái: tên, email, tin nhắn (bỏ loại việc và ngân sách ngày 08/10/2026). Bên phải: thẻ "Xin chào! Say hi any time." có ảnh, thẻ email có nút copy, thẻ link GitHub/LinkedIn/CV.

- Báo lỗi ngay dưới ô nhập: "Enter an email like name@company.com.", "Write a sentence or two about the project."
- Gửi xong: "Message sent. I'll reply within one working day."

### Khác
`/blog` để sau. `/privacy` (và `/impressum` nếu vẫn làm với khách Đức). Trang 404 theo cùng phong cách bầu trời.

## 5. Component khi dựng Nuxt

| Component | Dùng ở |
|---|---|
| `AppHeader` (menu, đổi theme, menu mobile) | mọi trang |
| `AppFooter` | mọi trang |
| `HeroSky`, `PhotoMoon` | Home |
| `StatCards`, `ClientMarquee`, `CtaBand` | Home |
| `ServiceCard`, `ProcessSteps`, `EngagementModels`, `FaqList` | Home, Services |
| `CaseCard` | Home, Work |
| `CareerTimeline` | About |
| `ContactForm`, `CopyEmail` | Contact |
| `Fireflies` (client-only) | mọi trang |
| `SectionHead` (nhãn nhỏ + H2 + mô tả) | mọi trang |

Nội dung lấy từ một file dữ liệu (`design/mockup/content.js` → `app/data/site.ts`), không viết cứng trong component.

## 6. Đã bỏ và lý do

- **Avatar anime:** Khoa chọn dùng ảnh thật. Ảnh anime vẫn giữ ở `design/avatar/` phòng khi cần.
- **Đồng hồ VN/Berlin, số liệu "giờ trùng với CET":** site nhắm khách toàn cầu. Thay bằng số liệu "5 companies".
- **Hướng B, C và bản tối giản v1:** giữ file ở `design/mockups-v2/` và `design/mockups/` để tham khảo, không dùng.

## 7. Cần làm trước khi dựng

- [ ] **Ảnh chất lượng cao hơn.** Ảnh trong CV chỉ 460×460, hiển thị 420px nên trên màn hình retina sẽ hơi mờ. Cần bản gốc ít nhất 1200×1200. Nền ảnh hiện tại có biển "&Shift" của công ty cũ, nên chụp hoặc chọn ảnh có nền trơn.
- [ ] Xác nhận con số "20+ online stores and apps delivered".
- [ ] Trang Services có ghi giá không.
- [ ] Form gửi qua Formspree, Web3Forms hay chỉ dùng email (GitHub Pages không có server).
- [ ] Tên repo (`pbtkhoa.github.io` hay `pbtkhoa-github`) và có dùng domain riêng không.
- [ ] Logo và favicon: hiện dùng ảnh tròn. Có thể làm monogram "K" bằng skill `svg-logo-designer` cho favicon nhỏ.
