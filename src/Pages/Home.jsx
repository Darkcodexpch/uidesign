import React from 'react'
import Header from './Header'
import icon1 from '../images/icone1.svg'
import icon5 from '../images/5.svg'
import icon6 from '../images/6.svg'


export default function Home() {
    return (
        <>
            <Header />
            <main>
                <section className='what-we-do  bg-primary text-white'>
                    <div className='main-container min-h-[100vh] flex flex-col justify-evenly'>
                        <h1 className='text-center text-4xl font-bold'>WHAT <span className='font-light'>WE DO</span></h1>
                        <div className='cards flex justify-around text-center'>
                            <div className='card'>
                                <image src={icon1} alt="card-image1" />
                                <h1 className='text-2xl font-bold mb-2'>Construction</h1>
                                <p className='leading-[23.44px] text-[20px]'>I'm a paragraph. Click here <br />to add your own text.</p>
                            </div>
                            <div className='card'>
                                <image src={icon1} alt="card-image2" />
                                <h1 className='text-2xl font-bold mb-2'>Land Inspection</h1>
                                <p className='leading-[23.44px] text-[20px]'>I'm a paragraph. Click here <br />to add your own text.</p>
                            </div>
                            <div className='card'>
                                <image src={icon1} alt="card-image3" />
                                <h1 className='text-2xl font-bold mb-2'>Acquisition </h1>
                                <p className='leading-[23.44px] text-[20px]'>I'm a paragraph. Click here <br />to add your own text.</p>
                            </div>
                            <div className='card'>
                                <image src={icon1} alt="card-image4" />
                                <h1 className='text-2xl font-bold mb-2'>Commercial</h1>
                                <p className='leading-[23.44px] text-[20px]'>I'm a paragraph. Click here <br />to add your own text.</p>
                            </div>
                        </div>
                        <button className='text-primary bg-white py-2 rounded-md w-[170px] font-bold mx-auto'>Learn more &gt;</button>
                    </div>
                </section>
                {/* last section intro section */}
                <section className='main-container min-h-[80vh]'>
                    <h1 className='text-primary text-[48px] leading-[56.25px] font-medium my-4'>About California Real Estates</h1>
                    <div className='two-pera flex'>
                        <div className='inner-one flex-1'>
                            <p className='text-[18px] leading-[28.02px] my-4 text-justify'>Cras sollicitudin erat sit amet egestas consequat.
                                Quisque in purus sem.<br/> Integer condimentum
                                nulla vel velit pretium,<br/> eget fringilla enim
                                sodales.<br/> Nullam sit amet leo vitae mi laoreet
                                varius eu vel est.</p>

                               <p className='text-[18px] leading-[28.02px] my-4 text-justify'>Maecenas non lectus tincidunt,<br/> sodales leo
                                pulvinar,<br/> condimentum urna.<br/> Fusce sed dui nec
                                tortor tincidunt ultricies.<br/> Proin at convallis felis,
                                sit amet varius velit.</p>

                                <button className='text-primary text-[24px] leading-[37.36px] font-medium'>Learn More  &gt;</button>

                        </div>
                        <div className='inner-two'>
                            <div className='inner-two-a flex  space-x-4'>
                             <img src={icon6} alt='image' className="self-start"/>
                             <div>
                             <h1 className='text-[18px] leading-[28.02px]'>Best price on the market</h1>
                             <p className='text-[18px] leading-[28.02px]'>Proin at convallis felis,<br/> sit amet varius
                               velit. Aenean placerat turpis a libero
                               feugiat,<br/> at iaculis elit faucibus..</p>
                             </div>
                            </div>

                            <div className='inner-two-b flex my-4 space-x-4'>
                             <img src={icon5} alt='image' className="self-start"/>
                             <div>
                             <h1 className='text-[18px] leading-[28.02px]'>Safety policy</h1>
                            <p className='text-[18px] leading-[28.02px]'>Proin at convallis felis,<br/> sit amet varius
                               velit. Aenean placerat turpis a libero
                               feugiat,<br/> at iaculis elit faucibus..</p>
                             </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>)
}
