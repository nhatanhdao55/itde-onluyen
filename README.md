# Ôn luyện ITDE DevChampion 2027 – Vòng 1

Trang web tĩnh (HTML/CSS/JS thuần, không cần build) để ôn thi **Vòng 1 – Kiến thức nền tảng** (thi trắc nghiệm ngày 10/10/2026).

Nội dung bám theo Thông báo **"Nội dung thi Vòng 1 – Dev-Champion"** của Ban Tổ chức, gồm 5 nhóm:

| Chủ đề | Phạm vi BTC công bố | Nguồn biên soạn |
|---|---|---|
| 💻 Lập trình | Nền tảng ngôn ngữ, kiểu dữ liệu, toán tử · điều khiển, hàm, đệ quy, mảng/chuỗi · **OOP** · **xử lý lỗi & debugging** · **phân tích đúng đắn, hiệu năng, tối ưu code** | Slide Cơ sở lập trình C++ (C1–C9) + bổ sung OOP/debug/tối ưu |
| 🧮 CTDL & Giải thuật | Array, Linked List, Stack, Queue, Hash Table · Tree, **Heap**, Graph · tìm kiếm, sắp xếp, duyệt · BFS, DFS, đệ quy, **Backtracking** · **Greedy & Dynamic Programming** · Big-O | Slide CTDL&GT + vở ghi + bổ sung heap/quay lui/tham lam/QHĐ |
| 🗄️ Cơ sở dữ liệu | CSDL quan hệ, Table/Key/Relationship · SQL · JOIN, GROUP BY, HAVING, Subquery, hàm tổng hợp · PK, FK, **Index** · **Transaction, ACID, toàn vẹn dữ liệu** · **NoSQL** | Bài giảng CSDL CH1–CH4 (SQL Server / T-SQL) + bổ sung giao dịch & NoSQL |
| ☁️ AWS Cloud | Cloud computing & mô hình dịch vụ · **Region, AZ, kiến trúc hạ tầng** · EC2, S3, RDS, DynamoDB, Lambda, VPC, IAM, CloudWatch, **ELB, Auto Scaling** · Scalability, Elasticity, HA, Fault Tolerance · bảo mật & vận hành | Kiến thức nền (mức Cloud Practitioner) + tình huống chọn dịch vụ |
| 🌐 Mạng máy tính | OSI & TCP/IP · IPv4/IPv6, Subnet, Port · TCP, UDP, **3-way handshake** · HTTP/HTTPS, DNS, DHCP, SSH · **Router, Switch, Firewall, NAT, Routing** · Network Security, IoT | Slide Mạng máy tính & truyền thông (C1–C7) + bổ sung thiết bị/NAT/firewall |

Trang **Phạm vi thi** (`#/scope`) trong ứng dụng đối chiếu từng gạch đầu dòng của BTC với chương ôn tập tương ứng.

## Tính năng

- **Luyện tập** theo chủ đề/chương, hiện đáp án và giải thích ngay sau khi chọn.
- **Phạm vi thi**: đối chiếu thông báo của BTC với các chương trong ngân hàng câu hỏi.
- **Thi thử** trộn câu từ 5 nhóm, có đồng hồ đếm ngược, bảng câu hỏi, cắm cờ, tự nộp khi hết giờ (mặc định 50 câu/60 phút, chỉnh được – BTC chưa công bố số câu và thời lượng chính thức).
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
- Khi thêm một **chương mới**, nhớ khai báo mã chương trong `chapters` ở cuối file tương ứng, nếu không chương đó sẽ không hiện ở trang Luyện tập.
- Phạm vi thi do BTC công bố được khai báo trong hằng `SCOPE` ở đầu `js/app.js` – cập nhật ở đó nếu BTC ra thông báo mới.

> Đây là tài liệu tự biên soạn để ôn tập, không phải đề thi chính thức của Ban Tổ chức.
