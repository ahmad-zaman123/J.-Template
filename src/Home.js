import React from 'react'
import Navigation from './Navigation';
import Slider1 from './Slider1';
import Container1 from './Container1';
import Container2 from './Container2';
import Container3 from './Container3';
import SignUpSection from './SignUp';
import Footer from './Footer';
import BoysandGirls from './BoysandGirls';


function Home() {
  return (
    <>
    <br/>
    <Slider1></Slider1>
    <br/>
    <Container1></Container1>
    <Container2></Container2>
    <br/><br/><br/>
    <Container3 pic = {"https://www.junaidjamshed.com/media/wysiwyg/banner03.jpg"}></Container3>
    <br/><br/><br/>
    <Container3 pic = {"https://www.junaidjamshed.com/media/wysiwyg/makeup_28.jpg"}></Container3>
    <br/><br/><br/><br/><br/><br/><br/>
    <BoysandGirls></BoysandGirls>
    
    </>
  )
}

export default Home