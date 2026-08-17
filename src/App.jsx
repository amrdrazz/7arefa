import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Play from "./pages/Play"
import HowToPlay from "./pages/HowToPlay"
import GuessGame from "./pages/GuessGame"
import ClashGame from "./pages/ClashGame"
import Footer from "./components/Footer"
import About from "./pages/About"

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/play" element={<Play />} />
        <Route path="/play/guess" element={<GuessGame />} />
        <Route path="/play/clash" element={<ClashGame />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
