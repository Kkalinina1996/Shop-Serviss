import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Сникер - магазин</h1>

      <nav className={styles.nav}>
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#FFFFFF80',
          })}
        >
          Главная
        </NavLink>

        <NavLink
          to="/cart"
          style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#FFFFFF80',
          })}
        >
          Корзина
        </NavLink>

        <NavLink
          to="/contacts"
          style={({ isActive }) => ({
            color: isActive ? '#FFFFFF' : '#FFFFFF80',
          })}
        >
          Контакты
        </NavLink>
      </nav>
    </header>
  )
}

export default Header
