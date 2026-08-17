import { Route, Routes } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./pages/Home"
import Play from "./pages/Play"
import HowToPlay from "./pages/HowToPlay"
import GuessGame from "./pages/GuessGame"
import ClashGame from "./pages/ClashGame"

function App() {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/play/guess" element={<GuessGame />} />
        <Route path="/play/clash" element={<ClashGame />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
      </Routes>
    </>
  )
}

export default App
