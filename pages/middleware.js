import React from 'react'
import styles from '../styles/explenation_template.module.css'

import Nav from '../components/index/Navigation'
import Link from 'next/link'
import Image from 'next/image'

// image imports
import explenation_1 from '../public/middleware_pictures/explenation_1.png'
import explenation_2 from '../public/middleware_pictures/explenation_2.png'
import explenation_3 from '../public/middleware_pictures/explenation_3.png'
import explenation_4 from '../public/middleware_pictures/explenation_4.png'

const middleware = () => {
  return (
    <div className={styles.fullExplenation}>
      <div className={styles.header}>
        <Nav />
        <div className={styles.headerInfo}>
          <h1 className={styles.headerInfo_title}>Middleware</h1>
          <p className={styles.headerInfo_text}>Dit is een korte uitleg daarvan om een idee te krijgen, kan ook quote zijn.</p>
          <Link href="/demos/middleware_demo"><a className={styles.links_toDemo}>Try out demo</a></Link>
        </div>
      </div>

      <article className={styles.explenation}>
        <h1 className={styles.displayNone}> full explenation</h1>

        <section className={styles.oneXtwo}>
          <h1 className={styles.displayNone}>What is middleware?</h1>
          <div className={styles.titleWithText}>
            <h1 className={styles.title}>So what is middleware?</h1>
            <p className={styles.text}>Middleware is NextJs’s attempt to solve the problem of having either fast static sites or significantly slower dynamic (more personalized though) ones, but not both simultaneously. This middleware now offers the “dynamic at the speed of static” by implementing another layer of code abstraction that is being executed on a server near to you. This makes development of geolocation detection based personalization, bot protection, authentication and much more so much easier and it also performs crazy fast!</p>
          </div>
          <div className={styles.titleWithText}>
            <h1 className={styles.title}>Why is it great? (or not)</h1>
            <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat.</p>
          </div>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.displayNone}> pros and cons</h1>

          <div className={styles.explenation_Part_list}>
            <p className={styles.title}>Pro’s of middleware:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>gives the benefits of static caching with the power of dynamic execution</li>
              <li className={styles.text_list}>we can run dynamic functions aka middleware right before our CDN request completes. </li>
              <li className={styles.text_list}>All that with no cold start.</li>
              <li className={styles.text_list}> It can be scoped</li>
            </ul>
          </div>

          <div className={styles.explenation_Part_list_two}>
            <p className={styles.title}>Con’s of middleware:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>It has competition (The Cloudflare and Amazon infrastructure has also implemented a similar feature not long ago. It is called edge computing or Lamdba@Edge. What is special about the Next.js version? Its easy and friendly integration within the framework.).</li>
              <li className={styles.text_list}>Can’t really use the fetch API in the middleware, because it would defeat the whole purpose.</li>
            </ul>
          </div>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Middleware explained in 2 sentences</h1>
          <p className={styles.text}>Middleware is code that executes before a request is processed. Depending on the incoming request, you can execute custom logic, rewrite, redirect, add headers and more, before returning a response.</p>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.quote}>`Dynamic at the speed of static`</h1>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>How to do this in nextJS?</h1>
          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>1: Make sure you are on the latest version of nextJS (nextJS12) by installing the latest version of next with yarn or npm:</p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>2: Then chose a CDN you want to use (I used skypack for this demo):</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>Skypack</li>
            </ul>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>3: add the allowed URL prefixes inside your next.config.js like below:</p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>4: Now search for a library on skypack and import it:</p>
          </div>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Bonus: What are edge functions</h1>
          <p className={styles.text}>When deploying your middleware on vercel, vercel makes edge functions from your middleware. Noww what are edge functions. They are middleware that is deployed all around the world. So when someone tries your application with middleware they fetch that code from the server which is geoghraphicly closed to you so this means it is lightning fast which opens up the ability to make your pages dynamic with middleware and make it fast with edge functions! Here are some guys on twitter who also explain it very well.</p>
          <div className={styles.picture_url_imports}><Image src={explenation_1} alt='explenation_1' /></div>
          <div className={styles.picture_url_imports}><Image src={explenation_2} alt='explenation_2' /></div>
          <div className={styles.picture_url_imports}><Image src={explenation_3} alt='explenation_3' /></div>
          <div className={styles.picture_url_imports}><Image src={explenation_4} alt='explenation_4' /></div>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Some good use of Middleware:</h1>
          <ul className={styles.list}>
            <li className={styles.text_list}>User Authentication</li>
            <li className={styles.text_list}>Bot protection</li>
            <li className={styles.text_list}>Redirects and rewrites</li>
            <li className={styles.text_list}>Handling unsupported browsers</li>
            <li className={styles.text_list}>Service-side analytics</li>
            <li className={styles.text_list}>Advanced 18n routing</li>
            <li className={styles.text_list}>Logging</li>
          </ul>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Some challenges I faced, and how I fixed them:</h1>
          <div>
            <p className={styles.steps_text}>Could not get when my site online on vercel middleware was in a sub directory</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>...</li>
            </ul>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>My used resources:</h1>
          <ul className={styles.list}>
            <li className={styles.text_list}>https://javascript.plainenglish.io/middleware-in-next-js-12-what-are-they-and-how-to-get-started-with-them-2bce9ae073eb </li>
            <li className={styles.text_list}>https://nextjs.org/blog/next-12#introducing-middleware</li>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=RaaSmWPmjM0</li>
          </ul>
        </section>

      </article>

    </div>

  )
}

export default middleware
