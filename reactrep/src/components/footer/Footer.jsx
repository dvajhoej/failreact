import React from 'react'

export default function Footer({email, phone, address}) {
	return (
		<footer>
			<ul>
				<li>Email: {email}</li>
				<li>Telefon: {phone}</li>
				<li>Adresse: {address}</li>
			</ul>
		</footer>
	)
}

