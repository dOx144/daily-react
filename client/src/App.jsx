import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Product from "./pages/Product"
import Container from "./pages/Container"
import Twprac from "./pages/Twprac"
import Nopage from "./pages/Nopage"
import PracPage from "./pages/PracPage"
import Pokemon from "./pages/Pokemon"
import Weather from "./pages/Weather"
import Food from "./pages/Food"
import Blogs from "./pages/Blogs"
import Blog from "./pages/Blog"
import './index.css'
import Socials from "./components/Socials"
import NoBlogs from "./pages/NoBlogs"
import Dota from "./pages/Dota"

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route index path="/" element={<Home/>} />

        <Route path="/product" element={<Product/>}/>
        
        <Route path="/container" element={<Container/>}/>

        <Route path="/pokemon" element={<Pokemon/>}/>
        <Route path="/dota" element={<Dota/>} />

        <Route path="/weather" element={<Weather/>}/>
        
        <Route path='/food' element={<Food/>}/>

        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/blogs/:id" element={<Blog />} />
        <Route pathh="/blogs/*" element = {<NoBlogs/>} />


        <Route path='/twprac' element={<Twprac/>}/>
        <Route path="/pageprac" element={<PracPage/>}/>

        <Route path="*" element={<Nopage/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
