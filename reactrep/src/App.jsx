import React from 'react'
import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Header pagetitle="Min Side Titel" />
      <Content paragraphOne="Velkommen til min side." paragraphTwo="Her kan du finde information om hvad siden" paragraphThree="kontaktoplysninger findes i bunden af siden." />
      <Footer email="Dvajhoej@gmail.com" phone="+45 61 44 44 52" address="Lønneparken 4.1.7, 9000 Aalborg" />
    </div>
  )
}


export default App

