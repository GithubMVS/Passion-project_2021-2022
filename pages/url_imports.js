import React from 'react'
import styles from '../styles/explenation_template.module.css'

import Nav from '../components/index/Navigation'
import Link from 'next/link'
import Image from 'next/image'

// image imports
import step_4_1_url_imports from '../public/url_imports/explenation/step_4_1_url_imports.png'
import step_4_2_url_imports from '../public/url_imports/explenation/step_4_2_url_imports.png'
import framer_step_1 from '../public/url_imports/explenation/framer_step_1.png'
import framer_step_2 from '../public/url_imports/explenation/framer_step_2.png'
import framer_step_3 from '../public/url_imports/explenation/framer_step_3.png'
import framer_step_4 from '../public/url_imports/explenation/framer_step_4.png'
import framer_step_4_1 from '../public/url_imports/explenation/framer_step_4_1.png'
import navigator_not_found from '../public/url_imports/explenation/navigator_not_found.png'

const url_imports = () => {
  return (
    <div className={styles.fullExplenation}>
      <div className={styles.header}>
        <Nav />
        <div className={styles.headerInfo}>
          <h1 className={styles.headerInfo_title}>URL-imports</h1>
          <p className={styles.headerInfo_text}>Next.js 12 includes experimental support for importing ES Modules through URLs, no install or separate build step is required.</p>
          <Link href="/demos/url_imports/demo"><a className={styles.links_toDemo}>Try out demo</a></Link>
        </div>
      </div>

      <article className={styles.explenation}>
        <h1 className={styles.displayNone}> full explenation</h1>

        <section className={styles.oneXtwo}>
          <h1 className={styles.displayNone}>What are url imports?</h1>
          <div className={styles.titleWithText}>
            <h1 className={styles.title}>So what are url imports?</h1>
            <p className={styles.text}>NextJs now natively supports ES modules enabling the industry to transition away from CommonJs module system, but it also introduces such thing as URL imports. You can now easily import 3rd party libraries without installing it through npm.</p>
          </div>
          <div className={styles.titleWithText}>
            <h1 className={styles.title}>Why is it great? (or not)</h1>
            <p className={styles.text}>URL imports allow you to use any package directly through a URL. This enables Next.js to process remote HTTP(S) resources exactly like local dependencies.</p>
          </div>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.displayNone}> pros and cons</h1>

          <div className={styles.explenation_Part_list}>
            <p className={styles.title}>Pro’s of url imports:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>We can now import directly tooling from the CDN without any extra builds or installs.</li>
              <li className={styles.text_list}>We will be able to import those from the wire rather than having to build them locally.</li>
              <li className={styles.text_list}>It creates ready-for-production tools without the hassle of compiling and bundling them.</li>
              <li className={styles.text_list}> It scans NPM and builds executable ES module packages that you can import from your Browser.</li>
            </ul>
          </div>

          <div className={styles.explenation_Part_list_two}>
            <p className={styles.title}>Con’s of url imports:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>(For now) The URL has to be specified in the next.config.js file.</li>
              <li className={styles.text_list}>Not everything is supported yet.</li>
            </ul>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>URL-imports explained in a sentence:</h1>
          <p className={styles.text}>Instead of using npm or yarn to manage your packages and imports you can now use url imports and use imports, modules or packages without ever using npm or yarn.</p>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>How to do this in nextJS?</h1>
          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>1: Make sure you are on the latest version of nextJS (nextJS12) by installing the latest version of next with yarn or npm:</p>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>add the latest version of next with yarn or npm:</p>
              <p className={styles.copyThis_text}>{`npm install next@12`}</p>
              <p className={styles.copyThis_text}>{`#or`}</p>
              <p className={styles.copyThis_text}>{`yarn add next@12`}</p>
            </div>
          </div>


          <div className={styles.steps_full}>
            <p className={styles.steps_text}>2: Then chose a CDN that serves ES modules (I used skypack for this demo):</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>Skypack</li>
              <li className={styles.text_list}>esm.sh</li>
              <li className={styles.text_list}>jsDelivr</li>
              <li className={styles.text_list}>JSPM</li>
              <li className={styles.text_list}>JunpkgSPM</li>
            </ul>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>3: add the allowed URL prefixes inside your next.config.js like below:</p>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>Add this to your next.config.js:</p>
              <p className={styles.copyThis_text}>{`module.exports = {`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`reactStrictMode: true,`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`experimental: {`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`urlImports: [`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`'https://cdn.skypack.dev',`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`]`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`}`}</p>
              <p className={styles.copyThis_text}>{`}`}</p>
            </div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>4: Now search for a library on skypack and import it and write your own code for it:</p>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>This is how the import should look like:</p>
              <p className={styles.copyThis_text}>{`import yourLibrary from 'https://cdn.skypack.dev/yourLibrary'`}</p>
            </div>
            <div className={styles.picture_url_imports}><Image src={step_4_1_url_imports} alt='step_4_1_url_imports' /></div>
            <Image src={step_4_2_url_imports} alt='step_4_2_url_imports' />
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>This is how you could trigger your library:</p>
              <p className={styles.copyThis_text}>{`onClick={yourwrittenFunction}'`}</p>
            </div>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Other possibilities of using this:</h1>
          <ul className={styles.list}>
            <li className={styles.text_list}>Static Image Imports</li>
            <li className={styles.text_list}>You can use framer to import components without writing code or to work in team.</li>
            <li className={styles.text_list}>URLs in CSS</li>
            <li className={styles.text_list}>Asset Imports</li>
            <li className={styles.text_list}><strong>Read all about them here:</strong> https://nextjs.org/docs/api-reference/next.config.js/url-imports#static-image-imports</li>
          </ul>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>When to choose for url-imports:</h1>
          <p className={styles.text}>Right now you should be careful of using them because they are still experimental, but in the future There should not be a reason why you should not use them (except if they are not supported or do not work) because they reduce the client side bundel.</p>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>My personal opinion on this:</h1>
          <p className={styles.text}>I think they very neat and useful, it saves time and space for the client, so there really is not a reason not to use it. But be careful because it is still in development and there are still a lot of bugs around it, especially in production.</p>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Using framer to import components without writing any component code, how???</h1>
          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>1: go to framer.com</p>
            <div className={styles.picture_url_imports}><Image src={framer_step_1} alt='framer_step_1' /></div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>2: make an account</p>
            <div className={styles.picture_url_imports}><Image src={framer_step_2} alt='framer_step_2' /></div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>3: make a component of your choosing (you can even animate it)</p>
            <div className={styles.picture_url_imports}><Image src={framer_step_3} alt='framer_step_3' /></div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>4: export the component by clicking on handshake and copy the code to your clipboard</p>
            <div className={styles.picture_url_imports}><Image src={framer_step_4} alt='framer_step_4' /></div>
            <div className={styles.picture_url_imports}><Image src={framer_step_4_1} alt='framer_step_4_1' /></div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>5: Go to your next.config.js and add the following (also do yarn add framer or npm i framer)</p>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>Add this to your next.config.js:</p>
              <p className={styles.copyThis_text}>{`module.exports = {`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`reactStrictMode: true,`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`experimental: {`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`urlImports: [`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`'https://cdn.skypack.dev',`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`"https://framer.com/m/",`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`"https://framerusercontent.com/",`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`"https://ga.jspm.io/",`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`"https://jspm.dev/",`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`]`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`}`}</p>
              <p className={styles.copyThis_text}>{`}`}</p>
            </div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>6: import and add the link to a file of your choosing and import it like a component </p>
          </div>
          <div className={styles.copyThis}>
            <p className={styles.copyThis_title}>Add this on top of your file:</p>
            <p className={styles.copyThis_text}>{`import Test from "https://framer.com/m/Test-gXlx.js@2KpFwcsskFbCiEMKPDm5"`}</p>
          </div>

          <div className={styles.copyThis}>
            <p className={styles.copyThis_title}>Add this where you want the component to be placed:</p>
            <p className={styles.copyThis_text}>{`<Test variant="variant 1"/>`}</p>
          </div>

        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Some challenges I faced, and how I fixed them:</h1>
          <div>
            <p className={styles.steps_text}>Finding a good CDN:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>In this example I used skypack, but this was not the first one I played around with, I would definitely recommend skypack, because it is very user-friendly and easy to use.</li>
            </ul>
          </div>
          <div>
            <p className={styles.steps_text}>Being on the latest version of nextJS:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>This one is an easy one but also an easy one to forget... simply yarn add or npm install `next@12`` in your terminal and you should be good to go</li>
            </ul>
          </div>
          <div>
            <p className={styles.steps_text}>Getting the right export in next.config.js when using framer, there are 2 things that need to be done:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>yarn add or npm install framer</li>
              <li className={styles.text_list}>add the following in your next.config.js</li>
            </ul>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>Add this:</p>
              <p className={styles.copyThis_text}>{`module.exports = {`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`reactStrictMode: true,`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`experimental: {`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`urlImports: [`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`'https://cdn.skypack.dev',`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`]`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`}`}</p>
              <p className={styles.copyThis_text}>{`}`}</p>
            </div>
          </div>
          <div>
            <p className={styles.steps_text}>Importing skypack in your next.config.js:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>This is very irritating if you forget it, here is how your next.config.js should look like:</li>
            </ul>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>Add this to your next.config.js:</p>
              <p className={styles.copyThis_text}>{`module.exports = {`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`reactStrictMode: true,`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`experimental: {`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`urlImports: [`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`'https://cdn.skypack.dev',`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`"https://framer.com/m/",`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`"https://framerusercontent.com/",`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`"https://ga.jspm.io/",`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`"https://jspm.dev/",`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{`]`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`}`}</p>
              <p className={styles.copyThis_text}>{`}`}</p>
            </div>
          </div>
          <div>
            <p className={styles.steps_text}>Having the error message `ReferenceError: navigator is not defined`:</p>
            <Image src={navigator_not_found} alt='navigator_not_found' />
            <ul className={styles.list}>
              <li className={styles.text_list}>This error is displayed because you are not on the beta version of framer thus you can not use url imports in framer... To fix this implement this in your terminal:</li>
            </ul>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>Add this to your terminal:</p>
              <p className={styles.copyThis_text}>yarn add framer@beta</p>
            </div>
          </div>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Conclusion</h1>
          <p className={styles.text}>NextJs now natively supports ES modules enabling the industry to transition away from CommonJs module system, but it also introduces such thing as URL imports. You can now easily import 3rd party libraries without installing it through npm.</p>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Want to try it yourself?</h1>
          <p className={styles.text}>Here is the demo I made in codeSandbox: <a href="https://codesandbox.io/s/nervous-keldysh-0oh8h"> codeSandbox link</a> </p>
          <p className={styles.text}>Here is the demo I made on Github: <a href="https://github.com/GithubMVS/url_imports_nextJS12_demo"> Suspense github link</a> </p>
          <p className={styles.text}>Here is my full project on github: <a href="https://github.com/GithubMVS/Passion-project_2021-2022"> fullproject github link</a> </p>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>My used resources:</h1>
          <ul className={styles.list}>
            <li className={styles.text_list}>https://nextjs.org/docs/upgrading</li>
            <li className={styles.text_list}>https://nextjs.org/blog/next-12#url-imports </li>
            <li className={styles.text_list}>https://nextjs.org/docs/api-reference/next.config.js/url-imports </li>
            <li className={styles.text_list}>https://betterprogramming.pub/5-new-killer-features-of-next-js-12-dfd1d766b539 </li>
            <li className={styles.text_list}>https://medium.com/@rolyuhh/nextjs-v12-in-a-nutshell-df1e9bbdf260 </li>
            <li className={styles.text_list}>https://www.skypack.dev/</li>
            <li className={styles.text_list}>https://framer.com/projects/  </li>
          </ul>
        </section>

      </article>
    </div>
  )
}

export default url_imports
