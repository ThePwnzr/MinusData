import './App.css'
import { BrowserRouter, HashRouter, Link, Route, Routes } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Attributes from './pages/Attributes'
import Header from './components/header'
import CharDetails from './components/CharDetails'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/attributes" element={<Attributes />} />
          <Route path="/details">
            <Route path=":char" element={<CharDetails />} />
          </Route>
        </Routes>
      </HashRouter >
    </div >
  )
}

export default App
