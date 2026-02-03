import React from 'react'

import Header from './components/header/Header'
import Content from './components/content/Content'
import Footer from './components/footer/Footer'
import ImageCard from './components/imagecard/ImageCard'
import Frog from './assets/Frog_on_palm_frond.jpg'

function App() {
  return (
    <div>
      <Header pagetitle="Min Side Titel" />
      <Content paragraphOne="Velkommen til min side." paragraphTwo="Her kan du finde information om hvad siden" paragraphThree="kontaktoplysninger findes i bunden af siden." picture={Frog} />
      <Footer email="Dvajhoej@gmail.com" phone="+45 61 44 44 52" address="Lønneparken 4.1.7, 9000 Aalborg" />


      <ImageCard title="Frog on Palm Frond" description="A beautiful frog sitting on a palm frond.">
        <img src={Frog} alt="Frog on palm frond" />
      </ImageCard>
    </div>
  )
}


export default App

