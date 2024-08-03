import React from 'react'
import Navbar from '../Navbar/Navbar'
import MainSection from '../MainSection/MainSection'
import OurCollection from '../OurCollection/OurCollection'
import ChooseSection from '../ChooseSection/ChooseSection'
import WorkSection from '../WorkSection/WorkSection'
import Footer from '../Footer/Footer'
const Main = () => {
  return (
    <div >
       
        <MainSection/>
        <OurCollection/>
        <ChooseSection/>
        <WorkSection/>

    </div>
  )
}

export default Main