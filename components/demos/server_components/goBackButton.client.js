import React from 'react'

// images 
import goBack from '../../../public/arrow_goBack.svg'

// next imports
import Image from 'next/image'

const GoBackButton = () => {
  return (
    <div style={{ padding: "5rem 20rem", display: "flex", alignItems: "center" }}>
      <Image src={goBack} alt='goBack' />
      <a href="https://passion-project-2021-2022.vercel.app/" style={{ color: "#9055FF", textDecoration: "none", fontFamily: "Neue Montreal, Helvetica, sans-serif, Arial", fontSize: "2rem", paddingLeft: "2.5rem", fontWeight: "700" }}>See other demos</a>
    </div >
  )
}

export default GoBackButton
