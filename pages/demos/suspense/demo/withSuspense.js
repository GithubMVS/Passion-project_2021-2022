import styles from '../demo/suspense.module.css'

import { Suspense } from 'react'

import AllPokemonData from '../../../../components/demos/Suspense/AllPokemonData'

import Load from '../../../../components/demos/Suspense/LoadIcon'

const WithSuspense = () => {
  return (
    <div>
      <Suspense fallback={<Load />}>
        <AllPokemonData />
      </Suspense>
    </div>
  )
}

export default WithSuspense
