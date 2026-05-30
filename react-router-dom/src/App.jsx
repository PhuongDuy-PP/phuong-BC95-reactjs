import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import MainLayout from './layouts/MainLayout'
import Products from './pages/Products'
import About from './pages/About'
import Profile from './pages/Profile'
import NotFound from './pages/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import AdminLayout from './layouts/AdminLayout'



// LƯU Ý:
// App này sẽ chỉ define các router
// VD: /home => HomePage, /about => AboutPage, /login => LoginPage,...
// trang Home mà có Header, Footer dùng chung, body sẽ đổi tuy vào component => Layout
// VD: MainLayout, AdminLayout

// http://localhost:3000/login => LoginPage
// BrowserRouter hỗ trợ việc chuyển trang mà không cần load lại trang
// Routes: định nghĩa các route của website
function App() {
  return (
    <BrowserRouter>
     <Routes>
      {/* trong này sẽ liệt kê các router của các page */}
      

      {/* lý thuyết 1: nested routes */}

      <Route path='/' element={<MainLayout />}>
        <Route path='product' element={<Products />} />
        <Route path='about' element={<About />} />
        <Route path='profile' element={<Profile />} />
      </Route>

      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />

      {/* endpoint Admin */}
      <Route 
        path='/admin'
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      
      />

      {/* nếu không khớp bất kỳ endpoint nào thì sẽ đi vào Route Not found */}
      {/* route này BẮT BUỘC phải để ở cuối */}
      <Route path='*' element={<NotFound />} />

      {/* lý thuyết 2: protected routes */}
     </Routes>
    </BrowserRouter>
  )
}

export default App
