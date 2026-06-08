import { Navigate } from "react-router-dom"

const GuestRoute = ({ children }) => {
    // lấy thông tin user từ localStorage
    const user = JSON.parse(localStorage.getItem('user'))

    if(user) {
        return <Navigate to="/" />
    }

    // chưa login => cho vào page login hoặc register
    return children
}

export default GuestRoute