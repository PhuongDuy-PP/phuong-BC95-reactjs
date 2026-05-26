
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import ProductCard from './components/ProductCard'
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail'
import { useEffect, useState } from 'react'
import axios from 'axios'

function App() {
  const API_URL = "https://69ca679fba5984c44bf31927.mockapi.io/api/v1/phone"
  // state
  // const products = [
  //   {id: 1, name: 'iPhone 14 Pro Max', price: 1099, category: 'Smartphone', image: "https://cdn.tgdd.vn/Products/Images/42/342667/s16/iphone-17-blue-thumb-650x650.png"},
  //   {id: 2, name: 'Samsung Galaxy S23 Ultra', price: 1199, category: 'Smartphone', image: "https://cdn.tgdd.vn/Products/Images/42/342667/s16/iphone-17-blue-thumb-650x650.png"},
  //   {id: 3, name: 'Google Pixel 7 Pro', price: 899, category: 'Smartphone', image: "https://cdn.tgdd.vn/Products/Images/42/342667/s16/iphone-17-blue-thumb-650x650.png"},
  //   {id: 4, name: 'OnePlus 11', price: 699, category: 'Smartphone', image: "https://cdn.tgdd.vn/Products/Images/42/342667/s16/iphone-17-blue-thumb-650x650.png"},
  // ]
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  // state chứa keyword tìm kiếm
  const [keyword, setKeyword] = useState('')

  // state chứa cart
  // {
  //   // key: productId, value: quantity
  //   2: 3,
  //   4: 1
  // }
  const [cart, setCart] = useState({})

  // state 3: state chứa logic đóng/mở cart
  const [isCartOpen, setIsCartOpen] = useState(false)

  // state 4: state chứa product detail: object hoặc null
  // null => đóng product detail
  const [detailProduct, setDetailProduct] = useState(null)


  // useEffect để call API lấy products
  // param 1: callback function chứa logic call API
  // param 2: dependency array
  // TH1: nếu để [] thì callback chỉ chạy 1 lần sau lần render đầu tiên
  // TH2: nếu để [keyword] thì callback sẽ chạy sau lần render đầu tiên và mỗi khi keyword thay đổi
  
  // CASE 1: call API
  useEffect(() => {
    // bật loading để hiển thị. spinner khi đang chờ API trả về
    setIsLoading(true)
    
    // call API
    axios.get(API_URL)
      .then((response)=>{
        // lấy dữ liệu thành công => response.data
        console.log("response", response)
        setProducts(response.data)
      })
      .catch(()=>{})
      .finally(() => {
        // tắt loading sau khi API trả về (thành công hoặc thất bại)
        setIsLoading(false)
      })
  }, [])

  // CASE 2: filter data theo keyword
  // useEffect(() => {
  //   // logic filter data theo keyword
  //   // nếu keyword rỗng => hiển thị tất cả products
  //   // nếu keyword không rỗng => hiển thị products có name chứa keyword
  // }, [keyword])
  useEffect(() => {
    // bật loading để hiển thị. dòng trạng thái khi đang chờ filter data
    setIsLoading(true)
    
    // logic filter data theo keyword
    // nếu keyword rỗng => hiển thị tất cả products
    if (keyword === '') {
      axios.get(API_URL)
        .then(() => {
          setIsLoading(true)
          axios.get(API_URL)
            .then((response) => {
              setProducts(response.data)
            })
            .catch(() => {})
            .finally(() => {
              setIsLoading(false)
            })
        })
      setProducts(products)
    }
    // nếu keyword không rỗng => truyền keyword vào API để call API
    else {
      const urlApiWithKeyword = `${API_URL}?name=${keyword}`
      axios.get(urlApiWithKeyword)
        .then((response) => {
          setProducts(response.data)
        })
        .catch(() => {})
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [keyword])

  // define event component con gửi lên component cha
  const handleOpenDetail = (product) => {
    setDetailProduct(product)
  }

  const handleCloseProductDetail = () => {
    setDetailProduct(null)
  }

  const handleSearch = (keyword) => {
    setKeyword(keyword)
  }

  const handleAddToCart = (productId) => {
    // tìm xem productId đã có trong cart chưa
    const currentQty = cart[productId] || 0

    // TH1: nếu productId đã có trong cart rồi thì tăng quantity lên 1
    // TH2: nếu productId chưa có trong cart thì thêm vào cart với quantity = 1
    // tham chiếu - tham trị
    // nếu key productId đã có trong cart => cập nhật quantity mới = currentQty + 1
    // nếu key productId chưa có trong cart => thêm key productId với quantity mới = 1
    const newCart = {
      ...cart, // copy tất cả key-value cũ qua ô nhớ mới
      [productId]: currentQty + 1 // cập nhật key productId với quantity mới
    }
    setCart(newCart)
  }

  // filter products theo keyword
    const filteredProducts = keyword === ''
    ? products
    : products.filter((product) => {
      // chuẩn hóa keyword và product.name về lowercase
      const lowerKeyword = keyword.toLowerCase()
      const lowerName = product.name.toLowerCase()

      // kiểm tra xem lowerName có chứa lowerKeyword hay không
      return lowerName.includes(lowerKeyword)
    })

    // tạo biến totalItems tính tổng số lượng sản phẩm trong cart
    // vì cart là object => object => array => reduce
    // trong javascript Object, class này giúp convert object => array
    // {key: value}
    // 1. lấy value => Object.values(cart) => [3, 1]
    // 2. lấy key => Object.keys(cart) => ['2', '4']
    const listQty = Object.values(cart) // [3, 1]
    const totalItems = listQty.reduce((sum, qty) => sum + qty, 0) // 4
    
    const handleOpenCart = () => {
      setIsCartOpen(true)
    }

    const handleCloseCart = () => {
      setIsCartOpen(false)
    }

  return (
    <>
      <div className='min-h-screen bg-gray-100 p-6'>
        <div className='max-w-5xl mx-auto'>
          <Header
            cartCount={totalItems}
            onOpenCart={handleOpenCart}
          />

          <SearchBar onSearch={(keyword) => handleSearch(keyword)} />

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {
              products.map((product) =>(
                <ProductCard
                  key={product.id}
                  product={product}
                  onOpenDetail={handleOpenDetail}
                />
              ))
            }
          </div>
          

          {/* popup */}
          <Cart
            isOpenCart={isCartOpen}
            cart={cart}
            products={products}
            onCloseCart={handleCloseCart}
          />

          <ProductDetail
            product={detailProduct}
            onCloseProductDetail={handleCloseProductDetail}
            onAddToCart={handleAddToCart}
          />

        </div>
      </div>
    </>
  )
}

export default App
