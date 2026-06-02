

# Git - Undo Things

## 1. Sửa commit message

### Sửa commit gần nhất

```bash
git commit --amend -m "feat: add feature"
```

### Sửa commit cũ hơn

* Có thể thực hiện bằng `rebase`
* Sẽ học ở bài sau
* Nên thực hành trên repo riêng vì dễ gây lỗi

---

## 2. Un-stage File

Chuyển file từ:

```text
Staging Area → Working Directory
```

### Un-stage một file

```bash
git restore --staged <file>
```

### Un-stage tất cả file

```bash
git restore --staged .
```

> Lưu ý dấu `.` ở cuối.

---

## 3. Un-commit

### Repository → Staging

Giữ nguyên nội dung đã stage:

```bash
git reset --soft HEAD~1
```

### Repository → Working Directory

Bỏ commit và bỏ stage:

```bash
git reset HEAD~1
```

### Lưu ý

Commit đầu tiên không thể reset bằng cách trên.

Nếu muốn reset hoàn toàn:

```bash
rm -rf .git
git init
```

---

# Git - Branching

## Mục đích của Branch

Branch giúp:

* Phát triển tính năng mới mà không ảnh hưởng code ổn định
* Nhiều người làm việc song song
* Thử nghiệm tính năng mới
* Xóa branch nếu thử nghiệm thất bại

---

## Bản chất của Branch

Branch không copy source code.

Branch chỉ là một pointer trỏ tới commit hiện tại.


## Các lệnh Branch

### Xem danh sách branch

```bash
git branch
```

> Cần có ít nhất 1 commit.

### Tạo branch

```bash
git branch feature/login
```

### Chuyển branch

```bash
git checkout feature/login
```

### Tạo và chuyển branch

```bash
git checkout -b feature/login
```

### Xóa branch

```bash
git branch -D feature/login
```

> Phải đứng ở branch khác trước khi xóa.

### Push branch lên remote

```bash
git push origin feature/login
```

### Xóa branch trên remote

```bash
git push -D origin feature/login
```

---

# Git - .gitignore

## Mục đích

Loại bỏ các file không cần đưa lên repository:

* File hệ điều hành
* Dependency
* Build artifacts
* File cấu hình cá nhân
* File chứa credentials
* Log files

---





