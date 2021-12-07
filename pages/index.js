
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../pages/index.module.css'

// component imports
import Navigation from '../components/index/Navigation'

//image imports
import checkMark from '../public/homePage/checkMark.svg'


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


        <article className={styles.whatsNew__total}>
          <h1 className={styles.whatsNew__total_title}>{"Now here's what's new"}</h1>
          <p className={styles.whatsNew__total_text}>Choose the one you want to discover</p>

          <section className={styles.whatsNew_single}>
            <h1 className={styles.displayNone}>Middleware</h1>
            <div className={styles.whatsNew_single_explenationFull}>
              <h1 className={styles.WhatsNew_title}>Middleware</h1>
              <p className={styles.WhatsNew_explenation}>Middlewares are simple pieces of code that allow one to modify the response to a request even before it is completed. We can now rewrite, redirect, add headers or even stream HTML based on the user’s request.</p>
              <ul className={styles.benefits}>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Dynamic at the speed of static</li>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>You can scope the middleware</li>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>No cold starts</li>
              </ul>
              <div className={styles.links}>
                <Link href="/middleware"><a className={styles.links_learnMore}>learn more</a></Link>
                <Link href="/demos/middleware_demo"><a className={styles.links_demo}>View demo</a></Link>
              </div>
            </div>
            <div className={styles.whatsNew__single_image}>
              <p>replace with Image here</p>
            </div>
          </section>

          <section className={styles.whatsNew_single}>
            <h1 className={styles.displayNone}>Vercel edge functions</h1>
            <div className={styles.whatsNew__single_image}>
              <p>replace with Image here</p>
            </div>
            <div className={styles.whatsNew_single_explenationFull}>
              <h1 className={styles.WhatsNew_title}>Vercel edge functions</h1>
              <p className={styles.WhatsNew_explenation}>text with explenation</p>
              <ul className={styles.benefits}>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>good point one</li>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>good point two</li>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>good point three</li>
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
              <p className={styles.WhatsNew_explenation}>React Server Components allow developers to build apps that span the server AND client, combining the rich interactivity of client-side apps with the improved performance of traditional server rendering.</p>
              <ul className={styles.benefits}>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Choose how you want to render</li>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Improve user experience</li>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Less rendering on the client</li>
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
              <p className={styles.WhatsNew_explenation}>Less rendering on the client</p>
              <ul className={styles.benefits}>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Import modules from external servers</li>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>No more importing from the local disk</li>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>It’s Native</li>
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
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>good point one</li>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>good point two</li>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>good point three</li>
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
