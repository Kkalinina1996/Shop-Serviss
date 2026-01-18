import { createContext, useContext, useEffect, useState } from 'react'
import axios from 'axios'

const CartContext = createContext()

const CART_URL = 'https://696d057cf4a79b31518056a3.mockapi.io/'

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])


  useEffect(() => {
    axios.get(CART_URL).then(res => setCartItems(res.data))
  }, [])


  const addToCart = async (product) => {
    const {  ...productWithoutId } = product

    const res = await axios.post(CART_URL, productWithoutId)
    setCartItems(prev => [...prev, res.data])
  };

  
  const deleteFromCart = async (id) => {
    await axios.delete(`${CART_URL}/${id}`)
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  // 💰 ОБЩАЯ ЦЕНА
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price),
    0
  )

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, deleteFromCart, totalPrice }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
