import React from 'react'

const LoginPage = () => {
    return (
        <div>
            <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">
                <div className="w-full max-w-md">
                    {/* Logo */}
                    <div className="text-center mb-8">
                        <a href="/" className="text-3xl font-bold text-yellow-400">🎬 MovieApp</a>
                        <p className="text-gray-400 mt-2">Đăng nhập để tiếp tục</p>
                    </div>
                    {/* Form Card */}
                    <div className="bg-gray-800 rounded-2xl shadow-2xl p-8">
                        <h2 className="text-white text-2xl font-bold mb-6">Đăng nhập</h2>
                        <form noValidate>
                            {/* Email Field */}
                            <div className="mb-5">
                                <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
                                {/* State: normal */}
                                <input type="email" placeholder="example@email.com" className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 transition-all" />
                                {/* State: error — thêm border-red-500, bỏ border-gray-600 */}
                                {/* <input class="w-full bg-gray-700 text-white placeholder-gray-400 border border-red-500 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400" /> */}
                                {/* Error message — hiện khi có lỗi */}
                                {/* <p class="text-red-400 text-sm mt-1">Email không được để trống</p> */}
                            </div>
                            {/* Password Field */}
                            <div className="mb-6">
                                <label className="block text-gray-300 text-sm font-medium mb-2">Mật khẩu</label>
                                <input type="password" placeholder="••••••••" className="w-full bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-yellow-400 transition-all" />
                                {/* <p class="text-red-400 text-sm mt-1">Mật khẩu phải có ít nhất 6 ký tự</p> */}
                            </div>
                            {/* Submit Button: State normal */}
                            <button type="submit" className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">
                                Đăng nhập
                            </button>
                            {/* Submit Button: State loading */}
                            {/*
    <button disabled class="w-full bg-yellow-700 text-gray-900 font-bold py-3 rounded-lg flex items-center justify-center gap-2">
      <div class="w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
      Đang đăng nhập...
    </button>
    */}
                        </form>
                        <p className="text-center text-gray-400 text-sm mt-6">
                            Chưa có tài khoản?
                            <a href="/" className="text-yellow-400 hover:underline">Khám phá phim ngay</a>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage
