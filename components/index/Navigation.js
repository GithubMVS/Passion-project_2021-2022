import React from 'react'
import styles from '../index/navigation.module.css'
import Link from 'next/link'


const Navigation = () => {
  return (
    <nav className={styles.navigation_full}>
      <p className={styles.navigation_title}>NEXTJS<span className={styles.navigation_title_special}>12</span></p>
      <div className={styles.navigation_links}>
        <Link href="/"><a className={styles.navigation_links_each}>Home</a></Link>
        <Link href="/newFeatures"><a className={styles.navigation_links_each}>New features</a></Link>
        <Link href="/allDemos"><a className={styles.navigation_links_each}>Demos</a></Link>
      </div>
    </nav>
  )
}

export default Navigation
