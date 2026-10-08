# 01 — Mục tiêu và nội dung

Trang portfolio cá nhân của Phạm Bá Tuấn Khoa, chạy tĩnh trên GitHub Pages. Nguồn nội dung là CV 2026 (`~/Documents/PHAM_BA_TUAN_KHOA_CV_2026.pdf`). Bắt đầu ngày 08/10/2026.

## 1. Trang để làm gì

- **Việc chính:** giúp người tuyển dụng và khách freelance ở nước ngoài (chủ yếu Đức, Áo, châu Âu) hiểu trong 10 giây Khoa là ai, làm được gì, có đang nhận việc không, và liên hệ thế nào.
- **Người đọc:** recruiter, hiring manager, CTO của agency, chủ shop cần dev, **ở mọi nước** (chốt 08/10/2026: nhắm khách toàn cầu, không chỉ châu Âu). Họ lướt nhanh, đọc bằng tiếng Anh, thường mở trên laptop, đôi khi trên điện thoại từ link LinkedIn.
- **Hành động mong muốn:** gửi email, hoặc tải CV PDF.
- Ngôn ngữ: **chỉ tiếng Anh** ở bản đầu.

## 2. Những gì người tuyển dụng cần thấy ngay (theo nghiên cứu)

Tóm tắt từ nghiên cứu ở [02-thiet-ke.md](02-thiet-ke.md):

1. Tên, vai trò cụ thể và một câu giá trị. Không viết kiểu "I love building things".
2. **Trạng thái nhận việc ngay ở phần đầu**, không để dưới chân trang. (Đồng hồ múi giờ đã bỏ ngày 08/10/2026 vì site nhắm khách toàn cầu.)
3. Một nút chính (Email) và một nút phụ (Tải CV).
4. 3–4 dự án tiêu biểu đặt **trước** danh sách kỹ năng.
5. Kinh nghiệm dạng dòng thời gian gọn.
6. Stack chia nhóm. Không dùng thanh phần trăm kỹ năng.
7. Liên hệ: email có nút copy, GitHub, LinkedIn.

Cần tránh: chữ gõ từng ký tự ở hero, preloader, 3D nặng, ảnh stock, link demo hỏng, giấu email, tương phản dưới 4.5:1, tải chậm hơn 2 giây.

## 3. Nội dung lấy từ CV

| Phần | Nội dung |
|---|---|
| Hero | Phạm Bá Tuấn Khoa · Full-stack software engineer · PHP, Symfony, Laravel, Vue, React · làm remote cho team châu Âu |
| Trạng thái | Open to remote roles and freelance work |
| Dự án tiêu biểu | (1) Shopware 6 stores & plugins: Egret, Biomex, van Laack, Cityschuh, Roto-store, Kraft; Checkout.com, Sprinque, blog plugin, Shopware Node.js SDK. (2) Accounting SaaS đa tenant (Laravel, Vue 3, AWS, OpenAI, Stripe). (3) Solio: GLS Bank SSO + mở tài khoản doanh nghiệp, Vorwerk Austria (Thermomix) lead tool trên Drupal 11, công cụ ticket/time-tracking với Jira + GitLab. (4) Crypto trading platform ở Rikkeisoft (team 13). |
| Kinh nghiệm | Solio (03/2023–nay) · Shape & Shift (12/2021–02/2023) · NFQ (09/2019–11/2021) · Rikkeisoft, Team Lead (07/2017–08/2019) · Junoteam (09/2016–06/2017) · Freelance (2017–nay, song song) |
| Stack | Backend, Frontend & Mobile, Platforms, Database, DevOps, Testing, Integrations, AI/LLM như CV |
| Học vấn | ĐH Khoa học Huế, Điện tử viễn thông (2013–2017) · Hue Aptech PHP (2016) |
| Liên hệ | pbtkhoa@gmail.com · github.com/pbtkhoa · linkedin.com/in/pbtkhoa |

Số điện thoại **không** đưa lên web công khai (tránh spam). Chỉ có trong CV PDF.

## 4. Sơ đồ trang (chốt 08/10/2026: nhiều trang)

Bạn muốn site nhiều trang, không phải một trang dài. Nuxt dùng route tĩnh, mỗi trang sinh ra một file HTML.

| Route | Nội dung |
|---|---|
| `/` | Hero có avatar, trạng thái và giờ VN/Berlin, số liệu chính, dải tên khách hàng, tóm tắt dịch vụ, 2–3 dự án, lời mời liên hệ |
| `/services` | 4 dịch vụ (Shopware 6, Laravel/Symfony, Vue/React/mobile, remote team member), quy trình 4 bước, 3 cách hợp tác (dự án, retainer, full-time), FAQ |
| `/work` | Danh sách dự án, có lọc theo loại. Giai đoạn 2: `/work/<slug>` cho từng case study |
| `/about` | Câu chuyện, dòng thời gian, ảnh minh họa, tải CV, GitHub, LinkedIn |
| `/contact` | Form (tên, email, loại việc, ngân sách, tin nhắn), email có nút copy, giờ làm |
| `/blog` | **Để sau**, khi có bài. Dùng `@nuxt/content` |
| `/impressum`, `/privacy` | Người dùng ở Đức và Áo mong có hai trang này |

Form trên GitHub Pages không có server. Cần một dịch vụ nhận form như Formspree hoặc Web3Forms (gói miễn phí), hoặc chỉ dùng nút mailto. Chưa chốt.

## 5. Câu hỏi còn mở (cần Khoa trả lời)

- [ ] Con số "20+ online stores and apps delivered" trong mockup có đúng không?
- [ ] Có muốn ghi giá trên trang Services không (ví dụ "from €X", hoặc giá theo giờ)? Nghiên cứu cho thấy ghi khoảng giá giúp lọc khách không phù hợp.
- [ ] Form liên hệ dùng dịch vụ nào (Formspree, Web3Forms) hay chỉ dùng email?

- [ ] Có số liệu kết quả nào nói được công khai không (doanh thu shop, số tenant SaaS, thời gian tiết kiệm)? Case study có số liệu thuyết phục hơn hẳn.
- [ ] Có 2–3 lời nhận xét của khách hoặc lead cũ để đưa vào không?
- [ ] Repo đặt tên `pbtkhoa.github.io` (trang ở gốc `https://pbtkhoa.github.io/`) hay `pbtkhoa-github` (trang ở `/pbtkhoa-github/`)? Xem [03-ky-thuat.md](03-ky-thuat.md).
- [ ] Có mua domain riêng không (ví dụ `pbtkhoa.dev`)? GitHub Pages hỗ trợ custom domain miễn phí.
- [ ] Ảnh chân dung: dùng ảnh trong CV hay chụp ảnh mới? Bản minimal có thể không cần ảnh.
