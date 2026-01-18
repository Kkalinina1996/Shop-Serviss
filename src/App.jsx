import Header from './components/header'
import Footer from './components/footer'
import { Routes, Route } from 'react-router-dom'
import Main from './components/main'
import Cart from './components/cart'
import Contacts from './components/contacts'
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
