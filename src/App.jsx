import { BrowserRouter, Routes, Route } from "react-router-dom"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Cats from "./pages/Cats"

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/cats" element={<Cats />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App