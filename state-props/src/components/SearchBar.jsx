import React, { useState } from 'react'

const SearchBar = ({onSearch}) => {
  // state change keyword: lưu giá trị input
  const [inputValue, setInputValue] = useState('')

  // kiểm tra xem user có đang gõ hay không,
  // nếu dừng gõ khoảng 2s => filter data
  let timeoutId = null
  const handleChange = (event) => {
    const value = event.target.value
    setInputValue(value)
    
    // mỗi lần user gõ thì clear timeout cũ đi
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    // thiết lập timeout mới
    timeoutId = setTimeout(() => {
      // gửi event filter data lên component cha (App) để filter data
      // onSearch là event (function) component con gửi lên component cha
      onSearch(value.trim())
    }, 2000)
  }
  return (
    <div className="mb-6">
      <div className="relative">
        {/* Icon kính lúp */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
          <i className="fa-solid fa-magnifying-glass" />
        </div>

        {/* Input — onChange gọi handleChange mỗi khi user gõ */}
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Tìm kiếm sản phẩm..."
          className="w-full pl-12 pr-12 py-3 rounded-2xl border-2 border-gray-200 bg-white
            text-gray-800 placeholder-gray-400 text-sm
            focus:outline-none focus:border-blue-400 transition-colors"
        />

        {/* Bên phải: spinner khi đang chờ, nút X khi có text */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2">
          
        </div>
      </div>

      {/* Dòng trạng thái */}
      <div className="mt-2 h-4 px-1">
          <p className="text-xs text-blue-400">Đang tìm kiếm sau 2 giây...</p>
      </div>
    </div>
  )
}

export default SearchBar
