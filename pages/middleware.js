import React from 'react'
import styles from './middleware.module.css'

import Nav from '../components/index/Navigation'
import Link from 'next/link'
import Image from 'next/image'

// image imports

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
      </article>

    </div>

  )
}

export default middleware
