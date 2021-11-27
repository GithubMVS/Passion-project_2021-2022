import React from 'react'
import confetti from 'https://cdn.skypack.dev/canvas-confetti'
import roll from 'https://cdn.skypack.dev/roll';
import uiwCopyToClipboard from 'https://cdn.skypack.dev/@uiw/copy-to-clipboard';
import tinyTimer from 'https://cdn.skypack.dev/tiny-timer';
import Link from 'next/link'


const Demo = () => {

  const throwConfetti = () => {
    confetti()
  }

  const rollDice = () => {
    rollDice = new roll();
    const oneDie = rollDice.roll('d6');
  }

  const countDown = () => {
    const timer = new tinyTimer()
    timer.on('tick', (ms) => console.log('tick', ms))
    timer.on('done', () => console.log('done!'))
    timer.on('statusChanged', (status) => console.log('status:', status))
    timer.start(10000) // run for 5 seconds
  }

  const copyToClipboard = () => {
    uiwCopyToClipboard('https://www.youtube.com/watch?v=dQw4w9WgXcQ', (isCopy) => {
    });
  }

  return (
    <div>
      <div>
        <Link href="/middleware"><a className={styles.links_learnMore}>See other demos</a></Link>
      </div>

      <button onClick={throwConfetti}>
        Throw Confetti
      </button>
      <button onClick={rollDice}>
        roll a dice
      </button>

      <button onClick={countDown}>
        countdown 5 seconds
      </button>

      <button onClick={copyToClipboard}>
        copy to clipboard
      </button>


    </div>
  )
}

export default Demo
