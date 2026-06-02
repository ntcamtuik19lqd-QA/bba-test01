

### Thao tác cơ bản

```javascript
user.email = "abc@gmail.com"; // thêm
user.age = 26;                // sửa
delete user.email;            // xóa
```

### Truy cập dữ liệu

```javascript
user.name
user["name"]
```

---

## Array

### Mục đích

Lưu nhiều giá trị trong một biến.

```javascript
const numbers = [1, 2, 3];
```

### Truy cập phần tử

```javascript
numbers[0]
numbers[1]
```

### Duyệt mảng

```javascript
for (let item of numbers) {
    console.log(item);
}
```

---

## Function

### Mục đích

Tái sử dụng logic.

### Khai báo

```javascript
function sayHello() {
    console.log("Hello");
}
```

### Gọi hàm

```javascript
sayHello();
```

### Hàm có tham số

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}

greet("Tu");
```

---


# Break & Continue

## break

Thoát khỏi vòng lặp ngay lập tức.

```javascript
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        break;
    }
}
```

---

## continue

Bỏ qua lần lặp hiện tại.

```javascript
for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log(i);
}

---

## toUpperCase / toLowerCase

```javascript
str.toUpperCase()
str.toLowerCase()
---

## split

```javascript
email.split("@")
date.split("-")
```

Tách chuỗi.

---

## replace

```javascript
text.replace("World", "JS")
```

Thay thế chuỗi.

--


Thêm cuối.

### unshift

```javascript
arr.unshift(0)
```

Thêm đầu.

### splice

```javascript
arr.splice(2, 0, 100)
```

Thêm giữa.

---

## Xóa phần tử

### pop

```javascript
arr.pop()
```

Xóa cuối.

### shift

```javascript
arr.shift()
```

Xóa đầu.

### splice

```javascript
arr.splice(1, 1)
```

Xóa tại vị trí bất kỳ.

---

## Tìm kiếm

### find

Trả về phần tử đầu tiên.

```javascript
numbers.find(num => num > 10)
```

### filter

Trả về tất cả phần tử thỏa điều kiện.

```javascript
numbers.filter(num => num > 10)
```

---

## map

Biến đổi mảng.

```javascript
numbers.map(num => num * 2)
```

---

## sort

### Tăng dần

```javascript
numbers.sort((a, b) => a - b)
```

### Giảm dần

```javascript
numbers.sort((a, b) => b - a)
```

---

# Key Takeaways

* Object → lưu dữ liệu dạng key/value.
* Array → lưu danh sách dữ liệu.
* Function → tái sử dụng logic.
* let/const có block scope, var thì không.
* break → thoát vòng lặp.
* continue → bỏ qua vòng lặp hiện tại.
* for...in → duyệt Object.
* forEach → duyệt Array.
* String utils hay dùng: trim, includes, split, replace.
* Array utils hay dùng: push, pop, find, filter, map, sort.
