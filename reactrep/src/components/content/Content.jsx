import React from 'react'
import './Content.css'
export default function Content({paragraphOne, paragraphTwo, paragraphThree, picture}) {
	return (
		<>
			<p>{paragraphOne}</p>
			<p>{paragraphTwo}</p>
			<p>{paragraphThree}</p>
			<img className='frog' src={picture} alt="Content related" />
		</>
	)
}

