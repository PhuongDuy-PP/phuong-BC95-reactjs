import React from 'react'

const Header = () => {
    return (
        <header className="bg-gray-900 text-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <a href="/" className="text-2xl font-bold text-yellow-400 tracking-wide">🎬 MovieApp</a>
                <nav className="flex items-center gap-6">
                    <a href="/" className="hover:text-yellow-400 transition-colors">Trang chủ</a>
                    {/* State: chưa đăng nhập */}
                    <a href="login.html" className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Đăng nhập
                    </a>
                    {/* State: đã đăng nhập — thay thế block trên */}
                    {/*
  <span class="text-sm text-gray-300">Xin chào, <span class="text-yellow-400 font-medium">username</span></span>
  <button class="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors text-white">Đăng xuất</button>
  */}
                </nav>
            </div>
        </header>

    )
}

export default Header
