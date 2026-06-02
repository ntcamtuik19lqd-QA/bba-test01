# JavaScript - Câu Điều Kiện

## Các loại điều kiện

* if
* if...else
* if...else if...else
* switch...case

---

## Cú pháp

```javascript
if (condition) {
    // code
}
```

Ví dụ:

```javascript
let hour = 8;

if (hour <= 11) {
    console.log("Good morning");
}
```

---

## Kết hợp điều kiện

```javascript
if (hour >= 6 && hour <= 11) {
    console.log("Good morning");
}


# JavaScript - Vòng Lặp

## Mục đích

Lặp lại một đoạn logic nhiều lần.

---

## Các loại vòng lặp

* for
* for...of
* forEach
* for...in
* while
* do...while

---

## Cú pháp for

```javascript
for (initialization; condition; update) {
    // code
}
```

## In biến bằng Template Literal

```javascript
let name = "Linh";

console.log(`Tôi là ${name}`);
```

---

## Nối chuỗi

```javascript
console.log("Tôi tên là " + name);
```

---

# Key Takeaways

* Dùng `git commit --amend` để sửa commit message gần nhất.
* Dùng `git restore --staged` để un-stage file.
* Dùng `git reset --soft HEAD~1` để đưa commit về staging.
* Branch là pointer, không copy source code.
* `.gitignore` giúp loại bỏ file không cần quản lý bởi Git.
* `if` dùng để xử lý điều kiện.
* `for` dùng để lặp logic nhiều lần.
* Sử dụng đúng convention:

  * File/Folder → kebab-case
  * Variable/Function → camelCase
  * Class → PascalCase
* `console.log()` 
