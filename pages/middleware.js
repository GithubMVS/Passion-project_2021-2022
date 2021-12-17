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
import show_react18 from '../public/middleware_pictures/show_react18.png'
import fault_next_server_sub_directory from '../public/middleware_pictures/fault_next_server_sub_directory.png'
import fault_sub_directory_middleware from '../public/middleware_pictures/fault_sub_directory_middleware.png'

// how to do this in nextJS
import middleware_in_sub_directories from '../public/middleware_pictures/middleware_in_sub_directories.png'
import middleware_not_scoped from '../public/middleware_pictures/middleware_not_scoped.png'

const middleware = () => {
  return (
    <div className={styles.fullExplenation}>
      <div className={styles.header}>
        <Nav />
        <div className={styles.headerInfo}>
          <h1 className={styles.headerInfo_title}>Middleware</h1>
          <p className={styles.headerInfo_text}>Middleware enables you to use code over configuration. Now you can run code before a request is completed.</p>
          <Link href="https://middleware-next-js-12-demo.vercel.app/"><a className={styles.links_toDemo}>Try out demo</a></Link>
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
            <p className={styles.text}>You can run code before a request is made meaning that you can change, redirect or even stream html. This is very exciting because not only can you do that the middleware also runs on all pages (and in subdirectories only effecting the pages in the subdirectory) meaning that it is write once works everywhere. </p>
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
            <p className={styles.steps_text}>1: First off all make sure you are on nextJS version 12</p>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>Like this, with yarn or npm:</p>
              <p className={styles.copyThis_text}>{`npm install next@12`}</p>
              <p className={styles.copyThis_text}>{`#or`}</p>
              <p className={styles.copyThis_text}>{`yarn add next@12`}</p>
            </div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>2: After this make sure that your next.config file is up to date.</p>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>Add this to your next.config.js:</p>
              <p className={styles.copyThis_text}>{`module.exports = {`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`reactStrictMode: true,`}</p>
              <p className={styles.copyThis_text}>{`}`}</p>
            </div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>3: Now we can start. But first of all I want to make a couple things clear:</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>Middleware is code that runs before a request is done.</li>
              <li className={styles.text_list}>When putting your middleware in the pages folder it runs on all files including the subirectories.</li>
              <li className={styles.text_list}>As of December 2021 server components and middleware can’t be on the same project, keep this in mind.</li>
            </ul>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>4: You can also scope the middleware this way the middleware will only run on the files in your subdirectory like below. (The red rectangles are scoped middleware)</p>
            <li className={styles.text_list}>Scoped middleware looks like this:</li>
            <div className={styles.picture_url_imports}><Image src={middleware_in_sub_directories} alt='middleware_in_sub_directories' /></div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>5: So to use Middleware simply add “_middleware” where it needs to be (this can be in a sub directory or just in the pages directory).</p>
            <li className={styles.text_list}>Middleware that runs on every page looks like this (for example this also runs on the pages in the folder `demo2`):</li>
            <div className={styles.picture_url_imports}><Image src={middleware_not_scoped} alt='middleware_not_scoped' /></div>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>6: Now to use middleware in sub directories is still a little buggy but here is a code template where you use to make it work.</p>
            <li className={styles.text_list}>You can find an empty demo for this <a href="​https://codesandbox.io/s/dazzling-wozniak-imw17">here</a></li>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>7: Here is the default code you need to write (also note that this is in typescript and be aware that there are also other possibilities + you don`t need to call your function `middleware`), also here is the documentation of all the things you can do with middleware.</p>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>The demo code for middleware:</p>
              <p className={styles.copyThis_text}>{`import { NextRequest, NextResponse } from 'next/server'`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`export async function middleware(req: NextRequest) {`}</p>
              <p className={styles.copyThis_text}>{`}`}</p>
            </div>
            <p className={styles.text}>You can find the documentation: <a href="https://nextjs.org/docs/middleware"> here</a> </p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>8: Now That’s it, now you just need to be creative ;)</p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text}>9: The only thing you need to do is write the code! (below are is some examples of vercel`s middleware and edge functions the code for the demo`s I made.)</p>
            <p className={styles.text}>Find Vercel`s examples: <a href="https://github.com/vercel/examples/tree/main/edge-functions"> here</a> </p>
            <p className={styles.text}>Find my code: <a href="https://github.com/GithubMVS/middleware_nextJS12_demo"> here</a> </p>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Bonus: What are edge functions</h1>
          <p className={styles.text}>When deploying your middleware on Vercel, Vercel makes edge functions from your middleware. Noww what are edge functions. They are middleware that is deployed all around the world. So when someone tries your application with middleware they fetch that code from the server which is geoghraphicly closed to you so this means it is lightning fast which opens up the ability to make your pages dynamic with middleware and make it fast with edge functions! Here are some guys on twitter who also explain it very well.</p>
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
          <h1 className={styles.title}>The demo explained</h1>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>1: Because you can do so many things with middleware, I prepared 3 demo`s</p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>2: In this demo I’ll focus on the demo called `My own small project`</p>
            <li className={styles.text_list}>You can find the code of all three projects below: <a href="https://github.com/GithubMVS/middleware_nextJS12_demo">here</a> </li>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>3: This demo is quite simple, we all know some sites use a promotion they’ll promise to do in a week or brand new clothes that drop in a month and mostly things like this are paired with a countdown or a date that they set to really hype up their fans or consumers… Now this demo will do exactly that, we”ll create a page that is only accessible after a certain period if it not that period yet then we’ll go to a fallback page.</p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>4: So first create a folder that contains a `countDown.js` folder. The `countDown.js` is going to be your `fallback` page. Your director should look like this:</p>
            <li className={styles.text_list}> You can copy the folder right: <a href="https://codesandbox.io/s/tender-wind-mdynk?file=/src/App.js">here</a> </li>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>5: Then in the `countDown.js` file in the following code (if you would like to add costum code that’s fine):</p>
            <li className={styles.text_list}>You can find the code <a href="https://codesandbox.io/s/stupefied-brahmagupta-jz9zz?file=/src/copy.js">here</a></li>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>6: If you have done that create a folder named `secret_page` with 2 files inside `demo.js` this could be your webshop with new clothes or discounts, let your imagination flow and `_middleware.ts` This file is to make sure you really can’t access the page before the time is up, your folder should look like this:</p>
            <li className={styles.text_list}> You can copy the folder right: <a href="https://codesandbox.io/s/zen-zhukovsky-iz1h2?file=/src/App.js:146-157">here</a> </li>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>7: Now add a new folder called `demo4` with a _middleware.ts and a demo.js file inside the demo.js is just a redirect file so it doesn`t matter what`s inside. The _middleware is for checking if your current time is not over a certain given time. And based on that it will redirect you to the secret page or the fallback page.</p>
            <li className={styles.text_list}> Your can find the _middleware: <a href="https://codesandbox.io/s/bitter-meadow-yi9l5?file=/src/App.js">here</a> </li>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>8: The _middleware of the `demo4` folder explained:</p>
            <li className={styles.text_list}>We use the `moment` library to get the users current time</li>
            <li className={styles.text_list}>Than we put it in a variable called `currentime`.</li>
            <li className={styles.text_list}>After this we create a new variable called `accessTime` were we set a given time where the for example launch should take place.</li>
            <li className={styles.text_list}>Then we create a variable that compares these 2 variables like this {`(const afterDate = currentTime > accessTime)`} this will result in true or false.</li>
            <li className={styles.text_list}>If it is true, that means that the time given by you has already passed for the user. And it will send the user to the secret page or the page with the new clothes for example.</li>
            <li className={styles.text_list}>If it is false it will return the user to the fallback page.</li>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>9: Now one last thing you should do is make a link in your index page linking to the redirect page aka ‘/demo4/demo’.</p>
            <li className={styles.text_list}> Mine looks like this: <a href="https://codesandbox.io/s/throbbing-resonance-u8o0y?file=/src/copy.js">here</a> </li>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>10: Your done!</p>
          </div>

          <div className={styles.steps_full}>
            <p className={styles.steps_text_special}>11: Again you can find all the code here:</p>
            <li className={styles.text_list}>The code: <a href="https://github.com/GithubMVS/middleware_nextJS12_demo">here</a> </li>
          </div>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Some challenges I faced, and how I fixed them:</h1>
          <div>
            <p className={styles.steps_text}>Using middleware in a sub directory [solved]</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>With this bug I tried everything from: map structure, map naming, faults in css processor, typo, etc... but nothing helped...  the weird part was it worked on my localhost but it didn`t work in production in Vercel, there was also this weird thing that if I put the middleware in my man folder it would work perfectly both in production and on localhost but I obviously did not want that so I kept searching for the bug. Now since I knew the bug was only in production and continuously debugging and pushing to production isn`t really a clean method to work with I made a second website with exactly the same content and I pushed that to production because this version wasn`t really important or linked to other important things, it was basically a (debug) playing field. Now after continuously searching for the bug for a couple of days I finally found it!.<Image src={fault_sub_directory_middleware} alt='fault_sub_directory_middleware' /> <br></br> <br></br>A big part of my project is the integration of the alpha version of react 18, this is still experimental and to use this u need to add server components and concurrent mode in the next.config.js like below:<br></br><Image src={show_react18} alt='show_react18' /><br></br><br></br> Now after trying a 100 things I got they idea that maybe the fault was in the next.config (spoiler alert it was). So after replacing my edited next.config to a standard version and pushing to production I noticed that it worked, now here is the problem, like I said to make react 18`s work you need to activate server components and concurrent mode in the next.config.js now because middleware is in beta and react 18 is in alpha, it seems that these 2 don`t really work well together as they should... Basically the 2 work separately but not both in the same project, it is either A or B. So if you remove the server components and concurrent mode in the next.config.js. You should be fine and the error (see below) should be fine.</li>
            </ul>
            <div className={styles.copyThis}>
              <p className={styles.copyThis_title}>To make this work your next.config.js should look like this:</p>
              <p className={styles.copyThis_text}>{`module.exports = {`}</p>
              <p className={styles.copyThis_text}>&nbsp;&nbsp;&nbsp;{`reactStrictMode: true,`}</p>
              <p className={styles.copyThis_text}>{`}`}</p>
            </div>
          </div>

          <div>
            <p className={styles.steps_text}>Using next/server in a sub directory [solved]</p>
            <ul className={styles.list}>
              <li className={styles.text_list}>Like the picture below you can see that I had the problem that I couldn`t use next/server in a subdirectory, now that was very weird because on some of the examples Vercel gave on middleware they used next/server in subdirectories. Then it hit me... They probably modified the files to let it work in subdirectories.<Image src={fault_next_server_sub_directory} alt='fault_next_server_sub_directory' /> <br></br><br></br>Now the way I fixed this was that I copied a file where it worked from an example that Vercel gave us, removed all the unnecessary files and replaced them with my own. It shouldn`t always be hard to solve a problem :).</li>
              <br></br>
              <li className={styles.text_list}>You can find an empty demo for this <a href="​https://codesandbox.io/s/dazzling-wozniak-imw17">here</a></li>
            </ul>
          </div>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Conclusion</h1>
          <p className={styles.text}> Middleware is way to intercept a http request and put some of your own code before the user receives that request. This for example makes it possible to make dynamic pages at the speed of static pages. Now Middleware is defenitly a game changer for nextJS while it has a wide range of use cases I believe it will be mostly used for authentication, A/B testing, and things like regional discounts.</p>
        </section>

        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>Want to try it yourself?</h1>
          <p className={styles.text}>Here is the demo I made in codeSandbox: <a href="https://codesandbox.io/s/kind-scott-xvqtx"> codeSandbox link</a> </p>
          <p className={styles.text}>Here is the demo I made on Github: <a href="https://github.com/GithubMVS/middleware_nextJS12_demo"> Suspense github link</a> </p>
          <p className={styles.text}>Here is my full project on github: <a href="https://github.com/GithubMVS/Passion-project_2021-2022"> fullproject github link</a> </p>
        </section>


        <section className={styles.spaceBetweenExplenation}>
          <h1 className={styles.title}>My used resources:</h1>
          <ul className={styles.list}>
            <li className={styles.text_list}>https://javascript.plainenglish.io/middleware-in-next-js-12-what-are-they-and-how-to-get-started-with-them-2bce9ae073eb</li>
            <li className={styles.text_list}>https://nextjs.org/blog/next-12#introducing-middleware</li>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=RaaSmWPmjM0</li>
            <li className={styles.text_list}>https://blog.anishde.dev/middleware-in-nextjs-12-what-are-they-and-how-to-get-started-with-them#comments-list</li>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=NlBSheYPKkg</li>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=lRQ5z7i7pxE</li>
            <li className={styles.text_list}>https://www.youtube.com/watch?v=oZb0skkJbwA</li>
            <li className={styles.text_list}>{`https://www.youtube.com/watch?v=yuxd2kurpzk&list=PLth-Zs3s81_1GpUyXJBFwxb24dcEMckQp&index=7`}</li>
            <li className={styles.text_list}>https://dev.to/hunterbecton/middleware-in-next-js-moving-from-express-1bmf</li>
            <li className={styles.text_list}>https://hackernoon.com/an-intro-to-middleware-in-nextjs-12?source=rsshttps://hackernoon.com/an-intro-to-middleware-in-nextjs-12?source=rss</li>
            <li className={styles.text_list}>https://nextjs.org/docs/middleware</li>
          </ul>
        </section>

      </article>

    </div>

  )
}

export default middleware
