import React, { useState } from 'react'

const addBlog = () => {
  // hier komt de code om een post van een specifieke user toe te voegen aan de firebase database
  const [blogTitle, setBlogTitle] = useState('no title given...')
  const [description, setDescription] = useState('no description given...')

  return (
    <div className={styles.blogInputs} style={{ display: form != true ? 'flex' : 'none' }}>
      <input placeholder="Blog title" type="text" maxLength='25' onChange={(e) => setBlogTitle(e.target.value)} className={styles.blogTitle}></input>
      <input placeholder="Blog description" type="text" maxLength='500' onChange={(e) => setDescription(e.target.value)} className={styles.blogDescription}></input>
      <button className={styles.postBlogButton}>post</button>
    </div>
  )
}

export default addBlog

