import React from 'react'
import confetti from 'https://cdn.skypack.dev/canvas-confetti'
import { useEffect } from 'react'

const demo = () => {

  const throwConfetti = () => {
    confetti()
  }

  return (
    <div>
      <button onClick={throwConfetti}>
        Throw Confetti
      </button>
    </div>
  )
}

export default demo
