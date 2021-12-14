import React from 'react'

// next imports
import Image from 'next/image'
import Link from 'next/link'

// images 
import goBack from '../../../public/arrow_goBack.svg'

import styles from '../server_components/styles/goBackButton.module.css'

const GoBackButton = () => {
  return (
    <div className={styles.goBack__full}>
      <Image src={goBack} alt='goBack' />
      <a className={styles.links_learnMore}><Link href="/">See other demos</Link></a>
    </div>
  )
}

export default GoBackButton
