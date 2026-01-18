import React from 'react'
import styles from './News.module.css'
import banner from '../../assets/Banner.svg'

function News() {
  return (
    <section className={styles.news}>
      <img src={banner} alt="news" className={styles.image}></img>
    </section>
  )
}
export default News
