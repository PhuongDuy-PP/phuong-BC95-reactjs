import React from 'react'

const MovieListPage = () => {
    return (
        <div className="min-h-screen bg-gray-950 text-white">
            {/* Hero Banner */}
            <div className="bg-gradient-to-b from-gray-900 to-gray-950 py-16 px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Danh sách <span className="text-yellow-400">Phim</span>
                </h1>
                <p className="text-gray-400 text-lg mb-8">Khám phá hàng trăm bộ phim hấp dẫn</p>
                {/* Search Bar */}
                <div className="max-w-lg mx-auto relative">
                    <input type="text" placeholder="Tìm kiếm tên phim..." className="w-full bg-gray-800 text-white placeholder-gray-400 border border-gray-700 rounded-full px-6 py-3 pr-12 outline-none focus:ring-2 focus:ring-yellow-400 transition-all" />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl">🔍</span>
                </div>
            </div>
            {/* Movie Grid */}
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Loading State */}
                {/*
<div class="flex items-center justify-center py-20">
  <div class="w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
</div>
*/}
                {/* Error State */}
                {/*
<div class="text-center py-20">
  <p class="text-red-400 text-xl mb-2">Đã xảy ra lỗi!</p>
  <p class="text-gray-500">Network Error</p>
</div>
*/}
                {/* Count */}
                <p className="text-gray-400 mb-6">
                    Hiển thị <span className="text-yellow-400 font-medium">10</span> phim
                </p>
                {/* Grid Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {/* ============================================================
       MOVIE CARD COMPONENT (lặp lại cho mỗi phim)
       File React: src/components/MovieCard.jsx
  ============================================================ */}
                    {/* Card 1: hot + dangChieu + sapChieu */}
                    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-400/20 hover:scale-105 transition-all duration-300 group">
                        <div className="relative overflow-hidden">
                            <img src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg" alt="Lật mặt 48h" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                            {/* Badges: chỉ render badge nào = true */}
                            <div className="absolute top-2 right-2 flex flex-col gap-1">
                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">HOT</span>
                                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">Đang chiếu</span>
                                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">Sắp chiếu</span>
                            </div>
                            {/* Rating */}
                            <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-lg">
                                <span className="text-yellow-400 text-sm">⭐</span>
                                <span className="text-white text-sm font-medium">10/10</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-white font-semibold text-lg mb-1 truncate">Lật mặt 48h</h3>
                            <p className="text-gray-400 text-sm mb-3">10/10/2024</p>
                            <a href="movie-detail.html" className="block text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 rounded-lg transition-colors">
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                    {/* Card 2: chỉ dangChieu */}
                    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-400/20 hover:scale-105 transition-all duration-300 group">
                        <div className="relative overflow-hidden">
                            <img src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg" alt="Phim 2" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute top-2 right-2 flex flex-col gap-1">
                                <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">Đang chiếu</span>
                            </div>
                            <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-lg">
                                <span className="text-yellow-400 text-sm">⭐</span>
                                <span className="text-white text-sm font-medium">8/10</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-white font-semibold text-lg mb-1 truncate">Tên phim dài hơn một chút</h3>
                            <p className="text-gray-400 text-sm mb-3">15/11/2024</p>
                            <a href="movie-detail.html" className="block text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 rounded-lg transition-colors">
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                    {/* Card 3: chỉ sapChieu */}
                    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-400/20 hover:scale-105 transition-all duration-300 group">
                        <div className="relative overflow-hidden">
                            <img src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg" alt="Phim 3" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute top-2 right-2 flex flex-col gap-1">
                                <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">Sắp chiếu</span>
                            </div>
                            <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-lg">
                                <span className="text-yellow-400 text-sm">⭐</span>
                                <span className="text-white text-sm font-medium">7/10</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-white font-semibold text-lg mb-1 truncate">Phim Sắp Chiếu</h3>
                            <p className="text-gray-400 text-sm mb-3">01/01/2025</p>
                            <a href="movie-detail.html" className="block text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 rounded-lg transition-colors">
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-400/20 hover:scale-105 transition-all duration-300 group">
                        <div className="relative overflow-hidden">
                            <img src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg" alt="Phim 4" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-lg">
                                <span className="text-yellow-400 text-sm">⭐</span>
                                <span className="text-white text-sm font-medium">9/10</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-white font-semibold text-lg mb-1 truncate">Phim Không Badge</h3>
                            <p className="text-gray-400 text-sm mb-3">Chưa xác định</p>
                            <a href="movie-detail.html" className="block text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 rounded-lg transition-colors">
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                    {/* Card 5: HOT */}
                    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-400/20 hover:scale-105 transition-all duration-300 group">
                        <div className="relative overflow-hidden">
                            <img src="https://movienew.cybersoft.edu.vn/hinhanh/lat-mat-48h_gp01.jpg" alt="Phim 5" className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                            <div className="absolute top-2 right-2 flex flex-col gap-1">
                                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">HOT</span>
                            </div>
                            <div className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/70 px-2 py-1 rounded-lg">
                                <span className="text-yellow-400 text-sm">⭐</span>
                                <span className="text-white text-sm font-medium">6/10</span>
                            </div>
                        </div>
                        <div className="p-4">
                            <h3 className="text-white font-semibold text-lg mb-1 truncate">Phim Đang Hot</h3>
                            <p className="text-gray-400 text-sm mb-3">20/08/2024</p>
                            <a href="movie-detail.html" className="block text-center bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium py-2 rounded-lg transition-colors">
                                Xem chi tiết
                            </a>
                        </div>
                    </div>
                </div>{/* end grid */}
                {/* Empty State (khi tìm kiếm không có kết quả) */}
                {/*
<div class="text-center py-20">
  <p class="text-gray-400 text-xl">Không tìm thấy phim nào</p>
</div>
*/}
            </div>
        </div>

    )
}

export default MovieListPage
