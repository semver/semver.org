---
title: Ý nghĩa Semantic Versioning 2.0.0
language: vi
---

Semantic Versioning 2.0.0
=========================

Tổng quan
---------

Đưa ra một cấu trúc phiên bản MAJOR.MINOR.PATCH, gia tăng như sau:

1. Số phiên bản MAJOR khi bạn có những thay đổi API lớn, không tương thích với phiên bản trước
2. Số phiên bản MINOR khi bạn thêm chức năng tương thích ngược với phiên bản trước
3. Số phiên bản PATCH khi bạn làm một bản vá lỗi tương thích ngược với phiên bản trước

Các nhãn (labels) bổ sung cho pre-release và các build metadata về quá trình dựng đươc coi là tiện ích mở rộng cho định dạng MAJOR.MINOR.PATCH.

Giới thiệu
----------

Trong thế giới của quản lý phần mềm, ở đó tồn tại một nơi đáng sợ, được gọi là "địa ngục phụ thuộc". Hệ thống của bạn ngày càng lớn hơn và bạn càng tích hợp nhiều gói vào trong phần mềm của mình hơn, đồng nghĩa với việc bạn càng lún sâu một cách tuyệt vọng vào địa ngục này.

Trong các hệ thống phụ thuộc nhiều vào các yếu tố khác (gói, hệ thống,...), phát hành một phiên bản mới có thể nhanh chóng trở thành một cơn ác mộng. Nếu các thông số kỹ thuật phụ thuộc quá chặt chẽ với nhau, bạn có nguy cơ bị khóa phiên bản (không có khả năng nâng cấp một gói mà không phải phát hành các phiên bản mới của mỗi gói phụ thuộc). Nếu các yếu tố phụ thuộc được chỉ định quá lỏng lẻo, chắc chắn bạn sẽ bị ảnh hưởng bởi tính hỗn tạp của phiên bản (giả định khả năng tương thích với nhiều phiên bản trong tương lai là hợp lý). Cả hai trường hợp này đều đưa bạn đến đích đến là địa ngục phụ thuộc, ngăn dự án của bạn tiếp tục phát triển.

Để giải quyết vấn đề này, chúng tôi đề xuất một bộ quy tắc và quy định để đánh phiên bản. Các quy tắc này không nhất thiết dựa trên các quy tắc đã phổ biến rộng rãi trong cả phần mềm nguồn đóng và nguồn mở. Để bộ quy tắc này hoạt động, đầu tiên bạn cần xác định một tập public API, bao gồm tài liệu mô tả hoặc chính mã nguồn của API. Điều quan trọng là API phải rõ ràng và chính xác. Một khi bạn đã xác định được tập public API, bạn thông báo các thay đổi của API bằng cách đánh các phiên bản tương ứng. Bạn hãy xem lại định dạng phiên bản ban đầu, X.Y.Z (Major.Minor.Patch). Đối với những bản vá lỗi không làm thay đổi API, chúng ta tăng phiên bản Patch (Vá lỗi); với các thay đổi liên quan API, có thể tương thích ngược với phiên bản trước, tăng phiên bản Minor (Phụ); còn lại, đối với các thay đổi API mà không thể tương thích ngược với phiên bản trước, tăng phiên bản Major (Chính).

Chúng tôi gọi hệ thống này là "Sematic Versioning", hay "Phiên bản ngữ nghĩa". Theo hệ thống này, số phiên bản và sự thay đổi của chúng truyền đạt lại sự thay đổi của mã nguồn giữa các phiên bản.

Thông số của Sematic Versioning (SemVer)
----------------------------------------

Các từ khóa “MUST”, “MUST NOT”, “REQUIRED”, “SHALL”, “SHALL NOT”, “SHOULD”, “SHOULD NOT”, “RECOMMENDED”, “MAY”, và “OPTIONAL” trong tài liệu này được mô tả trong [RFC 2119](https://tools.ietf.org/html/rfc2119).

1. Phần mềm sử dụng Semantic Versioning PHẢI công bố một tập public API. API này cần công khai trong mã nguồn hoặc tài liệu mô tả. Tập API này NÊN hoàn chỉnh và chính xác.

2. Một chữ số phiên bản bình thường PHẢI lấy từ mẫu X.Y.Z. X, Y và Z là một số nguyên không âm, và KHÔNG chứa số 0 ở đầu. X là phiên bản chính, Y là phiên bản Minor và Z là phiên bản Patch lỗi. Mỗi phần tử cần PHẢI là một số tăng dần. Cho ví dụ: 1.9.0 -> 1.10.0 -> 1.11.0.

3. Một khi gói đã đánh phiên bản được phát hành, nội dung của phiên bản đó KHÔNG được sửa đổi. Mọi sửa đổi PHẢI được phát hành dưới dạng phiên bản mới.

4. Phiên bản Major zero (0.y.z) dành cho giai đoạn phát triển sơ khai. Mọi thứ CÓ THỂ thay đổi bất cứ lúc nào. Public API KHÔNG NÊN được coi là ổn định.

5. Phiên bản 1.0.0 được xác định public API. Cách tăng số phiên bản sau bản phát hành này phụ thuộc vào sự thay đổi của public API.

6. Phiên bản Patch Z (x.y.Z) PHẢI được tăng dần nếu chỉ các bản vá tương thích ngược được tung ra.Một sửa lỗi được định nghĩa là một thay đổi nội bộ để sửa chửa một hành vi không chính xác.

7. Phiên bản Minor Y (x.Y.z) PHẢI được tăng dần nếu có thêm thay đổi mới và tương thích ngược với phiên bản trước được đưa vào trong public API. Nó PHẢI được tăng dần nếu bất kỳ chức năng API công khai nào đã được đánh dấu là không còn dùng nữa. Nó CÓ THỂ tăng dần nếu chức năng mới hoặc cải tiến mới đáng kể được giới thiệu trong mã đóng. Nó CÓ THỂ bao gồm thay đổi cấp độ bản vá. Phiên bản vá PHẢI được đặt lại về bằng 0 khi tăng phiên bản Minor.

8. Phiên bản Major X (X.y.z | X > 0) PHẢI được tăng dần nếu bất kỳ một thay đổi không tương thích ngược đưa vào API công khai. Nó CÓ THỂ bao gồm phiên bản Minor và thay đổi cấp độ bản vá. Bản vá và phiên bản Minor PHẢI được đặt lại về số 0 khi phiên bản chính tăng lên.

9. Phiên bản pre-release CÓ THỂ được mô tả bằng cách nối thêm một dấu gạch nối vào một loạt số nhận dạng được phân tách bằng dấu chấm ngay sau phiên bản Patch. Mã định danh PHẢI bao gồm chữ số trong bảng mã ASCII và dấu gạch nối \[0-9A-Za-z]. Mã định danh KHÔNG được để trống. Số định danh KHÔNG được bao gồm các chữ số 0 đứng đầu. Các phiên bản pre-release có một độ ưu tiên thấp hơn so với các phiên bản bình thường có liên quan. Một phiên bản pre-release cho biết phiên bản này không ổn định và có thể không đáp ứng các yêu cầu tương thích như dự định giống như là các phiên bản bình thường của nó. Ví dụ: 1.0.0-alpha, 1.0.0-alpha.1, 1.0.0-0.3.7, 1.0.0-x.7.z.92.

10. Build metadata CÓ THỂ được biểu thị bằng cách thêm một dấu cộng và một loạt các tiền tố nhận dạng được phân tách bằng dấu chấm ngay sau phiên bản Patch hoặc phiên bản pre-release. Mỗi định danh PHẢI bao gồm chỉ các chữ số trong bảng mã ASCII và gạch nối \[0-9A-Za-z]. Mỗi định danh KHÔNG được rỗng. Build metadata NÊN bỏ qua khi xác định mức độ ưu tiên của phiên bản. Do đó hai phiên bản chỉ khác nhau trong build metadata, có cùng mức độ ưu tiên. Ví dụ: 1.0.0-alpha+001, 1.0.0+20130313144700, 1.0.0-beta+exp.sha.5114f85.

11. Mức độ ưu tiên đề cập đến cách các phiên bản được so sánh với nhau.

    1. Mức độ ưu tiên PHẢI được tính bằng cách phiên bản thành các mã định dạng phiên bản Major, phiên bản Minor và phiên bản Patch, theo thứ tự đã nêu. (Build metadata không tính vào mức độ ưu tiên)

    2. Mức độ ưu tiên được xác định bởi sự khác biệt đầu tiên khi so sánh từng mã định danh từ trái qua phải: phiên bản Major -> phiên bản Minor -> phiên bản Patch.

       Ví dụ: 1.0.0 < 2.0.0 < 2.1.0 < 2.1.1.

    3. Trong trường hợp phiên bản Major, Minor và Patch đều bằng nhau, phiên bản pre-release có mức độ ưu tiên thấp hơn.

       Ví dụ: 1.0.0-alpha < 1.0.0.

    4. Mức độ ưu tiên của hai phiên bản pre-release có cùng phiên bản Major, Minor và Patch PHẢI được xác định bằng cách so sánh từng mã định danh phân tách bằng dấu chấm từ trái sang phải cho đến khi tìm thấy sự khác biệt.

        1. Các mã định danh chỉ bao gồm các chữ số, được so sánh số học.

        2. Các mã định danh bao gồm chữ cái hoặc dấu gạch ngang được so sánh theo thứ tự sắp xếp trong bảng ASCII.

        3. Định danh dạng số luôn có mức độ mưu tiên thấp hơn định danh dạng chữ hoặc ký tự đặc biệt.

        4. Một tập các phiên bản pre-release lớn hơn có mức độ ưu tiên cao hơn một tập khác nhỏ hơn, nếu tất cả các phiên bản trước đó bằng nhau.

            Ví dụ: 1.0.0-alpha < 1.0.0-alpha.1 < 1.0.0-alpha.beta < 1.0.0-beta < 1.0.0-beta.2 < 1.0.0-beta.11 < 1.0.0-rc.1 < 1.0.0

Ngữ pháp Backus-Naur cho các phiên bản SemVer hợp lệ
----------------------------------------------------

```
<valid semver> ::= <version core>
                 | <version core> "-" <pre-release>
                 | <version core> "+" <build>
                 | <version core> "-" <pre-release> "+" <build>

<version core> ::= <major> "." <minor> "." <patch>

<major> ::= <numeric identifier>

<minor> ::= <numeric identifier>

<patch> ::= <numeric identifier>

<pre-release> ::= <dot-separated pre-release identifiers>

<dot-separated pre-release identifiers> ::= <pre-release identifier>
                                          | <pre-release identifier> "." <dot-separated pre-release identifiers>

<build> ::= <dot-separated build identifiers>

<dot-separated build identifiers> ::= <build identifier>
                                    | <build identifier> "." <dot-separated build identifiers>

<pre-release identifier> ::= <alphanumeric identifier>
                           | <numeric identifier>

<build identifier> ::= <alphanumeric identifier>
                     | <digits>

<alphanumeric identifier> ::= <non-digit>
                            | <non-digit> <identifier characters>
                            | <identifier characters> <non-digit>
                            | <identifier characters> <non-digit> <identifier characters>

<numeric identifier> ::= "0"
                       | <positive digit>
                       | <positive digit> <digits>

<identifier characters> ::= <identifier character>
                          | <identifier character> <identifier characters>

<identifier character> ::= <digit>
                         | <non-digit>

<non-digit> ::= <letter>
              | "-"

<digits> ::= <digit>
           | <digit> <digits>

<digit> ::= "0"
          | <positive digit>

<positive digit> ::= "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

<letter> ::= "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J"
           | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T"
           | "U" | "V" | "W" | "X" | "Y" | "Z" | "a" | "b" | "c" | "d"
           | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n"
           | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x"
           | "y" | "z"
```

Tại sao nên sử dụng Sematic Versioning?
---------------------------------------

Đây không phải là một ý tưởng mới hay mang tính cách mạng. Trong thực tế, bạn có thể làm một cái gì đó gần tương tự rồi. Vấn đề là "gần" cũng có nghĩa nó chưa đủ tốt. Nếu không có tuân thủ một số loại đặc tả chính thức, số phiên bản về cơ bản là vô dụng để việc quản lý phụ thuộc. Bằng cách đặt tên và định nghĩa rõ ràng cho các ý tưởng trên, việc truyền đạt ý định của bạn tới người dùng phần mềm trở nên dễ dàng hơn. Một khi những ý định này đã rõ ràng, các đặc tả phụ thuộc linh hoạt (nhưng không nên quá linh hoạt) có thể được thực hiện.

Một ví dụ đơn giản chứng minh làm thế nào Sematic Versioning có thể biến địa ngục phụ thuộc thành dĩ vãng. Hãy xem xét một thư viện có tên là "Firetruck". Nó yêu cầu một gói có tên "Ladder". Tại thời điểm Firetruck được tạo ra, Ladder đang ở phiên bản 3.1.0. Vì Firetruck sử dụng một số tính năng mới được giới thiệu lần đầu trong 3.1.0, bạn hoàn toàn có thể chỉ định một cách an toàn phụ thuộc lớn hơn hoặc bằng 3.1.0 và nhỏ hơn 4.0.0. Giờ đây, khi Ladder phiên bản 3.1.1 và 3.2.0 ra mắt, bạn có thể cập nhật lên các phiên bản này, và bạn biết rằng chúng sẽ tương thích với phần mềm phụ thuộc hiện có.

Tất nhiên, với tư cách là nhà phát triển có trách nhiệm, bạn sẽ muốn xác minh rằng bất kỳ nâng cấp gói đều hoạt động như mong đợi. Thế giới thực là một nơi lộn xộn; không có gì chúng ta không thể làm nhưng hãy cảnh giác. Những gì bạn có thể làm là hãy để Sematic Versioning cung cấp cho bạn cách phát hành và nâng cấp các gói hợp lý, mà không cần phải tung ra các phiên bản mới của các gói phụ thuộc, giúp bạn tiết kiệm thời gian và giảm thiểu rắc rối.

Nếu bạn thấy tất cả những điều này hấp dẫn, hãy bắt đầu sử dụng Sematic Versioning. Liên kết trang web này từ README của bạn để những người khác có thể biết các quy tắc và có thể hưởng lợi từ chúng.

Câu hỏi thường gặp
------------------

### Tôi nên xử lý các bản sửa đổi trong giai đoạn phát triển ban đầu 0.y.z như thế nào?

Điều đơn giản nhất cần làm là bắt đầu phát hành phiên bản sơ khai của bạn ở 0.1.0 và sau đó tăng phiên bản Minor cho mỗi lần phát hành tiếp theo.

### Làm cách nào để biết khi nào phát hành 1.0.0?

Nếu phần mềm của bạn đang được sử dụng thực tế, nó có lẽ đã là 1.0.0. Nếu bạn có một API ổn định mà người dùng phụ thuộc vào, bạn phải là 1.0.0. Nếu bạn lo lắng rất nhiều về khả năng tương thích ngược, bạn có lẽ đã là 1.0.0.

### Điều này có cản trở sự phát triển nhanh và lặp đi lặp lại nhanh chóng không?

Phiên bản chính số không (Major version zero) hoàn toàn phù hợp cho giai đoạn phát triển nhanh. Nếu bạn thay đổi API mỗi ngày, bạn nên vẫn ở phiên bản 0.y.z hoặc sử dụng một nhánh phát triển riêng để làm việc trên phiên bản chính tiếp theo.

### Nếu ngay cả những thay đổi nhỏ nhất không tương thích ngược với public API đều yêu cầu tăng phiên bản chính, thì chẳng phải tôi sẽ đạt đến phiên bản 42.0.0 rất nhanh sao?

Đây là một câu hỏi về sự phát triển có trách nhiệm và tầm nhìn. Không nên đưa những thay đổi không tương thích vào dự án có quá nhiều phụ thuộc. Những thay đổi không tương thích không nên được đưa vào một cách dễ dàng cho phần mềm có nhiều mã phụ thuộc. Chi phí phải chịu để nâng cấp là đáng kể. Khi bạn phải xử lý các phiên bản chính để phát hành các thay đổi không tương thích có nghĩa là bạn đã suy nghĩ thấu đáo về tác động của các thay đổi và đánh giá tỉ lệ/lợi ích liên quan.

### Tài liệu cho toàn bộ API tốn quá nhiều thời gian, công sức!

Với tư cách là một nhà phát triển phần mềm chuyên nghiệp, đây là trách nhiệm của bạn. Quản lý sự phức tạp của phần mềm là một phần cực kỳ quan trọng để giữ cho dự án hoạt động hiệu quả và điều đó khó thực hiện nếu không ai biết cách sử dụng phần mềm của bạn. Về lâu dài, Sematic Versioning và xác định rõ ràng public API có thể giữ cho mọi thứ hoạt động trơn tru.

### Tôi phải làm gì nếu vô tình phát hành một phiên bản Minor có thay đổi không tương thích ngược?

Ngay khi bạn nhận ra rằng bạn đã phá vỡ Sematic Versioning, hãy khắc phục sự cố và phát hành một phiên bản Minor mới để khắc phục sự cố và khôi phục tính tương thích ngược. Ngay cả trong trường hợp này, việc sửa đổi các bản phát hành đã đánh phiên bản không thể chấp nhận được. Nếu được, hãy ghi lại phiên bản vi phạm và thông báo người dùng của bạn về vấn đề này để họ biết về phiên bản lỗi.

### Tôi nên làm gì nếu tôi cập nhật các gói phụ thuộc mà không thay đổi public API?

Điều đó sẽ được coi là tương thích vì nó không ảnh hưởng đến public API. Bất kỳ phần mềm nào cũng phụ thuộc các gói phụ thuộc, bản thân các gói này cũng có những gói phụ thuộc riêng. Việc xác định thời điểm để thay đổi một phiên bản Patch hay phiên bản Minor tùy thuộc vào thời điểm đó, bạn cập nhật các phụ thuộc để sửa lỗi hay cho một chức năng mới. Nếu bạn xác định tiếp tục phát triển thêm thay đổi đó, đó rõ ràng là thay đổi ở mức phiên bản Minor.

### Điều gì sẽ xảy ra nếu tôi vô tình thay đổi public API không tuân theo các quy tắc của Sematic Versioning? (ví dụ, thay đổi không tương thích ngược nhưng lại nằm trong phiên bản Patch)

Hãy thử phán đoán dựa theo tình huống. Nếu sản phẩm của bạn có lượng lớn người dùng, việc bạn cố gắng chuyển về phiên bản cũ hơn sẽ làm ảnh hưởng đến tất cả. Lúc này giải pháp tốt nhất là phát hành một phiên bản chính, nhằm thay thế cho phiên bản không tuân thủ trước đó. Hãy nhớ rằng, Sematic Versioning hướng tới việc truyền đạt đến người dùng về thay đổi của sản phẩm thông qua thay đổi phiên bản.

### Tôi nên xử lý các chức năng không dùng nữa như thế nào?

Việc loại bỏ chức năng hiện có là một phần bình thường của quá trình phát triển phần mềm. Khi bạn không còn dùng một phần của public API, bạn nên làm hai việc: (1) cập nhật tài liệu để thông báo cho người dùng về thay đổi, (2) phát hành một phiên bản Minor có chứa phần không dùng nữa. Trước khi bạn loại bỏ hoàn toàn chức năng trong một bản phát hành phiên bản chính, nên có ít nhất một bản phát hành phiên bản Minor chứa phần không dùng nữa, để người dùng có thể chuyển đổi sang API mới.

### SemVer có giới hạn kích thước đối với chuỗi phiên bản không?

Không, nhưng xem xét kỹ. Ví dụ, một chuỗi phiên bản 255 ký tự rõ ràng là không cần thiết. Ngoài ra, các hệ thống cụ thể cũng có thể có giới hạn riêng cho kích thước chuỗi phiên bản.

### "v1.2.3" có phải là Sematic Versioning không?

Không, "v1.2.3" không phải là Sematic Versioning. Tuy nhiên, tiền tố "v" khá phổ biến (trong tiếng Anh) để cho biết đó là một phiên bản. Trong quản lý phiên bản, "phiên bản" ("version") thường viết tắt là "v". Ví dụ: `git tag v1.2.3 -m "Release version 1.2.3"`, trong đó "v1.2.3" là tên tag và Sematic Versioning là "1.2.3".

### Có thể dùng biểu thức chính quy (RegEx) nào để kiểm tra SemVer không?

Chúng ta có hai loại RegEx. Một loại bao gồm các nhóm được đặt tên cho những hệ thống hỗ trợ (PCRE [Perl Compatible Regular Expressions, ví dụ, Perl, PHP và R], Python và Go).

Xem thêm tại: <https://regex101.com/r/Ly7O1x/3/>

```
^(?P<major>0|[1-9]\d*)\.(?P<minor>0|[1-9]\d*)\.(?P<patch>0|[1-9]\d*)(?:-(?P<prerelease>(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+(?P<buildmetadata>[0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

Loại còn lại gồm các nhóm được đánh số (cg1 = major (chính), cg2 = minor (phụ), cg3 = patch (vá), cg4 = prerelease (pre-release) và cg5 = buildmetadata (build metadata)), PCRE [Perl Compatible Regular Expressions, ví dụ, Perl, PHP và R], Python và Go.

Xem thêm tại: <https://regex101.com/r/vkijKf/1/>

```
^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?$
```

Về chúng tôi
------------

Đặc tả của Sematic Versioning được viết bởi [Tom Preston-Werner](http://tom.preston-werner.com/), người sáng lập của Gravatars và đồng sáng lập GitHub.

Nếu bạn muốn để lại một phản hồi, vui lòng [mở một vấn đề trên GitHub](https://github.com/semver/semver/issues)

Giấy phép
---------

[Creative Commons ― CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)
