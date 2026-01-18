import { useCart } from '../../context/cartContext'
import CartCard from '../cartCard'

import styles from './Cart.module.css'

function Cart() {
  const { cartItems, totalPrice } = useCart()

  return (
    <div className={styles.cartPage}>
      <h1>Корзина</h1>
      <br />
      <br />

      <div className={styles.content}>
        <div className={styles.items}>
          {cartItems.length === 0 ? (
            <p>Корзина пустая</p>
          ) : (
            cartItems.map((item) => <CartCard key={item.id} item={item} />)
          )}
        </div>

        <div className={styles.summary}>
          <h3>Итого</h3>

          <div className={styles.list}>
            {cartItems.map((item) => (
              <div key={item.id} className={styles.row}>
                {item.name}
              </div>
            ))}
          </div>

          <hr />

          <div className={styles.total}>
            <span>Цена:</span>
            <b>{totalPrice} €</b>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
