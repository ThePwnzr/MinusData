import './App.css'
import { Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Attributes from './pages/Attributes'
import Header from './components/header'
import CharDetails from './components/CharDetails'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/attributes" element={<Attributes />} />
        <Route path="/details">
          <Route path=":char" element={<CharDetails />} />
        </Route>
      </Routes>
      <div className="footer color-white text-center">
        <p>Website by Sammi Husky - Maintained by ThePwnzr</p>
      </div>
    </div >
  )
}

export default App
