# Ôn luyện ITDE DevChampion 2027 – Vòng 1

Trang web tĩnh (HTML/CSS/JS thuần, không cần build) để ôn thi **Vòng 1 – Kiến thức nền tảng** (thi trắc nghiệm ngày 10/10/2026) gồm 5 nhóm:

| Chủ đề | Nguồn |
|---|---|
| 💻 Lập trình C++ | Slide Cơ sở lập trình C++ (C1–C9) |
| 🧮 CTDL & Giải thuật | Slide CTDL&GT + vở ghi các dạng bài |
| 🗄️ Cơ sở dữ liệu | Bài giảng CSDL CH1–CH4 (SQL Server / T-SQL) |
| ☁️ AWS Cloud | Kiến thức nền (mức Cloud Practitioner) |
| 🌐 Mạng máy tính | Slide Mạng máy tính & truyền thông (C1–C7) |

## Tính năng

- **Luyện tập** theo chủ đề/chương, hiện đáp án và giải thích ngay sau khi chọn.
- **Thi thử** trộn câu từ 5 nhóm, có đồng hồ đếm ngược, bảng câu hỏi, cắm cờ, tự nộp khi hết giờ (mặc định 50 câu/60 phút, chỉnh được).
- **Ôn câu sai**: tự gom các câu làm sai gần nhất.
- **Tóm tắt kiến thức** cho từng chủ đề.
- Lưu tiến độ trong trình duyệt (localStorage), giao diện sáng/tối, dùng tốt trên điện thoại.
- Phím tắt: `1–4` / `A–D` chọn đáp án, `Enter`/`→` câu tiếp, `←` câu trước, `F` cắm cờ.

## Chạy thử trên máy

Mở thẳng file `index.html` bằng trình duyệt là dùng được (không cần server).

## Đưa lên GitHub Pages

1. Tạo repository mới trên GitHub, ví dụ `itde-onluyen` (để Public).
2. Đẩy toàn bộ nội dung thư mục này lên nhánh `main`:
   ```bash
   cd itde-quiz
   git init
   git add .
   git commit -m "Trang ôn luyện ITDE Vòng 1"
   git branch -M main
   git remote add origin https://github.com/<tên-tài-khoản>/itde-onluyen.git
   git push -u origin main
   ```
3. Vào **Settings → Pages**, mục *Build and deployment* chọn **Deploy from a branch**, branch `main`, thư mục `/ (root)` → **Save**.
4. Sau 1–2 phút trang có tại `https://<tên-tài-khoản>.github.io/itde-onluyen/`.

## Thêm / sửa câu hỏi

Mỗi chủ đề là một file trong `data/` (`cpp.js`, `dsa.js`, `db.js`, `aws.js`, `net.js`). Mỗi câu là một mảng:

```js
['mã-chương', 'Nội dung câu hỏi (hỗ trợ `code` và **đậm**)',
  ['Đáp án ĐÚNG', 'Nhiễu 1', 'Nhiễu 2', 'Nhiễu 3'],
  'Giải thích',
  `đoạn code minh họa (tùy chọn)`],
```

- Đáp án đúng **luôn đặt đầu tiên** – ứng dụng tự xáo trộn khi hiển thị.
- Chỉ thêm câu mới vào **cuối** danh sách để không làm lệch tiến độ đã lưu (id câu tính theo thứ tự).
- Tóm tắt lý thuyết nằm ở `data/notes.js`.

> Đây là tài liệu tự biên soạn để ôn tập, không phải đề thi chính thức của Ban Tổ chức.
