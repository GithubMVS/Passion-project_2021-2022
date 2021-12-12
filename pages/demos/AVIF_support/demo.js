import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../AVIF_support/demo.module.css'

// arrow image
import goBack from '../../../public/arrow_goBack.svg'

// AVIF image format:
import auto from '../../../public/AVIF_image_format/AVIF/auto.avif'
import bergen from '../../../public/AVIF_image_format/AVIF/bergen.avif'
import bloemen from '../../../public/AVIF_image_format/AVIF/bloemen.avif'
import brug from '../../../public/AVIF_image_format/AVIF/brug.avif'
import moeras from '../../../public/AVIF_image_format/AVIF/moeras.avif'
import paddenstoelen from '../../../public/AVIF_image_format/AVIF/paddenstoelen.avif'

const Demo = () => {
  return (
    <div className={styles.AVIF_format_full}>
      <div className={styles.goBack__full}>
        <Image src={goBack} alt='goBack' />
        <Link href="/allDemos"><a className={styles.links_learnMore}>See other demos</a></Link>
      </div>

      <div className={styles.AVIF_format_titleAndText}>
        <h1 className={styles.AVIF_format_full_title}>AVIF image format demo</h1>
        <p className={styles.AVIF_format_full_text}>This is a new image format now supported by nextJS12 that is 20% lighter than webP, really revelutionary. In this demo we will show you 6 4K images, and we’ll show how easy they render in because of how light they are. Now please check your browser because as of December 12th 2021, they are not supported in safari and older browser. Ofcours a fallback to webP and jpeg if needed. All images are from pexels.com</p>
      </div>
      <div className={styles.AVIF_format_full_images}>
        <Image src={auto} alt='auto' />
        <Image src={bergen} alt='bergen' />
        <Image src={bloemen} alt='bloemen' />
        <Image src={brug} alt='brug' />
        <Image src={moeras} alt='moeras' />
        <Image src={paddenstoelen} alt='paddenstoelen' />
      </div>

      <div className={styles.contribution}>
        <p className={styles.contribution_title}>Here is the contribution to the artists of the pictures from pexels (in order):</p>
        <ul className={styles.contribution_list}>
          <li className={styles.contribution_listEach}>Photo by Vlad Alexandru Popa from Pexels</li>
          <li className={styles.contribution_listEach}>Photo by Francesco Ungaro from Pexels</li>
          <li className={styles.contribution_listEach}>Photo by Irina Iriser from Pexels</li>
          <li className={styles.contribution_listEach}>Photo by Mohamed Almari from Pexels</li>
          <li className={styles.contribution_listEach}>Photo by Quang Nguyen Vinh from Pexels</li>
          <li className={styles.contribution_listEach}>Photo by Visually Us from Pexels</li>
        </ul>
      </div>

    </div>
  )
}

export default Demo
