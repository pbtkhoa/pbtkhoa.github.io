# 04 — Avatar anime

> **Không dùng (08/10/2026).** Khoa chọn dùng ảnh thật, xem [05-concept.md](05-concept.md). File này và các ảnh trong `design/avatar/` giữ lại phòng khi cần.

## Cách tạo (08/10/2026)

- Ảnh gốc lấy từ CV PDF (`pdfimages`), lưu ở `design/avatar/source/cv-000.png`. Ảnh mẫu phong cách Khoa gửi lưu ở `design/avatar/reference-style.png`.
- Tạo bằng **Canva AI** (`generate-image`, kết nối Canva của Khoa), đưa vào hai ảnh tham chiếu: ảnh gốc và ảnh mẫu. Ảnh gốc đã được tải lên Canva của Khoa.
- Công cụ này chỉ trả bản xem trước 200px. Bản trong `design/avatar/preview/*@3x.webp` được phóng to bằng Lanczos để làm mockup.

| Tư thế | Canva | Kích thước gốc | Dùng ở |
|---|---|---|---|
| Cozy, phòng ấm, đèn bàn | [MAHXZfqkvZ8](https://www.canva.com/M/MAHXZfqkvZ8) | 1264×1264 | Avatar chính, favicon, OG, hero hướng A |
| Nền phẳng cobalt | [MAHXZf-y1mo](https://www.canva.com/M/MAHXZf-y1mo) | 1264×1264 | GitHub, LinkedIn, nav, hero B/C |
| Đang code, cà phê sữa đá | [MAHXZVW8kjM](https://www.canva.com/M/MAHXZVW8kjM) | 1456×1088 | About |
| Vẫy tay, nền trơn | [MAHXZUvUsWY](https://www.canva.com/M/MAHXZUvUsWY) | 1136×1408 | Sticker ở Contact (đã tách nền bằng ImageMagick) |

## Cần làm

- [ ] Khoa tải 4 bản gốc từ Canva vào `design/avatar/full/`.
- [ ] Tách nền lại bản "vẫy tay" từ ảnh gốc (dùng `remove-background` của Canva, hoặc ImageMagick), vì bản hiện tại còn sót viền nền ở góc dưới.
- [ ] Nếu cần thêm tư thế: cầm cà phê (About), xắn tay áo (Services), cầm bản đồ (404), ngồi trên đống thùng hàng (Shopware).
- [ ] Xuất ra `public/`: `avatar.webp` 512/1024, `og.png` 1200×630, bộ favicon (skill `favicon-gen`).

## Lưu ý

- Ảnh "kiểu Ghibli" tạo bằng AI có rủi ro về bản quyền và cách người xem đánh giá. Nếu đây là nhận diện lâu dài, nên nhờ họa sĩ vẽ lại dựa trên bản này.
- Nên có ảnh thật ở trang About, vì recruiter Đức và Áo muốn thấy người thật.
