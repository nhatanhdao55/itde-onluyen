/* Tóm tắt kiến thức theo chủ đề (HTML tĩnh do tác giả soạn). */
window.NOTES = {
cpp: `
<h3>Kiểu dữ liệu & toán tử</h3>
<ul>
  <li>Tên biến: chữ cái, chữ số, <code>_</code>; không bắt đầu bằng số; phân biệt HOA/thường; không trùng từ khóa.</li>
  <li><code>'A'</code> là hằng ký tự (1 byte), <code>"A"</code> là hằng chuỗi (2 byte, có <code>'\\0'</code>).</li>
  <li>Hằng: <code>017</code> = bát phân (15), <code>0x1F</code> = thập lục phân (31). Hậu tố <code>L</code>, <code>U</code>, <code>UL</code>.</li>
  <li>Chia 2 số nguyên → nguyên: <code>7/2 = 3</code>, <code>7%2 = 1</code>; không có <code>%</code> cho số thực. <code>float f = 7/2;</code> → 3.</li>
  <li><code>y = x++</code> (gán rồi tăng) ≠ <code>y = ++x</code> (tăng rồi gán). <code>if (a = 5)</code> là phép GÁN → luôn đúng.</li>
  <li>Bit: <code>5&amp;6=4</code>, <code>5|6=7</code>, <code>5^6=3</code>, <code>a&lt;&lt;n = a·2ⁿ</code>, <code>a&gt;&gt;n = a/2ⁿ</code>.</li>
  <li><code>&amp;&amp;</code>, <code>||</code> tính ngắn mạch. Toán tử phẩy lấy giá trị biểu thức cuối. <code>'A'+1 = 66</code> (int).</li>
  <li>Ưu tiên: <code>() [] -&gt;</code> &gt; một ngôi <code>! ++ -- ~</code> &gt; <code>* / %</code> &gt; <code>+ -</code> &gt; <code>&lt;&lt; &gt;&gt;</code> &gt; so sánh &gt; <code>== !=</code> &gt; <code>&amp; ^ |</code> &gt; <code>&amp;&amp;</code> &gt; <code>||</code> &gt; <code>?:</code> &gt; gán.</li>
</ul>
<h3>Cấu trúc điều khiển</h3>
<ul>
  <li><code>else</code> gắn với <code>if</code> gần nhất. Dấu <code>;</code> ngay sau <code>if(...)</code> tạo lệnh rỗng.</li>
  <li><code>switch</code>: chạy từ case khớp tới khi gặp <code>break</code> (fall-through); giá trị các case phải khác nhau.</li>
  <li><code>for</code>/<code>while</code> kiểm tra trước; <code>do…while</code> chạy ít nhất 1 lần. <code>break</code> thoát vòng trong cùng; <code>continue</code> sang lần lặp mới (không dùng cho switch).</li>
</ul>
<h3>Hàm</h3>
<ul>
  <li>Truyền tham trị (bản sao) – truyền tham chiếu <code>int &amp;x</code> – truyền con trỏ <code>int *x</code> (gọi <code>f(&amp;a)</code>).</li>
  <li>Biến cục bộ che biến toàn cục cùng tên; biến <code>static</code> cục bộ giữ giá trị giữa các lần gọi.</li>
  <li>Đệ quy = phần dừng + phần đệ quy. Tháp Hà Nội: 2ⁿ − 1 lần chuyển. Thiếu điểm dừng → Stack Overflow.</li>
</ul>
<h3>Mảng – xâu – struct</h3>
<ul>
  <li>Chỉ số 0..n−1, bộ nhớ liên tục, không gán mảng bằng <code>=</code>. <code>int a[5]={1,2}</code> → phần còn lại = 0.</li>
  <li>Mảng truyền cho hàm = địa chỉ phần tử đầu → hàm sửa được nội dung. Mảng 2 chiều phải ghi rõ số cột: <code>int a[][100]</code>.</li>
  <li>Ma trận vuông: chéo chính <code>i==j</code>, tam giác trên <code>i&lt;j</code>, chéo phụ <code>i+j==n-1</code>. A(m×n)·B(n×p) = C(m×p).</li>
  <li><code>cin &gt;&gt; s</code> dừng ở dấu cách; <code>getline(cin, s)</code> đọc cả dòng; dùng <code>cin.ignore()</code> sau khi nhập số.</li>
  <li><code>length/size, substr(pos,n), find, rfind, insert(pos,str), erase(pos,n), replace, compare</code>.</li>
  <li>struct: truy cập <code>.</code> (biến) hoặc <code>-&gt;</code> (con trỏ); gán được cho nhau nếu cùng kiểu; không so sánh <code>==</code>. union: các trường dùng chung vùng nhớ, kích thước = trường lớn nhất.</li>
</ul>
<h3>Con trỏ & tệp</h3>
<ul>
  <li><code>*p</code> nội dung, <code>&amp;a</code> địa chỉ. <code>p+n</code> tăng <code>n·sizeof(kiểu)</code> byte; <code>p2-p1</code> = số phần tử. <code>a[i] == *(a+i)</code>; tên mảng là hằng con trỏ.</li>
  <li><code>int (*f)(int,int)</code> là con trỏ hàm; <code>int *f(int,int)</code> là hàm trả về con trỏ.</li>
  <li><code>malloc/calloc/realloc</code> + <code>free</code> (phải ép kiểu từ <code>void*</code>); <code>new</code> + <code>delete</code>.</li>
  <li>Tệp: khai báo → mở → xử lý → đóng. <code>ifstream</code> (in), <code>ofstream</code> (out), <code>ios::app</code> ghi thêm, <code>ios::trunc</code> xóa cũ, <code>ios::binary</code>; <code>f.write((char*)&amp;x, sizeof(x))</code>.</li>
</ul>
<h3>OOP – Lập trình hướng đối tượng</h3>
<ul>
  <li>4 tính chất: <b>Đóng gói</b> (che dữ liệu, truy cập qua getter/setter) · <b>Kế thừa</b> (dùng lại lớp cha) · <b>Đa hình</b> (cùng lời gọi, hành vi khác) · <b>Trừu tượng</b> (chỉ lộ giao diện).</li>
  <li>Truy cập: <code>private</code> (trong lớp + friend) &lt; <code>protected</code> (+ lớp con) &lt; <code>public</code>. Mặc định: <code>class</code> → private, <code>struct</code> → public.</li>
  <li>Constructor: trùng tên lớp, KHÔNG kiểu trả về, nạp chồng được; danh sách khởi tạo <code>: x(a), y(b)</code> bắt buộc với thành viên <code>const</code>/tham chiếu. Destructor <code>~Lop()</code>: duy nhất, không tham số.</li>
  <li>Thứ tự: tạo cha → tạo con; hủy con → hủy cha. Lớp cha có hàm ảo ⇒ destructor phải <code>virtual</code>, nếu không sẽ rò rỉ tài nguyên.</li>
  <li><b>Overload</b> (cùng tên, khác tham số, quyết định lúc biên dịch) ≠ <b>Override</b> (lớp con viết lại hàm <code>virtual</code> cùng chữ ký, quyết định lúc chạy qua vtable).</li>
  <li>Hàm ảo thuần <code>virtual void f() = 0;</code> → lớp trừu tượng, không tạo được đối tượng. <code>static</code>: dùng chung cả lớp, truy cập <code>Lop::x</code>. <code>this</code>: trỏ tới đối tượng đang gọi.</li>
  <li>Copy constructor <code>Lop(const Lop&amp;)</code> gọi khi khởi tạo từ đối tượng khác, truyền/trả về theo trị (KHÁC toán tử gán). Quan hệ: kế thừa = "is-a", composition = "has-a".</li>
</ul>
<h3>Xử lý lỗi &amp; debugging</h3>
<ul>
  <li>Các loại lỗi: <b>cú pháp</b> (trình biên dịch chặn) · <b>liên kết</b> (undefined reference – thiếu định nghĩa hàm) · <b>thời gian chạy</b> (chia 0, truy cập nullptr, tràn mảng) · <b>logic</b> (chạy được nhưng sai – nguy hiểm nhất).</li>
  <li><code>try { … throw x; } catch (kiểu e) { … } catch (...) { }</code> – khối <code>catch(...)</code> phải đặt CUỐI cùng.</li>
  <li>Bẫy hay gặp: <code>i &lt;= n</code> tràn mảng (off-by-one) · biến cục bộ không khởi tạo = giá trị rác · <code>if (x&gt;0);</code> dấu chấm phẩy thừa · quên tăng biến đếm → lặp vô hạn · đệ quy thiếu điểm dừng → stack overflow.</li>
  <li>Bộ nhớ: thiếu <code>delete</code> → memory leak; dùng sau <code>delete</code> → dangling pointer (nên gán <code>nullptr</code>); <code>new[]</code> phải đi với <code>delete[]</code>.</li>
  <li>Tràn số: <code>int</code> 32 bit chỉ tới 2 147 483 647 → dùng <code>long long</code>. So sánh số thực phải dùng <code>fabs(a−b) &lt; eps</code>, không dùng <code>==</code>.</li>
  <li>Công cụ: breakpoint + step over/into + cửa sổ Watch; <code>assert()</code> kiểm tra giả định khi phát triển (bị tắt khi định nghĩa <code>NDEBUG</code>).</li>
</ul>
<h3>Đọc hiểu &amp; tối ưu code</h3>
<ul>
  <li>Kiểm tra tính đúng đắn theo thứ tự: trường hợp thường → biên (n = 0, n = 1, số âm, phần tử trùng) → tràn số, chia 0.</li>
  <li>Tối ưu kinh điển: kiểm tra nguyên tố chỉ tới <code>√n</code> (O(n) → O(√n)) · đưa <code>s.length()</code> ra ngoài vòng lặp · memo hóa Fibonacci (O(2ⁿ) → O(n)) · dùng bảng băm thay hai vòng for lồng nhau (O(n²) → O(n)).</li>
  <li>Truyền đối tượng lớn bằng <code>const T&amp;</code> để tránh sao chép O(n); dùng <code>++it</code> thay <code>it++</code> với iterator; duyệt mảng hai chiều theo DÒNG (row-major, thân thiện cache).</li>
  <li>Tăng tốc I/O: <code>ios_base::sync_with_stdio(false); cin.tie(NULL);</code> và dùng <code>"\n"</code> thay <code>endl</code>.</li>
  <li>Mẹo bit: <code>n &amp; (n−1)</code> bằng 0 ⇔ n là lũy thừa của 2. Nhớ <code>&amp;&amp;</code> và <code>||</code> tính ngắn mạch.</li>
</ul>
`,

dsa: `
<h3>Độ phức tạp</h3>
<p>O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n²) &lt; O(n³) &lt; O(2ⁿ) &lt; O(n!). Quy tắc: bỏ hằng số; tổng → lấy max; vòng lặp lồng → nhân; if-else → max các nhánh.</p>
<div class="tbl-scroll"><table>
<tr><th>Thuật toán</th><th>Tốt nhất</th><th>Trung bình</th><th>Xấu nhất</th><th>Ghi chú</th></tr>
<tr><td>Tìm tuyến tính</td><td>O(1)</td><td>(N+1)/2 → O(n)</td><td>O(n)</td><td>Lính canh giảm phép so sánh</td></tr>
<tr><td>Tìm nhị phân</td><td>O(1)</td><td>O(log n)</td><td>O(log n)</td><td>Dãy phải có thứ tự</td></tr>
<tr><td>Interchange / Selection / Bubble / Insertion</td><td>O(n) – O(n²)</td><td>O(n²)</td><td>O(n²)</td><td>Interchange luôn n(n−1)/2 phép so sánh</td></tr>
<tr><td>Shell Sort</td><td colspan="3">khoảng O(n^1.25) – phụ thuộc dãy h</td><td>Cải tiến chèn trực tiếp</td></tr>
<tr><td>Heap Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>Heap: a[i] ≥ a[2i+1], a[2i+2]</td></tr>
<tr><td>Quick Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n²)</td><td>Phân hoạch theo mốc x</td></tr>
<tr><td>Merge Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>Phân phối luân phiên + trộn</td></tr>
<tr><td>Radix Sort</td><td colspan="3">O(k·n), không so sánh</td><td>Postman's sort – phân lô theo chữ số</td></tr>
</table></div>
<h3>Đệ quy</h3>
<ul><li>Tuyến tính (1 lời gọi), nhị phân (2 lời gọi), hỗ tương (A↔B), phi tuyến (gọi trong vòng lặp).</li>
<li>Chia để trị: QuickSort, MergeSort, tìm nhị phân, Hà Nội. Quay lui: 8 hậu, mã đi tuần.</li></ul>
<h3>Danh sách liên kết – Stack – Queue</h3>
<ul>
  <li>AddHead: <code>p-&gt;pNext = pHead; pHead = p;</code> · AddTail: <code>pTail-&gt;pNext = p; pTail = p;</code> · Chèn sau q: <code>p-&gt;pNext = q-&gt;pNext; q-&gt;pNext = p;</code></li>
  <li>Stack LIFO (Push/Pop/Top, t = −1 là rỗng; thêm & hủy cùng phía). Queue FIFO (EnQueue cuối, DeQueue đầu; "đầy ảo" khi cài bằng mảng).</li>
  <li>Stack: gọi hàm, khử đệ quy, quay lui, định giá biểu thức, DFS. Queue: BFS, bộ đệm, lập lịch tiến trình.</li>
  <li>Trung tố → hậu tố: <code>(a+b)*c-d</code> → <code>ab+c*d-</code>. Tính hậu tố: toán hạng push; toán tử pop 2 (phần tử pop sau là toán hạng TRÁI), tính, push.</li>
</ul>
<h3>Cây</h3>
<ul>
  <li>Bậc nút = số cây con; lá bậc 0; mức gốc = 0; mức k có tối đa 2ᵏ nút.</li>
  <li>NLR (trước), LNR (giữa), LRN (sau). LNR của BST cho dãy tăng dần.</li>
  <li>BST: thêm/tìm/xóa O(h); xóa nút 2 con → thế mạng bằng nút trái nhất cây con phải hoặc phải nhất cây con trái. Xấu nhất O(n) khi cây suy biến.</li>
</ul>
<h3>Heap &amp; hàng đợi ưu tiên</h3>
<ul>
  <li>Cây nhị phân gần hoàn chỉnh, cha ≥ con (max-heap) hoặc cha ≤ con (min-heap). KHÔNG ràng buộc trái &lt; phải như BST.</li>
  <li>Lưu bằng mảng, chỉ số từ 0: con trái <code>2i+1</code>, con phải <code>2i+2</code>, cha <code>(i−1)/2</code>.</li>
  <li>Chèn (sift-up) và lấy phần tử ưu tiên nhất (sift-down): O(log n); xem gốc: O(1); dựng heap từ mảng: O(n).</li>
  <li>Ứng dụng: hàng đợi ưu tiên, Heap Sort O(n log n) tại chỗ, Dijkstra &amp; Prim, tìm k phần tử lớn nhất bằng min-heap kích thước k → O(n log k).</li>
</ul>
<h3>Quay lui (Backtracking)</h3>
<ul>
  <li>Khung: nếu đủ lời giải thì ghi nhận; ngược lại với mỗi lựa chọn hợp lệ: <b>chọn → gọi đệ quy → bỏ chọn</b>. Bản chất là DFS trên cây không gian trạng thái.</li>
  <li><b>Cắt tỉa (pruning)</b>: loại sớm nhánh chắc chắn không dẫn tới lời giải – không đổi độ phức tạp lý thuyết nhưng cải thiện rất lớn trong thực tế.</li>
  <li>Bài toán kinh điển: 8 quân hậu (92 lời giải), mã đi tuần, Sudoku, sinh hoán vị O(n!·n), sinh tập con O(2ⁿ·n).</li>
</ul>
<h3>Tham lam &amp; Quy hoạch động</h3>
<ul>
  <li><b>Tham lam</b>: mỗi bước chọn tốt nhất cục bộ, không xét lại. ĐÚNG với: xếp lịch hoạt động (chọn <i>kết thúc sớm nhất</i>), cái túi phân số (sắp theo giá trị/khối lượng), mã Huffman, Kruskal, Prim, Dijkstra. SAI với: đổi tiền mệnh giá {1, 3, 4} số tiền 6 (tham lam 4+1+1 = 3 tờ, tối ưu 3+3 = 2 tờ) và cái túi 0/1.</li>
  <li><b>Quy hoạch động</b> dùng khi có <i>cấu trúc con tối ưu</i> + <i>bài toán con gối nhau</i>. Hai cách cài đặt: top-down (đệ quy + memo hóa) và bottom-up (lặp điền bảng).</li>
  <li>Cái túi 0/1: <code>f[i][w] = max(f[i−1][w], f[i−1][w−kl[i]] + gt[i])</code> – O(n·W), là đa thức giả (pseudo-polynomial).</li>
  <li>LCS hai xâu: ký tự giống nhau → <code>f[i−1][j−1]+1</code>, khác → <code>max(f[i−1][j], f[i][j−1])</code>, O(m·n). LIS: O(n²) hoặc O(n log n) kết hợp tìm nhị phân. Kadane (tổng dãy con liên tiếp lớn nhất): O(n).</li>
  <li>Phân biệt: chia để trị có bài toán con ĐỘC LẬP (Merge Sort) ≠ quy hoạch động có bài toán con GỐI nhau.</li>
</ul>
<h3>Bảng băm & đồ thị</h3>
<ul>
  <li>Hàm băm tốt: nhanh, phân bố đều, ít xung đột; H(x) = x mod m với m nguyên tố. Dò tuyến tính <code>(H+i) mod m</code>, bình phương <code>(H+i²) mod m</code>, nối kết (chaining).</li>
  <li>Danh sách kề O(V+E) (tổng độ dài 2|E| vô hướng); ma trận kề O(V²), đối xứng nếu vô hướng.</li>
  <li>BFS dùng queue, DFS dùng stack/đệ quy. Dijkstra (trọng số ≥ 0, O(n²)); Floyd (mọi cặp, O(n³)).</li>
  <li>Cây khung n đỉnh có n−1 cạnh. Kruskal: sắp cạnh tăng dần, bỏ cạnh tạo chu trình (rừng). Prim: lớn dần từ 1 đỉnh (cây đơn).</li>
</ul>`,

db: `
<p class="muted">Bám theo bài giảng CSDL – Khoa CNTT &amp; KTS (HQT SQL Server). SQL chuẩn khác một chút ở vài cú pháp (vd <code>LIMIT</code> thay cho <code>TOP</code>).</p>
<h3>CH1 – Tổng quan</h3>
<ul>
  <li>Dữ liệu = ghi chép thô; thông tin = kết quả có ý nghĩa sau xử lý. CSDL = tập dữ liệu có cấu trúc, liên quan, lưu trong máy tính.</li>
  <li>3 lớp: vật lý – logic (schema) – bên ngoài (khung nhìn) → độc lập dữ liệu vật lý &amp; logic.</li>
  <li>Hệ thống file: dư thừa, mâu thuẫn, kém truy cập đồng thời, kém bảo mật.</li>
  <li>Mô hình: phân cấp (cây, IMS), mạng (đồ thị có hướng, IDMS), quan hệ (Codd 1970; SQL Server, Oracle, Access), ERD (Chen 1976), hướng đối tượng (đầu 90s).</li>
  <li>Người dùng: DBA, lập trình viên ứng dụng, người dùng cuối.</li>
</ul>
<h3>CH2 – Mô hình quan hệ &amp; chuẩn hóa</h3>
<ul>
  <li>Hàng = bộ = bản ghi; cột = thuộc tính = trường; bảng = quan hệ. Thứ tự dòng/cột không quan trọng.</li>
  <li>Siêu khóa → khóa dự tuyển (tối thiểu) → khóa chính (được chọn, không NULL). Khóa ngoại tham chiếu khóa chính bảng khác.</li>
  <li>Tìm khóa: thuộc tính chỉ ở vế trái / không xuất hiện → chắc chắn thuộc khóa; chỉ ở vế phải → không thuộc khóa; tính bao đóng X⁺.</li>
  <li><b>1NF</b>: giá trị đơn. <b>2NF</b>: 1NF + không phụ thuộc bộ phận vào khóa. <b>3NF</b>: 2NF + không phụ thuộc bắc cầu. <b>BCNF</b>: vế trái mọi phụ thuộc hàm là siêu khóa.</li>
  <li>Phi chuẩn hóa: chủ động giữ dạng chuẩn thấp hơn để tăng hiệu năng (vd giữ ThanhTien).</li>
</ul>
<h3>CH3 – SQL / T-SQL</h3>
<ul>
  <li>DQL: SELECT · DDL: CREATE, ALTER, DROP · DML: INSERT, UPDATE, DELETE (TRUNCATE) · DCL: GRANT, REVOKE.</li>
  <li>Viết: <code>SELECT [TOP n] … [INTO bảng_mới] FROM … WHERE … GROUP BY … HAVING … ORDER BY</code>. Xử lý: FROM → WHERE → GROUP BY → HAVING → SELECT → ORDER BY.</li>
  <li>LIKE: <code>%</code> nhiều ký tự, <code>_</code> 1 ký tự, <code>[a-f]</code>, <code>[^a-f]</code>. BETWEEN gồm 2 đầu. So sánh NULL dùng <code>IS NULL</code>.</li>
  <li>COUNT(*) đếm mọi dòng, COUNT(cột) bỏ NULL. Cột không nằm trong hàm nhóm phải có trong GROUP BY; điều kiện trên hàm nhóm dùng HAVING.</li>
  <li>JOIN: INNER (khớp), LEFT/RIGHT/FULL OUTER (giữ bảng trái/phải/cả hai, thiếu thì NULL), CROSS (n×m), nối bằng, tự nối.</li>
  <li>Truy vấn con: trong ngoặc, không ORDER BY; IN/NOT IN, EXISTS/NOT EXISTS, <code>&gt; ALL</code> (lớn hơn tất cả), <code>&gt; ANY</code> (lớn hơn ít nhất 1).</li>
  <li>Ràng buộc: PRIMARY KEY, FOREIGN KEY (… ON DELETE CASCADE | NO ACTION (mặc định) | SET NULL | SET DEFAULT), UNIQUE, DEFAULT, CHECK.</li>
  <li>File CSDL SQL Server: .mdf (chính), .ndf (phụ), .ldf (log). Thuộc tính: NAME, FILENAME, SIZE, MAXSIZE, FILEGROWTH.</li>
  <li>Index tự tạo cho PRIMARY KEY &amp; UNIQUE. View = bảng ảo; không cập nhật được nếu nhiều bảng, hàm gộp, GROUP BY/DISTINCT, cột biểu thức.</li>
  <li>T-SQL: <code>DECLARE @x int; SET @x = …; SELECT @x = …</code>; <code>PRINT 'a' + CAST(@x AS char(5))</code>; IF/ELSE, WHILE (BEGIN…END), CASE.</li>
  <li>Hàm: vô hướng <code>SELECT dbo.f()</code>; trả về bảng <code>SELECT * FROM f(…)</code>. Thủ tục: <code>EXEC p @a = 1, @b = @kq OUTPUT</code>.</li>
  <li>Trigger: không tham số, tự chạy khi INSERT/UPDATE/DELETE; bảng tạm <code>inserted</code>/<code>deleted</code> (UPDATE có cả hai); FOR/AFTER vs INSTEAD OF; <code>RAISERROR</code> + <code>ROLLBACK TRAN</code>.</li>
</ul>
<h3>CH4 – Thiết kế CSDL</h3>
<ul>
  <li>HTTT: phần cứng, phần mềm, dữ liệu, quy trình, con người. Vòng đời CSDL: khởi tạo → thiết kế → thực thi → kiểm thử &amp; đánh giá → vận hành → bảo trì.</li>
  <li>Khái niệm (ERD) → Logic (lược đồ quan hệ + chuẩn hóa) → Vật lý (kiểu dữ liệu, index, view, phân quyền).</li>
  <li>ERD: thực thể (danh từ), thuộc tính (định danh, đa trị, dẫn xuất, phức hợp), mối quan hệ (động từ), bậc = số thực thể tham gia, bản số 1:1, 1:N, M:N.</li>
  <li>Chuyển đổi: 1:N → khóa bên 1 thành khóa ngoại bên N; M:N → bảng mới (khóa hai bên + thuộc tính riêng); thực thể yếu và thuộc tính đa trị → bảng mới.</li>
  <li><code>CHAR(n)</code> cố định, <code>VARCHAR(n)</code> thay đổi; <code>DECIMAL(7,2)</code> = 7 chữ số, 2 số thập phân.</li>
  <li>Giao dịch ACID (Atomicity, Consistency, Isolation, Durability); COMMIT / ROLLBACK.</li>
</ul>
<h3>Giao dịch, ACID &amp; toàn vẹn dữ liệu</h3>
<ul>
  <li>Giao dịch = đơn vị công việc logic, "tất cả hoặc không gì cả". <b>A</b>tomicity (lỗi thì ROLLBACK toàn bộ) · <b>C</b>onsistency (vẫn thỏa mọi ràng buộc) · <b>I</b>solation (giao dịch đồng thời không ảnh hưởng nhau) · <b>D</b>urability (đã COMMIT thì không mất, nhờ transaction log .ldf – ghi log trước, ghi dữ liệu sau).</li>
  <li>Sự cố đồng thời: <b>Dirty read</b> (đọc dữ liệu chưa commit) · <b>Lost update</b> (ghi đè lên nhau) · <b>Non-repeatable read</b> (đọc lại một dòng ra giá trị khác) · <b>Phantom read</b> (truy vấn lại thấy thêm/bớt DÒNG) · <b>Deadlock</b> (DBMS hủy một bên).</li>
  <li>Mức cô lập tăng dần: READ UNCOMMITTED → READ COMMITTED (mặc định, chặn dirty read) → REPEATABLE READ → SERIALIZABLE (chặn cả phantom). Cơ chế: khóa chia sẻ/độc quyền hoặc MVCC. <code>SAVE TRAN</code> tạo điểm quay lui giữa chừng.</li>
  <li>Toàn vẹn: <b>thực thể</b> ← PRIMARY KEY · <b>tham chiếu</b> ← FOREIGN KEY (NO ACTION mặc định / CASCADE / SET NULL / SET DEFAULT) · <b>miền</b> ← kiểu dữ liệu, CHECK, NOT NULL, DEFAULT.</li>
  <li>Index: tăng tốc SELECT/WHERE/JOIN nhưng làm CHẬM INSERT/UPDATE/DELETE và tốn dung lượng; không hiệu quả trên cột có độ chọn lọc thấp (vd GioiTinh chỉ 2 giá trị).</li>
</ul>
<h3>NoSQL &amp; lựa chọn CSDL</h3>
<ul>
  <li>4 kiểu: <b>key–value</b> (Redis, DynamoDB – cache, session, giỏ hàng) · <b>document</b> (MongoDB – JSON/BSON; collection ↔ bảng, document ↔ dòng, field ↔ cột) · <b>column-family</b> (Cassandra, HBase) · <b>graph</b> (Neo4j, Neptune – quan hệ nhiều tầng).</li>
  <li>Mở rộng <b>theo chiều dọc</b> (nâng cấp máy, có giới hạn) ≠ <b>theo chiều ngang</b> (thêm nhiều máy – hướng NoSQL được thiết kế để tận dụng).</li>
  <li><b>CAP</b>: hệ phân tán chỉ đạt tối đa 2 trong 3 (Consistency, Availability, Partition tolerance) → thực tế chọn CP hoặc AP. <b>BASE</b> (Basically Available, Soft state, Eventually consistent) đổi nhất quán tức thì lấy tính sẵn sàng và khả năng mở rộng.</li>
  <li>Chọn <b>quan hệ</b> khi dữ liệu có cấu trúc rõ, quan hệ chặt chẽ, cần ACID nghiêm ngặt (ngân hàng, kế toán). Chọn <b>NoSQL</b> khi lược đồ linh hoạt, dữ liệu rất lớn, cần độ trễ thấp và mở rộng ngang; NoSQL thường phi chuẩn hóa / nhúng dữ liệu con để đọc một lần thay vì JOIN.</li>
  <li>OLTP (nhiều giao dịch nhỏ, cập nhật liên tục) ≠ OLAP (phân tích, báo cáo tổng hợp – Redshift, Athena).</li>
</ul>`,

aws: `
<p class="muted">Phần này không có trong bài giảng – tổng hợp kiến thức nền tương đương AWS Cloud Practitioner / chương trình AWS First Cloud Journey.</p>
<h3>Khái niệm</h3>
<ul>
  <li>Cloud = tài nguyên CNTT theo nhu cầu qua Internet, trả theo mức dùng. IaaS (EC2) · PaaS (Elastic Beanstalk) · SaaS (Gmail).</li>
  <li>Triển khai: public, private (on-premises), hybrid.</li>
  <li>6 lợi ích: CapEx → OpEx; quy mô kinh tế; không đoán dung lượng; nhanh &amp; linh hoạt; không tốn tiền vận hành DC; toàn cầu trong vài phút.</li>
  <li>Region (chọn theo tuân thủ, độ trễ, dịch vụ, giá) ⊃ nhiều AZ (1+ trung tâm dữ liệu riêng biệt). Edge location cho CloudFront/Route 53.</li>
</ul>
<h3>Dịch vụ cốt lõi</h3>
<div class="tbl-scroll"><table>
<tr><th>Nhóm</th><th>Dịch vụ</th></tr>
<tr><td>Compute</td><td>EC2 (AMI, instance type) · Lambda (serverless, ≤ 15 phút) · Auto Scaling · ELB (ALB tầng 7, NLB tầng 4) · ECS/EKS/Fargate (container) · Lightsail · Elastic Beanstalk</td></tr>
<tr><td>Giá EC2</td><td>On-Demand (linh hoạt) · Reserved/Savings Plans (1–3 năm, ~72%) · Spot (~90%, có thể bị thu hồi) · Dedicated Hosts</td></tr>
<tr><td>Lưu trữ</td><td>S3 (object, 11 số 9, ≤ 5 TB/object; Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier Instant/Flexible/Deep Archive; Versioning, Lifecycle) · EBS (block, 1 AZ, snapshot) · EFS (file NFS dùng chung) · Instance Store (tạm) · Snowball (chuyển dữ liệu lớn)</td></tr>
<tr><td>CSDL</td><td>RDS (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server; Multi-AZ = sẵn sàng, Read Replica = đọc) · Aurora · DynamoDB (NoSQL) · Redshift (kho dữ liệu) · ElastiCache · Neptune (đồ thị) · DMS (di chuyển) · Athena (SQL trên S3)</td></tr>
<tr><td>Mạng</td><td>VPC, subnet public/private, Internet Gateway, NAT Gateway · Security Group (instance, stateful, chỉ Allow) vs NACL (subnet, stateless, Allow + Deny) · Route 53 (DNS) · CloudFront (CDN) · Direct Connect (đường riêng) · Site-to-Site VPN · VPC Peering / Transit Gateway · API Gateway</td></tr>
<tr><td>Bảo mật</td><td>IAM (users, groups, roles, policies JSON, least privilege, MFA, không dùng root) · KMS · Shield (DDoS) · WAF (tầng 7) · GuardDuty (phát hiện đe dọa) · Inspector (lỗ hổng) · Macie (PII trong S3) · Artifact (báo cáo tuân thủ) · Cognito (đăng nhập app) · ACM (SSL/TLS) · Secrets Manager</td></tr>
<tr><td>Quản trị</td><td>CloudWatch (metrics, logs, alarms) · CloudTrail (ai gọi API gì) · Config (lịch sử cấu hình) · CloudFormation (IaC) · Trusted Advisor · Organizations (consolidated billing, SCP)</td></tr>
<tr><td>Chi phí</td><td>Pricing Calculator (ước tính trước) · Cost Explorer (phân tích) · Budgets (cảnh báo) · Free Tier · Support: Basic → Developer → Business → Enterprise On-Ramp → Enterprise (TAM)</td></tr>
<tr><td>Khác</td><td>SQS (hàng đợi) · SNS (pub/sub) · Kinesis (streaming) · Glue (ETL) · QuickSight (BI) · IoT Core · SageMaker · Bedrock (gen AI) · Rekognition · Polly · Transcribe · Lex</td></tr>
</table></div>
<h3>Co giãn, sẵn sàng &amp; chọn dịch vụ</h3>
<ul>
  <li><b>Scalability</b> (đáp ứng được tải lớn hơn khi thêm tài nguyên) ≠ <b>Elasticity</b> (tự động thêm/bớt theo nhu cầu). <b>High Availability</b> (giảm downtime, có thể gián đoạn ngắn khi failover) ≠ <b>Fault Tolerance</b> (chạy liên tục dù một thành phần lỗi).</li>
  <li><b>ELB</b> phân phối tải (ALB tầng 7, định tuyến theo URL/host; NLB tầng 4, độ trễ cực thấp, IP tĩnh) – <b>Auto Scaling</b> thay đổi SỐ LƯỢNG máy (min / desired / max). Chính sách: target tracking, step, scheduled (sự kiện biết trước), predictive. Dùng health check của ELB để phát hiện máy còn sống nhưng ứng dụng đã treo.</li>
  <li>Scale <b>up</b> (đổi instance lớn hơn, có giới hạn) ≠ scale <b>out</b> (thêm instance sau load balancer – hướng ưu tiên trên cloud).</li>
  <li>Phạm vi dịch vụ: <b>Global</b> – IAM, Route 53, CloudFront, Organizations; <b>theo Region</b> – S3, DynamoDB, Lambda; <b>theo AZ</b> – EC2 instance, EBS, subnet. Đa AZ chống lỗi trung tâm dữ liệu; đa Region chống lỗi khu vực.</li>
</ul>
<h3>Chọn dịch vụ theo bài toán</h3>
<div class="tbl-scroll"><table>
<tr><th>Yêu cầu</th><th>Dịch vụ</th></tr>
<tr><td>Lưu ảnh/video người dùng, dung lượng không giới hạn</td><td>S3 (+ CloudFront nếu cần phân phối toàn cầu)</td></tr>
<tr><td>Xử lý ngắn, tải thất thường, không muốn nuôi máy chủ</td><td>Lambda (kích hoạt bởi S3 Event, API Gateway…)</td></tr>
<tr><td>CSDL quan hệ có sao lưu &amp; failover tự động</td><td>RDS Multi-AZ (<b>Read Replica</b> mới là để chia tải ĐỌC)</td></tr>
<tr><td>Độ trễ dưới mili giây, truy cập theo khóa, quy mô lớn</td><td>DynamoDB</td></tr>
<tr><td>Phân tích hàng TB dữ liệu lịch sử bằng SQL</td><td>Redshift (hoặc Athena nếu dữ liệu đã ở S3)</td></tr>
<tr><td>Giảm tải truy vấn lặp lại bằng cache RAM</td><td>ElastiCache (Redis / Memcached)</td></tr>
<tr><td>Hai microservice giao tiếp không đồng bộ, không mất tin</td><td>SQS (SNS là pub/sub phát tán cho nhiều bên)</td></tr>
<tr><td>EC2 cần quyền truy cập S3 an toàn</td><td>IAM Role gán cho instance (KHÔNG nhúng access key)</td></tr>
<tr><td>Ai gọi API nào / hệ thống chạy ra sao / cấu hình đổi gì</td><td>CloudTrail / CloudWatch / Config</td></tr>
<tr><td>Cảnh báo CPU cao rồi gửi email</td><td>CloudWatch Alarm + SNS</td></tr>
<tr><td>Đặt ngưỡng và cảnh báo chi tiêu</td><td>Budgets (Pricing Calculator ước tính trước, Cost Explorer phân tích sau)</td></tr>
<tr><td>Máy trong private subnet cần tải bản vá từ Internet</td><td>NAT Gateway đặt ở public subnet</td></tr>
<tr><td>Lưu trữ tuân thủ 7 năm, hầu như không truy cập</td><td>S3 Glacier Deep Archive (+ Lifecycle tự chuyển lớp)</td></tr>
</table></div>
<h3>Mô hình trách nhiệm chia sẻ</h3>
<ul><li><b>AWS</b>: bảo mật CỦA đám mây – phần cứng, trung tâm dữ liệu, mạng toàn cầu, lớp ảo hóa, dịch vụ managed.</li>
<li><b>Khách hàng</b>: bảo mật TRONG đám mây – dữ liệu, IAM, hệ điều hành EC2 &amp; bản vá, Security Group, mã hóa.</li></ul>
<h3>Well-Architected (6 trụ cột) &amp; di chuyển (7R)</h3>
<ul><li>Operational Excellence · Security · Reliability · Performance Efficiency · Cost Optimization · Sustainability.</li>
<li>Retire · Retain · Rehost (lift-and-shift) · Relocate · Replatform · Repurchase · Refactor.</li></ul>`,

net: `
<h3>Tổng quan</h3>
<ul>
  <li>Phân loại: kỹ thuật truyền (quảng bá / điểm–điểm), phạm vi (LAN &lt; vài km, MAN thành phố, WAN quốc gia–châu lục), chức năng (peer-to-peer / client–server).</li>
  <li>Topology: Bus (terminator, rẻ, đứt là dừng) · Star (thiết bị trung tâm, trung tâm hỏng là dừng) · Ring (token, đứt là dừng) · Mesh (tin cậy, tốn dây).</li>
  <li>Dịch vụ: DHCP (cấp IP động, 4 bước), DNS (tên → IP), RAS, File/Print server.</li>
</ul>
<h3>OSI (7 tầng) &amp; TCP/IP (4 tầng)</h3>
<div class="tbl-scroll"><table>
<tr><th>#</th><th>OSI</th><th>Chức năng / đơn vị</th><th>TCP/IP</th><th>Thiết bị / giao thức</th></tr>
<tr><td>7</td><td>Ứng dụng</td><td>Giao diện người dùng – mạng</td><td rowspan="3">Ứng dụng</td><td>HTTP, FTP, SMTP, DNS, Telnet, SNMP</td></tr>
<tr><td>6</td><td>Trình diễn</td><td>Chuyển đổi khuôn dạng, nén, mã hóa</td><td></td></tr>
<tr><td>5</td><td>Phiên</td><td>Thiết lập/quản lý phiên, điểm đồng bộ, token</td><td></td></tr>
<tr><td>4</td><td>Giao vận</td><td>End-to-end, đánh số, thứ tự · segment</td><td>Giao vận</td><td>TCP, UDP</td></tr>
<tr><td>3</td><td>Mạng</td><td>Chọn đường, địa chỉ logic · packet</td><td>Internet</td><td>IP, ICMP, IGMP, ARP · Router</td></tr>
<tr><td>2</td><td>Liên kết dữ liệu</td><td>Frame, MAC, kiểm soát lỗi &amp; luồng</td><td rowspan="2">Giao tiếp mạng</td><td>Switch, Bridge, NIC</td></tr>
<tr><td>1</td><td>Vật lý</td><td>Dòng bit, không header</td><td>Hub, Repeater, cáp</td></tr>
</table></div>
<ul>
  <li>Nhồi bit: chèn 0 sau 5 bit 1 liên tiếp (cờ 01111110). ARQ: Stop-and-wait, Go-back-N (gửi lại từ frame lỗi, cửa sổ 2ⁿ−1), Selective repeat (chỉ gửi lại frame lỗi).</li>
  <li>TCP: có liên kết, tin cậy, bắt tay 3 bước SYN → SYN-ACK → ACK. UDP: không liên kết, nhanh. Protocol field: TCP = 6, UDP = 17. TTL giảm 1 qua mỗi router. Header IPv4 20–60 byte; IPv6 40 byte cố định.</li>
  <li>Cổng: FTP 20/21 · SSH 22 · Telnet 23 · SMTP 25 · DNS 53 · DHCP 67/68 · TFTP 69 · HTTP 80 · POP3 110 · SNMP 161 · HTTPS 443.</li>
  <li>ARP: IP → MAC; RARP: MAC → IP; ICMP: ping (Echo Request/Reply). MAC 48 bit (24 bit OUI).</li>
</ul>
<h3>Địa chỉ IPv4</h3>
<ul>
  <li>Lớp A 1–126 (/8) · B 128–191 (/16) · C 192–223 (/24) · D 224–239 multicast · E dự phòng. 127.x loopback.</li>
  <li>Riêng: 10.0.0.0/8 · 172.16–172.31 · 192.168.0.0/16.</li>
  <li>Địa chỉ mạng = IP AND mask; quảng bá = phần host toàn 1; số host = 2ʰ − 2; số mạng con = 2ˢ.</li>
  <li>Ví dụ 192.168.10.77/27: bước 32 → mạng .64, quảng bá .95, host .65–.94.</li>
</ul>
<h3>LAN – WAN – Internet</h3>
<ul>
  <li>UTP ≤ 100 m (Cat5 100 Mb/s); đồng trục mỏng 185 m, dày 500 m; cáp quang chống nhiễu, bảo mật tốt nhất. Bấm thẳng: khác loại (PC–Switch); bấm chéo: cùng loại (PC–PC, PC–Router).</li>
  <li>Truy nhập đường truyền: chia kênh (TDMA/FDMA/CDMA), ngẫu nhiên (ALOHA, CSMA, CSMA/CD – Ethernet, CSMA/CA – WiFi), phân lượt (polling, token bus/ring).</li>
  <li>WAN: chuyển mạch kênh (PSTN) vs gói (datagram / mạch ảo). X.25 kiểm lỗi mọi nút; Frame Relay chỉ ở 2 đầu; ATM cell 53 byte (5+48). ISDN BRI 2B+D (64/16 kbps), PRI 23B+D / 30B+D.</li>
  <li>Internet: ARPANET 1969 (4 nút), WWW 1989 (CERN). FTP 2 kết nối (21 điều khiển, 20 dữ liệu). H.323: gatekeeper = "bộ não". DNS: local, root, authoritative.</li>
  <li>Định tuyến: RIP (vector khoảng cách, ≤ 15 hop), OSPF (link-state, Dijkstra), IGRP (Cisco), BGP (giữa các AS).</li>
</ul>
<h3>Thiết bị, NAT, Firewall &amp; định tuyến</h3>
<ul>
  <li><b>Hub</b> (tầng 1, phát ra mọi cổng, cả mạng là một miền đụng độ) · <b>Switch</b> (tầng 2, học MAC nguồn, chuyển đúng cổng, mỗi cổng một miền đụng độ) · <b>Router</b> (tầng 3, chọn đường theo IP, tách miền quảng bá).</li>
  <li><b>NAT</b> đổi IP riêng ↔ IP công cộng. <b>PAT / NAT overload</b>: nhiều máy dùng chung một IP công cộng, phân biệt bằng số hiệu cổng. Nhược điểm: phá vỡ kết nối đầu cuối – đầu cuối, cần port forwarding cho P2P/VoIP.</li>
  <li>Bảng định tuyến: mạng đích + mask + next hop/cổng ra + metric; chọn theo <b>khớp tiền tố dài nhất</b>. Tuyến mặc định <code>0.0.0.0/0</code> dùng khi không khớp mục nào. Tĩnh (thủ công, ổn định) ≠ động (RIP ≤ 15 hop, OSPF link-state/Dijkstra, BGP giữa các AS).</li>
  <li><b>Firewall</b> lọc theo IP/cổng/giao thức: <i>stateless</i> xét từng gói độc lập (phải mở luật cả hai chiều) ≠ <i>stateful</i> theo dõi phiên, tự cho phép gói phản hồi. <b>DMZ</b> đặt máy chủ công khai tách khỏi mạng nội bộ. <b>VPN</b> tạo đường hầm mã hóa qua mạng công cộng (IPsec transport/tunnel, SSL/TLS).</li>
</ul>
<h3>Giao thức ứng dụng</h3>
<ul>
  <li>HTTP: <code>GET</code> lấy · <code>POST</code> tạo mới · <code>PUT</code> thay thế · <code>PATCH</code> sửa một phần · <code>DELETE</code> xóa · <code>HEAD</code> chỉ header. Mã trạng thái: 2xx thành công (200) · 3xx chuyển hướng (301, 302) · 4xx lỗi phía client (400, 401, 403, 404) · 5xx lỗi phía server (500, 502, 503).</li>
  <li>HTTPS = HTTP + SSL/TLS, cổng 443 (HTTP cổng 80); chứng chỉ do CA cấp giúp chống tấn công người đứng giữa. SSH (22) mã hóa toàn phiên – thay thế Telnet (23) truyền dạng rõ.</li>
  <li>DHCP bốn bước <b>DORA</b>: Discover → Offer → Request → Acknowledge (cổng 67 server / 68 client), có thời hạn thuê.</li>
  <li>TCP: thiết lập bắt tay 3 bước (SYN → SYN-ACK → ACK), kết thúc 4 bước (FIN → ACK → FIN → ACK vì song công). UDP không liên kết – hợp với VoIP, streaming, game, DNS.</li>
  <li>Socket = IP + cổng (+ giao thức); một kết nối TCP xác định bởi bộ bốn IP/cổng nguồn – IP/cổng đích. Dải cổng: 0–1023 well-known · 1024–49151 đăng ký · 49152–65535 động.</li>
</ul>
<h3>An ninh mạng &amp; IoT</h3>
<ul>
  <li>Bí mật · toàn vẹn · sẵn sàng · chính xác · không khước từ.</li>
  <li>Tấn công: social engineering/phishing, DoS/DDoS, spoofing, sniffing, code injection, buffer overflow, cookie, sửa tham số URL.</li>
  <li>Chiến lược: quyền hạn tối thiểu, bảo vệ theo chiều sâu, nút thắt, liên kết yếu nhất, hỏng an toàn, đa dạng bảo vệ, tính đơn giản.</li>
  <li>Mã hóa đối xứng (1 khóa), bất đối xứng (khóa công khai/bí mật), băm. SSL (Handshake phức tạp nhất, Change Cipher Spec đơn giản nhất), HTTPS = HTTP + SSL/TLS, SSH, IPsec (transport / tunnel).</li>
  <li>IoT: things → gateway → cloud gateway → streaming processor → data lake → big data warehouse → analytics/ML → control apps &amp; user apps. Thách thức: bảo mật, năng lượng, tương thích, hiệu suất mạng, chi phí.</li>
</ul>`
};
