import React from 'react'
import abouthome from '../images/About.svg'
import g1 from '../images/g1.svg'
import g2 from '../images/g2.svg'
import g3 from '../images/g3.svg'
import g4 from '../images/g4.svg'



export default function About() {
  return (
    <section className='about'>
      <div className='about-intro text-center'>
        <h1 className='text-primary text-[4.8rem] leading-[5.8rem] my-8'>About</h1>
        <p className='text-[1.8rem] leading-[2.9rem] my-8'>I'm a paragraph. Click here to add your own text and edit me. Its easy. Just click “Edit Text” or double click<br />
          me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you<br />
          like on your page. Im a great place for you to tell a story and let your users know a little more about you.</p>
      </div>
      <div className='min-h-[400px]' style={{ backgroundImage: `url(${abouthome})` }}>
      </div>
      {/* process */}
      <div className='about-intro text-center'>
        <h1 className='text-primary text-[4.8rem] leading-[5.8rem] my-8'>Our Process</h1>
        <p className='text-[1.8rem] leading-[2.9rem] my-8'>I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br />
          Just click “Edit Text” or double click me to add your own content and make changes to the font.</p>
      </div>
      {/* image gallery */}

      <div className='gallery container mx-20'>
        <div className='g1 flex'>
          <div className='g1-items min-h-[200px] min-w-[300px]' style={{ backgroundImage: `url(${g1})` }}>
          </div>
          <div className='g1-items min-h-[200px] min-w-[300px] bg-[#DBDBDB] text-center'>
            <h1 className='text-[2.4rem] leading-[2.8rem] font-medium my-6'>Fh</h1>
            <p className='2rem leading-[2.4rem] font-medium'>
              I'm a paragraph. Click here to<br />
              add your own text and edit<br />
              me. Let your users get to<br />
              know you.
            </p>
          </div>
          <div className='g1-items min-h-[200px] min-w-[300px]' style={{ backgroundImage: `url(${g2})` }}>

          </div>
          <div className='g1-items min-h-[200px] min-w-[300px] bg-[#DBDBDB] text-center'>
            <h1 className='text-[2.4rem] leading-[2.8rem] font-medium my-6'>Design &<br /> Construction <br /> Estimate</h1>
            <p className='2rem leading-[2.4rem] font-medium'>I'm a paragraph. Click here to<br />
              add your own text and edit<br />
              me. Let your users get to<br />
              know you.</p>
          </div>
        </div>
        <div className='g2 flex'>
          <div className='g2-items min-h-[200px] min-w-[300px] bg-[#DBDBDB] text-center'>
            <h1 className='text-[2.4rem] leading-[2.8rem] font-medium my-6'>On-Site <br /> Consultations</h1>
            <p className='2rem leading-[2.4rem] font-medium'>
              I'm a paragraph. Click here to<br />
              add your own text and edit<br />
              me. Let your users get to<br />
              know you.
            </p>
          </div>
          <div className='g2-items min-h-[200px] min-w-[300px]' style={{ backgroundImage: `url(${g1})` }}>
          </div>
          <div className='g2-items min-h-[200px] min-w-[300px] bg-[#DBDBDB] text-center'>
            <h1 className='text-[2.4rem] leading-[2.8rem] font-medium my-6'>The Finishing<br />Touches</h1>
            <p className='2rem leading-[2.4rem] font-medium'>I'm a paragraph. Click here to<br />
              add your own text and edit<br />
              me. Let your users get to<br />
              know you.</p>
          </div>
          <div className='g2-items min-h-[200px] min-w-[300px]' style={{ backgroundImage: `url(${g2})` }}>
          </div>
        </div>
      </div>
      {/* last section */}
      <div className='min-h-[40vh] bg-primary flex justify-around items-center flex-col'>
        <h1 className='text-white text-[3.6rem] leading-[5rem] text-center mt-8'>Create your dream home.<br />
          Tell us about your project today.</h1>
        <button className='text-primary bg-white w-[179px] h-[47px] text-2xl'>Get Free Estimate</button>
      </div>
    </section>)
}
