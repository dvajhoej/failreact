import React from 'react'

export default function Content({paragraphOne, paragraphTwo, paragraphThree}) {
	return (
		<main>
			<p>{paragraphOne}</p>
			<p>{paragraphTwo}</p>
			<p>{paragraphThree}</p>
		</main>
	)
}

