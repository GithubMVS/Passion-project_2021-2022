import Link from 'next/link'
import Image from 'next/image'
import styles from '../suspense/demo.module.css'
import { Suspense } from 'react'

import goBack from '../../../public/arrow_goBack.svg'

import FetchComments from '../../../components/demos/Suspense/FetchComments'

const Demo = () => {
  return (
    <div className={styles.suspenseDemo_full}>
      <div className={styles.goBack__full}>
        <Image src={goBack} alt='goBack' />
        <Link href="/allDemos"><a className={styles.links_learnMore}>See other demos</a></Link>
      </div>

      <div className={styles.suspenseDemo_full_article}>
        <div>
          <h1 className={styles.article_title}>Streaming html with Suspense (showed with a demo)</h1>
          <Image src={goBack} alt='goBack' />
          <p className={styles.explenationText}>Hier komt de uitleg van hoe suspense werkt en wat het concreet is</p>
          <div className={styles.why_group_full}>
            <div className={styles.why_group}>
              <h1 className={styles.why_group_title}>Why this example?</h1>
              <p className={styles.why_group_text}>This new approach to rendering the website per component level gives us a more efficient way to cache content and stream data as it flows rather that render it after some period of time all.</p>
            </div>
            <div className={styles.why_group}>
              <h1 className={styles.why_group_title}>Why this example?</h1>
              <p className={styles.why_group_text}>This new approach to rendering the website per component level gives us a more efficient way to cache content and stream data as it flows rather that render it after some period of time all.</p>
            </div>
          </div>
        </div>

        <div className={styles.commentData_full}>
          <h1 className={styles.commentData_full_title}>Comments on this article</h1>
          <div className={styles.commentData_full_comments}>
            <Suspense fallback={<h1>loading comments</h1>}>
              <FetchComments />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Demo
