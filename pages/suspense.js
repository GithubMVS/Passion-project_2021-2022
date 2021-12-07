import React from 'react'
import styles from './suspense.module.css'

import Nav from '../components/index/Navigation'
import Link from 'next/link'
import Image from 'next/image'

const Suspense = () => {
  return (
    <div className={styles.fullExplenation}>
      <div className={styles.header}>
        <Nav />
        <div className={styles.headerInfo}>
          <h1 className={styles.headerInfo_title}>Suspense</h1>
          <p className={styles.headerInfo_text}>Dit is een korte uitleg daarvan om een idee te krijgen, kan ook quote zijn.</p>
          <Link href="/demos/suspense/demo"><a className={styles.links_toDemo}>Try out demo</a></Link>
        </div>
      </div>

      <article className={styles.explenation}>

      </article>
    </div>
  )
}

export default Suspense
