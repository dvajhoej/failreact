import React from 'react'

export default function Image({scr, alt = "Billede"}) {
  return (
    <img src={scr} alt={alt} />
  )
}




