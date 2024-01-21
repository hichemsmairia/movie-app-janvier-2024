import './App.css'
import AddMovie from './components/views/AddMovieMulter'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import { Routes, Route } from 'react-router-dom'
import MovieList from './components/views/MovieList'
import Login from './components/views/Login'
import Register from './components/views/Register'

import OnlineMovies from './components/views/OnlineMovies'
function App() {

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}> <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/add_movie' element={<AddMovie />} />
          <Route path='/movies_list' element={<MovieList />} />
          <Route path='/online_movies' element={<OnlineMovies />} />
        </Routes> </main>
      <Footer />

    </div>
  )
}

export default App
