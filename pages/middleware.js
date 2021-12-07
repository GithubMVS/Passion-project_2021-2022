import React from 'react'
import styles from './middleware.module.css'

import Nav from '../components/index/Navigation'
import Link from 'next/link'
import Image from 'next/image'

// image imports
import step_1_url_imports from '../public/url_imports/explenation/step_1_url_imports.png'
import step_3_url_imports from '../public/url_imports/explenation/step_3_url_imports.png'
import step_4_url_imports from '../public/url_imports/explenation/step_4_url_imports.png'
import step_4_1_url_imports from '../public/url_imports/explenation/step_4_1_url_imports.png'
import step_4_2_url_imports from '../public/url_imports/explenation/step_4_2_url_imports.png'
import framer_step_1 from '../public/url_imports/explenation/framer_step_1.png'
import framer_step_2 from '../public/url_imports/explenation/framer_step_2.png'
import framer_step_3 from '../public/url_imports/explenation/framer_step_3.png'
import framer_step_4 from '../public/url_imports/explenation/framer_step_4.png'
import framer_step_4_1 from '../public/url_imports/explenation/framer_step_4_1.png'
import framer_step_5 from '../public/url_imports/explenation/framer_step_5.png'
import framer_step_6 from '../public/url_imports/explenation/framer_step_6.png'
import framer_step_6_1 from '../public/url_imports/explenation/framer_step_6_1.png'


const middleware = () => {
  return (
    <div className={styles.fullExplenation}>
      <div className={styles.header}>
        <Nav />
        <div className={styles.headerInfo}>
          <h1 className={styles.headerInfo_title}>URL-imports</h1>
          <p className={styles.headerInfo_text}>Dit is een korte uitleg daarvan om een idee te krijgen, kan ook quote zijn.</p>
          <Link href="/demos/middleware_demo"><a className={styles.links_toDemo}>Try out demo</a></Link>
        </div>
      </div>

      <div className={styles.explenation}>
        <div className={styles.oneXtwo}>
          <div className={styles.titleWithText}>
            <h1 className={styles.title}>So what are url imports?</h1>
            <p className={styles.text}>NextJs now natively supports ES modules enabling the industry to transition away from CommonJs module system, but it also introduces such thing as URL imports. You can now easily import 3rd party libraries without installing it through npm. dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
          </div>
          <div className={styles.titleWithText}>
            <h1 className={styles.title}>Why is it great? (or not)</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default middleware
