import React from 'react'
import styles from './Footer.module.css'
import FacebookLogo from '../../assets/facebooklogo.svg'
import TwitterLogo from '../../assets/twitterlogo.svg'
import InstagramLogo from '../../assets/instagramlogo.svg'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <p>Контакты</p>

        <div className={styles.number}>
          8 800 000 00 00
          <br />
          <br />
          emailexample@email.com
        </div>

        <div className={styles.rights}>
          2024 Сникер магазин. Все права защищены
        </div>
      </div>

      <div className={styles.footerRight}>
        <div className={styles.socialMedia}>
          <a href="link.domain">
            <img src={FacebookLogo} alt="Facebook" />
          </a>
          <a href="link.domain">
            <img src={TwitterLogo} alt="Twitter" />
          </a>
          <a href="link.domain">
            <img src={InstagramLogo} alt="Instagram" />
          </a>
        </div>

        <input
          className={styles.input}
          placeholder="Введите свой email:"
          type="email"
        />
      </div>
    </footer>
  )
}

export default Footer
