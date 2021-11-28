import styles from '../Suspense/loadIcon.module.css'

import lottie from 'https://cdn.skypack.dev/lottie-web';

import { useEffect, useRef } from 'react'

const LoadIcon = () => {

  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      render: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../../public/test.json')
    })
  }, [])

  return (
    <div>
      <p> Loading pokemon data...</p>
      <div className={styles.container} ref={container}></div>
    </div>
  )
}

export default LoadIcon
