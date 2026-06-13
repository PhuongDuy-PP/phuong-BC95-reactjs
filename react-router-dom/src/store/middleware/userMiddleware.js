const userMiddleware = (store) => (next) => (action) => {
    // B1: kiểm tra action đang được dispatch
    // middleware này chỉ nhận action user/login và user/logout
    switch (action.type) {
        case 'user/login':
            // lưu thông tin user vào localStorage
            localStorage.setItem('user', JSON.stringify(action.payload))
            break
        case 'user/logout':
            // xóa thông tin user khỏi localStorage
            localStorage.removeItem('user')
            break
        default:
            // các action khác không làm gì cả
            break
    }
    // B2: gửi action đến middleware tiếp theo hoặc reducer
    next(action)
}
export default userMiddleware;