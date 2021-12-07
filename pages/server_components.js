import styles from './server_components.module.css'

import Nav from '../components/index/Navigation'
import Link from 'next/link'
import Image from 'next/image'

// images here

const server_components = () => {

  return (
    <div className={styles.fullExplenation}>
      <div className={styles.header}>
        <Nav />
        <div className={styles.headerInfo}>
          <h1 className={styles.headerInfo_title}>Server Components</h1>
          <p className={styles.headerInfo_text}>Dit is een korte uitleg daarvan om een idee te krijgen, kan ook quote zijn.</p>
          <Link href="/demos/server_components/demo"><a className={styles.links_toDemo}>Try out demo</a></Link>
        </div>
      </div>

      <article className={styles.explenation}>
      </article>


    </div>
  )
}

export default server_components
