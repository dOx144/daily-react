import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './pages/Home'
import Product from "./pages/Product"
import Container from "./pages/Container"
import Twprac from "./pages/Twprac"
import Nopage from "./pages/Nopage"
import PracPage from "./pages/PracPage"

function App() {

  return (
    <BrowserRouter>

      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>}/>
        <Route path="/container" element={<Container/>}/>
        <Route path='/twprac' element={<Twprac/>}/>
        <Route path="/pageprac" element={<PracPage/>}/>
        <Route path="*" element={<Nopage/>}/>
      </Routes>

    </BrowserRouter>
  )
}

export default App
