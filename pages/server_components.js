import styles from './server_components.module.css'

import Nav from '../components/index/Navigation'
import Link from 'next/link'
import Image from 'next/image'

// images here
import serverSide from '../public/server_components/Server_side_generation.png'
import staticGeneration from '../public/server_components/Static_site_generation.png'

const server_components = () => {

  return (
    <div className={styles.fullExplenation}>
      <div className={styles.header}>
        <Nav />
        <div className={styles.headerInfo}>
          <h1 className={styles.headerInfo_title}>Server Components</h1>
          <p className={styles.headerInfo_text}>Buiild apps that span both the client and the server.</p>
          <Link href="/demos/server_components/demo"><a className={styles.links_toDemo}>Try out demo</a></Link>
        </div>
      </div>

      <article className={styles.explenation}>
        <h1 className={styles.displayNone}> full explenation</h1>

        <section className={styles.oneXtwo}>
          <h1 className={styles.displayNone}>What are Server components?</h1>
          <div className={styles.titleWithText}>
            <h1 className={styles.title}>So what are Server components?</h1>
            <p className={styles.text}>This feature is really explains itself. React components can now be also rendered on a server!You can still choose yourself how you render a component, but you can now choose to render on the client or on the server. This new approach to data fetching and rendering in general is fundamentally different from already known getStaticProps or get ServerSideProps, etc from previous versions of NextJs.</p>
          </div>
          <div className={styles.titleWithText}>
            <h1 className={styles.title}>Why is it great? (or not)</h1>
            <p className={styles.text}>This new approach to rendering the website per component level gives us a more efficient way to cache content and stream data as it flows rather that render it after some period of time all at once (meaning there will no longer be such thing as either all cache at once or no cache at all).</p>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.displayNone}> pros and cons</h1>
          <div className={styles.explenation_Part_list}>
            <p className={styles.title}>Pro’s of Server components:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>They are always rendered in the server and streamed to the client. </li>
              <li className={styles.text_list}>You can now choose which parts you want to render via the server and which via the client which improves loading time of your site, so by that it improves UX.</li>
              <li className={styles.text_list}>That reduces the need for handling different rendering scenarios.</li>
              <li className={styles.text_list}>React components can now also be rendered on the server.</li>
              <li className={styles.text_list}>You can still choose which rendering method you would want to use in a specific component.</li>
              <li className={styles.text_list}>React Server Components improve the user experience of your application by pairing the best parts of server-rendering with client-side interactivity.</li>
              <li className={styles.text_list}>Reduces client bundle of javascript + improving page load time/boot time. </li>
              <li className={styles.text_list}>Can now use sensitive data in server components because now that sensitive data is rendered on the server and not on the client (I still recommend .env tho)</li>
            </ul>
          </div>

          <div className={styles.explenation_Part_list_two}>
            <p className={styles.title}>Con’s of Server components:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>They are stateless.</li>
              <li className={styles.text_list}>They can’t use lifecycle methods like useState or useEffect, Link...</li>
              <li className={styles.text_list}>Furthermore, they can’t make usage of browser-only APIs.</li>
            </ul>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Haven`t we done this before (like with php)?</h1>
          <p className={styles.text}>...</p>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.quote}>`Now you can choose which parts you want to render with the server instead of all or nothing.`</h1>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>What is static site generation and server-side generation?</h1>
          <p className={styles.text}>This new approach to data fetching and rendering in general is fundamentally different from already known getStaticProps or get ServerSideProps, etc from previous versions of NextJs. This new approach to rendering the website per component level gives us a more efficient way to cache content and stream data as it flows rather than render it after some period of time all at once (meaning there will no longer be such thing as either all cache at once or no cache at all).</p>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>So why is this so great?</h1>
          <p className={styles.text}>Traditionally there are two ways to serve content, statically from a Content Delivery Network (CDN) close to the user for fast response times, or dynamically, with personalization configured at the server level on each request. Now you can choose which part you want to render via the server and what via the client which can make pages load faster content and improve the User experience.</p>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <div className={styles.explenation_Part_list}>
            <p className={styles.title}>Static site generation</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>A static page will deliver the same content to all visitors, no matter where they are in the world, and it will be fast as it`s cached by the CDN. But this approach may not be viable if you want to deliver personalized content, depending on, for example, where a user is located in the world.</li>
              <div className={styles.picture_url_imports}><Image src={staticGeneration} alt='staticGeneration' /></div>
            </ul>
          </div>

          <div className={styles.explenation_Part_list}>
            <p className={styles.title}>Server-side generation</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>To give your user a personalized experience, you can take advantage of server-side rendering to create dynamic content on each request to your sites pages. This will enable you to offer different content to people based on their location, authenticate them, or configure the language of your site.</li>
              <li className={styles.text_list}>The drawback of this approach is that it can be slower. If the server processing the request is far away from the visitors origin, then the request can take time to complete, and the content may not be available to the user at the speed offered by serving purely static content.</li>
              <div className={styles.picture_url_imports}><Image src={serverSide} alt='serverSide' /></div>
            </ul>
          </div>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Some challenges I faced, and how I fixed them:</h1>
          <div>
            <p className={styles.steps_text}>Fetchning data from an api without using state</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>...</li>
            </ul>
          </div>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Some good use of Server components:</h1>
          <ul className={styles.list}>
            <li className={styles.text_list}>When you have to fetch a lot of data from a database for example, this is because a server most likely renders the data faster than a computor that is working on a lot at the same time.</li>
            <li className={styles.text_list}>When there isn`t a lot of interactivity, this is because when you render on the server your javascript will render after the HTML and CSS is loaded, meaning that you sometimes need to wait for the javascript === the interactivity.</li>
            <li className={styles.text_list}>When loading heavy npm packages.</li>
          </ul>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Conclusion</h1>
          <p className={styles.text}>React Server Components allow developers to build apps that span the server and client, combining the rich interactivity of client-side apps with the improved performance of traditional server rendering.</p>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>My used resources:</h1>
          <ul className={styles.list}>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=l5J1Gxw2Mh4</li>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=Nl4OwNhh2QI</li>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=lRQ5z7i7pxE</li>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=l5J1Gxw2Mh4</li>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=DuSa5E-GgwU</li>
            <li className={styles.text_list}>https://betterprogramming.pub/5-new-killer-features-of-next-js-12-dfd1d766b539</li>
            <li className={styles.text_list}>https://medium.com/@rolyuhh/nextjs-v12-in-a-nutshell-df1e9bbdf260</li>
            <li className={styles.text_list}>https://vercel.com/blog/nextjs-server-side-rendering-vs-static-generation</li>
            <li className={styles.text_list}>https://vercel.com/blog/everything-about-react-server-components</li>
            <li className={styles.text_list}>https://nextjs.org/blog/next-12#react-server-components</li>
          </ul>
        </section>

      </article>


    </div>
  )
}

export default server_components
