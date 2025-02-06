import React from 'react'
import Navigation from './Navigation'
import TwoBlock from './TwoBlock'
import ThreeBlock from './ThreeBlock'
import Board from './Board'
import SignUpSection from './SignUp'
import Footer from './Footer'
import SectionHeader from './SectionHeader'
import MenClothBox from './MenClothBox'
import CapBox from './CapBox'
import Aromatics from './Aromatics'

function Men() {
  return (
    <>
    <br/>
    <TwoBlock img1="https://www.junaidjamshed.com/media/wysiwyg/01_10.jpg" img2="https://www.junaidjamshed.com/media/wysiwyg/02_8.jpg"></TwoBlock>
    <br/><br/>
    <ThreeBlock img1="https://www.junaidjamshed.com/media/wysiwyg/fabric.jpg" img2="https://www.junaidjamshed.com/media/wysiwyg/footwear_20.jpg" img3="https://www.junaidjamshed.com/media/wysiwyg/cap_1.jpg"></ThreeBlock>
    <br/><br/>
    <SectionHeader header="AROMATICS"  />
    <Aromatics />
    <br/>
    <SectionHeader header="MEN'S TRADITIONAL"  />
    <MenClothBox />
    <TwoBlock img1="https://www.junaidjamshed.com/media/wysiwyg/03_2.jpg" img2="https://www.junaidjamshed.com/media/wysiwyg/grooms_4.jpg"></TwoBlock>
    <br/><br/><br/>
    <SectionHeader header='CAPS'/>
    <CapBox/>
    <br/><br/>
    <Board img="https://www.junaidjamshed.com/media/wysiwyg/black_musk.jpg"></Board>
    
    </>
  )
}

export default Men