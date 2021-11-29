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
      animationData: require('../../../public/suspenseAnimation.json')
    })
  }, [])

  return (
    <div className={styles.container_full}>
      <div className={styles.container} ref={container}></div>
      <p className={styles.container_title}>Loading pokemon data...</p>
    </div>
  )
}

export default LoadIcon
