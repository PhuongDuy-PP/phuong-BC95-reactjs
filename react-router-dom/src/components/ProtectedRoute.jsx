// giả lập tình huống: lưu user info vào localStorage
// có value => hiển thị admin route
// không có value => ẩn admin route, nếu user cố tình truy cập vào /admin
// => redirect về trang login

import { Navigate } from "react-router-dom"

const ProtectedRoute = ({ children, requiredRole }) => {
    // requiredRole: props được truyền về từ App.jsx (user tự define)
    // children là tên tham số bắt buộc, không được đổi tên (chính react dom định nghĩa)

    // lấy thông tin user từ localStorage
    const user = JSON.parse(localStorage.getItem('user'))
    
    // nếu không có user => redirect về trang login
    if (!user) {
        return <Navigate to="/login" />
    }

    // kiểm tra role của user
    if(requiredRole && user.role !== requiredRole) {
        return <Navigate to="/login" />
    }

    return children

}

export default ProtectedRoute