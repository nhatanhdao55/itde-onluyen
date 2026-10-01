/* Ngân hàng câu hỏi: LẬP TRÌNH C++ (theo slide Cơ sở lập trình C++ – HVNH)
   Định dạng: [chương, câu hỏi, [đáp án ĐÚNG, nhiễu 1, nhiễu 2, nhiễu 3], giải thích, code (tuỳ chọn)]
   Đáp án đúng luôn đặt ở vị trí đầu – ứng dụng sẽ tự xáo trộn khi hiển thị.
   Chỉ THÊM câu mới vào CUỐI danh sách để không làm lệch id/tiến độ đã lưu. */
(function () {
  const L = [
    // ===== Chương 1: Khái niệm cơ bản =====
    ['c1', 'Tính chất nào **KHÔNG** phải là tính chất của thuật toán?',
      ['Tính ngẫu nhiên: cùng dữ liệu vào có thể cho kết quả khác nhau', 'Tính dừng', 'Tính xác định', 'Tính khả thi'],
      'Thuật toán phải có: đầu vào, đầu ra, tính xác định (cùng input → cùng output), tính khả thi, tính dừng (kết thúc sau hữu hạn bước).'],
    ['c1', 'Ngôn ngữ C++ được phát triển bởi ai?',
      ['Bjarne Stroustrup (Bell Labs, 1979)', 'Dennis Ritchie', 'James Gosling', 'Guido van Rossum'],
      'C++ do Bjarne Stroustrup phát triển năm 1979 tại Bell Labs, dựa trên C và bổ sung lập trình hướng đối tượng. Dennis Ritchie tạo ra C, Gosling tạo Java, Van Rossum tạo Python.'],
    ['c1', 'Trong sơ đồ khối, hình **thoi** dùng để biểu diễn gì?',
      ['Khối lựa chọn (điều kiện rẽ nhánh)', 'Khối bắt đầu / kết thúc', 'Khối nhập / xuất dữ liệu', 'Khối thao tác, tính toán'],
      'Hình oval: bắt đầu/kết thúc; hình bình hành: vào/ra; hình chữ nhật: thao tác; hình thoi: điều kiện, tùy đúng/sai sẽ rẽ nhánh.'],
    ['c1', 'Viết thiếu dấu `;` cuối câu lệnh khiến chương trình không biên dịch được. Đây là loại lỗi gì?',
      ['Lỗi cú pháp', 'Lỗi ngữ nghĩa (logic)', 'Lỗi thời gian chạy do tràn bộ nhớ', 'Lỗi thuật toán'],
      'Lỗi cú pháp là vi phạm quy tắc viết của ngôn ngữ, trình biên dịch phát hiện được. Lỗi ngữ nghĩa là chương trình chạy được nhưng cho kết quả sai.'],
    ['c1', 'Đoạn chương trình tìm UCLN bằng phép trừ sau in ra gì khi nhập a = 12, b = 18?',
      ['6', '12', '3', '18'],
      'a=12,b=18 → b=18−12=6; a=12>6 → a=6; a==b → dừng. UCLN = 6.',
      `while (a != b) {
    if (a > b) a = a - b;
    else       b = b - a;
}
cout << a;`],
    ['c1', 'Phát biểu nào đúng về C++?',
      ['Là ngôn ngữ biên dịch: mã nguồn được dịch ra mã máy trước khi chạy', 'Là ngôn ngữ thông dịch từng dòng như Python', 'Không hỗ trợ lập trình hướng đối tượng', 'Không tương thích với chương trình viết bằng C'],
      'C++ là ngôn ngữ biên dịch nên hiệu suất cao, hỗ trợ OOP và tương thích ngược khá tốt với C.'],
    ['c1', 'Thuật toán tìm kiếm nhị phân yêu cầu điều kiện gì của dãy?',
      ['Dãy đã được sắp xếp theo thứ tự', 'Dãy có số phần tử chẵn', 'Dãy không có phần tử âm', 'Dãy được lưu bằng danh sách liên kết'],
      'Tìm kiếm nhị phân so sánh k với phần tử giữa rồi loại bỏ một nửa, nên dãy phải có thứ tự.'],

    // ===== Chương 2: Phần tử cơ bản =====
    ['c2', 'Tên (định danh) nào sau đây **hợp lệ** trong C++?',
      ['_baiTap1', '1BaiTap', 'bai tap', 'float'],
      'Tên gồm chữ cái, chữ số, dấu gạch dưới; không bắt đầu bằng chữ số, không chứa dấu cách hay ký tự đặc biệt, không trùng từ khóa (float là từ khóa).'],
    ['c2', 'Giá trị của `sizeof("A")` là bao nhiêu?',
      ['2', '1', '4', 'Báo lỗi biên dịch'],
      'Hằng chuỗi "A" gồm ký tự \'A\' và ký tự kết thúc \'\\0\' nên chiếm 2 byte. Hằng ký tự \'A\' mới chiếm 1 byte.'],
    ['c2', 'Đoạn code sau in ra gì?',
      ['3 1 3.5', '3.5 1 3.5', '3 1 3', '3.5 1 3'],
      'Chia 2 số nguyên cho kết quả nguyên: 7/2 = 3; 7%2 = 1; ép kiểu (float)a/b = 3.5.',
      `int a = 7, b = 2;
cout << a / b << " " << a % b << " " << (float)a / b;`],
    ['c2', 'Đoạn code sau in ra gì?',
      ['15', '17', '23', '0'],
      'Hằng số nguyên bắt đầu bằng 0 là hệ bát phân (octal): 017 = 1·8 + 7 = 15.',
      `int x = 017;
cout << x;`],
    ['c2', 'Hằng `0x1F` có giá trị thập phân bằng bao nhiêu?',
      ['31', '15', '17', '115'],
      '0x là tiền tố hệ 16: 1·16 + 15 = 31.'],
    ['c2', 'Đoạn code sau in ra gì?',
      ['12 10 12', '12 11 12', '11 10 11', '12 10 11'],
      'y = x++ gán giá trị cũ (10) rồi x tăng lên 11; z = ++x tăng x lên 12 trước rồi gán → z = 12.',
      `int x = 10;
int y = x++;
int z = ++x;
cout << x << " " << y << " " << z;`],
    ['c2', 'Đoạn code sau in ra gì?',
      ['4 7 3', '7 4 3', '4 7 1', '1 1 0'],
      '5 = 101, 6 = 110. AND = 100 = 4; OR = 111 = 7; XOR = 011 = 3.',
      `int a = 5, b = 6;
cout << (a & b) << " " << (a | b) << " " << (a ^ b);`],
    ['c2', 'Đoạn code sau in ra gì?',
      ['20 2', '10 2', '20 3', '7 17'],
      'a << n = a·2ⁿ → 5<<2 = 20; a >> n = a/2ⁿ (lấy nguyên) → 20>>3 = 2.',
      `cout << (5 << 2) << " " << (20 >> 3);`],
    ['c2', 'Sau khi thực hiện `int n = 2 + 3 * 5 % 4;` thì n bằng bao nhiêu?',
      ['5', '1', '17', '3'],
      '*, / và % cùng mức ưu tiên, thực hiện từ trái sang phải: 3*5 = 15, 15%4 = 3, rồi 2+3 = 5.'],
    ['c2', 'Đoạn code sau in ra gì?',
      ['8', '6', '4', '2'],
      'Toán tử phẩy tính lần lượt từ trái sang phải và lấy giá trị biểu thức cuối: a++ → a=2; b=b+a=4; giá trị cuối b*2 = 8.',
      `int a = 1, b = 2, x;
x = (a++, b = b + a, b * 2);
cout << x;`],
    ['c2', 'Đoạn code sau in ra gì?',
      ['A', 'B', 'AB', 'Lỗi biên dịch'],
      'Bẫy thường gặp: `a = 5` là phép GÁN (không phải so sánh ==). Giá trị biểu thức là 5 ≠ 0 nên điều kiện đúng → in "A".',
      `int a = 0;
if (a = 5) cout << "A";
else       cout << "B";`],
    ['c2', 'Đoạn code sau in ra gì?',
      ['10', '11', '01', '00'],
      'Toán tử || tính ngắn mạch: ++a = 1 (đúng) nên b++ không được thực hiện. a = 1, b = 0.',
      `int a = 0, b = 0;
if (++a || b++) { }
cout << a << b;`],
    ['c2', 'Câu lệnh `cout << \'A\' + 1;` in ra gì?',
      ['66', 'B', 'A1', 'Lỗi biên dịch'],
      'char được chuyển lên int khi tham gia phép cộng: \'A\' có mã 65 → 65 + 1 = 66 (kiểu int nên in số). Muốn in \'B\' phải ép kiểu (char)(\'A\'+1).'],
    ['c2', 'Đoạn code sau in ra gì?',
      ['3', '3.5', '4', '3.0'],
      '7/2 là phép chia hai số nguyên → 3, sau đó mới gán cho f. Muốn được 3.5 phải viết 7.0/2 hoặc (float)7/2.',
      `float f = 7 / 2;
cout << f;`],
    ['c2', 'Phép toán nào **không** áp dụng được cho toán hạng kiểu `float`/`double`?',
      ['% (chia lấy dư)', '/ (chia)', '* (nhân)', '- (trừ)'],
      'Theo slide: KHÔNG tồn tại phép % cho số thực. Muốn lấy dư số thực phải dùng hàm fmod() trong <cmath>.'],
    ['c2', 'Phát biểu nào đúng về sự khác nhau giữa `const` và `#define`?',
      ['#define được bộ tiền xử lý thay thế văn bản, không có kiểu; const là hằng có kiểu, được trình biên dịch kiểm tra', '#define có kiểu dữ liệu, const thì không', 'const được xử lý trước khi biên dịch, #define lúc chạy', 'Hai cách hoàn toàn giống nhau'],
      '#define MAX 100 chỉ là thay thế chuỗi trước biên dịch; const int MAX = 100; là một đối tượng có kiểu int.'],
    ['c2', 'Thứ tự tự động chuyển kiểu (từ thấp lên cao) trong biểu thức là:',
      ['int → long → float → double → long double', 'double → float → long → int', 'float → int → double → long', 'long → int → double → float'],
      'Khi các toán hạng khác kiểu, máy tự chuyển kiểu thấp lên kiểu cao hơn: int → long → float → double → long double.'],
    ['c2', 'Đoạn code sau in ra gì? (đã #include <iomanip>)',
      ['3.14', '3.141', '3.1', '3.14159'],
      'fixed + setprecision(2) hiển thị đúng 2 chữ số sau dấu thập phân.',
      `cout << fixed << setprecision(2) << 3.14159;`],
    ['c2', 'Biểu thức `(3 > 2) + (2 > 3) + (1 == 1)` có giá trị bằng:',
      ['2', '3', '1', 'Lỗi biên dịch'],
      'Biểu thức quan hệ cho kết quả 1 (đúng) hoặc 0 (sai): 1 + 0 + 1 = 2.'],
    ['c2', 'Mệnh đề "−5 < x < 5" được viết đúng trong C++ là:',
      ['(x > -5) && (x < 5)', '-5 < x < 5', '(x > -5) || (x < 5)', 'x > -5 & < 5'],
      'Viết -5 < x < 5 vẫn biên dịch nhưng sai nghĩa: (-5 < x) cho 0/1 rồi mới so sánh với 5 nên luôn đúng.'],
    ['c2', 'Biến char lưu trữ thực chất là gì?',
      ['Mã ASCII của ký tự (một số nguyên 1 byte)', 'Hình ảnh của ký tự', 'Một chuỗi kết thúc bằng \\0', 'Một số thực'],
      'char là kiểu số nguyên 1 byte; lưu 65 tương đương ký tự \'A\', 97 tương đương \'a\'.'],

    // ===== Chương 3: Cấu trúc điều khiển =====
    ['c3', 'Đoạn code sau in ra gì?',
      ['Z', 'YZ', 'XZ', 'XYZ'],
      'else luôn gắn với if GẦN NHẤT chưa có else (if b > 0), bất kể thụt lề. Vì a != 0 sai nên cả khối if bên trong bị bỏ qua, chỉ in "Z".',
      `int a = 0, b = 5;
if (a != 0)
    if (b > 0) cout << "X";
else
    cout << "Y";
cout << "Z";`],
    ['c3', 'Đoạn code sau in ra gì?',
      ['K', 'Không in gì', 'Lỗi biên dịch', 'KK'],
      'Dấu ; ngay sau if(...) tạo câu lệnh rỗng làm thân if; lệnh cout phía sau luôn được thực hiện.',
      `int a = 0;
if (a != 0);
    cout << "K";`],
    ['c3', 'Đoạn code sau in ra gì?',
      ['23', '2', '23D', '123'],
      'switch nhảy tới case 2, rồi thực hiện tiếp các lệnh phía dưới cho tới khi gặp break (hiện tượng "fall-through"): in 2, 3 rồi break.',
      `int a = 2;
switch (a) {
    case 1: cout << "1";
    case 2: cout << "2";
    case 3: cout << "3"; break;
    default: cout << "D";
}`],
    ['c3', 'Đoạn code sau in ra gì?',
      ['0369', '036', '036912', '369'],
      'i nhận các giá trị 0, 3, 6, 9 (đều < 10); i = 12 thì dừng.',
      `for (int i = 0; i < 10; i += 3)
    cout << i;`],
    ['c3', 'Đoạn code sau in ra gì?',
      ['10', 'Không in gì', '1011121314', 'Lặp vô hạn'],
      'do…while thực hiện thân vòng lặp ÍT NHẤT 1 lần rồi mới kiểm tra điều kiện (11 < 5 sai → dừng).',
      `int n = 10;
do {
    cout << n;
    n++;
} while (n < 5);`],
    ['c3', 'Đoạn code sau in ra gì?',
      ['9', '15', '6', '4'],
      'i = 1, 3, 5 → s = 1 + 3 + 5 = 9; i = 7 > 5 thì dừng.',
      `int s = 0, i = 1;
while (i <= 5) {
    s += i;
    i += 2;
}
cout << s;`],
    ['c3', 'Đoạn code sau in ra gì?',
      ['13', '135', '1', '246'],
      'i chẵn thì continue (bỏ qua phần còn lại); i = 5 thì break thoát vòng lặp. Chỉ in 1 và 3.',
      `for (int i = 1; i <= 6; i++) {
    if (i % 2 == 0) continue;
    if (i == 5) break;
    cout << i;
}`],
    ['c3', 'Sau đoạn code sau, biến c bằng bao nhiêu?',
      ['10', '16', '8', '6'],
      'Với i = 0,1,2,3 vòng j chạy lần lượt 4, 3, 2, 1 lần → c = 10.',
      `int c = 0;
for (int i = 0; i < 4; i++)
    for (int j = i; j < 4; j++)
        c++;`],
    ['c3', 'Phát biểu nào đúng về lệnh `break`?',
      ['Thoát khỏi vòng lặp (hoặc switch) trong cùng nhất chứa nó', 'Thoát khỏi tất cả các vòng lặp lồng nhau', 'Bỏ qua lần lặp hiện tại và sang lần lặp mới', 'Kết thúc toàn bộ chương trình'],
      'Khi nhiều vòng lặp lồng nhau, break chỉ đưa máy ra khỏi vòng trong cùng chứa nó. Bỏ qua lần lặp hiện tại là việc của continue.'],
    ['c3', 'Lệnh nào **không** áp dụng cho câu lệnh switch?',
      ['continue', 'break', 'default', 'case'],
      'Theo slide: continue chỉ dùng trong vòng lặp (for, while, do…while), không áp dụng cho switch.'],
    ['c3', 'Đoạn code sau có đặc điểm gì?',
      ['Lặp vô hạn vì n không thay đổi trong thân vòng lặp', 'In các số từ 1 đến 9', 'In số 1 rồi dừng', 'Lỗi biên dịch'],
      'Thân vòng lặp không làm thay đổi n nên điều kiện n < 10 luôn đúng. Cần có lệnh thay đổi giá trị điều kiện trong thân vòng lặp.',
      `int n = 1;
while (n < 10) cout << n;`],
    ['c3', 'Trong câu lệnh `for ([Khởi tạo]; [Điều kiện]; [Thay đổi]) <Lệnh>;`, nếu bỏ trống phần [Điều kiện] thì:',
      ['Điều kiện được coi là luôn đúng, cần break để thoát', 'Vòng lặp không thực hiện lần nào', 'Lỗi biên dịch', 'Vòng lặp chạy đúng 1 lần'],
      'for (i = 1; ; i++) là vòng lặp vô hạn, thoát được nhờ break (ví dụ if (i > 10) break;).'],
    ['c3', 'Bài toán "gửi tiết kiệm, sau tối thiểu bao nhiêu tháng thì đạt số tiền b" nên dùng loại vòng lặp nào?',
      ['Vòng lặp không biết trước số lần lặp (while)', 'Vòng lặp for với số lần xác định', 'switch…case', 'Không cần vòng lặp'],
      'Số tháng chưa biết trước, vòng lặp dừng khi a ≥ b → dùng while (a < b) { a = a + a*k; thang++; }.'],

    // ===== Chương 4: Chương trình con =====
    ['c4', 'Chương trình sau in ra gì?',
      ['a = 5, b = 6', 'a = 6, b = 5', 'a = 5, b = 5', 'Lỗi biên dịch'],
      'Truyền tham trị: hàm chỉ đổi chỗ các BẢN SAO x, y; biến a, b ở main không đổi.',
      `void hoanvi(int x, int y) { int t = x; x = y; y = t; }
int main() {
    int a = 5, b = 6;
    hoanvi(a, b);
    cout << "a = " << a << ", b = " << b;
}`],
    ['c4', 'Chương trình sau in ra gì?',
      ['a = 6, b = 5', 'a = 5, b = 6', 'a = 6, b = 6', 'Lỗi biên dịch'],
      'Truyền tham chiếu (&): x, y là tên khác của chính a, b nên việc đổi chỗ tác động trực tiếp lên biến gốc.',
      `void hoanvi(int &x, int &y) { int t = x; x = y; y = t; }
int main() {
    int a = 5, b = 6;
    hoanvi(a, b);
    cout << "a = " << a << ", b = " << b;
}`],
    ['c4', 'Dòng `int Tong(int a, int b);` đặt trước hàm main (phần thân hàm viết sau main) được gọi là gì?',
      ['Nguyên mẫu hàm (function prototype)', 'Lời gọi hàm', 'Định nghĩa hàm', 'Con trỏ hàm'],
      'Nguyên mẫu hàm khai báo tên, tham số và kiểu trả về để trình biên dịch biết trước; phần định nghĩa có thể đặt phía sau.'],
    ['c4', 'Phát biểu nào đúng về tham số của hàm?',
      ['Tham số thực sự có thể là biểu thức, còn tham số hình thức thì không', 'Tham số hình thức có thể là biểu thức', 'Số lượng tham số thực sự có thể khác tùy ý với tham số hình thức', 'Tham số thực sự phải cùng tên với tham số hình thức'],
      'Tham số hình thức là biến khai báo trong định nghĩa hàm; tham số thực sự là giá trị/biến/biểu thức truyền vào lúc gọi, theo đúng thứ tự.'],
    ['c4', 'Hàm đệ quy sau trả về gì khi gọi `f(1234)`?',
      ['10', '4321', '1234', '4'],
      'f(n) = chữ số cuối + f(n/10) → tính tổng các chữ số: 4 + 3 + 2 + 1 = 10.',
      `int f(int n) {
    if (n == 0) return 0;
    return n % 10 + f(n / 10);
}`],
    ['c4', 'Hàm `UCLN(48, 18)` dưới đây trả về giá trị nào?',
      ['6', '12', '18', '2'],
      'UCLN(48,18) → UCLN(18,12) → UCLN(12,6) → UCLN(6,0) → trả về 6 (thuật toán Euclid).',
      `int UCLN(int x, int y) {
    if (y == 0) return x;
    return UCLN(y, x % y);
}`],
    ['c4', 'Bài toán tháp Hà Nội với 5 đĩa cần tối thiểu bao nhiêu lần chuyển đĩa?',
      ['31', '25', '32', '15'],
      'Số lần chuyển tối thiểu là 2ⁿ − 1 = 2⁵ − 1 = 31 (chuyển n−1 đĩa sang cọc trung gian, chuyển đĩa lớn nhất, rồi chuyển n−1 đĩa về cọc đích).'],
    ['c4', 'Chương trình sau in ra gì?',
      ['5', '10', '11', '6'],
      'Biến x trong f() là biến cục bộ, che khuất biến toàn cục cùng tên và bị hủy khi f() kết thúc. Biến toàn cục x vẫn là 5.',
      `int x = 5;
void f() { int x = 10; x++; }
int main() {
    f();
    cout << x;
}`],
    ['c4', 'Đoạn code sau in ra gì?',
      ['123', '111', '000', '1'],
      'Biến static cục bộ chỉ được khởi tạo một lần và giữ giá trị giữa các lần gọi hàm.',
      `void dem() { static int c = 0; c++; cout << c; }
int main() { dem(); dem(); dem(); }`],
    ['c4', 'Với hàm Fibonaci theo slide, `Fibonaci(6)` trả về bao nhiêu?',
      ['8', '5', '13', '6'],
      'F(1) = F(2) = 1, F(3) = 2, F(4) = 3, F(5) = 5, F(6) = 8.',
      `int Fibonaci(int n) {
    if (n <= 2) return 1;
    return Fibonaci(n - 2) + Fibonaci(n - 1);
}`],
    ['c4', 'Một hàm đệ quy thiếu điều kiện dừng thường gây ra lỗi gì khi chạy?',
      ['Tràn ngăn xếp (Stack Overflow)', 'Lỗi cú pháp', 'Chia cho 0', 'Rò rỉ bộ nhớ heap'],
      'Mỗi lời gọi hàm được đẩy vào STACK; gọi đệ quy không dừng (hoặc quá sâu) sẽ làm tràn stack.'],
    ['c4', 'Cấu trúc một hàm đệ quy gồm 2 phần nào?',
      ['Phần dừng (base step) và phần đệ quy (recursion step)', 'Phần khai báo và phần gọi hàm', 'Phần nhập và phần xuất', 'Phần lặp và phần rẽ nhánh'],
      'Phần dừng không gọi lại hàm (điểm kết thúc); phần đệ quy gọi lại chính hàm với bài toán nhỏ hơn.'],
    ['c4', 'Trong C++, chương trình con tồn tại dưới dạng nào?',
      ['Chỉ có hàm; hàm kiểu void không trả về giá trị', 'Chỉ có thủ tục (procedure)', 'Có cả hàm và thủ tục như Pascal', 'Chỉ có hàm, và mọi hàm bắt buộc phải trả về giá trị'],
      'C++ chỉ có hàm (function). Hàm có kiểu trả về void đóng vai trò như thủ tục.'],

    // ===== Chương 5: Mảng =====
    ['c5', 'Với khai báo `int a[5] = {1, 2};` thì `a[3]` có giá trị bao nhiêu?',
      ['0', '2', 'Giá trị rác không xác định', 'Lỗi biên dịch'],
      'Khi khởi tạo một số phần tử đầu, các phần tử còn lại được tự động gán 0.'],
    ['c5', 'Mảng `int a[10];` có dãy chỉ số hợp lệ là:',
      ['0 đến 9', '1 đến 10', '0 đến 10', '1 đến 9'],
      'Chỉ số mảng trong C/C++ bắt đầu từ 0 đến (số phần tử − 1). Truy cập a[10] là vượt biên, kết quả không lường trước.'],
    ['c5', 'Giả sử `sizeof(int) = 4`. Mảng `int a[10][5];` chiếm bao nhiêu byte?',
      ['200', '50', '40', '60'],
      'Bộ nhớ = tổng số phần tử × sizeof(kiểu) = 10·5·4 = 200 byte, cấp phát thành một khối liên tục.'],
    ['c5', 'Đoạn code sau in ra gì?',
      ['12', '9', '14', '10'],
      'i = 0, 2, 4 → s = a[0] + a[2] + a[4] = 3 + 4 + 5 = 12.',
      `int a[] = {3, 1, 4, 1, 5};
int s = 0;
for (int i = 0; i < 5; i += 2) s += a[i];
cout << s;`],
    ['c5', 'Cho `int a[3] = {1,2,3}, b[3];`. Câu lệnh nào sao chép đúng mảng a sang b?',
      ['for (int i = 0; i < 3; i++) b[i] = a[i];', 'b = a;', 'b[] = a[];', 'b = {a};'],
      'Không được gán mảng bằng phép gán thông thường (b = a sai); phải gán từng phần tử tương ứng.'],
    ['c5', 'Đoạn code sau in ra gì?',
      ['4', '3', '5', '2'],
      'Khởi tạo tuần tự theo hàng: x[0] = {1,2}, x[1] = {3,4}, x[2] = {5,6} → x[1][1] = 4.',
      `int x[3][2] = {1, 2, 3, 4, 5, 6};
cout << x[1][1];`],
    ['c5', 'Chương trình sau in ra gì?',
      ['100', '1', 'Lỗi biên dịch', 'Giá trị rác'],
      'Tham số mảng truyền cho hàm chính là địa chỉ phần tử đầu tiên, nên hàm thay đổi được nội dung mảng gốc.',
      `void f(int a[]) { a[0] = 100; }
int main() {
    int b[3] = {1, 2, 3};
    f(b);
    cout << b[0];
}`],
    ['c5', 'Hàm `void NhapMang(int a[], int n)` (n **không** có &) nhập n và các phần tử bên trong hàm. Sau khi gọi ở main, vấn đề gì xảy ra?',
      ['Biến n ở main không nhận được số phần tử vừa nhập vì n truyền tham trị', 'Các phần tử mảng không được lưu lại', 'Lỗi biên dịch vì thiếu kích thước mảng', 'Không có vấn đề gì'],
      'Mảng truyền theo địa chỉ nên các phần tử vẫn được lưu, nhưng n truyền tham trị → n ở main không đổi. Cần khai báo int &n.'],
    ['c5', 'Mảng a = {1, 2, 3} (n = 3). Sau khi gọi `Them(a, n, 1, 9)` (chèn 9 vào vị trí 1) mảng là:',
      ['{1, 9, 2, 3}', '{9, 1, 2, 3}', '{1, 2, 9, 3}', '{1, 9, 3}'],
      'Dời các phần tử từ vị trí vt sang phải 1 ô, đặt x vào a[vt], tăng n lên 1.'],
    ['c5', 'Khi truyền mảng 2 chiều cho hàm, cách khai báo tham số nào hợp lệ?',
      ['void f(int a[][100], int m, int n)', 'void f(int a[][], int m, int n)', 'void f(int a[100][], int m, int n)', 'void f(int **a[100])'],
      'Có thể bỏ số phần tử chiều thứ nhất nhưng PHẢI chỉ rõ số phần tử chiều thứ hai (hoặc dùng int (*a)[100]).'],
    ['c5', 'Trong ma trận vuông cấp n, phần tử a[i][j] nằm trên **đường chéo phụ** khi:',
      ['i + j == n - 1', 'i == j', 'i < j', 'i + j == n'],
      'Đường chéo chính: i == j; tam giác trên: i < j; tam giác dưới: i > j; đường chéo phụ: i + j == n − 1 (chỉ số từ 0).'],
    ['c5', 'Nhân ma trận A (m×n) với B (p×q) chỉ thực hiện được khi nào, và kết quả có kích thước bao nhiêu?',
      ['Khi n = p; kết quả m×q', 'Khi m = p; kết quả n×q', 'Khi n = q; kết quả m×p', 'Khi m = q; kết quả n×p'],
      'Số cột của A phải bằng số dòng của B. C[i][j] = Σ A[i][k]·B[k][j], C có kích thước m×q.'],
    ['c5', 'Khai báo nào gây lỗi (theo chuẩn C++)?',
      ['int n = 10; int a[n];', '#define N 10\nint a[N];', 'const int N = 10; int a[N];', 'int a[] = {1, 2, 3};'],
      'Kích thước mảng tĩnh phải là hằng số biết lúc biên dịch. int a[n] với n là biến thường không hợp lệ theo chuẩn C++ (dù một số trình biên dịch mở rộng cho phép). Slide khuyên dùng #define.'],

    // ===== Chương 6: Xâu ký tự =====
    ['c6', 'Người dùng nhập `Hoc vien ngan hang` cho lệnh `cin >> s;` (s kiểu string). Giá trị của s là:',
      ['"Hoc"', '"Hoc vien ngan hang"', '"Hoc vien"', 'Chuỗi rỗng'],
      'cin >> dừng đọc khi gặp khoảng trắng. Muốn đọc cả dòng có dấu cách phải dùng getline(cin, s).'],
    ['c6', 'Sau `cin >> n;` (nhập số) rồi `getline(cin, s);` thì s thường rỗng. Cách khắc phục là:',
      ['Gọi cin.ignore() trước getline để xóa ký tự xuống dòng còn trong bộ đệm', 'Dùng cin >> s thay getline', 'Khai báo s là char', 'Gọi getline hai lần liên tiếp là bắt buộc'],
      'Ký tự \\n còn lại sau khi nhập số khiến getline đọc ngay một dòng rỗng. cin.ignore() bỏ ký tự đó đi.'],
    ['c6', 'Đoạn code sau in ra gì?',
      ['nki', 'ank', 'nkin', 'ki'],
      'substr(pos, n) lấy n ký tự từ vị trí pos (tính từ 0): "Banking" → vị trí 2,3,4 là n,k,i.',
      `string s = "Banking";
cout << s.substr(2, 3);`],
    ['c6', 'Với `string s = "Banking";`, `s.find("an")` trả về:',
      ['1', '2', '0', '-1'],
      'find trả về vị trí xuất hiện ĐẦU TIÊN của chuỗi con: "an" bắt đầu ở chỉ số 1.'],
    ['c6', 'Đoạn code sau in ra gì?',
      ['aXYbc', 'XYabc', 'abXYc', 'abcXY'],
      'insert(pos, str) chèn str vào trước vị trí pos.',
      `string s = "abc";
s.insert(1, "XY");
cout << s;`],
    ['c6', 'Đoạn code sau in ra gì?',
      ['HloC', 'HelC', 'HllC', 'eloC'],
      'erase(pos, n) xóa n ký tự bắt đầu từ vị trí pos: xóa "el" ở vị trí 1–2.',
      `string s = "HelloC";
s.erase(1, 2);
cout << s;`],
    ['c6', 'Với `string s = "Viet Nam";` thì `s.length()` bằng:',
      ['8', '7', '9', '2'],
      'Dấu cách cũng là một ký tự: V,i,e,t, ,N,a,m = 8 ký tự. length() và size() cho cùng kết quả.'],
    ['c6', '`s1.compare(s2)` trả về giá trị âm khi nào?',
      ['Khi s1 nhỏ hơn s2 theo thứ tự từ điển', 'Khi s1 dài hơn s2', 'Khi hai xâu bằng nhau', 'Khi s2 rỗng'],
      'compare trả về 0 nếu bằng, < 0 nếu s1 < s2, > 0 nếu s1 > s2 (so sánh từ điển).'],
    ['c6', 'Xâu kiểu C (mảng char) "Viet nam" được lưu trong bộ nhớ như thế nào?',
      ['Các ký tự liên tiếp và kết thúc bằng ký tự null \'\\0\'', 'Chỉ lưu độ dài xâu và con trỏ', 'Kết thúc bằng ký tự xuống dòng', 'Mỗi ký tự lưu ở một vùng nhớ rời rạc'],
      'Hằng xâu được lưu trong mảng ô nhớ liền nhau, ô cuối chứa mã 0 (null) để đánh dấu kết thúc.'],

    // ===== Chương 7: Struct / Union =====
    ['c7', 'Đoạn code sau in ra gì?',
      ['3', '10', '0', 'Lỗi biên dịch'],
      'Phép gán B = A sao chép toàn bộ các trường; B là một bản sao độc lập nên sửa B.x không ảnh hưởng A.x.',
      `struct Diem { int x, y; };
Diem A = {3, 4};
Diem B = A;
B.x = 10;
cout << A.x;`],
    ['c7', 'Thao tác nào **KHÔNG** thực hiện được trực tiếp trên biến cấu trúc?',
      ['So sánh hai biến cấu trúc bằng == hoặc dùng cout << in cả biến', 'Gán hai biến cùng kiểu cấu trúc cho nhau', 'Truy cập trường bằng toán tử chấm (.)', 'Khởi tạo giá trị lúc khai báo bằng { }'],
      'Theo slide: không thực hiện được nhập/xuất, các phép quan hệ, số học, logic trên cả biến cấu trúc; chỉ gán được cho nhau nếu cùng kiểu.'],
    ['c7', 'Cho `union U { char c; int n; double d; };` với char 1 byte, int 4 byte, double 8 byte. `sizeof(U)` bằng:',
      ['8', '13', '16', '4'],
      'Các thành phần của union dùng chung một vùng nhớ, kích thước union bằng kích thước thành phần lớn nhất (có thể tính thêm căn lề). Với struct thì các trường có vùng nhớ riêng.'],
    ['c7', 'Điểm khác biệt chính giữa struct và mảng là:',
      ['Struct nhóm được các dữ liệu KHÁC kiểu, mảng chỉ nhóm dữ liệu cùng kiểu', 'Mảng nhóm được dữ liệu khác kiểu, struct thì không', 'Struct không lưu trong bộ nhớ', 'Mảng không truy cập được qua chỉ số'],
      'Struct là tập hợp các thuộc tính liên quan tới một đối tượng (ví dụ họ tên, tuổi, điểm), mỗi trường có thể có kiểu khác nhau.'],
    ['c7', 'Cho `SinhVien *p = &sv;`. Cách truy cập trường `diemTB` qua con trỏ p là:',
      ['p->diemTB  (hoặc (*p).diemTB)', 'p.diemTB', '*p.diemTB', '&p.diemTB'],
      'Với biến cấu trúc dùng dấu chấm; với con trỏ cấu trúc dùng -> hoặc (*p).truong. Viết *p.diemTB sai vì . ưu tiên cao hơn *.'],
    ['c7', 'Khi nào nên dùng union thay vì struct?',
      ['Khi có nhiều trường nhưng tại một thời điểm chỉ dùng một trường và cần tiết kiệm bộ nhớ', 'Khi cần lưu đồng thời tất cả các trường', 'Khi cần các trường không ghi đè lên nhau', 'Khi muốn tăng tốc độ truy cập mảng'],
      'Các trường union chia sẻ cùng vùng nhớ nên ghi trường này sẽ ghi đè trường khác.'],

    // ===== Chương 8: Con trỏ =====
    ['c8', 'Đoạn code sau in ra gì?',
      ['13', '10', '3', 'Địa chỉ của a'],
      'p trỏ tới a nên *p và a là cùng một ô nhớ: *p = 10 + 3 → a = 13.',
      `int a = 10, *p = &a;
*p = *p + 3;
cout << a;`],
    ['c8', 'Đoạn code sau in ra gì?',
      ['30', '20', '12', 'Địa chỉ của arr[2]'],
      'arr[n] == *(p + n) với p = arr. *(p + 2) = arr[2] = 30.',
      `int arr[] = {10, 20, 30, 40};
int *p = arr;
cout << *(p + 2);`],
    ['c8', 'Đoạn code sau in ra gì?',
      ['21', '11', '30', '20'],
      'p++ làm p trỏ tới arr[1] = 20. *p + 1: toán tử * ưu tiên hơn + nên được 20 + 1 = 21.',
      `int arr[] = {10, 20, 30, 40};
int *p = arr;
p++;
cout << *p + 1;`],
    ['c8', 'Con trỏ `int *p` đang giữ địa chỉ 1000, `sizeof(int) = 4`. Sau `p = p + 3;` p giữ địa chỉ:',
      ['1012', '1003', '1004', '1024'],
      'Cộng con trỏ với n tức là tăng n × sizeof(kiểu mà nó trỏ tới): 1000 + 3·4 = 1012.'],
    ['c8', 'Cho `int a[10]; int *p1 = &a[1], *p2 = &a[4];`. Biểu thức `p2 - p1` có giá trị:',
      ['3', '12', '-3', 'Lỗi biên dịch'],
      'Hiệu hai con trỏ cùng kiểu cho khoảng cách tính theo SỐ PHẦN TỬ, không phải số byte.'],
    ['c8', 'Với `int arr[5];`, câu lệnh nào **sai**?',
      ['arr++;', 'int *p = arr; p++;', 'int *p = &arr[0];', '*(arr + 1) = 5;'],
      'Tên mảng là một hằng con trỏ trỏ tới phần tử đầu, không thể thay đổi giá trị của nó. Muốn duyệt, gán cho một con trỏ khác rồi tăng con trỏ đó.'],
    ['c8', 'Phép toán nào **không** thực hiện được trên biến con trỏ?',
      ['Nhân, chia, lấy dư (*, /, %)', 'Cộng con trỏ với một số nguyên', 'Trừ hai con trỏ cùng kiểu', 'So sánh hai con trỏ (==, <, >)'],
      'Con trỏ chỉ hỗ trợ cộng/trừ số nguyên, trừ hai con trỏ cùng kiểu, so sánh; không có *, /, %.'],
    ['c8', 'Khai báo `int (*f)(int, int);` có nghĩa là:',
      ['f là con trỏ tới hàm nhận 2 tham số int và trả về int', 'f là hàm trả về con trỏ int', 'f là mảng 2 con trỏ int', 'f là con trỏ tới mảng int'],
      'Không được quên cặp ngoặc: int (*f)(int,int) là con trỏ hàm; còn int *f(int,int) là HÀM trả về con trỏ int.'],
    ['c8', 'Vùng nhớ cấp phát bằng `malloc`/`calloc` được giải phóng bằng hàm nào?',
      ['free()', 'delete', 'realloc()', 'Tự động giải phóng khi ra khỏi khối lệnh'],
      'malloc/calloc/realloc đi cùng free(); new đi cùng delete. Biến động không tự hủy khi ra khỏi khối như biến cục bộ.'],
    ['c8', 'Vì sao phải ép kiểu khi viết `pa = (int*)malloc(sizeof(int));`?',
      ['Vì malloc trả về con trỏ kiểu void*', 'Vì malloc trả về số nguyên', 'Vì sizeof trả về kiểu float', 'Không cần ép kiểu trong C++'],
      'Nguyên mẫu malloc/calloc trả về void*. Trong C++ phải ép sang con trỏ đúng kiểu.'],
    ['c8', 'Phát biểu nào đúng về con trỏ NULL?',
      ['Là con trỏ không trỏ tới đâu cả, khác với con trỏ chưa được khởi tạo', 'Là con trỏ trỏ tới địa chỉ ngẫu nhiên', 'Là con trỏ chưa được khởi tạo', 'Là con trỏ trỏ tới ô nhớ có giá trị 0'],
      'Con trỏ chưa khởi tạo chứa địa chỉ rác không xác định – dùng nó (vd *pa = 1904) cho kết quả không lường trước. Con trỏ NULL thì có giá trị xác định là "không trỏ đâu".'],
    ['c8', 'Cho `int a[3][4]; int *p = (int*)a;`. Phần tử `a[2][1]` tương ứng với biểu thức nào?',
      ['*(p + 9)', '*(p + 7)', '*(p + 6)', '*(p + 3)'],
      'Mảng 2 chiều lưu liên tiếp theo hàng: chỉ số một chiều i = d·C + c = 2·4 + 1 = 9.'],
    ['c8', 'Kích thước của một biến con trỏ phụ thuộc vào:',
      ['Môi trường/kiến trúc máy (vd 4 byte trên 32 bit, 8 byte trên 64 bit), không phụ thuộc kiểu dữ liệu mà nó trỏ tới', 'Kiểu dữ liệu mà nó trỏ tới', 'Giá trị của ô nhớ nó trỏ tới', 'Số lần con trỏ được tăng'],
      'Con trỏ chỉ lưu địa chỉ nên mọi con trỏ có cùng kích thước trên cùng một môi trường.'],
    ['c8', 'Muốn hàm hoán vị thay đổi được giá trị a, b ở main bằng con trỏ, cách gọi đúng là:',
      ['hoanvi(&a, &b); với void hoanvi(int *x, int *y)', 'hoanvi(a, b); với void hoanvi(int *x, int *y)', 'hoanvi(*a, *b); với void hoanvi(int x, int y)', 'hoanvi(a, b); với void hoanvi(int x, int y)'],
      'Truyền địa chỉ: tham số thực sự là &a, &b; trong hàm thao tác qua *x, *y.'],

    // ===== Chương 9: Tệp =====
    ['c9', 'Chế độ mở tệp nào giúp **ghi thêm vào cuối** tệp mà không xóa dữ liệu cũ?',
      ['ios::app', 'ios::trunc', 'ios::in', 'ios::binary'],
      'ios::app: thêm dữ liệu vào cuối file; ios::trunc: xóa hết dữ liệu cũ; ios::ate: đặt con trỏ ở cuối khi mở; ios::binary: mở ở chế độ nhị phân.'],
    ['c9', 'Mode mặc định khi mở tệp bằng `ofstream` là:',
      ['ios::out', 'ios::in', 'ios::app', 'ios::binary'],
      'ifstream mặc định ios::in (đọc); ofstream mặc định ios::out (ghi); fstream có thể đọc và ghi.'],
    ['c9', 'Các bước cơ bản để xử lý tệp theo đúng thứ tự là:',
      ['Khai báo biến tệp → Mở tệp → Xử lý dữ liệu → Đóng tệp', 'Mở tệp → Khai báo biến tệp → Đóng tệp → Xử lý', 'Xử lý dữ liệu → Mở tệp → Đóng tệp', 'Khai báo → Xử lý → Mở tệp → Đóng tệp'],
      'Luôn đóng tệp (close) sau khi xử lý xong để giải phóng tài nguyên và đảm bảo dữ liệu được ghi hết.'],
    ['c9', 'Tệp mà muốn đọc phần tử bất kỳ phải đi qua lần lượt các phần tử trước nó được gọi là:',
      ['Tệp truy cập tuần tự', 'Tệp truy cập ngẫu nhiên', 'Tệp nhị phân', 'Tệp không định kiểu'],
      'Tệp truy cập ngẫu nhiên cho phép nhảy thẳng tới phần tử bất kỳ qua chỉ số (dùng các hàm seek).'],
    ['c9', 'Câu lệnh nào ghi đúng giá trị biến `int n` vào tệp nhị phân `ofstream f`?',
      ['f.write((char*)&n, sizeof(int));', 'f.write(n);', 'f << &n;', 'f.read((char*)&n, sizeof(int));'],
      'Hàm write nhận địa chỉ vùng dữ liệu (ép sang char*) và số byte cần ghi. read dùng để đọc với ifstream.'],
    ['c9', 'Tệp văn bản (text) khác tệp nhị phân (binary) ở điểm nào?',
      ['Tệp văn bản chứa các ký tự đọc được, tổ chức thành các dòng; tệp nhị phân lưu dữ liệu dạng byte thô, có thể chứa ký tự điều khiển', 'Tệp nhị phân chỉ chứa ký tự 0 và 1 dạng chữ', 'Tệp văn bản không đọc được bằng chương trình', 'Tệp nhị phân luôn có đuôi .txt'],
      'Ví dụ tệp văn bản: *.txt; tệp nhị phân: *.exe, *.com, *.dat…'],
    ['c9', 'Để mở tệp `C:\\data\\a.txt` trong chuỗi C++ cần viết đường dẫn như thế nào?',
      ['"C:\\\\data\\\\a.txt"', '"C:\\data\\a.txt"', '"C:/data/a.txt/"', "'C:\\\\data\\\\a.txt'"],
      'Dấu \\ là ký tự thoát trong chuỗi C++, nên mỗi dấu \\ phải viết thành \\\\ (hoặc dùng dấu /).'],
    ['c9', 'Khi mở một tệp đã tồn tại để **ghi** (ofstream, không có ios::app) thì:',
      ['Nội dung cũ của tệp bị xóa và thay bằng dữ liệu mới', 'Dữ liệu mới được thêm vào cuối tệp', 'Báo lỗi vì tệp đã tồn tại', 'Tệp được mở ở chế độ chỉ đọc'],
      'Chú ý từ slide: mở tệp để ghi mà tệp đã tồn tại thì tệp cũ bị xóa; mở tệp để đọc thì tệp phải tồn tại, nếu không sẽ lỗi.'],
    ['c9', 'Hàm nào cho biết vị trí hiện tại của con trỏ đọc trong tệp `ifstream f`?',
      ['f.tellg()', 'f.eof()', 'f.close()', 'f.ignore()'],
      'tellg() trả về vị trí con trỏ get (đọc); seekg() dùng để di chuyển con trỏ tới vị trí mong muốn; eof() kiểm tra đã hết tệp chưa.'],

    // ===== OOP: Lập trình hướng đối tượng =====
    ['oop', 'Bốn tính chất cơ bản của lập trình hướng đối tượng là:',
      ['Đóng gói (Encapsulation), Kế thừa (Inheritance), Đa hình (Polymorphism), Trừu tượng (Abstraction)', 'Biên dịch, Thông dịch, Liên kết, Thực thi', 'Khai báo, Khởi tạo, Gán, Hủy', 'Tuần tự, Rẽ nhánh, Lặp, Đệ quy'],
      'Đóng gói: gom dữ liệu + hàm vào một lớp và che giấu chi tiết. Kế thừa: lớp con dùng lại lớp cha. Đa hình: cùng lời gọi, hành vi khác nhau. Trừu tượng: chỉ bộc lộ giao diện cần thiết.'],
    ['oop', 'Quan hệ giữa **lớp (class)** và **đối tượng (object)** là:',
      ['Lớp là khuôn mẫu mô tả dữ liệu và hành vi; đối tượng là một thể hiện (instance) cụ thể được tạo từ lớp', 'Đối tượng là khuôn mẫu, lớp là thể hiện của đối tượng', 'Lớp và đối tượng là hai tên gọi của cùng một thứ', 'Một lớp chỉ tạo được đúng một đối tượng'],
      'Ví dụ `class SinhVien` là khuôn mẫu; `SinhVien a, b;` tạo hai đối tượng riêng, mỗi đối tượng có vùng dữ liệu riêng.'],
    ['oop', 'Trong C++, khác biệt mặc định giữa `class` và `struct` là gì?',
      ['Thành viên của `class` mặc định là `private`, của `struct` mặc định là `public`', '`struct` không thể có hàm thành viên', '`class` không thể kế thừa', '`struct` không thể có constructor'],
      'Về mặt ngôn ngữ C++ coi `struct` và `class` gần như tương đương (đều có hàm thành viên, kế thừa, constructor); chỉ khác quyền truy cập mặc định và kiểu kế thừa mặc định.'],
    ['oop', 'Phạm vi truy cập `protected` cho phép truy cập từ đâu?',
      ['Từ bên trong lớp đó và từ các lớp kế thừa, nhưng không từ bên ngoài lớp', 'Từ mọi nơi giống như `public`', 'Chỉ từ bên trong lớp đó, giống hệt `private`', 'Chỉ từ hàm `main()`'],
      '`private`: chỉ trong lớp (và hàm/lớp `friend`). `protected`: trong lớp + lớp dẫn xuất. `public`: mọi nơi.'],
    ['oop', 'Đặc điểm nào đúng về **hàm tạo (constructor)**?',
      ['Trùng tên với lớp, không có kiểu trả về (kể cả `void`), tự động gọi khi đối tượng được tạo', 'Có kiểu trả về là `void` và phải gọi thủ công', 'Tên bắt đầu bằng dấu `~`', 'Mỗi lớp chỉ được có đúng một constructor'],
      'Constructor có thể nạp chồng (nhiều constructor khác tham số). Nếu không khai báo constructor nào, trình biên dịch sinh constructor mặc định không tham số.'],
    ['oop', 'Đoạn code sau in ra gì?',
      ['Tao Diem(3,4) rồi Huy Diem', 'Huy Diem rồi Tao Diem(3,4)', 'Chỉ in Tao Diem(3,4)', 'Không in gì vì thiếu lời gọi hàm'],
      'Constructor chạy khi đối tượng `p` được tạo; destructor chạy tự động khi `p` ra khỏi phạm vi (cuối hàm main).',
      `class Diem {
    int x, y;
public:
    Diem(int a, int b) : x(a), y(b) { cout << "Tao Diem(" << x << "," << y << ")"; }
    ~Diem() { cout << "Huy Diem"; }
};
int main() { Diem p(3, 4); return 0; }`],
    ['oop', 'Danh sách khởi tạo `Diem(int a, int b) : x(a), y(b) { }` có tác dụng gì?',
      ['Khởi tạo trực tiếp các thành viên x, y trước khi thân hàm tạo chạy – bắt buộc với thành viên `const` và tham chiếu', 'Chỉ là cách viết tắt, hoàn toàn tương đương gán trong thân hàm', 'Khai báo thêm hai biến cục bộ x, y', 'Luôn gọi hàm tạo của lớp cha'],
      'Gán trong thân hàm là khởi tạo mặc định rồi mới gán; danh sách khởi tạo chỉ khởi tạo một lần, hiệu quả hơn và là cách duy nhất cho thành viên `const`, tham chiếu, hay lớp cha không có constructor mặc định.'],
    ['oop', 'Hàm hủy (destructor) có đặc điểm nào?',
      ['Tên là `~TenLop`, không tham số, không kiểu trả về, mỗi lớp chỉ có một, tự gọi khi đối tượng bị hủy', 'Có thể nạp chồng nhiều phiên bản khác tham số', 'Phải gọi thủ công bằng `delete`', 'Trả về `int` báo trạng thái hủy'],
      'Destructor thường dùng để giải phóng tài nguyên lớp đã cấp phát (giải phóng bộ nhớ, đóng tệp).'],
    ['oop', 'Con trỏ `this` bên trong hàm thành viên trỏ tới cái gì?',
      ['Chính đối tượng đang gọi hàm thành viên đó', 'Lớp cha của lớp hiện tại', 'Hàm thành viên đang chạy', 'Vùng nhớ heap của chương trình'],
      'Dùng `this->x = x;` để phân biệt thành viên với tham số cùng tên; `return *this;` cho phép gọi nối chuỗi như `a.set(1).show();`.'],
    ['oop', '**Nạp chồng hàm (overloading)** nghĩa là:',
      ['Nhiều hàm cùng tên trong cùng phạm vi nhưng khác danh sách tham số (số lượng hoặc kiểu)', 'Lớp con viết lại hàm của lớp cha với cùng chữ ký', 'Một hàm gọi chính nó', 'Hàm có quá nhiều tham số'],
      'Chỉ khác kiểu trả về thì KHÔNG đủ để nạp chồng. Lớp con viết lại hàm cùng chữ ký của lớp cha gọi là ghi đè (overriding).'],
    ['oop', 'Phân biệt **overloading** và **overriding**:',
      ['Overloading: cùng tên, khác tham số, quyết định lúc biên dịch; Overriding: lớp con định nghĩa lại hàm `virtual` cùng chữ ký của lớp cha, quyết định lúc chạy', 'Hai khái niệm giống hệt nhau', 'Overloading chỉ xảy ra giữa lớp cha và lớp con', 'Overriding quyết định lúc biên dịch, overloading lúc chạy'],
      'Overloading là đa hình tĩnh (compile-time). Overriding kết hợp con trỏ/tham chiếu lớp cha tạo ra đa hình động (runtime).'],
    ['oop', 'Để có **đa hình động** trong C++, hàm của lớp cha phải được khai báo với từ khóa nào?',
      ['virtual', 'static', 'const', 'inline'],
      'Khi gọi hàm `virtual` qua con trỏ/tham chiếu lớp cha, chương trình tra bảng hàm ảo (vtable) để gọi đúng phiên bản của lớp con tại thời điểm chạy.'],
    ['oop', 'Đoạn code sau in ra gì?',
      ['Meo', 'Keu', 'Meo Keu', 'Lỗi biên dịch'],
      '`keu()` là `virtual` nên lời gọi qua con trỏ `DongVat*` được phân giải lúc chạy theo kiểu thực tế của đối tượng (`Meo`). Nếu bỏ `virtual`, kết quả sẽ là "Keu".',
      `class DongVat {
public:
    virtual void keu() { cout << "Keu"; }
};
class Meo : public DongVat {
public:
    void keu() override { cout << "Meo"; }
};
int main() {
    DongVat* p = new Meo();
    p->keu();
}`],
    ['oop', '**Lớp trừu tượng (abstract class)** trong C++ là lớp:',
      ['Có ít nhất một hàm ảo thuần túy dạng `virtual void f() = 0;` và không thể tạo đối tượng trực tiếp', 'Không có thành viên dữ liệu', 'Chỉ chứa hằng số', 'Không thể bị kế thừa'],
      'Lớp trừu tượng định nghĩa giao diện chung; lớp con bắt buộc cài đặt mọi hàm ảo thuần túy mới tạo được đối tượng.'],
    ['oop', 'Tại sao lớp cha có hàm ảo nên khai báo **destructor là `virtual`**?',
      ['Để khi hủy một đối tượng lớp con qua con trỏ lớp cha, destructor của lớp con cũng được gọi, tránh rò rỉ tài nguyên', 'Để tăng tốc độ chương trình', 'Để lớp con không được phép có destructor', 'Vì C++ bắt buộc mọi destructor phải là virtual'],
      'Nếu destructor không `virtual`, lệnh `delete p;` với `Cha* p = new Con();` chỉ gọi `~Cha()` – phần tài nguyên do `Con` cấp phát bị bỏ lại.'],
    ['oop', 'Trong `class B : public A { };`, kiểu kế thừa `public` nghĩa là:',
      ['Thành viên `public` của A vẫn là `public` trong B, `protected` vẫn là `protected`; thành viên `private` của A không truy cập trực tiếp được', 'Mọi thành viên của A trở thành `public` trong B, kể cả `private`', 'B không thừa kế gì từ A', 'A trở thành lớp con của B'],
      'Kế thừa `private` (mặc định khi dùng từ khóa `class`) biến mọi thành viên thừa kế thành `private` trong B.'],
    ['oop', 'Khi tạo một đối tượng lớp con, thứ tự gọi hàm tạo – hàm hủy là:',
      ['Hàm tạo lớp cha rồi hàm tạo lớp con; khi hủy thì ngược lại: hàm hủy lớp con rồi hàm hủy lớp cha', 'Hàm tạo lớp con rồi hàm tạo lớp cha; hủy theo đúng thứ tự đó', 'Chỉ gọi hàm tạo của lớp con', 'Thứ tự không xác định, phụ thuộc trình biên dịch'],
      'Lớp cha được xây trước (nền móng) và hủy sau cùng – giống xây rồi dỡ một tòa nhà.'],
    ['oop', '**Hàm tạo sao chép (copy constructor)** dạng `Lop(const Lop& other)` được gọi khi nào?',
      ['Khi khởi tạo một đối tượng từ đối tượng khác cùng lớp, truyền đối tượng theo tham trị, hoặc trả về đối tượng theo trị', 'Mỗi lần gán `a = b;` giữa hai đối tượng đã tồn tại', 'Khi đối tượng bị hủy', 'Khi gọi bất kỳ hàm thành viên nào'],
      'Gán giữa hai đối tượng đã tồn tại gọi toán tử `=`, không phải copy constructor. Lớp có con trỏ cấp phát động cần tự viết copy constructor để tránh sao chép nông (shallow copy).'],
    ['oop', 'Thành viên `static` của một lớp có đặc điểm gì?',
      ['Được chia sẻ chung cho mọi đối tượng của lớp, tồn tại ngay cả khi chưa có đối tượng nào, truy cập qua `TenLop::thanhVien`', 'Mỗi đối tượng có một bản sao riêng', 'Chỉ dùng được bên trong hàm tạo', 'Tự động bị hủy sau mỗi lời gọi hàm'],
      'Ví dụ đếm số đối tượng đã tạo bằng `static int dem;` tăng trong constructor. Hàm `static` chỉ truy cập được thành viên `static` vì không có `this`.'],
    ['oop', 'Đoạn code sau in ra giá trị nào?',
      ['2', '1', '0', 'Lỗi biên dịch'],
      '`dem` là `static` nên dùng chung cho cả lớp: hai lần tạo đối tượng làm `dem` tăng lên 2.',
      `class A {
public:
    static int dem;
    A() { dem++; }
};
int A::dem = 0;
int main() {
    A x, y;
    cout << A::dem;
}`],
    ['oop', '**Nạp chồng toán tử (operator overloading)** cho phép:',
      ['Định nghĩa lại ý nghĩa của toán tử có sẵn khi tác động lên đối tượng của lớp do ta tự định nghĩa', 'Tạo ra toán tử hoàn toàn mới tùy ý', 'Thay đổi độ ưu tiên của toán tử', 'Nạp chồng mọi toán tử, kể cả `.` và `::`'],
      'Không thể thay đổi độ ưu tiên hay số ngôi, không tạo toán tử mới; các toán tử `.`, `::`, `?:`, `sizeof` không nạp chồng được.'],
    ['oop', 'Hàm `friend` của một lớp là:',
      ['Hàm không thuộc lớp nhưng được phép truy cập thành viên `private`/`protected` của lớp đó', 'Hàm thành viên luôn được gọi đầu tiên', 'Hàm thuộc lớp cha', 'Hàm chỉ gọi được từ lớp con'],
      '`friend` phá vỡ tính đóng gói nên chỉ dùng khi thực sự cần, ví dụ nạp chồng toán tử xuất `<<` cho `cout`.'],
    ['oop', 'Quan hệ "Xe máy **là một** Phương tiện" và "Xe máy **có một** Động cơ" tương ứng với:',
      ['Kế thừa (is-a) và kết hợp/thành phần (has-a, composition)', 'Đa hình và đóng gói', 'Nạp chồng và ghi đè', 'Trừu tượng và `friend`'],
      'Nguyên tắc thiết kế: ưu tiên composition hơn inheritance khi quan hệ không thực sự là "là một".'],
    ['oop', 'Lợi ích chính của **đóng gói (encapsulation)** là gì?',
      ['Che giấu dữ liệu bên trong, chỉ cho truy cập qua hàm `public` nên kiểm soát được tính hợp lệ và dễ thay đổi cài đặt', 'Làm chương trình chạy nhanh hơn', 'Giảm dung lượng file thực thi', 'Cho phép truy cập trực tiếp mọi biến thành viên'],
      'Ví dụ hàm `setTuoi(int t)` có thể từ chối giá trị âm – điều không làm được nếu `tuoi` là `public`.'],
    ['oop', 'Kết quả của đoạn code sau là gì?',
      ['Lỗi biên dịch vì `x` là thành viên `private`, không truy cập được từ ngoài lớp', 'In ra 5', 'In ra 0', 'In ra địa chỉ của x'],
      'Thành viên `private` chỉ truy cập được từ bên trong lớp. Muốn đọc giá trị phải thêm hàm `public` dạng getter: `int getX() { return x; }`.',
      `class A {
    int x = 5;
};
int main() {
    A a;
    cout << a.x;
}`],

    // ===== Xử lý lỗi & debugging =====
    ['err', 'Trong C++, cơ chế xử lý ngoại lệ dùng bộ ba từ khóa nào?',
      ['try – catch – throw', 'if – else – return', 'begin – rescue – end', 'open – read – close'],
      'Khối `try` bao đoạn code có thể sinh lỗi; `throw` ném ngoại lệ; `catch` bắt và xử lý. Nếu không có `catch` phù hợp, chương trình bị kết thúc.'],
    ['err', 'Đoạn code sau in ra gì?',
      ['Loi: Chia cho 0 rồi Ket thuc', 'Chỉ in Ket thuc', 'Chỉ in Loi: Chia cho 0', 'Chương trình dừng đột ngột, không in gì'],
      '`throw` chuyển ngay quyền điều khiển tới `catch` khớp kiểu nên lệnh in a/b bị bỏ qua; sau khối `catch` chương trình chạy tiếp bình thường.',
      `int a = 10, b = 0;
try {
    if (b == 0) throw "Chia cho 0";
    cout << a / b;
} catch (const char* msg) {
    cout << "Loi: " << msg;
}
cout << "Ket thuc";`],
    ['err', '`catch (...)` có ý nghĩa gì?',
      ['Bắt mọi loại ngoại lệ còn lại, thường đặt ở khối catch cuối cùng', 'Bắt đúng ba ngoại lệ', 'Bỏ qua mọi ngoại lệ mà không chạy code nào', 'Là cú pháp sai trong C++'],
      'Các khối `catch` được xét lần lượt từ trên xuống nên `catch(...)` phải đặt cuối, nếu không sẽ che mất các catch cụ thể hơn.'],
    ['err', 'Chương trình biên dịch và chạy bình thường nhưng tính sai điểm trung bình vì công thức viết nhầm. Đây là loại lỗi gì?',
      ['Lỗi logic (ngữ nghĩa)', 'Lỗi cú pháp', 'Lỗi liên kết (linker error)', 'Lỗi tràn bộ nhớ'],
      'Lỗi cú pháp bị trình biên dịch chặn; lỗi thời gian chạy làm chương trình dừng bất thường; lỗi logic nguy hiểm nhất vì chương trình vẫn chạy nhưng cho kết quả sai, chỉ phát hiện được bằng kiểm thử.'],
    ['err', 'Đoạn code `int a[5]; for (int i = 0; i <= 5; i++) a[i] = i;` mắc lỗi gì?',
      ['Lỗi lệch một đơn vị (off-by-one): ghi vào `a[5]` nằm ngoài mảng, gây hành vi không xác định', 'Lỗi cú pháp, thiếu dấu chấm phẩy', 'Không có lỗi, chương trình luôn chạy đúng', 'Lỗi chia cho 0'],
      'Mảng `a[5]` có chỉ số hợp lệ 0..4. C++ không kiểm tra biên mảng nên lỗi có thể không báo ngay mà làm hỏng dữ liệu khác, rất khó debug. Sửa điều kiện thành `i < 5`.'],
    ['err', 'Hiện tượng chương trình cấp phát bộ nhớ bằng `new` nhưng không bao giờ `delete` gọi là gì?',
      ['Rò rỉ bộ nhớ (memory leak)', 'Tràn số (overflow)', 'Con trỏ treo (dangling pointer)', 'Bế tắc (deadlock)'],
      'Bộ nhớ heap bị chiếm cho tới khi chương trình kết thúc; với chương trình chạy lâu sẽ cạn RAM. Mỗi `new` phải có `delete`, mỗi `new[]` phải có `delete[]`.'],
    ['err', 'Sau `int* p = new int(5); delete p;`, nếu tiếp tục dùng `*p` thì p được gọi là:',
      ['Con trỏ treo (dangling pointer) – trỏ tới vùng nhớ đã giải phóng, truy cập cho hành vi không xác định', 'Con trỏ NULL hợp lệ', 'Con trỏ hằng', 'Con trỏ void'],
      'Thói quen an toàn: viết `delete p; p = nullptr;` vì `delete` trên con trỏ `nullptr` là vô hại.'],
    ['err', 'Biến cục bộ `int s;` không khởi tạo rồi dùng ngay `s += a[i];` gây hậu quả gì?',
      ['`s` chứa giá trị rác không xác định nên kết quả sai và có thể khác nhau mỗi lần chạy', '`s` luôn tự động bằng 0 nên chương trình vẫn đúng', 'Chương trình không biên dịch được', 'Chương trình luôn bị treo'],
      'Chỉ biến toàn cục và biến `static` mới được tự khởi tạo bằng 0. Biến cục bộ phải khởi tạo tường minh: `int s = 0;`'],
    ['err', 'Đoạn code `for (int i = 0; i < n; ) cout << i;` gặp vấn đề gì?',
      ['Vòng lặp vô hạn vì biến điều khiển `i` không bao giờ thay đổi', 'Lỗi cú pháp vì thiếu bước nhảy', 'Chạy đúng n lần', 'Không chạy lần nào'],
      'Vòng lặp vô hạn thường do quên tăng biến đếm, điều kiện dừng sai, hoặc so sánh số thực bằng `==`.'],
    ['err', 'Hàm đệ quy thiếu điều kiện dừng sẽ gây lỗi thời gian chạy nào?',
      ['Tràn ngăn xếp (stack overflow) do số lời gọi lồng nhau không giới hạn', 'Tràn bộ nhớ heap', 'Lỗi chia cho 0', 'Lỗi cú pháp'],
      'Mỗi lời gọi hàm chiếm một khung ngăn xếp; ngăn xếp có giới hạn nên đệ quy vô hạn làm chương trình sập.'],
    ['err', 'Với `int` 32 bit, đoạn `int x = 2147483647; x = x + 1;` cho kết quả gì?',
      ['Tràn số: x trở thành −2147483648 (quay vòng)', 'x = 2147483648', 'Chương trình báo lỗi biên dịch', 'x giữ nguyên 2147483647'],
      'Phạm vi `int` 32 bit là −2³¹ đến 2³¹−1. Cần dùng `long long` khi giá trị có thể vượt khoảng này – lỗi rất hay gặp khi tính tổng hoặc giai thừa.'],
    ['err', 'So sánh hai số thực bằng `if (a == b)` là không an toàn vì:',
      ['Số thực được lưu xấp xỉ theo chuẩn dấu phẩy động nên phép tính có sai số; nên so sánh `fabs(a − b) < eps`', 'Toán tử `==` không dùng được cho kiểu `double`', 'Số thực luôn bằng nhau', 'Trình biên dịch sẽ báo lỗi'],
      'Ví dụ `0.1 + 0.2 == 0.3` cho kết quả sai (false) trong hầu hết môi trường.'],
    ['err', 'Khi debug bằng IDE, **breakpoint** và **step over / step into** dùng để làm gì?',
      ['Dừng chương trình tại dòng chỉ định để xem giá trị biến; chạy từng dòng, bỏ qua hoặc đi vào bên trong lời gọi hàm', 'Tự động sửa lỗi cú pháp trong code', 'Biên dịch lại toàn bộ dự án', 'Đo dung lượng bộ nhớ của file nguồn'],
      'Kỹ thuật debug cơ bản: đặt breakpoint, chạy từng bước, quan sát cửa sổ Watch/Locals. Cách thủ công là chèn lệnh in giá trị trung gian.'],
    ['err', 'Macro `assert(dieu_kien)` trong `<cassert>` có tác dụng gì?',
      ['Kiểm tra giả định khi chạy; nếu điều kiện sai thì in thông báo và dừng chương trình, giúp phát hiện lỗi sớm khi phát triển', 'Bắt mọi ngoại lệ trong chương trình', 'Tự động sửa giá trị biến cho đúng', 'Ghi log ra file văn bản'],
      '`assert` bị vô hiệu khi biên dịch bản release có định nghĩa `NDEBUG`, nên không dùng nó để kiểm tra dữ liệu nhập của người dùng.'],
    ['err', 'Lỗi "undefined reference to tinhTong(int, int)" khi build thuộc loại nào?',
      ['Lỗi liên kết (linker error) – đã khai báo nguyên mẫu hàm nhưng chưa định nghĩa phần thân', 'Lỗi cú pháp trong câu lệnh gọi hàm', 'Lỗi thời gian chạy khi hàm trả về sai giá trị', 'Lỗi tràn mảng'],
      'Quy trình build: tiền xử lý → biên dịch (phát hiện lỗi cú pháp) → liên kết (ghép các file đối tượng, phát hiện hàm/biến thiếu định nghĩa) → chạy.'],
    ['err', 'Cách phòng tránh lỗi tốt nhất khi hàm nhận con trỏ từ bên ngoài là:',
      ['Kiểm tra con trỏ khác `nullptr` trước khi truy cập nội dung', 'Luôn `delete` con trỏ ngay đầu hàm', 'Ép kiểu con trỏ sang `int`', 'Khai báo con trỏ là biến toàn cục'],
      'Truy cập qua con trỏ `nullptr` gây lỗi segmentation fault – một trong các lỗi thời gian chạy phổ biến nhất.'],
    ['err', 'Đoạn code sau có lỗi gì?',
      ['Dấu `;` ngay sau `if (x > 0)` tạo thành lệnh rỗng nên khối sau luôn được thực hiện bất kể x', 'Thiếu dấu ngoặc nhọn nên không biên dịch được', 'Toán tử `>` dùng sai cho kiểu int', 'Không có lỗi'],
      'Lỗi "dấu chấm phẩy thừa" rất khó thấy: trình biên dịch không báo gì nhưng logic sai hoàn toàn. Tương tự với `for(...);` và `while(...);`.',
      `int x = -5;
if (x > 0);
{
    cout << "Duong";
}`],

    // ===== Đọc hiểu, tính đúng đắn & tối ưu code =====
    ['ana', 'Đoạn code sau in ra gì?',
      ['15', '10', '21', '0'],
      'Vòng lặp cộng dồn 1+2+3+4+5 = 15 (i chạy tới 5 vì điều kiện là `i <= 5`).',
      `int s = 0;
for (int i = 1; i <= 5; i++) s += i;
cout << s;`],
    ['ana', 'Hàm kiểm tra số nguyên tố sau nên tối ưu thế nào?',
      ['Chỉ lặp `i` tới `sqrt(n)` vì nếu n có ước lớn hơn căn bậc hai của n thì phải có ước nhỏ hơn tương ứng – giảm từ O(n) xuống O(√n)', 'Lặp tới `n/4` để nhanh gấp 4 lần và vẫn luôn đúng', 'Bỏ hẳn vòng lặp, chỉ cần kiểm tra n lẻ là đủ', 'Đổi `int` thành `double` cho nhanh hơn'],
      'Với n = 10⁹, cách O(n) cần khoảng 10⁹ phép chia còn O(√n) chỉ khoảng 31623 phép.',
      `bool laNguyenTo(int n) {
    if (n < 2) return false;
    for (int i = 2; i < n; i++)
        if (n % i == 0) return false;
    return true;
}`],
    ['ana', 'Vì sao nên truyền đối tượng lớn vào hàm bằng `const` tham chiếu thay vì truyền theo trị?',
      ['Truyền theo trị tạo một bản sao toàn bộ dữ liệu tốn O(n) thời gian và bộ nhớ; tham chiếu hằng tránh sao chép mà vẫn bảo đảm hàm không sửa dữ liệu gốc', 'Truyền theo trị gây lỗi biên dịch với kiểu vector', 'Tham chiếu hằng cho phép hàm sửa dữ liệu gốc dễ dàng hơn', 'Không có khác biệt, trình biên dịch luôn tối ưu như nhau'],
      'Với kiểu nhỏ như `int`, `char`, `double` thì truyền theo trị vẫn tốt hơn vì tránh một lần giải tham chiếu.'],
    ['ana', 'Trong hai cách viết sau, cách nào tốt hơn về hiệu năng và vì sao?',
      ['Cách B tốt hơn vì `s.length()` được tính một lần thay vì gọi lại ở mỗi lần lặp', 'Cách A tốt hơn vì ít biến hơn', 'Hai cách hoàn toàn như nhau trong mọi trình biên dịch', 'Cách A sai cú pháp'],
      'Nguyên tắc chung: đưa các tính toán không đổi ra ngoài vòng lặp. Đây cũng là lỗi hiệu năng hay bị hỏi trong đề đọc hiểu code.',
      `// Cach A
for (int i = 0; i < s.length(); i++) ...

// Cach B
int n = s.length();
for (int i = 0; i < n; i++) ...`],
    ['ana', 'Đoạn code sau có độ phức tạp thời gian là bao nhiêu?',
      ['O(n²)', 'O(n)', 'O(n log n)', 'O(log n)'],
      'Vòng ngoài n lần, vòng trong n lần nên tổng là n·n = n² phép toán.',
      `for (int i = 0; i < n; i++)
    for (int j = 0; j < n; j++)
        if (a[i] == b[j]) dem++;`],
    ['ana', 'Muốn đếm số phần tử chung của hai mảng n phần tử nhanh hơn O(n²), cách nào hợp lý nhất?',
      ['Đưa mảng b vào bảng băm rồi duyệt a tra cứu – trung bình O(n)', 'Sắp xếp mảng a rồi vẫn duyệt lồng hai vòng for', 'Dùng đệ quy thay cho vòng lặp', 'Chuyển mảng sang kiểu `double` để so sánh nhanh hơn'],
      'Đây là ví dụ điển hình của việc đổi bộ nhớ lấy thời gian: tốn thêm O(n) bộ nhớ nhưng giảm thời gian từ O(n²) xuống O(n). Cách sắp xếp cả hai mảng rồi duyệt song song cho O(n log n).'],
    ['ana', 'Đoạn code sau in ra gì?',
      ['3', '4', '0', 'Lỗi biên dịch'],
      'Toán tử `&&` tính ngắn mạch: `x++ > 0` cho 3 > 0 đúng, x thành 4; tiếp tục tính `++y < 1` nên y = 1, 1 < 1 sai. In x − y = 4 − 1 = 3.',
      `int x = 3, y = 0;
if (x++ > 0 && ++y < 1) { }
cout << x - y;`],
    ['ana', 'Hàm tìm giá trị lớn nhất sau sai ở đâu?',
      ['Khởi tạo `max = 0` nên nếu mọi phần tử đều âm thì kết quả trả về 0 là sai; phải khởi tạo `max = a[0]`', 'Vòng lặp chạy thiếu một phần tử', 'Phải dùng `>=` thay cho `>`', 'Hàm không có lỗi nào'],
      'Đây là lỗi về tính đúng đắn ở trường hợp biên – cần luôn thử với mảng toàn số âm, mảng một phần tử, mảng rỗng.',
      `int timMax(int a[], int n) {
    int max = 0;
    for (int i = 0; i < n; i++)
        if (a[i] > max) max = a[i];
    return max;
}`],
    ['ana', 'Trong vòng lặp duyệt bằng iterator, vì sao nên viết `++it` thay vì `it++`?',
      ['`it++` phải tạo và trả về một bản sao của iterator trước khi tăng, còn `++it` tăng trực tiếp nên tránh được chi phí sao chép', '`it++` gây lỗi biên dịch với iterator', '`++it` duyệt ngược danh sách', 'Hai cách cho kết quả duyệt khác nhau'],
      'Với kiểu nguyên đơn giản thì trình biên dịch tối ưu như nhau, nhưng với iterator hay đối tượng thì dạng tiền tố thường rẻ hơn.'],
    ['ana', 'Để tăng tốc nhập/xuất khi dữ liệu lớn trong C++, kỹ thuật phổ biến nhất là:',
      ['Thêm `ios_base::sync_with_stdio(false); cin.tie(NULL);` ở đầu hàm main để bỏ đồng bộ với stdio của C', 'Dùng `endl` thay cho `"\\n"` sau mỗi dòng', 'Khai báo mọi biến là toàn cục', 'Dùng `double` thay cho `int` khi đọc số nguyên'],
      'Lưu ý ngược lại: `endl` còn gọi `flush` nên CHẬM hơn `"\\n"` khi in nhiều dòng.'],
    ['ana', 'Đoạn code sau thực hiện phép kiểm tra gì với số nguyên dương n?',
      ['Kiểm tra n có phải lũy thừa của 2 hay không', 'Tính n chia 2', 'Đếm số bit 1 của n', 'Đảo ngược các bit của n'],
      'Lũy thừa của 2 có đúng một bit 1; khi đó n − 1 đảo mọi bit thấp hơn nên phép AND bằng 0. Ví dụ n = 8 (1000) và n − 1 = 7 (0111).',
      `bool f(int n) {
    return n > 0 && (n & (n - 1)) == 0;
}`],
    ['ana', 'Tính Fibonacci bằng đệ quy thuần túy có độ phức tạp O(2ⁿ). Cách tối ưu đơn giản nhất là:',
      ['Lưu lại kết quả đã tính vào mảng (memoization) hoặc tính lặp từ dưới lên, giảm còn O(n)', 'Đổi kiểu trả về sang `long long` là đủ nhanh', 'Dùng đệ quy đuôi để trình biên dịch tự tăng tốc theo cấp số nhân', 'Gọi hàm nhiều lần hơn để tận dụng cache CPU'],
      'Đệ quy thuần tính lại rất nhiều giá trị trùng lặp. Đây chính là ý tưởng của quy hoạch động.'],
    ['ana', 'Hai đoạn code duyệt ma trận vuông: (A) duyệt theo dòng `a[i][j]`, (B) duyệt theo cột `a[j][i]`. Nhận xét đúng là:',
      ['Cả hai cùng O(n²) nhưng A thường nhanh hơn trong thực tế vì truy cập bộ nhớ liên tục, tận dụng tốt bộ nhớ đệm', 'A là O(n²) còn B là O(n³)', 'B nhanh hơn vì truy cập ngược', 'Hai cách luôn chạy hệt nhau vì cùng độ phức tạp'],
      'Độ phức tạp như nhau nhưng hằng số ẩn khác nhau. Trong C/C++ mảng hai chiều lưu theo dòng (row-major) nên duyệt theo dòng thân thiện với cache hơn.'],
    ['ana', 'Khi được hỏi "đoạn code này có đúng không", thứ tự kiểm tra hợp lý nhất là:',
      ['Thử trường hợp bình thường, rồi trường hợp biên (n = 0, n = 1, phần tử âm, phần tử trùng nhau), rồi tràn số và chia cho 0', 'Chỉ cần chạy thử một bộ dữ liệu bất kỳ là đủ kết luận', 'Đo thời gian chạy trước, đúng sai tính sau', 'Đếm số dòng code'],
      'Đề trắc nghiệm đọc hiểu code thường gài sai ở trường hợp biên: mảng rỗng, một phần tử, giá trị âm, chỉ số lệch một đơn vị.'],
    ['ana', 'Đoạn code sau in ra gì?',
      ['0', '1', '5', 'Lỗi biên dịch'],
      'Phép chia hai số nguyên cho kết quả nguyên: 1/2 = 0, sau đó mới ép sang `double` để gán. Muốn ra 0.5 phải viết `1.0/2` hoặc ép kiểu một toán hạng.',
      `double x = 1 / 2;
cout << x;`]
  ];

  window.QB = window.QB || {};
  window.QB.cpp = {
    name: 'Lập trình C++', short: 'Lập trình', icon: '💻',
    desc: 'Nền tảng ngôn ngữ, kiểu dữ liệu, toán tử, điều khiển, hàm & đệ quy, mảng/chuỗi, OOP, xử lý lỗi & debug, đọc hiểu và tối ưu code.',
    chapters: {
      c1: 'C1 · Khái niệm & thuật toán', c2: 'C2 · Kiểu dữ liệu & toán tử', c3: 'C3 · Cấu trúc điều khiển',
      c4: 'C4 · Hàm & đệ quy', c5: 'C5 · Mảng', c6: 'C6 · Xâu ký tự', c7: 'C7 · Struct & Union',
      c8: 'C8 · Con trỏ', c9: 'C9 · Tệp',
      oop: 'OOP · Hướng đối tượng', err: 'Xử lý lỗi & Debug', ana: 'Đọc hiểu & Tối ưu code'
    },
    questions: L.map((x, i) => ({ id: 'cpp-' + (i + 1), ch: x[0], q: x[1], opts: x[2], a: 0, exp: x[3], code: x[4] }))
  };
})();
