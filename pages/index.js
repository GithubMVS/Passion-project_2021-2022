
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../pages/index.module.css'

// component imports
import Navigation from '../components/index/Navigation'
import Video from '../components/index/Video'




export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Passion Project</title>
        <meta name="description" content="Passion Project" />
      </Head>
      <main className={styles.homepage__full}>
        <header>
          <Navigation />
          <h1>A presentation on the future of the <span>evolution</span> of a fullstack framework.</h1>
          <div>
            <p>Discover my research</p>
            <p>replace with Image here</p>
          </div>
        </header>

        <section>
          <h1>First of all...</h1>
          <p>IT`S FAST</p>
        </section>

        <section>
          <h1 className={styles.displayNone}>video</h1>
          <Video />
        </section>


        <article className={styles.whatsNew__total}>
          <h1 className={styles.displayNone}>All new things</h1>

          <section className={styles.whatsNew_single}>
            <h1 className={styles.displayNone}>Middleware</h1>
            <div className={styles.whatsNew_single_explenationFull}>
              <h1 className={styles.WhatsNew_title}>Middleware</h1>
              <p className={styles.WhatsNew_explenation}>text with explenation</p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>good point one</li>
                <li className={styles.benefit}>good point two</li>
                <li className={styles.benefit}>good point three</li>
              </ul>
              <div className={styles.links}>
                <Link href="/middleware"><a className={styles.links_learnMore}>learn more</a></Link>
                <Link href="/demos/middleware/demo"><a className={styles.links_demo}>View demo</a></Link>
              </div>
            </div>
            <div className={styles.whatsNew__single_image}>
              <p>replace with Image here</p>
            </div>
          </section>

          <section className={styles.whatsNew_single}>
            <h1 className={styles.displayNone}>AVIF image support</h1>
            <div className={styles.whatsNew__single_image}>
              <p>replace with Image here</p>
            </div>
            <div className={styles.whatsNew_single_explenationFull}>
              <h1 className={styles.WhatsNew_title}>AVIF image support</h1>
              <p className={styles.WhatsNew_explenation}>text with explenation</p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>good point one</li>
                <li className={styles.benefit}>good point two</li>
                <li className={styles.benefit}>good point three</li>
              </ul>
              <div className={styles.links}>
                <Link href="/AVIF_support"><a className={styles.links_learnMore}>learn more</a></Link>
                <Link href="/demos/AVIF_support/demo"><a className={styles.links_demo}>View demo</a></Link>
              </div>
            </div>
          </section>

          <section className={styles.whatsNew_single}>
            <h1 className={styles.displayNone}>Server components</h1>
            <div className={styles.whatsNew_single_explenationFull}>
              <h1 className={styles.WhatsNew_title}>Server components</h1>
              <p className={styles.WhatsNew_explenation}>text with explenation</p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>good point one</li>
                <li className={styles.benefit}>good point two</li>
                <li className={styles.benefit}>good point three</li>
              </ul>
              <div className={styles.links}>
                <Link href="/server_components"><a className={styles.links_learnMore}>learn more</a></Link>
                <Link href="/demos/server_components/demo"><a className={styles.links_demo}>View demo</a></Link>
              </div>
            </div>
            <div className={styles.whatsNew__single_image}>
              <p>replace with Image here</p>
            </div>
          </section>

          <section className={styles.whatsNew_single}>
            <h1 className={styles.displayNone}>Url-imports</h1>
            <div className={styles.whatsNew__single_image}>
              <p>replace with Image here</p>
            </div>
            <div className={styles.whatsNew_single_explenationFull}>
              <h1 className={styles.WhatsNew_title}>Url-imports</h1>
              <p className={styles.WhatsNew_explenation}>text with explenation</p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>good point one</li>
                <li className={styles.benefit}>good point two</li>
                <li className={styles.benefit}>good point three</li>
              </ul>
              <div className={styles.links}>
                <Link href="/url_imports"><a className={styles.links_learnMore}>learn more</a></Link>
                <Link href="/demos/url_imports/demo"><a className={styles.links_demo}>View demo</a></Link>
              </div>
            </div>
          </section>

          <section className={styles.whatsNew_single}>
            <h1 className={styles.displayNone}>Suspense</h1>
            <div className={styles.whatsNew_single_explenationFull}>
              <h1 className={styles.WhatsNew_title}>Suspense</h1>
              <p className={styles.WhatsNew_explenation}>text with explenation</p>
              <ul className={styles.benefits}>
                <li className={styles.benefit}>good point one</li>
                <li className={styles.benefit}>good point two</li>
                <li className={styles.benefit}>good point three</li>
              </ul>
              <div className={styles.links}>
                <Link href="/suspense"><a className={styles.links_learnMore}>learn more</a></Link>
                <Link href="/demos/suspense/demo"><a className={styles.links_demo}>View demo</a></Link>
              </div>
            </div>
            <div className={styles.whatsNew__single_image}>
              <p>replace with Image here</p>
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}