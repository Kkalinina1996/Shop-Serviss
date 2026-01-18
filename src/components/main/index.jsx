import React, { useEffect, useState } from 'react'
import axios from 'axios'
import News from '../news'
import ProductCard from '../productCard'
import styles from './main.module.css'

const API_URL = 'https://696d057cf4a79b31518056a3.mockapi.io/productData'

const Main = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(API_URL)
        setProducts(response.data)
      } catch (error) {
        console.error('Ошибка при получении товаров:', error)
      }
    }

    fetchProducts()
  }, [])

  return (
    <main className={styles.main}>
      <News />

      <h2 className={styles.title}>Catalog</h2>

      <div className={styles.products}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}

export default Main
