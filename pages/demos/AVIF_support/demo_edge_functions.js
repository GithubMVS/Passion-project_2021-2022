import { useState } from 'react'
import styles from '../AVIF_support/demo.module.css'

const EdgeFunctions = () => {

}

const noEdgeFunctions = () => {

}

const Demo = () => {
  return (
    <div className={styles.edgeFunctions_full}>
      <h1 className={styles.edgeFunctions_full_title}>Edge functions demo</h1>
      <p className={styles.edgeFunctions_full_explenation}>explenation edge functions</p>
      <div className={styles.edgeFunctions_demoFull}>
        <div className={styles.edgeFunctions_demoFull_left}>
          <div className={styles.edgeFunctions_api}>
            <p className={styles.edgeFunctions_api_title}>API data -- title</p>
            <p className={styles.edgeFunctions_api_description}>API data -- description Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate</p>
          </div>
          <div className={styles.edgeFunctions_tryout_full}>
            <p className={styles.edgeFunctions_tryout_full_title}>edge functions</p>
            <p className={styles.edgeFunctions_tryout_full_explenation}>explenation edge functions</p>
            <button onClick={EdgeFunctions} className={styles.edgeFunctions_tryout_full_button}>try out</button>
          </div>
          <div className={styles.edgeFunctions_tryout_full}>
            <p className={styles.edgeFunctions_tryout_full_title}>edge functions</p>
            <p className={styles.edgeFunctions_tryout_full_explenation}>explenation edge functions</p>
            <button onClick={noEdgeFunctions} className={styles.edgeFunctions_tryout_full_button}>try out</button>
          </div>
        </div>
        <div className={styles.edgeFunctions_demoFull_right}>
          <div className={styles.testSpeed_full}>
            <p className={styles.testSpeed_full_title}>speed with edge functions</p>
            <p className={styles.testSpeed_full_actualSpeed}>200</p>
            <p className={styles.testSpeed_full_milisecondsText}>ms</p>
          </div>

          <div className={styles.testSpeed_full}>
            <p className={styles.testSpeed_full_title}>speed with edge functions</p>
            <p className={styles.testSpeed_full_actualSpeed}>200</p>
            <p className={styles.testSpeed_full_milisecondsText}>ms</p>
          </div>

          <div className={styles.testSpeed_full}>
            <p className={styles.testSpeed_full_title}>speed with edge functions</p>
            <p className={styles.testSpeed_full_actualSpeed}>200</p>
            <p className={styles.testSpeed_full_milisecondsText}>ms</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Demo
