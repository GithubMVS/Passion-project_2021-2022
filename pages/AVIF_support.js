import React from 'react'
import styles from '../styles/explenation_template.module.css'

import Nav from '../components/index/Navigation'
import Link from 'next/link'
import Image from 'next/image'

const AVIF_support = () => {
  return (
    <div className={styles.fullExplenation}>
      <div className={styles.header}>
        <Nav />
        <div className={styles.headerInfo}>
          <h1 className={styles.headerInfo_title}>Avif image format</h1>
          <p className={styles.headerInfo_text}>NextJS now supports AVIF images, enabling 20% smaller images compared to WebP and 80% smaller than jpg.</p>
          <Link href="/demos/AVIF_support/demo"><a className={styles.links_toDemo}>Try out demo</a></Link>
        </div>
      </div>
      <article className={styles.explenation}>
        <h1 className={styles.displayNone}> full explenation</h1>

        <section className={styles.oneXtwo}>
          <h1 className={styles.displayNone}>What are AVIF images?</h1>
          <div className={styles.titleWithText}>
            <h1 className={styles.title}>What are AVIF images?</h1>
            <p className={styles.text}>The AV1 image format (AVIF) is an exciting new open-sourced and royalty free optimised image format which supports any image codec. An AVIF image offers significant file size reduction compared with JPEG, PNG and WebP and is currently supported on Google Chrome, Firefox, Android and netflix. AVIF is one of a few different formats that are angling to displace WebP. It’s based on an encoding algorithm known as AV1, which is impressively more efficient than even WebP.</p>
          </div>
          <div className={styles.titleWithText}>
            <h1 className={styles.title}>Why is it great? (or not)</h1>
            <p className={styles.text}>It’s an open format, and it’s being backed by major players on the web such as Netflix, Facebook, Google, Amazon, Apple, and Microsoft.5 So not only is its technical performance leading the pack, it’s not encumbered by potentially complicated and expensive licensing restrictions, and it already has the backing of many of the web’s biggest players.</p>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.displayNone}> pros and cons</h1>

          <div className={styles.explenation_Part_list}>
            <p className={styles.title}>Pro’s of AVIF images:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>High dynamic range (HDR).</li>
              <li className={styles.text_list}>8, 10, 12-bit color depth.</li>
              <li className={styles.text_list}>Big companies like netflix and google are already using it.</li>
              <li className={styles.text_list}>It uses a highly efficient compression algorithm that results in smaller filesizes while retaining equivalent image quality.</li>
              <li className={styles.text_list}>It has a lot going for it to help it gain in popularity and use.</li>
              <li className={styles.text_list}>Accelerated page loads.</li>
              <li className={styles.text_list}>Enhanced user experience.</li>
              <li className={styles.text_list}>Reduced bounce rate.</li>
              <li className={styles.text_list}>Elated SEO rank coupled with a higher score in the new Google Core Web Vitals.</li>
            </ul>
          </div>

          <div className={styles.explenation_Part_list_two}>
            <p className={styles.title}>Con’s of AVIF images:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>As of December 2021 Safari does not support AVIF images</li>
              <li className={styles.text_list}>It`s not compatible with everything right now. Just with NextJS the last 3 months.</li>
              <li className={styles.text_list}>The decoding speed of AVIF is slower than its counterparts.</li>
            </ul>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>How to do this in nextJS?</h1>
          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>1: This one is quite simple because the only setup you need to do is get your nextJS to nextJS12 </p>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>Like this, with yarn or npm:</p>
              <p className={styles.copyThis_text}>{`npm install next@12`}</p>
              <p className={styles.copyThis_text}>{`#or`}</p>
              <p className={styles.copyThis_text}>{`yarn add next@12`}</p>
            </div>
            <p className={styles.steps_text_special}>2: If you have done that select the pictures you want to use.</p>
            <p className={styles.steps_text_special}>3: Get the pictures in a converter and convert each of them. (I use: https://squoosh.app/?fbclid=IwAR0xDWklwaY8tlBTcylZCmfPRY32rQlWAKIivmpq7qW-mnm141gTabZlaN0).</p>
            <p className={styles.steps_text_special}>4: Import the images like you would normally do.</p>
            <p className={styles.steps_text_special}>5: Use the `Image` tag to load your avif images!</p>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>The demo explained</h1>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>1: First I made a grid of 3x2 with 6 images.</p>
            <p className={styles.steps_text_special}>2: Then I chose 6 images from pexels which were all 4k images.</p>
            <p className={styles.steps_text_special}>3: Then I converted each image from jpg to webP.</p>
            <p className={styles.steps_text_special}>4: After this I simply imported the images on the page I wanted them on.</p>
            <p className={styles.steps_text_special}>5: At last I used the image tag to display them on the screen.</p>
            <p className={styles.steps_text_special}>6: I used this simple demo to show that when your browser supports these images they can render for the user at a crazy fast rate, which is great.</p>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.quote}>`A new image format 20% lighter than webP`</h1>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>What is my opinion on this</h1>
          <p className={styles.text}>I think this new image format is really great but I wouldn`t use it right now because it is not supported on all browsers yet. For the time being I would rather use webP because it has significantly better support than AVIF (around 95% percent vs around 70%) as of december 2021</p>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Some good use of AVIF images:</h1>
          <ul className={styles.list}>
            <li className={styles.text_list}>When you can create a fallback image it is great.</li>
            <li className={styles.text_list}>When you want a really performant website with lots of images that load really fast (and you don`t care about browser compatibility).</li>
          </ul>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Conclusion</h1>
          <p className={styles.text}>The relatively new image format AVIF is really great and promising but it has its drawbacks because it is not supported on everything and on all browsers. Therefore I would recommend to wait a couple of years and let all the browsers, systems, etc... adapt to AVIF</p>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Want to try it yourself?</h1>
          <p className={styles.text}>Here is the demo I made in codeSandbox: <a href="https://codesandbox.io/s/beautiful-shirley-54tdp"> codeSandbox link</a> </p>
          <p className={styles.text}>Here is the demo I made on Github: <a href="https://github.com/GithubMVS/nextJS12_AVIF_imageSupport_demo"> Suspense github link</a> </p>
          <p className={styles.text}>Here is my full project on github: <a href="https://github.com/GithubMVS/Passion-project_2021-2022"> fullproject github link</a> </p>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>My used resources:</h1>
          <ul className={styles.list}>
            <li className={styles.text_list}>https://nextjs.org/blog/next-12#smaller-images-using-avif</li>
            <li className={styles.text_list}>https://techgydbysm.com/avif-image-format/</li>
            <li className={styles.text_list}>https://www.finally.agency/blog/what-is-avif-image-format</li>
            <li className={styles.text_list}>https://havecamerawilltravel.com/avif-image-format/</li>
            <li className={styles.text_list}>https://medium.com/imageengine/the-new-avif-image-format-a-blessing-in-disguise-for-website-owners-and-end-users-3e1c15c575f9</li>
            <li className={styles.text_list}>https://cloudinary.com/blog/the_roi_of_adopting_avif_for_websites</li>
            <li className={styles.text_list}>https://www.gumlet.com/learn/avif-for-image-coding-everything-you-need-to-know/</li>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=0uMXZYqe51Y</li>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=rO6rvbN37ZA</li>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=VHm5Ql33JYw</li>
            <li className={styles.text_list}>https://squoosh.app/?fbclid=IwAR0xDWklwaY8tlBTcylZCmfPRY32rQlWAKIivmpq7qW-mnm141gTabZlaN0</li>
          </ul>
        </section>
      </article>
    </div>
  )
}

export default AVIF_support

