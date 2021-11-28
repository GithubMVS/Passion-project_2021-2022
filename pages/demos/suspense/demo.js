import Link from 'next/link'
import Image from 'next/image'
import styles from '../suspense/demo.module.css'

import goBack from '../../../public/arrow_goBack.svg'

// importing axios via the new url imports
import axios from 'https://cdn.skypack.dev/axios';

const Demo = () => {
  return (
    <div className={styles.suspenseDemo_full}>
      <div className={styles.goBack__full}>
        <Image src={goBack} alt='goBack' />
        <Link href="/allDemos"><a className={styles.links_learnMore}>See other demos</a></Link>
      </div>

      <div className={styles.suspenseDemo_full_buttonsText}>
        <h1 className={styles.title}>Suspense for data fetching demo</h1>

        <div className={styles.button_group}>
          <Link href='/demos/suspense/demo/withSuspense'><a className={styles.button}>With suspense</a></Link>
          <Link href='/demos/suspense/demo/noSuspense'><a className={styles.button}>No suspense</a></Link>
        </div>
      </div>
    </div>
  )
};


export default Demo
