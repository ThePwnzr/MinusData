import './App.css'
import { Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home/Home.jsx'
import Attributes from './pages/Attributes/Attributes.jsx'
import CharDetails from './pages/CharDetails/CharDetails.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

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
