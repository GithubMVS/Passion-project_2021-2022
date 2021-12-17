
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../pages/index.module.css'

// component imports
import Navigation from '../components/index/Navigation'

//image imports
import checkMark from '../public/homePage/checkMark.svg'

// images imports
import url_imports from '../public/homePage/url_imports.png'
import server_components from '../public/homePage/server_components.png'
import Suspense from '../public/homePage/Suspense.png'
import AVIf from '../public/homePage/AVIF_image_format.jpg'
import middleware from '../public/homePage/middleware_image.png'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Passion Project</title>
        <meta name="description" content="Passion Project" />
      </Head>
      <main className={styles.homepage__full}>
        <header className={styles.homepage__full_header}>
          <Navigation />
          <h1 className={styles.homepage__full_title}>A presentation on the future of the <span className={styles.homepage__full_title_special}>evolution</span> of a fullstack framework.</h1>
        </header>

        <section className={styles.itsFast_full}>
          <h1 className={styles.itsFast_full_title}>First of all...</h1>
          <p className={styles.itsFast_full_gradient}>{`IT'S FAST`}</p>
        </section>


        <article className={styles.whatsNew__total}>
          <h1 className={styles.whatsNew__total_title}>Here are the important new features:</h1>
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
                <Link href="https://middleware-next-js-12-demo.vercel.app/"><a className={styles.links_demo}>View demo</a></Link>
              </div>
            </div>
            <div className={styles.whatsNew__single_image}>
              <Image src={middleware} alt="middleware" />
            </div>
          </section>

          <section className={styles.whatsNew_single}>
            <h1 className={styles.displayNone}>AVIF image format</h1>
            <div className={styles.whatsNew__single_image}>
              <Image src={AVIf} alt="AVIf" />
            </div>
            <div className={styles.whatsNew_single_explenationFull}>
              <h1 className={styles.WhatsNew_title}>AVIF image format</h1>
              <p className={styles.WhatsNew_explenation}>Avif image format is a relative new image format that is really light. Now the nextJS built-in Image Optimization API now supports AVIF images, enabling 20% smaller images compared to WebP. Which accounts for better UX for the end user!</p>
              <ul className={styles.benefits}>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Up to 80% lighter then jpg`s</li>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Are not supported on all major browsers (bad point)</li>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Can take longer to optimize as webP (bad point)</li>
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
              <Image src={server_components} alt="server_components" />
            </div>
          </section>

          <section className={styles.whatsNew_single}>
            <h1 className={styles.displayNone}>Url-imports</h1>
            <div className={styles.whatsNew__single_image}>
              <Image src={url_imports} alt="url_imports" />
            </div>
            <div className={styles.whatsNew_single_explenationFull}>
              <h1 className={styles.WhatsNew_title}>Url-imports/ES modules</h1>
              <p className={styles.WhatsNew_explenation}>Next.js 12 includes experimental support for importing ES Modules through URLs, no install or separate build step is required. URL imports allow you to use any package directly through a URL. This enables Next.js to process remote HTTP(S) resources exactly like local dependencies.</p>
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
              <p className={styles.WhatsNew_explenation}>Suspense is a component that wraps your own custom components. It lets your components communicate to React that they’re waiting for some data to load before the component is rendered. It prevents your components from rendering to the DOM until some asynchronous operationis completed.</p>
              <ul className={styles.benefits}>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Load data asynchronously</li>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>Not load all or nothing!</li>
                <Image src={checkMark} alt="checkMark" /><li className={styles.benefit}>The ability to show the most important content first</li>
              </ul>
              <div className={styles.links}>
                <Link href="/suspense"><a className={styles.links_learnMore}>learn more</a></Link>
                <Link href="/demos/suspense/demo"><a className={styles.links_demo}>View demo</a></Link>
              </div>
            </div>
            <div className={styles.whatsNew__single_image}>
              <Image src={Suspense} alt="Suspense" />
            </div>
          </section>
        </article>
      </main>
    </div>
  )
}
