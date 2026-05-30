import React from 'react'

// Flow:
// nếu chưa đăng nhập => redirect về trang login
// nếu đã đăng nhập => kiểm tra role. nếu role là admin => truy cập
// nếu role không phải admin => redirect về trang home hoặc hiển thị thông báo không có quyền truy cập
// react router dom => tạo protected route

const AdminLayout = () => {
  return (
    <div>
      <h1>Admin Panel</h1>
    </div>
  )
}

export default AdminLayout
