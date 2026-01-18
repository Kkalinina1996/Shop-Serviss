import Facebook from '../../assets/Facebook.svg'
import Snapchat from '../../assets/Snapchat.svg'
import X_icon from '../../assets/x_icon.jpeg.svg'
import styles from './Contacts.module.css'

function Contacts() {
  return (
    <section className={styles.contacts}>
      <h1 className={styles.title}>Контакты</h1>

      <div className={styles.wrapper}>
        {/* ЛЕВАЯ ЧАСТЬ */}
        <div className={styles.left}>
          <p className={styles.phone}>8 800 000 00 00</p>
          <p className={styles.email}>emailexample@email.com</p>

          <form className={styles.form}>
            <div className={styles.inputs}>
              <input
                type="email"
                placeholder="Ваш email"
                className={styles.input}
              />
              <input
                type="text"
                placeholder="Ваше имя"
                className={styles.input}
              />
            </div>

            <textarea
              placeholder="Введите сообщение"
              className={styles.textarea}
            />

            <button type="submit" className={styles.button}>
              Отправить
            </button>
          </form>
        </div>

        {/* ПРАВАЯ ЧАСТЬ */}
        <div className={styles.findUs}>
          <p>Найдите нас:</p>
          <div className={styles.socials}>
            
            <img src={Facebook} alt="Facebook" />
            <img src={Snapchat} alt="Snapchat" />
            <img src={X_icon} alt="x_icon" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
