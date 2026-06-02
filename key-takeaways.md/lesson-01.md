## Git & Node.js Setup - Key Takeaways

### NVM (Node Version Manager)

Dùng để quản lý nhiều phiên bản Node.js và có thể chuyển đổi qua bất kỳ version nào.

```bash
nvm install <version>
nvm use <version>
nvm list
```

---

## Cấu hình Git

### Cấu hình Global

```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
git config --global init.defaultBranch main
```

Kiểm tra cấu hình:

```bash
git config --list
```

**Lưu ý:**

* `--global` sẽ được áp dụng mặc định cho tất cả repository trên máy.
* Nếu repository không có cấu hình riêng thì Git sẽ sử dụng giá trị từ Global.

### Cấu hình cho một Repository cụ thể

Di chuyển vào repository:

```bash
cd <repository>
```

Set lại user:

```bash
git config user.name "Your Name"
git config user.email "your_email@example.com"
```

Kiểm tra:

```bash
git config --list
```

---

## VS Code Settings

```text
File → Preferences → Settings
```

Dùng để cấu hình hoặc copy các path cần thiết.

---

## Git & SSH

### Xóa lịch sử Git của project

```bash
rm -rf .git
```

### Tạo SSH Key

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

Ví dụ:

```bash
ssh-keygen -t rsa -b 4096 -C "ntcamtuik19lqd@gmail.com"
```

### Thư mục lưu SSH Key

```text
C:\Users\<username>\.ssh\
```

Ví dụ:

```text
C:\Users\FPTSHOP\.ssh\
```

### Lấy Public Key

```bash
cat ~/.ssh/id_rsa.pub
```

Dùng nội dung này để thêm vào GitHub, GitLab hoặc Azure DevOps.

### Private Key

```text
~/.ssh/id_rsa
```

Không chia sẻ file này cho người khác.

---

## Kết nối Local Repository với Remote Repository

Thêm remote repository:

```bash
git remote add origin git@github.com:ntcamtuik19lqd-QA/Lession2.git
```

Kiểm tra remote:

```bash
git remote -v
```

Đổi URL remote:

```bash
git remote set-url origin <new-url>
```

Xóa remote:

```bash
git remote remove origin
```

---

## Git Log

Xem lịch sử commit:

```bash
git log
```

Xem ngắn gọn:

```bash
git log --oneline
```

Công dụng:

* Xem lịch sử commit.
* Xem Commit ID (Hash).
* Dùng Commit ID để checkout, revert hoặc reset.

---

## Quy tắc Commit

Nên viết commit message ngắn gọn, rõ ràng và mô tả đúng thay đổi.

Ví dụ:

```text
feat: add login feature
fix: resolve null reference exception
refactor: optimize user service
test: add unit tests for login
docs: update README
chore: update dependencies
```

Một số prefix phổ biến:

| Prefix   | Ý nghĩa                      |
| -------- | ---------------------------- |
| feat     | Thêm tính năng mới           |
| fix      | Sửa lỗi                      |
| refactor | Tái cấu trúc code            |
| test     | Thêm/chỉnh sửa test          |
| docs     | Cập nhật tài liệu            |
| style    | Format code, không đổi logic |
| chore    | Công việc bảo trì, config    |

---

## Checklist Setup Máy Mới

* Cài NVM và Node.js.
* Cấu hình Git.
* Tạo SSH Key.
* Add Public Key vào GitHub/GitLab/Azure DevOps.
* Clone source code.
* Chuyển sang đúng Node.js version bằng NVM.
* Cài dependencies.

```bash
npm install
```
