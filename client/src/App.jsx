import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Nopage from "./pages/Nopage"
import Pokemon from "./pages/Pokemon"
import Weather from "./pages/Weather"
import Food from "./pages/Food"
import Blogs from "./pages/Blogs"
import Blog from "./pages/Blog"
import './index.css'
import NoBlogs from "./pages/NoBlogs"
import Dota from "./pages/Dota"
import DotaHero from "./pages/DotaHero"

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route index path="/" element={<Home/>} />

        {/* future project */}
        <Route path="/pokemon" element={<Pokemon/>}/>

        <Route path="/dota" element={<Dota/>} />
        <Route path="/dota/:id" element={<DotaHero/>}/>

        <Route path="/weather" element={<Weather/>}/>
        
        {/* on going  */}
        <Route path='/food' element={<Food/>}/>

        {/* on going */}
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:id" element={<Blog />} />
        <Route pathh="/blogs/*" element = {<NoBlogs/>} />

        <Route path="*" element={<Nopage/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
