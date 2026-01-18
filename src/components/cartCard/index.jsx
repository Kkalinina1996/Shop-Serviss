import { useCart } from '../../context/cartContext'
import styles from './CartCard.module.css'


function CartItem({ item }) {
  const { deleteFromCart } = useCart()

  return (
    <div className={styles.item}>
      <img src={item.image} alt={item.name} />

      <div className={styles.info}>
        <p>{item.name}</p>
        <span>Цена:</span> <b>{item.price} €</b>
      </div>

      <button className={styles.delete} onClick={() => deleteFromCart(item.id)}>
        
      </button>
    </div>
  )
}

export default CartItem
