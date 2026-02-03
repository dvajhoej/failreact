import React from 'react'

export default function ImageCard({title, description, children}) {
  return (
    <div>
        {children}
        <h2>{title}</h2>
        <p>{description}</p>
        
    </div>
  )
} 
