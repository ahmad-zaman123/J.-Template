import React from 'react'
// import Navigation from './Navigation'
import TwoBlock from './TwoBlock'
import ThreeBlock from './ThreeBlock'
import Board from './Board'
import SignUpSection from './SignUp'
import Footer from './Footer'
import SectionHeader from './SectionHeader'
import AccessoriesBox from './AccessoriesBox'
import KurtiBox from './KurtiBox'
import FragranceBox from './FragranceBox'

function Women() {
  return (
    <>
    <br/>
    <TwoBlock img1 = "https://www.junaidjamshed.com/media/wysiwyg/W-C-1.jpg" img2 = "https://www.junaidjamshed.com/media/wysiwyg/W-C-17.jpg"></TwoBlock>
    <br/><br/><br/><br/>
    <ThreeBlock img1 = "https://www.junaidjamshed.com/media/wysiwyg/W-C-6.jpg" img2="https://www.junaidjamshed.com/media/wysiwyg/W-C-8.jpg" img3="https://www.junaidjamshed.com/media/wysiwyg/W-C-10.jpg" ></ThreeBlock>
    <br/><br/>
    <SectionHeader header='TRENDY KURTIS' />
    <KurtiBox />
    <br />
    <SectionHeader header='ACCESSORIES' />
    <AccessoriesBox></AccessoriesBox>
    <br/><br/>
    <TwoBlock img1 = "https://www.junaidjamshed.com/media/wysiwyg/W-C-12.jpg" img2 = "https://www.junaidjamshed.com/media/wysiwyg/scarf.jpg"></TwoBlock>
    <br/>
    <SectionHeader header='FRAGRANCE'/>
    <FragranceBox />
    <br/><br/>
    <Board img="https://www.junaidjamshed.com/media/wysiwyg/makeup_25.jpg"></Board>
    
    </>
  )
}

export default Women