import styles from '../pages/newFeatures.module.css'
import Link from 'next/link'
import Navigation from '../components/index/Navigation'
import Head from 'next/head'

const NewFeatures = () => {
  return (
    <div>
      <Head>
        <title>New features</title>
        <meta name="description" content="New features" />
      </Head>
      <Navigation />
      <p>newFeatures</p>
    </div>
  )
}

export default NewFeatures
