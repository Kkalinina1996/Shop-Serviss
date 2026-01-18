import React from 'react'
import { useCart } from '../../context/cartContext'
import styles from './ProductCard.module.css'
import nikeAir from '../../assets/nike air.svg'

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className={styles.card}>
      <img
        src={nikeAir}
        alt={product.name}
        className={styles.image}
      />

      <h3 className={styles.title}>{product.name}</h3>

      <p className={styles.price}>
        <span>Цена:</span> {product.price}€ .
      </p>

      <button
        className={styles.button}
        onClick={handleAddToCart}
      >
        +
      </button>
    </div>
  )
}

export default ProductCard
