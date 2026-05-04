import {useState} from 'react'

function App() {
  // tham số 1: state: nơi chứa giá trị của biến
  // tham số 2: setState: hàm để thay đổi giá trị của state => render lại UI
  const [number, setNumber] = useState(0)

  // binding data

  // C1: define function riêng để thay đổi state
  const handleIncrease = () => {
    // LƯU Ý: KHÔNG NÊN GÁN TRỰC TIẾP CHO STATE
    // VÌ KHI GÁN TRỰC TIẾP CHO STATE THÌ UI SẼ KHÔNG RENDER LẠI
    // number = number + 1
    // muốn render lại UI thì phải gọi hàm setState để thay đổi giá trị của state
    setNumber(number + 1)
  }

  return (
    <>
      {/* nơi chứa con số: state */}
      <h1 className="text-4xl font-bold mb-10">{number}</h1>

      {/* button + - */}
      <div className="flex gap-3">
        <button
          className="bg-blue-300 hover:bg-blue-500 rounded px-3 py-2 text-white"
          onClick={
            // LƯU Ý: CHỈ KHI CLICK VÀO BUTTON THÌ MỚI GỌI HÀM
            // => KHÔNG CÓ DẤU () SAU TÊN HÀM
            handleIncrease
            // define function để thay đổi state

            // CÁCH 2: define function trực tiếp bên trong onClick
            // () => setNumber(number + 1)
          }
        >+</button>
        <button
          className="bg-red-300 hover:bg-red-500 rounded px-3 py-2 text-white"
          onClick={() => setNumber(number - 1)}
        >-</button>
        <button
          className='bg-green-400 hover:bg-green-700 rounded px-3 py-2 text-white'
          onClick={() => setNumber(0)}
        >Reset</button>
      </div>
      
    </>
  )
}

export default App
