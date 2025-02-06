import React from 'react'
import Navigation from './Navigation'
import Board from './Board';
import TwoBlock from './TwoBlock'
import ThreeBlock from './ThreeBlock';
import SignUpSection from './SignUp';
import Footer from './Footer';
import ProductBox from './ProductBox';
import SectionHeader from './SectionHeader';
// import Product from './Product';

function NewArrivals() {
  return (
    <>
    <br/>
    <Board img="https://www.junaidjamshed.com/media/wysiwyg/banner_29.jpg"></Board>
    <br/><br/><br/>
    <TwoBlock img1 = "https://www.junaidjamshed.com/media/wysiwyg/W-C-2.jpg" img2 = "https://www.junaidjamshed.com/media/wysiwyg/W-C-13.jpg"></TwoBlock>
    <br/><br/><br/>
    <TwoBlock img1 = "https://www.junaidjamshed.com/media/wysiwyg/stitched_63.jpg" img2 = "https://www.junaidjamshed.com/media/wysiwyg/W-C-15.jpg"></TwoBlock>
    <br/><br/><br/>
    <SectionHeader header='INFANT'></SectionHeader>
    <ProductBox/> 
    <br/><br/><br/>
    <ThreeBlock img1="https://www.junaidjamshed.com/media/wysiwyg/W-C-5.jpg" img2="https://www.junaidjamshed.com/media/wysiwyg/W-C-7.jpg" img3="https://www.junaidjamshed.com/media/wysiwyg/W-C-9.jpg"></ThreeBlock>
    <br/><br/><br/>
    <TwoBlock img1 = "https://www.junaidjamshed.com/media/wysiwyg/W-C-12.jpg" img2 = "https://www.junaidjamshed.com/media/wysiwyg/W-C-11.jpg"></TwoBlock>
    



    </>
  )
}

export default NewArrivals