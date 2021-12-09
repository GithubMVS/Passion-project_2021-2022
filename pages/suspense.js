import React from 'react'
import styles from './suspense.module.css'

import Nav from '../components/index/Navigation'
import Link from 'next/link'
import Image from 'next/image'

//images
import step_1_howTo from '../public/suspense/step_1_howTo.png'
import step_3_howTo from '../public/suspense/step_3_howTo.png'
import step_4_howTo from '../public/suspense/step_4_howTo.png'
import step_5_howTo from '../public/suspense/step_5_howTo.png'
import step_6_howTo from '../public/suspense/step_6_howTo.png'
import step_7_howTo from '../public/suspense/step_7_howTo.png'

const Suspense = () => {
  return (
    <div className={styles.fullExplenation}>
      <div className={styles.header}>
        <Nav />
        <div className={styles.headerInfo}>
          <h1 className={styles.headerInfo_title}>Suspense</h1>
          <p className={styles.headerInfo_text}>Dit is een korte uitleg daarvan om een idee te krijgen, kan ook quote zijn.</p>
          <Link href="/demos/suspense/demo"><a className={styles.links_toDemo}>Try out demo</a></Link>
        </div>
      </div>

      <article className={styles.explenation}>
        <h1 className={styles.displayNone}> full explenation</h1>


        <section className={styles.oneXtwo}>
          <h1 className={styles.displayNone}>What is Suspense?</h1>
          <div className={styles.titleWithText}>
            <h1 className={styles.title}>So what is Suspense?</h1>
            <p className={styles.text}>React 16.6 added a Suspense component that lets you “wait” for some code to load and declaratively specify a loading state (like a spinner). Suspense for Data Fetching is a new feature that lets you also use Suspense to declaratively “wait” for anything else, including data.</p>
          </div>
          <div className={styles.titleWithText}>
            <h1 className={styles.title}>Why is it great? (or not)</h1>
            <p className={styles.text}>One of the coolest React’s 18 features is the built-in support of server-side Suspense and streaming of HTML parts of your React application. You are no longer required to load all or nothing. You can progressively ship HTML to the browser. This is really great because you can now asynchronously load incoming data meaning that you can render data while other data is already loaded. </p>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.displayNone}> pros and cons</h1>

          <div className={styles.explenation_Part_list}>
            <p className={styles.title}>Pro’s of Suspense:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>It lets data fetching libraries deeply integrate with React.</li>
              <li className={styles.text_list}>It lets you orchestrate intentionally designed loading states.</li>
              <li className={styles.text_list}>When done right it let’s your page run faster.</li>
              <li className={styles.text_list}> it let’s you have a easy back-up for when your data is not loaded yet.</li>
              <li className={styles.text_list}>It helps you avoid race conditions.. (Even with await, asynchronous code is often error-prone. Suspense feels more like reading data synchronously — as if it were already loaded.)</li>
            </ul>
          </div>

          <div className={styles.explenation_Part_list_two}>
            <p className={styles.title}>Con’s of Suspense:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>It is not a ready-to-use client. (You can’t “replace” fetch or Relay with Suspense. But you can use a library that’s integrated with Suspense (for example, new Relay APIs)).</li>
              <li className={styles.text_list}>It does not couple data fetching to the view layer. (It helps orchestrate displaying the loading states in your UI, but it doesn’t tie your network logic to React components.)</li>
              <li className={styles.text_list}>It is not a data fetching implementation. (It does not assume that you use GraphQL, REST, or any other particular data format, library, transport, or protocol.)</li>
            </ul>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>How to do this in nextJS?</h1>
          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>1: First you check if you are on the latest version of nextJS(nextJS12) if you are, then add `concurrentFeatures` to your next.config like this:</p>
            <div className={styles.picture_url_imports}><Image src={step_1_howTo} alt='step_1_howTo' /></div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>2: Then choose a database or API, or somewhere you want to fetch data (I chose jsonplaceholder)</p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>3: Then make a folder called API.js and fetch your data, My code looked like this:</p>
            <div className={styles.picture_url_imports}><Image src={step_3_howTo} alt='step_3_howTo' /></div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>4: Once you got that part done make a seperate component (not needed but good practice) where you integrate your api/database code and code the part you want to make in here, in my case this was a list of comments for an acticle. Also notice that I import that API component here. Mine looked like this:</p>
            <div className={styles.picture_url_imports}><Image src={step_4_howTo} alt='step_4_howTo' /></div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>5: If you have done that, go to your folder where you want use the Suspense, import suspensen from react. Also import the seperate component from step 3</p>
            <div className={styles.picture_url_imports}><Image src={step_5_howTo} alt='step_5_howTo' /></div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>6: Now wrap suspense around your component that contains the database, api or just data integration, note that in my example I don’t wrap my full component with suspense because I want the other parts to load already while my comments (which usually take longer to load) are loading, here is my example:</p>
            <div className={styles.picture_url_imports}><Image src={step_6_howTo} alt='step_6_howTo' /></div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>7: Bonus: give your loading suspense a fallback that replaces the loading data with a costum p or h1 (or whatever you want to use) text or you can even import a component where you madde a costum animation like below </p>
            <div className={styles.picture_url_imports}><Image src={step_7_howTo} alt='step_7_howTo' /></div>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>The demo explained</h1>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.quote}>`A way to let data render while other data is already rendered on your screen.`</h1>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>What is the fallback?</h1>
          <p className={styles.text}>While your data is coming in you might need to let the user know that it is loading, that’s the fallback, the fallback can be a (loading) animation or personalised text like ‘loadinig content’. The fallback is a replacement for your incoming while it is coming in. Eventually, we’ll get all the data, and then the fallback will be replaced by your data.</p>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>What does streaming html mean?</h1>
          <p className={styles.text}>Streaming html means that you show the user data while it is streaming in. Meaning that you no longer have to wait for data to render to show it, because now you can show the most important data while other data is still streaming in. You are no longer required to load all or nothing. You can progressively ship HTML to the browser.</p>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>What is my opinion on this</h1>
          <p className={styles.text}>I think it`s a great implementation. It can ensure that all your data comes in faster and fundamentally ensures that you can choose that the most important data is shown first while other data is still coming in. This ensures that you no longer have to wait for all the data before you can show it to the user. So I think this is a really cool feature of react 18 especially now with suspense datafetching because this can often take a while. Also the fallback is really great because you can now easily replace loading content with an animation or personalised text.</p>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Other popular data fetching approaches</h1>
          <p className={styles.text}>We could introduce Suspense without mentioning the popular data fetching approaches. However, this makes it more difficult to see which problems Suspense solves, why these problems are worth solving, and how Suspense is different from the existing solutions.</p>

          <div className={styles.explenation_Part_list}>
            <p className={styles.title_special}>Fetch-on-render (for example, fetch in useEffect): </p>
            <ul className={styles.list}>
              <li className={styles.text_list}>Start rendering components. Each of these components may trigger data fetching in their effects and lifecycle methods. This approach often leads to “waterfalls”...</li>
            </ul>
          </div>

          <div className={styles.explenation_Part_list}>
            <p className={styles.title_special}>Fetch-then-render (for example, Relay without Suspense): </p>
            <ul className={styles.list}>
              <li className={styles.text_list}>Start fetching all the data for the next screen as early as possible. When the data is ready, render the new screen. We can’t do anything until the data arrives.</li>
            </ul>
          </div>

          <div className={styles.explenation_Part_list}>
            <p className={styles.title_special}>Render-as-you-fetch (for example, Relay with Suspense): </p>
            <ul className={styles.list}>
              <li className={styles.text_list}>Start fetching all the required data for the next screen as early as possible, and start rendering the new screen immediately — before we get a network response. As data streams in, React retries rendering components that still need data until they’re all ready.</li>
            </ul>
          </div>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Some good use of Suspense:</h1>
          <ul className={styles.list}>
            <li className={styles.text_list}>When you have data that takes a long time to render</li>
            <li className={styles.text_list}>If you want to improve UX on your website, because it’s also just a great fallback for when your data is not renderend yet.</li>
            <li className={styles.text_list}>when you want to avoid race conditions</li>
          </ul>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Other usecases of Suspense (we only focus on the data fetching part):</h1>
          <ul className={styles.list}>
            <li className={styles.text_list}>Images</li>
            <li className={styles.text_list}>Scripts</li>
            <li className={styles.text_list}>Or other asynchronous work.</li>
          </ul>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Some challenges I faced, and how I fixed them:</h1>
          <div>
            <p className={styles.steps_text}> I Did not activate `concurrentFeatures` in next.config.js</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>This one is a pretty simple one, but easy to forget. Because suspense for datafetching is still experimental (and concurrent mode also is) you need to activate concurrent mode in your next.config.js fille by typing: `concurrentFeatures: true`. There is also an example below this.</li>
            </ul>
            <div className={styles.picture_url_imports}><Image src={step_1_howTo} alt='step_1_howTo' /></div>
          </div>

          <div>
            <p className={styles.steps_text}>Suspense wouldn’t load in my files.</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>This one is probably because it is still experimental but sometimes when you import Suspense and try to use it you would receive an error (see picture), but the answer is very simple, just keep trying by litterly removing and adding the suspense code and you should be good to go.t</li>
            </ul>
          </div>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Conclusion</h1>
          <p className={styles.text}>Suspense for datafetching is a really great tool of react 18 it makes it possible to load some data or all data asychronously. While I would recommend of trying it out, be carefull because it is still experimental.</p>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>My used resources:</h1>
          <ul className={styles.list}>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=r-mGbpYxz9k</li>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=fTFoBr5LJGE</li>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=GU9euhBOgZs</li>
            <li className={styles.text_list}>https://levelup.gitconnected.com/how-you-can-use-react-suspense-for-data-fetching-in-real-world-applications-now-9fda8138f687</li>
            <li className={styles.text_list}>https://reactjs.org/docs/concurrent-mode-suspense.html</li>
            <li className={styles.text_list}>https://nextjs.org/blog/next-12#url-imports</li>
            <li className={styles.text_list}>https://medium.com/@rolyuhh/nextjs-v12-in-a-nutshell-df1e9bbdf260</li>
            <li className={styles.text_list}>https://betterprogramming.pub/5-new-killer-features-of-next-js-12-dfd1d766b539</li>
            <li className={styles.text_list}>https://reactjs.org/docs/concurrent-mode-suspense.html</li>
          </ul>
        </section>

      </article>
    </div>
  )
}

export default Suspense
