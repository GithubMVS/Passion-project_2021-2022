import React, { useState, useEffect } from 'react'
import styles from './server_components.module.css'
import Image from 'next/image'


// clients comonents imports
import AddBlog from '../components/demos/server_components/addBlog.client'

// server comonents imports
import ServerTest from '../components/demos/server_components/likePerBlog.client'
import DetailBlog from '../components/demos/server_components/detailsBlog.server'

const server_components = () => {
  /* 
   // Hier komt de code van de fetch die alle blogtitels en de users ophaalt.
 
   // hier komt de code dat filterd door alle users
   const [searchBlogs, setSearchBlogs] = useState(true)
 
   // hier komt de code om te switchen tussen toevoegen en niet toevoegen.
   const [button, setButton] = useState(true)
   const [form, setForm] = useState(true)
 
   const switchForm = () => {
     setButton(!button)
     setForm(!form)
   }
 */
  return (
    <div>

      {/* Hier komt code van de sidebar
      <div className={styles.sideBarFull}>
        <div className={styles.sideBar__goBack}>
          <p className={styles.sideBar__goBack_image}>vervangen door image</p>
          <p className={styles.sideBar__goBack_text}>Go Back</p>
        </div>
        <h1 className={styles.sideBar__title}>How was your day blog</h1>

        <div className={styles.searchBlogsFull}>
          <div className={styles.searchBlogs}>
            <input placeholder="Search a blog" type="text" maxLength='25' onChange={(e) => setSearchBlogs(e.target.value)} className={styles.blogSearch}></input>
          </div>
          <button className={styles.button} style={{ display: button === true ? 'flex' : 'none' }} onClick={switchForm}>New</button>
          <button className={styles.button} style={{ display: button != true ? 'none' : 'flex' }} onClick={switchForm}>old</button>
        </div>

        <div>
          <AddBlog />
        </div>

        Hier ga je alle data in droppen van users en blogtitels
        <div>
          <DetailBlog />
        </div>

      </div>


      ook prop van welk id aka welk blog je selecteerd hebt en doorgeven aan de detailPage van de blog die server rendered is om zo via de fetch de details op te halen van die blog
      <ServerTest />
      */}
    </div>
  )
}

export default server_components
