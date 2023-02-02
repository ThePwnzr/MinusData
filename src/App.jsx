import './App.css'
import { Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Attributes from './pages/Attributes'
import Header from './components/header'
import CharDetails from './components/CharDetails'
import Footer from './components/Footer'

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
      <Footer />
    </div >
  )
}

export default App
