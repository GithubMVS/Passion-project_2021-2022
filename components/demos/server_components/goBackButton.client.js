import React from 'react'

// images 
import goBack from '../../../public/arrow_goBack.svg'

// next imports
import Image from 'next/image'

const GoBackButton = () => {
  return (
    <div className="fullButton">
      <Image src={goBack} alt='goBack' />
      <a href="https://passion-project-2021-2022.vercel.app/" className="fullButton_text">See other demos</a>
    </div >
  )
}

export default GoBackButton
