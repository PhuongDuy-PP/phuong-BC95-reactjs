import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import HomeLayout from "./Layout/HomeLayout"
import MovieListPage from "./pages/MovieListPage"
import MovieDetailPage from "./pages/MovieDetailPage"
import NotFoundPage from "./pages/NotFoundPage"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<MovieListPage />} />
          <Route path="movie" element={<MovieListPage />} />
          <Route path="movie/:id" element={<MovieDetailPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
