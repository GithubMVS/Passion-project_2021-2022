import { format } from 'date-fns';

export default function detailsBlog() {

  const updatedAt = new Date(2014, 1, 11)
  const lastUpdateAt = format(updatedAt, 'M/d/yy')

  return (
    <div className={styles.users}>
      <div className={styles.user}>
        <div className={styles.user_data}>
          <p>{lastUpdateAt}</p>
          <h1 className={styles.user_data_blogTitle}>random title, for example purposes</h1>
          <p className={styles.user_data_name}>userNameJpeg</p>
        </div>
        <div className={styles.allLikes}>
          <p className={styles.like}>42</p>
          <p className={styles.allLikes_image}>vervangen door image</p>
        </div>
      </div>
    </div>
  )
}