import styles from '../pages/allDemos.module.css'
import Link from 'next/link'
import Navigation from '../components/index/Navigation'
import Head from 'next/head'


const AllDemos = () => {
  return (
    <div>
      <Head>
        <title>all Demos</title>
        <meta name="description" content="all Demos" />
      </Head>
      <Navigation />
      <p>all Demos</p>
    </div>
  )
}

export default AllDemos
