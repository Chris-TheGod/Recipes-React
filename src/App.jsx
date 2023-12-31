import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/home/Home'
import { Create } from './pages/create/Create'
import { Search } from './pages/search/Search'
import { Recipe } from './pages/recipe/Recipe'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />

          <Route exact path='/create' element={<Create />} />

          <Route exact path='/search' element={<Search />} />

          <Route exact path='/recipes/:id' element={<Recipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
