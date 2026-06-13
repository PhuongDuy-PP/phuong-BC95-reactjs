// LÝ THUYẾT MIDDLEWARE REDUX
// là 1 phần trong redux
// - can thiệp vào quá trình dispatch (push action vào store)
// - có thể làm gì đó trước khi action được gửi đến reducer
// case thường dùng middlewar: log action (sau này dễ debug nếu có lỗi),
// gọi API (ít dùng, thường tanstack query làm việc này)
// kiểm tra quyền truy cập vào state (vào page login, cần những action mà 
// phải token mới truy cập được)

const loggerMiddleware = (store) => (next) => (action) => {
    // store: truy cập vào state hiện tại của store
    // next: hàm để gửi action đến middleware tiếp theo hoặc reducer
    // action: action đang được dispatch

    // log thông tin action
    console.log('Dispatching action:', action);
    console.log('Current state before action:', store.getState());
    console.log('payload: ', action.payload)

    // gửi action đến middleware tiếp theo hoặc reducer
    next(action)
}

export default loggerMiddleware;