import styles from '../styles/explenation_template.module.css'

import Nav from '../components/index/Navigation'
import Link from 'next/link'
import Image from 'next/image'

// images here
import serverSide from '../public/server_components/Server_side_generation.png'
import staticGeneration from '../public/server_components/Static_site_generation.png'

// images of mistakes here
import elementTypeInvalid2_1 from '../public/server_components/fault_2.1.png'
import elementTypeInvalid2_2 from '../public/server_components/fault_2.2.png'

import reactHyderation_1 from '../public/server_components/react_hydration_1.1.png'
import reactHyderation_2 from '../public/server_components/react_hydration_1.2.png'
import reactHyderation_3 from '../public/server_components/react_hydration_1.3.png'
import reactHyderation_4 from '../public/server_components/react_hydration_1.4.png'

import noCssUseJSX_1 from '../public/server_components/fault_3.1.png'
import noCssUseJSX_2 from '../public/server_components/fault_3.2.png'
import noCssUseJSX_4 from '../public/server_components/fault_3.4.png'

import not_a_function_1 from '../public/server_components/not_a_function_1.png'
import not_a_function_2 from '../public/server_components/not_a_function_2.png'

import serverOrClientRendered from '../public/server_components/what_is_server_rendered.png'
import webpack_showOff from '../public/server_components/webpack_showOff.png'


const server_components = () => {

  return (
    <div className={styles.fullExplenation}>
      <div className={styles.header}>
        <Nav />
        <div className={styles.headerInfo}>
          <h1 className={styles.headerInfo_title}>Server Components</h1>
          <p className={styles.headerInfo_text}>Build apps that span both the client and the server.</p>
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
          <h1 className={styles.title}>How to do this in nextJS?</h1>
          <div className={styles.steps_full}>
            <p className={styles.steps_text}>1: First upgrade your next project to react18.</p>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>To do this add this to your terminal:</p>
              <p className={styles.copyThis_text}>{`npm install react@alpha react-dom@alpha`}</p>
              <p className={styles.copyThis_text}>{` # or`}</p>
              <p className={styles.copyThis_text}>{`yarn add react@alpha react-dom@alpha`}</p>
            </div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>2: Secondly make sure you’re not using middleware in your project, because as of December 2021 this will bug out and give you an error.</p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>3: After you’ve done that configure your next.config.js to support react 18.</p>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>Your next.config should look like this:</p>
              <p className={styles.copyThis_text}>{`module.exports = {`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`reactStrictMode: true,`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`experimental: {`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`serverComponents: true`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`}`}</p>
              <p className={styles.copyThis_text}>{`}`}</p>
            </div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>4: Then chose a project you want to make that require interactivity, a data fetch and preferably 1 or a couple npm packages (I chose a recipe website where you can see recipes, how to make them and the ingredients).</p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>5: Second choose which parts you want to render on te server and which you want to render on the server and which you want to render on the client (on the picture below you can see in red what I rendered on the server and in green what I rendered on the client). Note that everything that requires interactivity is best rendered on the client and everything that requires a lot of datafetching or is heavy like some npm packages is best run on the server, this is optional.</p>
            <div className={styles.picture_url_imports}><Image src={serverOrClientRendered} alt='serverOrClientRendered' /></div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>6: To render a component on the client just put `.client` after your component, to render a component on the server put `.server` after your component.</p>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>Like this:</p>
              <p className={styles.copyThis_text}>{`test.client.js`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`# will make you a client component`}</p>
              <p className={styles.copyThis_text}>{`test2.server.js`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`# will make you a server component`}</p>
              <p className={styles.copyThis_text}>{`test2.js`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`# will depend on if it's a server or client component based on the content`}</p>
            </div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>7: After you’ve done this just build your project like you normally would do, note that as of December 2021 react server components is really buggy with vanilla css and css modules. I would recommend to use jsx styling to style your page.</p>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>Jsx looks like this:</p>
              <p className={styles.copyThis_text}>{`<div style={{ display: 'flex'}}>`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`<p style={{ color: '#16161E'}}> Please select a recipe</p>`}</p>
              <p className={styles.copyThis_text}>{`</div>`}</p>
            </div>
            <p className={styles.text}>More info about jsx <a href="https://reactjs.org/docs/introducing-jsx.html">here</a> </p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>8: Now if you deploy your website locally you will see in the web pack file that there were only client files rendered, a good indicator to know that it also works is that if you go to your installed packages in web pack that every package that is rendered on your server components will not appear because it will render on the server and obviously not on the client. In my case I use `moment` and `simple-rating-stars` and I also had 2 server components that you won`t see in the components folder</p>
            <div className={styles.picture_url_imports}><Image src={webpack_showOff} alt='webpack_showOff' /></div>
          </div>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.quote}>`Now you can choose which parts you want to render, and how. Instead of all or nothing.`</h1>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>The demo explained</h1>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>1: In this demo you’ll see what a replica could look like for a recipe site.</p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>2: You probably want to use a database or headless CMS or something. I used my own data.</p>
            <p className={styles.text}>You can find the data: <a href="https://codesandbox.io/s/recursing-star-dmpt1?file=/src/index.js"> here</a> </p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>3: If you use fetch or axios or another fetching library your whole page will be rendered on the server. Which is a shame because some things run better/faster on the server and some things run better on the client.</p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>4: Now that is what server components fixes.</p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>5: You can chose what you render on the client and what you render on the server.</p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>6: Now a general rule of thumb is that everything that requires interactivity is best run on the client and everything with data or npm packages is best run on the server because they often have more ram to render those.</p>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>Remeber this:</p>
              <p className={styles.copyThis_text}>{`Use client components when:`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`# When you have a lot interactivity.`}</p>
              <p className={styles.copyThis_text}>{`Use server components when:`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`# When you have to fetch a lot of data from a database, headless CMS, ...`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`# When dealing with heavy npm packages.`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`# When there isn't a lot of interactivity.`}</p>
            </div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>7: In this example I rendered all the data with server components that means, all the recipes, ingredients, recipe details and also ran all the rpm packages on the server and ran all the interactive (the buttons to chose a recipe and the go back button) on the client.</p>
            <div className={styles.steps_full}>
              <p className={styles.text}>Link to moment npm package: <a href="https://www.npmjs.com/package/moment"> here</a> </p>
              <p className={styles.text}>Link to react-stars npm package: <a href="https://www.npmjs.com/package/simple-rating-stars"> here</a> </p>
              <p className={styles.text}>Link to my code: <a href="https://github.com/GithubMVS/nextJS12_serverComponents_demo"> here</a> </p>
            </div>

          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>8:This way my recipe page will load faster and and the user will have a better user experience. </p>
          </div>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>So why is this so great?</h1>
          <p className={styles.text}>Traditionally there are two ways to serve content, statically from a Content Delivery Network (CDN) close to the user for fast response times, or dynamically, with personalization configured at the server level on each request. Now you can choose which part you want to render via the server and what via the client which can make pages load faster content and improve the User experience.</p>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>How is this different from static site generation and server-side generation??</h1>
          <p className={styles.text}>This new approach to data fetching and rendering in general is fundamentally different from already known getStaticProps or get ServerSideProps, etc from previous versions of NextJs. This new approach to rendering the website per component level gives us a more efficient way to cache content and stream data as it flows rather than render it after some period of time all at once (meaning there will no longer be such thing as either all cache at once or no cache at all).</p>
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
          <h1 className={styles.title}>Some good use of Server components:</h1>
          <ul className={styles.list}>
            <li className={styles.text_list}>When you have to fetch a lot of data from a database for example, this is because a server most likely renders the data faster than a computor that is working on a lot at the same time.</li>
            <li className={styles.text_list}>When there isn`t a lot of interactivity, this is because when you render on the server your javascript will render after the HTML and CSS is loaded, meaning that you sometimes need to wait for the javascript === the interactivity.</li>
            <li className={styles.text_list}>When loading heavy npm packages.</li>
          </ul>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Some challenges I faced, and how I fixed them:</h1>
          <div>
            <p className={styles.steps_text}>Fetching data from an api without using state (.fetch is not a function error)</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>This one didn`t get fixed but I wanted to show it anyway, in the examples of server components the react 18 dev team showed they used `react-fetch` for fetching their data. When first installing it with yarn and then trying to use it for myself I got the following error `react_fetch__WEBPACK is not a function`, it seems that react fetch is not yet fully working well with webpack as of december 2021. </li>
            </ul>
            <div className={styles.picture_url_imports}><Image src={not_a_function_1} alt='not_a_function_1' /></div>
            <div className={styles.picture_url_imports}><Image src={not_a_function_2} alt='not_a_function_2' /></div>
          </div>


          <div>
            <p className={styles.steps_text}>Forgetting the import with expermimental of concurrentComponents and serverComponents and adding the react18alpha</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>don`t forget this, because this makes sure that you can use react18`s alpha, it is really important that you add `concurrentComponents` and `serverComponents` in your next.config.js after you added react18alpha ofcours.</li>
            </ul>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>Add this to your next.config.js:</p>
              <p className={styles.copyThis_text}>{`module.exports = {`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`reactStrictMode: true,`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`experimental: {`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`concurrentFeatures: true,`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`serverComponents: true,`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`}`}</p>
              <p className={styles.copyThis_text}>{`}`}</p>
            </div>

            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>Add this in your terminal:</p>
              <p className={styles.copyThis_text}>{`npm install react@alpha react-dom@alpha`}</p>
              <p className={styles.copyThis_text}>{`# or`}</p>
              <p className={styles.copyThis_text}>{`yarn add react@alpha react-dom@alpha`}</p>
            </div>
          </div>

          <div>
            <p className={styles.steps_text}>Using css modules or vanilla css in server components error</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>This one is also pretty simple as of December 2021, while server components are still in alpha, css modules are not supported yet and don`t work when you use them. <span className={styles.special_text}> Now here is how you use css in server components anyway:</span> just use jsx styling in the component itself (like the picture below) this will work fine, both on the localhost as in production. It does look messy but it solves the problem. OR you can use global classic css (like your global.css file or create your own) this is still not perfect, but it is better structured than plain jsx styling, and it makes making your pages responsive easier.</li>
            </ul>
            <li className={styles.text_list_special}>This is doesn`t work:</li>
            <div className={styles.picture_url_imports}><Image src={noCssUseJSX_1} alt='noCssUseJSX_1' /></div>
            <div className={styles.picture_url_imports}><Image src={noCssUseJSX_2} alt='noCssUseJSX_2' /></div>
            <li className={styles.text_list_special}>This does work:</li>
            <div className={styles.picture_url_imports}><Image src={noCssUseJSX_4} alt='noCssUseJSX_4' /></div>
          </div>

          <div>
            <p className={styles.steps_text}>Using css (modules) in client components that you later import in server components (react hydration error)</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>This problem was caused because I used a `Link` in a client component that I later imported in a server component, now because you can`t use state or Link in server components (despite the fact that it was in a client component) it bugged out because there was a `Link` imported in a server component via a client component, normally this should be fine but since server components are still in alpha this tends to bug out.<span className={styles.special_text}> Now here is how you fix it:</span> the `GoBackButton` was a client component with a Link in it, to fix it simply put a `{"<a></a>"}` tag with a href to the page you want it to go to. (and ps: use jsx styling to style it because vanilla css and css modules bug out as of December 2021)</li>
            </ul>
            <div className={styles.picture_url_imports}><Image src={reactHyderation_1} alt='reactHyderation_1' /></div>
            <li className={styles.text_list}>This is the server component:</li>
            <div className={styles.picture_url_imports}><Image src={reactHyderation_2} alt='reactHyderation_2' /></div>
            <li className={styles.text_list}>This is the client component with the Link in it (will give an error): </li>
            <div className={styles.picture_url_imports}><Image src={reactHyderation_3} alt='reactHyderation_3' /></div>
            <li className={styles.text_list}>And this is how you should change it:</li>
            <div className={styles.picture_url_imports}><Image src={reactHyderation_4} alt='reactHyderation_4' /></div>
          </div>

          <div>
            <p className={styles.steps_text}>Dissapearing css when refreshing while using vanilla css or css modules in client components</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>Because react server components are still in alpha there a lot of bugs that come with it... One of them is if you try to add vanilla css or css modules to a client component that you later add to a server component that it bugs out when refreshing, also as of December 2021 it is not recommended to use vanilla css or css modules in client or server components, use JSX styling instead.</li>
            </ul>
          </div>

          <div>
            <p className={styles.steps_text}>Element Type is invalid.</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>This was a simple bug but something you can easily forget, when using extensions like `react snippets` you can auto generate your component tree and because you used `example.client.js` or `example.server.js` your component is going to automatically be called example.client or example.server when removing them be sure to remove them both. In the picture below you can see me forgetting to remove the `.client`.</li>
            </ul>
            <div className={styles.picture_url_imports}><Image src={elementTypeInvalid2_1} alt='elementTypeInvalid2_1' /></div>
            <div className={styles.picture_url_imports}><Image src={elementTypeInvalid2_2} alt='elementTypeInvalid2_2' /></div>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>My opinion</h1>
          <p className={styles.text}>While the concept is really promessing and really cool, I wouldn`t recommend using it right now because it has a lot bugs coming with it like fetching data in a server component is still really buggy... I would rather recommend for really learning the theory behind it and using it in a couple of months when they release a stable version of react server components.</p>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Conclusion</h1>
          <p className={styles.text}>React Server Components allow developers to build apps that span the server and client, combining the rich interactivity of client-side apps with the improved performance of traditional server rendering.</p>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Want to try it yourself?</h1>
          <p className={styles.text}>Here is the demo I made in codeSandbox: <a href="https://codesandbox.io/s/suspicious-hofstadter-ek81o"> codeSandbox link</a> </p>
          <p className={styles.text}>Here is the demo I made on Github: <a href="https://github.com/GithubMVS/nextJS12_serverComponents_demo"> Suspense github link</a> </p>
          <p className={styles.text}>Here is my full project on github: <a href="https://github.com/GithubMVS/Passion-project_2021-2022"> fullproject github link</a> </p>
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
